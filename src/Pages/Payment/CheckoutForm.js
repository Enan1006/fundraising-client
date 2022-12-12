import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import React, { useEffect, useState } from 'react';
import { Alert, Card } from 'react-bootstrap';

const CheckoutForm = ({ datas }) => {
    const [cardError, setCardError] = useState('');
    const [success, setSuccess] = useState('');
    const [clientSecret, setClientSecret] = useState('');
    const [transactionId, setTransactionId] = useState('');
    const stripe = useStripe();
    const elements = useElements();
    const { amount, name, telEmail } = datas;
    useEffect(() => {
        // Create PaymentIntent as soon as the page loads
        fetch("http://localhost:5000/create-payment-intent", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ amount }),
        })
            .then((res) => res.json())
            .then((data) => setClientSecret(data.clientSecret));
    }, [amount]);
    console.log(clientSecret);
    console.log('dats', datas);
    const handleSubmit = async (event) => {
        event.preventDefault();

        if (!stripe || !elements) {
            return;
        }

        const card = elements.getElement(CardElement);

        if (card == null) {
            return;
        }

        // Use your card Element with other Stripe.js APIs
        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card,
        });

        if (error) {
            console.log(error);
            setCardError(error.message);
        }
        else {
            setCardError('');
        }
        setSuccess('');

        //confirm payment
        const { paymentIntent, error: errorIntent } = await stripe.confirmCardPayment(
            clientSecret,
            {
                payment_method: {
                    card: card,
                    billing_details: {
                        name: 'Rakib',
                    },
                },
            },
        );
        if (errorIntent) {
            setCardError(errorIntent?.message);
            setSuccess('');
        }
        else {
            setCardError('');
            setTransactionId(paymentIntent.id);
            setSuccess('Your grant has successfully received. Thank you!!');
        }
    };
    return (
        <div>
            {
                cardError &&
                // <p className='text-danger'>{cardError}</p>
                <Alert key={'danger'} variant={'danger'}>
                    {cardError}
                </Alert>
            }
            {
                success &&
                // <p className='text-danger'>{cardError}</p>
                <Alert key={'success'} variant={'success'}>
                    {success} your transcation id is: {transactionId}
                </Alert>
            }
            <Card style={{ width: '38rem' }} className="p-5">
                <form onSubmit={handleSubmit}>
                    <CardElement
                        options={{
                            style: {
                                base: {
                                    fontSize: '16px',
                                    color: '#424770',
                                    '::placeholder': {
                                        color: '#aab7c4',
                                    },
                                },
                                invalid: {
                                    color: '#9e2146',
                                },
                            },
                        }}
                    />
                    <button className='btn btn-primary mt-5' type="submit" disabled={!stripe || !clientSecret || transactionId}>
                        Pay
                    </button>
                </form>
            </Card>

        </div>
    );
};

export default CheckoutForm;