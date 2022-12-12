import React from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';

const AddCampaign = () => {
    const { register, handleSubmit, reset } = useForm();

    const onSubmit = data => {
        console.log(data);


        const url = `http://localhost:5000/allcampaign`;
        fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(result => {
                console.log(result)
                toast.success("Campaign added successfully");
                reset();
            })
    }
    return (
        <div className='container '>
            <h1 className='text-danger m-4'> Please add Your Item</h1>
            <div className="card border-0 m-4" >
                <div className="row g-0">



                    <div className='w-50 mx-auto align-items-center  '>

                        <form className='d-flex flex-column mx-3 shadow p-3 ' onSubmit={handleSubmit(onSubmit)} >
                            <label className="text-left ">
                                <h5>Campaign Name</h5>
                            </label>
                            <input required className='mb-2 ' placeholder='Campaign Name'  {...register("name")} />


                            <label className="text-left ">
                                <h5>Item Photo URL</h5>
                            </label>
                            {/* <input className='mb-2' type="file" id="myFile" name="filename" {...register("image")} /> */}
                            <input required className='mb-2' placeholder='Campaign Photo URL' type="text" {...register("img")} />


                            <label className="text-left ">
                                <h5>Add Description</h5>
                            </label>
                            <textarea required className='mb-2' placeholder='Campaign Description' {...register("short_description")} />


                            <label className="text-left ">
                                <h5>Raised</h5>
                            </label>
                            <input required className='mb-2' placeholder='Item Price' type="number" {...register("Raised")} />

                            <label className="text-left ">
                                <h5>Goal</h5>
                            </label>
                            <input required className='mb-2' placeholder='Item Price' type="number" {...register("Goal")} />


                            <input className='mt-2 btn btn-dark' type="submit" value='Add Item' />
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddCampaign;