import React from 'react';
import "./Donate.css";
import onelinee from "../../1_images/1_home/1_line.png"

import donatebanner from "../../../src/1_images/8_donate_page/1_donate_home.jpg";
import History from '../Home/History/History';
import Help from '../Home/Help/Help';
const Donate = () => {
    return (
        <div >


            <div className='home_banner'
                style={{
                    background: `url(${donatebanner}) `
                }}
                class="pb-5">

                <h5 class="poppins text-center charity_campaing_heading pt-5 mt-">Charity Campaigns</h5>

                <div class="text-center pb-3">
                    <img src={onelinee} />
                </div>

                <div class="text-center when_things">
                    <p class="poppins donate_home_icon">
                        <a href="#">Home</a> / <span class="charity-text" >Charity Campaigns</span>
                    </p>
                </div>

            </div>
            <div>
                <History></History>
                <Help></Help>
            </div>

        </div>


    );
};

export default Donate;