import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLongArrowRight, faQuran, faMosque, faHands, faKaaba } from '@fortawesome/free-solid-svg-icons';
import "./Feature.css"
const Feature = () => {
    return (
        // <!--_____________________________ feature section starts _____________________________-->

        <div>
            <section class="container pt-4 pb-4 poppins">
                <div class="row">


                    {/* <!-- first card --> */}
                    <div class="col-12 col-md-6 col-lg-3 col-xl-3 text-center pt-5 pt-md-5 pt-lg-0 pt-xl-0">

                        <div class="">
                            <div class="d-flex justify-content-center ">
                                <div class="feature_icon p-3 feature_card rounded-circle outline_circle">
                                    {/* <i class="fal fa-mosque rounded-circle"></i> */}

                                    <FontAwesomeIcon icon={faMosque} className="rounded-circle " />
                                </div>
                            </div>

                        </div>

                        <h6 class="feature_title mt-3">Salah</h6>
                        <p class="feature_body p-3">
                            Salat Pillar of Islam dolor amet, consectetur adipiscing.
                        </p>
                    </div>


                    {/* <!-- second card --> */}
                    <div class="col-12 col-md-6 col-lg-3 col-xl-3  text-center pt-5 pt-md-5 pt-lg-0 pt-xl-0">

                        <div class="feature_icon_container">
                            <div class="d-flex justify-content-center">
                                <div class="feature_icon p-3 feature_card rounded-circle outline_circle">

                                    <FontAwesomeIcon icon={faMosque} className="rounded-circle " />
                                </div>
                            </div>

                        </div>

                        <h6 class="feature_title mt-3">Sawm</h6>
                        <p class="feature_body p-3">
                            Roza is another, pillar islamic religion adipiscing.
                        </p>
                    </div>


                    {/* <!-- third card --> */}
                    <div class="col-12 col-md-6 col-lg-3 col-xl-3  text-center pt-5 pt-md-5 pt-lg-0 pt-xl-0">

                        <div class="feature_icon_container">
                            <div class="d-flex justify-content-center">
                                <div class="feature_icon p-3 feature_card rounded-circle outline_circle">
                                    <i class="far fa-quran rounded-circle"></i>
                                    <FontAwesomeIcon icon={faQuran} className="rounded-circle " />
                                </div>
                            </div>

                        </div>

                        <h6 class="feature_title mt-3">Quran</h6>
                        <p class="feature_body p-3">
                            Islamic values gives some rules, consectetur adipiscing.
                        </p>
                    </div>


                    {/* <!-- fourth card --> */}
                    <div class="col-12 col-md-6 col-lg-3 col-xl-3  text-center pt-5 pt-md-5 pt-lg-0 pt-xl-0">

                        <div class="feature_icon_container">
                            <div class="d-flex justify-content-center">
                                <div class="feature_icon p-3 feature_card rounded-circle outline_circle">

                                    <FontAwesomeIcon icon={faKaaba} className="rounded-circle " />
                                </div>
                            </div>

                        </div>

                        <h6 class="feature_title mt-3">Hajj</h6>
                        <p class="feature_body p-3">
                            Only people who have amet, consectetur adipiscing.
                        </p>
                    </div>
                </div>
            </section>
        </div>
        // <!--____________ feature section ends _____________-->


    );
};

export default Feature;