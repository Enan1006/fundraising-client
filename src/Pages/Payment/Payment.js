import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react';
import { Button, Card } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import Loading from '../Shared/Loading/Loading';
import CheckoutForm from './CheckoutForm';
const stripePromise = loadStripe('pk_test_51L4h47B3HGLkcc5c191jBxiJrfvCWfNi0zAgSJ3C4for3NXa1ExFQCAWdpoiyYtpnc35fdxQCj0YYj9C0hHZbvte002lMWrfHS');


const Payment = () => {
    const { PaymentId } = useParams();
    const [paymentInfo, setPaymentInfo] = useState({});
    const { isLoading, error, data } = useQuery({
        queryKey: ['grant-info'],
        queryFn: () =>
            fetch(`http://localhost:5000/grant-info/${PaymentId}`).then(res =>
                res.json()
            )
    })

    if (isLoading) return <Loading />
    console.log(data);
    return (
        <div className='m-5 grid justify-center'>
            <div>
                <h2 className='text-info'>Please pay from here: {PaymentId}</h2>
                <Card style={{ width: '18rem' }}>
                    <Card.Body>
                        <Card.Title>Hi, <b>{data.name}</b> </Card.Title>
                        <Card.Text>
                            We are so happy that you want to grant <b>${data.amount}</b> to our forum. <b>Thank you!</b>
                        </Card.Text>
                    </Card.Body>
                </Card>
            </div>
            <div>
                <Elements stripe={stripePromise}>
                    <CheckoutForm datas={data} />
                </Elements>

            </div>
        </div>
    );
};

export default Payment;