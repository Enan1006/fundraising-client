import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLongArrowRight, faQuran, faMosque, faHands, faHand, faHandsHelping } from '@fortawesome/free-solid-svg-icons';
// import hstry from "../../../1_images/2_historyOFcenter/1_hstry-img.png";
import banner from "../../../1_images/istockphoto-1252924066-170667a.jpg";
import "./Help.css"
import SingleHelp from './SingleHelp';
import AllCampaigns from '../../../hooks/AllCampaigns';
const Help = () => {

    const [causes] = AllCampaigns()




    return (
        // < !--_____________________________ help section starts _____________________________-- >

        <div>
            <section class="container pt-5 pb-5 poppins">

                <div class="mini_title">
                    <p class="text-center">Need Help For Help</p>
                </div>

                <div class="text-center">
                    <h5 class="main_heading">Our Causes</h5>
                </div>

                <div class="d-flex justify-content-center mt-4">
                    <div class="heading_line"></div>
                </div>

                <div class="mt-3">
                    <p class="text-center help_section_body_text">
                        Join hands with us to accomplish all these projects of serving humanity and <br></br> making this world a
                        better place to live.
                    </p>

                    <div class="row pt-3">
                        {
                            causes.map(cause => <SingleHelp
                                key={cause._id}
                                cause={cause}
                            ></SingleHelp>)
                        }

                        {/* <!-- 1st card --> */}
                        {/* <div class="col-12 col-md-6 col-lg-4 col-xl-4 justify-content-center  mt-3 mt-md-3 mt-lg-0">
                            <div class="help_card_shadow">
                                <div class="card_banner card-img-top help-banner"
                                    style={{
                                        background: `url(${banner}) `


                                    }}
                                >



                                </div>

                                <div class="card-body p-4">
                                    <h5 class="help_card_title ps-1 pe-1">Educate Rural Kenya</h5>
                                    <p class="help_card_text ps-2 pe-2">
                                        Islam is definitely accommodates olor sit amet, consectetur adipis...
                                        <div class="ps-1">
                                            <div class="col-11">
                                                <input class="col-12" type="range" value="90"></input>
                                            </div>
                                        </div>

                                        <div class="row ps-2 pe-3 pt-3 raised" >
                                            <p class="col-6 text-start"> Raised: <span
                                                style={{ color: "#D1AD3C" }}>50,000$</span> </p>

                                            <p class="col-6 text-end"> Goal: <span
                                                style={{ color: "#D1AD3C" }}>50,000$ </span> </p>
                                        </div>
                                    </p>

                                </div>
                            </div>
                        </div> */}


                        {/* <!-- 2nd card --> */}




                    </div>
                </div>

            </section>
        </div>

    );
};

export default Help;