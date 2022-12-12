import React, { useState } from 'react';
import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';

const UpdateCampaign = () => {
    const { register, handleSubmit, reset } = useForm();
    const [updateItem, setUpdateItem] = useState({});
    const { campaignId } = useParams();

    useEffect(() => {
        fetch(`http://localhost:5000/campaign/${campaignId}`)
            .then(res => res.json())
            .then(result => { setUpdateItem(result); console.log(result) })
    }, [campaignId])

    const onSubmit = data => {
        const datas = {
            name: data.name,
            img: data.img,
            short_description: data.short_description,
            raised: data.Raised,
            goal: data.Goal
        }
        fetch(`http://localhost:5000/campaign/${campaignId}`, {
            method: "PUT",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(datas)
        })
            .then(res => res.json())
            .then(result => {
                console.log(result);
                reset();
                toast.success("Campaign Update Successfully");
            })
        console.log(data);

    }
    return (
        <div>
            <div className='container '>
                <h1 className='text-danger m-4'> Please Update Your Item: {campaignId}</h1>
                <div className="card border-0 m-4" >
                    <div className="row g-0">



                        <div className='w-50 mx-auto align-items-center  '>

                            <form className='d-flex flex-column mx-3 shadow p-3 ' onSubmit={handleSubmit(onSubmit)} >
                                <label className="text-left ">
                                    <h5>Campaign Name</h5>
                                </label>
                                <input required className='mb-2 ' placeholder='Campaign Name'  {...register("name")} defaultValue={updateItem.name} />


                                <label className="text-left ">
                                    <h5>Item Photo URL</h5>
                                </label>
                                {/* <input className='mb-2' type="file" id="myFile" name="filename" {...register("image")} /> */}
                                <input required className='mb-2' placeholder='Campaign Photo URL' type="text" {...register("img")} />


                                <label className="text-left ">
                                    <h5>Add Description</h5>
                                </label>
                                <textarea required className='mb-2' placeholder='Campaign Description' {...register("short_description")} defaultValue={updateItem.short_description} />


                                <label className="text-left ">
                                    <h5>Raised</h5>
                                </label>
                                <input required className='mb-2' placeholder='Item Price' type="number" {...register("Raised")} defaultValue={updateItem.Raised} />

                                <label className="text-left ">
                                    <h5>Goal</h5>
                                </label>
                                <input required className='mb-2' placeholder='Item Price' type="number" {...register("Goal")} defaultValue={updateItem.Goal} />


                                <input className='mt-2 btn btn-dark' type="submit" value='Add Item' />
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UpdateCampaign;