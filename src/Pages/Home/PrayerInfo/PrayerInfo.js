import React from 'react';
import "./PrayerInfo.css";
import line from "../../../1_images/1_line.png"
const PrayerInfo = () => {
    return (
        <section class="container-fluid poppins section-bg"   >

            <div class="row ">
                {/* <!-- card 1 --> */}
                <div class="col-12 col-md-12 col-lg-6 col-xl-6 pt-5 pb-5 ps-5 pe-5 section-bg" >
                    <div>
                        <p class="text-center multiple_fridat mt-4">Multiple Friday</p>
                    </div>
                    <div>
                        <h5 class="text-center info_main_heading">Prayer Timings</h5>
                    </div>
                    <div class="d-flex justify-content-center mt-4">
                        <img class="d-block" src={line} />
                    </div>
                    <div>
                        <p class="text-center info_desc pt-3 pb-3 ps-5 pe-5">
                            Few Mosques Offer Multiple Friday Prayers, For them we are offering a new widget which will help
                            them to display as many Friday Times on their site.
                        </p>
                    </div>
                </div>

                {/* <!-- card 2 --> */}
                <div class="col-12 col-md-6 col-lg-3 col-xl-3 pb-5 pt-5 jumma-section-bg" >
                    <div class="jummah_info_icon_container text-center mt-4">
                        <i class="fas fa-mosque"></i>
                    </div>
                    <h5 class="info_card_title text-center mt-3">Jummah 1</h5>

                    <p class="jummah_desc text-center mt-3">
                        <label class="d-block  ">Start: <span className='jumma-time'>01:30 PM</span></label>
                        <label class="d-block">Start: <span className='jumma-time'>01:30 PM</span></label>
                    </p>

                    <p class="info_jummah_footer text-center">
                        Dua will be offered right after the praye
                    </p>
                </div>

                {/* <!-- card 3 --> */}
                <div class="col-12 col-md-6 col-lg-3 col-xl-3 pb-5 pt-5 jumma-2nd-bg" >
                    <div class="jummah_info_icon_container text-center mt-4">
                        <i class="fas fa-mosque"></i>
                    </div>
                    <h5 class="info_card_title text-center mt-3">Jummah 2</h5>

                    <p class="jummah_desc text-center mt-3">
                        <label class="d-block">Start: <span className='jumma-time'>01:30 PM</span></label>
                        <label class="d-block">Start: <span className='jumma-time'>01:30 PM</span></label>
                    </p>

                    <p class="info_jummah_footer text-center">
                        Dua will be offered right after the praye
                    </p>
                </div>


            </div>

        </section>

    );
};

export default PrayerInfo;