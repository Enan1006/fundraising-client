import React from 'react';
import hstry from "../../../1_images/2_historyOFcenter/1_hstry-img.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircle } from '@fortawesome/free-solid-svg-icons';
import "./History.css"
const History = () => {
    return (
        // history of center section starts 

        <section class="container">
            <div class="row pt-5 pb-5">

                {/* <!-- left side --> */}
                <div class="col-md-6 col-12">
                    <img class="img-fluid" src={hstry} />
                </div>

                {/* <!-- right side --> */}
                <div class="col-md-6 col-12 poppins text-start">
                    <p class="few_words pt-md-3 pt-5">Few Words About</p>
                    <h4 class="history_center">History of Center</h4>
                    <div class="line mt-3 mb-3"></div>
                    <p class="since">
                        Since 1987, Our institution guiding students and people around the world. Helping others in every
                        community and region with astonishing facilities. Since 1987, Our institution guiding students.
                    </p>
                    <p class="the_jamaia">
                        The Jamia is the <span >#1</span> Islamic Center in the <span style={{ color: "#D1AD3C" }}
                        >Country!</span>
                    </p>



                    <div class="row pt-3 pt-md-0">
                        <div class="col-12 col-md-6 the_jamaia_list">


                            <p><FontAwesomeIcon icon={faCircle} style={{ color: "#D1AD3C" }} /> Astonishing Facilities</p>
                            <p><FontAwesomeIcon icon={faCircle} style={{ color: "#D1AD3C" }} /> Leads Charity Events</p>
                            <p><FontAwesomeIcon icon={faCircle} style={{ color: "#D1AD3C" }} /> Feeding Hungry People</p>
                        </div>

                        <div class="col-12 col-md-6 the_jamaia_list">
                            <p><FontAwesomeIcon icon={faCircle} style={{ color: "#D1AD3C" }} /> Helping Communities</p>
                            <p><FontAwesomeIcon icon={faCircle} style={{ color: "#D1AD3C" }} /> Schooling Children</p>
                            <p><FontAwesomeIcon icon={faCircle} style={{ color: "#D1AD3C" }} /> Providing Homes</p>
                        </div>
                    </div>

                </div>

            </div>
        </section>



        // <!--_____________________________ feature section starts _____________________________-->
    );
};

export default History;