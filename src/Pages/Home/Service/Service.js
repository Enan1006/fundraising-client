import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLongArrowRight, faQuran, faMosque, faHands, faHand, faHandsHelping } from '@fortawesome/free-solid-svg-icons';
import "./Service.css"
{/* <FontAwesomeIcon icon={faLongArrowRight} /></a> */ }
const Service = () => {
    return (



        <section class="container pt-5 pb-5">

            <div class="mini_title">
                <p class="text-center">Our Services</p>
            </div>

            <div class="text-center">
                <h5 class="main_heading">Servicing Humanity</h5>
            </div>

            <div class="d-flex justify-content-center mt-4">
                <div class="heading_line"></div>
            </div>

            <div class="row mt-5 d-flex justify-content-center text-center poppins">

                {/* <!-- 1st card --> */}
                <div class="col-12 col-md-6 col-lg-3 col-xl-3 d-flex justify-content-center mt-0 mt-md-3 mt-lg-0 mt-xl-0">

                    <div class="col-12 card_shadow pt-5 pb-5 ps-3 pe-3 service_card">

                        <FontAwesomeIcon icon={faMosque} className="service_icon " />
                        <h5 class="service_heading mt-4">Quran Learning</h5>
                        <p class="service_body mt-3">
                            Learning Quran facility dolor sit amet, consectetur adipisicing elit, sed do eiu
                        </p>
                        <a href="Read More" class="service_read_more_btn ">Read More
                            <FontAwesomeIcon icon={faLongArrowRight} className="ml-2" /></a>

                    </div>

                </div>

                {/* <!-- 2nd card --> */}
                <div class="col-12 col-md-6 col-lg-3 col-xl-3 d-flex justify-content-center mt-3 mt-md-3 mt-lg-0 mt-xl-0">

                    <div class="col-12 card_shadow pt-5 pb-5 ps-3 pe-3 service_card">
                        <i class="fal fa-quran service_icon"></i>
                        <FontAwesomeIcon icon={faQuran} className="service_icon " />
                        <h5 class="service_heading mt-4">Funeral Service</h5>
                        <p class="service_body mt-3">
                            Funeral facility dolor sit amet, consectetur adipisicing elit, sed do eiusmod te
                        </p>
                        <a href="Read More" class="service_read_more_btn ">Read More
                            <FontAwesomeIcon icon={faLongArrowRight} /></a>
                    </div>

                </div>

                {/* <!-- 3rd card --> */}
                <div class="col-12 col-md-6 col-lg-3 col-xl-3 d-flex justify-content-center mt-3 mt-md-3 mt-lg-0 mt-xl-0">

                    <div class="col-12 card_shadow pt-5 pb-5 ps-3 pe-3 service_card">
                        <i class="fal fa-mosque service_icon"></i>
                        <FontAwesomeIcon icon={faMosque} className="service_icon " />
                        <h5 class="service_heading mt-4">Mosque Renovation</h5>
                        <p class="service_body mt-3">
                            Mosque rebuild facility dol sit amet, consectetur adipisicing elit, sed do eiusm
                        </p>
                        <a href="Read More" class="service_read_more_btn">Read More
                            <FontAwesomeIcon icon={faLongArrowRight} />
                        </a>
                    </div>

                </div>

                {/* <!-- 4th card --> */}
                <div class="col-12 col-md-6 col-lg-3 col-xl-3 d-flex justify-content-center mt-3 mt-md-3 mt-lg-0 mt-xl-0">

                    <div class="col-12 card_shadow pt-5 pb-5 ps-3 pe-3 service_card">
                        <i class="fal fa-hands-helping service_icon"></i>
                        <FontAwesomeIcon icon={faHandsHelping} className="service_icon " />
                        <h5 class="service_heading mt-4">Help Poor</h5>
                        <p class="service_body mt-3">
                            Poor rehab facility dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                        </p>
                        <a href="Read More" class="service_read_more_btn">Read More
                            <FontAwesomeIcon icon={faLongArrowRight} />

                        </a>
                    </div>

                </div>


            </div>
        </section >

        // <!--____________ services section ends _____________-->


    );
};

export default Service;