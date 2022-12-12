import React from 'react';
import bsml from "../../../1_images/1_home/2_bsml-txt.png"
import oneline from "../../../1_images/1_home/1_line.png"
import banner from "../../../1_images/1_home/1_background-image.jpg";
import "./Banner.css"
const Banner = () => {
    return (

        <div className='home_banner'
            style={{
                background: `url(${banner}) `
            }}
        >

            <section class="home_text_container pt-5">
                <div class="bsml_container pt-5 mt-5">
                    <img src={bsml} class="pt-5" alt="bismillah photo" />
                    {/* <br> */}
                </div>
                <div>
                    <p class="poppins text-center knwo_the_real">Know the Real</p>
                    <p class="poppins text-center tafseer">Tafseer of Qur'an</p>
                    <div class="text-center pt-1 pb-3">
                        <img src={oneline} />
                    </div>

                    <div class="text-center when_things">
                        <p class="poppins ">
                            When things are too hard to handle,
                        </p>
                        <p class="poppins ">
                            retreat and count your blessings instead
                        </p>
                    </div>


                    <div class="text-center quran_online_container mt-5">
                        <a class="quran_online ps-5 pe-5 pt-3 pb-3"

                        >Quran Online</a>

                        {/* style="font-size: 15px; font-weight:400;" */}
                    </div>


                </div>


            </section>
        </div>
    );
};

export default Banner;