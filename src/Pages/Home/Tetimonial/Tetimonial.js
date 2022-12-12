import React from 'react';
import "./Tetimonial.css"
import testimonial from "../../../1_images/7_testimonial-section/1st.jpg";
import testimonialfirst from "../../../1_images/7_testimonial-section/1st.jpg";
import testimonialfir from "../../../1_images/7_testimonial-section/1st.jpg";

const Tetimonial = () => {
    return (
        <div class="container-fluid pt-5 pb-5 poppins">


            <div class="mini_title">
                <p class="text-center">What Our</p>
            </div>

            <div class="text-center">
                <h5 class="main_heading">Donators Say</h5>
            </div>

            <div class="d-flex justify-content-center mt-4">
                <div class="heading_line"></div>
            </div>


            <div class="p-5 d-flex justify-content-center ">


                <div class="col-lg-9 col-md-12 col-12 slider mt-5">
                    {/* <!-- slider --> */}
                    <div id="carouselExampleDark" class="carousel carousel-dark slide slider_container"
                        data-bs-ride="carousel">



                        {/* <!-- 1st slider --> */}
                        <div class="carousel-inner mt-5">

                            <div class="carousel-item active" data-bs-interval="10000">
                                <img src={testimonial}
                                    class="d-block rounded-circle mx-auto slider_img" alt="..." />

                                <div class="text-center slider_text_cntainer mt-3">
                                    <h5 class="slider_heading">Farha Ahmed</h5>
                                    <p class="slider_desc pb-3 ps-3 pe-3">
                                        <i>"</i>
                                        Easy to access of Islamic services in Center,Lorem ipsum dolor sit amet,<br></br>
                                        consectetur adipisicing elit, sed do eiusmod temporate.
                                        <i>"</i>
                                    </p>
                                </div>

                            </div>



                            {/* <!-- 2nd slider --> */}
                            <div class="carousel-item" data-bs-interval="2000">
                                <img src={testimonialfirst}
                                    class="d-block rounded-circle mx-auto slider_img" alt="..." />

                                <div class="text-center slider_text_cntainer mt-3">
                                    <h5 class="slider_heading">Farha Ahmed</h5>
                                    <p class="slider_desc pb-3">
                                        <i>"</i>
                                        Easy to access of Islamic services in Center,Lorem ipsum dolor sit amet,<br></br>
                                        consectetur adipisicing elit, sed do eiusmod temporate.
                                        <i>"</i>
                                    </p>
                                </div>


                            </div>

                            {/* <!-- 3rd slider --> */}
                            <div class="carousel-item">
                                <img src={testimonialfir}
                                    class="d-block rounded-circle mx-auto slider_img" alt="..." />

                                <div class="text-center slider_text_cntainer mt-3">
                                    <h5 class="slider_heading">Farha Ahmed</h5>
                                    <p class="slider_desc pb-3">
                                        <i>"</i>
                                        Easy to access of Islamic services in Center,Lorem ipsum dolor sit amet,<br></br>
                                        consectetur adipisicing elit, sed do eiusmod temporate.
                                        <i>"</i>
                                    </p>
                                </div>


                            </div>


                            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark"
                                data-bs-slide="prev">
                                <span class="previous_slider_icon" aria-hidden="true"><i
                                    class="fal fa-arrow-alt-from-right"></i></span>
                                <span class="visually-hidden">Previous</span>
                            </button>


                            <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleDark"
                                data-bs-slide="next">
                                <span class="next_slider_icon" aria-hidden="true"><i
                                    class="fal fa-arrow-alt-from-left"></i></span>
                                <span class="visually-hidden">Next</span>
                            </button>
                        </div>
                    </div>

                </div>



            </div>


        </div>
    );
};

export default Tetimonial;