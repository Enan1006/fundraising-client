import React from 'react';
import "./AddProduct.css"
const AddProduct = () => {

    const onSubmit = data => {
        console.log(data)
        const addproduct = {

            pname: data.target.name.value,
            description: data.target.description.value,
            photo: data.target.image.value,
        }

        fetch('http://localhost:5000/allcampaign', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(addproduct)
        })
            .then(res => res.json())
            .then(result => {
                console.log(result)
            })


    }
    return (
        <>
            <section className="content-main" style={{ maxWidth: "1200px" }}>
                <form onSubmit={onSubmit}>
                    <div className="content-header">
                        {/* <Link to="" className="btn btn-danger text-white">
                Go to products
              </Link> */}
                        <button className='btn btn-danger text-white'>Go to Products</button>
                        <h2 className="content-title">Add product</h2>
                        <div>
                            <button type="submit" className="btn btn-primary">
                                Publish now
                            </button>
                        </div>
                    </div>

                    <div className="row mb-4">
                        <div className="col-xl-8 col-lg-8">
                            <div className="card mb-4 shadow-sm">
                                <div className="card-body">
                                    <div className="mb-4">
                                        <label htmlFor="product_title" className="form-label">
                                            Campaign Name
                                        </label>
                                        <input
                                            name="name"
                                            type="text"
                                            placeholder="Type here"
                                            className="form-control"
                                            id="product_title"

                                            required
                                        />
                                    </div>


                                    <div className="mb-4">
                                        <label className="form-label">Add Description</label>
                                        <textarea name="description"
                                            placeholder="Type here"
                                            className="form-control"
                                            rows="7"
                                            required
                                        ></textarea>
                                    </div>
                                    <div className="mb-4">
                                        <label className="form-label">Item Photo </label>
                                        <input name="photo"
                                            className="form-control"
                                            type="text"
                                            placeholder="Inter Image URL"

                                        />

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </form>
            </section>
        </>
    );
};

export default AddProduct;