import React from 'react';
import divbanner from "../../../1_images/5_events/1_events.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLongArrowRight, faQuran, faMosque, faHands, faHand, faHandsHelping, faCalendar, faClock } from '@fortawesome/free-solid-svg-icons';
import "./Event.css"
const SingleEvent = ({ event }) => {
    const { img, name, short_description, date, time } = event;
    return (
        <div class="col-12 col-md-6 col-lg-6 col-xl-6 justify-content-center ">
            <div class="div-card-bg"  >
                <div class="card_banner card-img-top div-banner-bg"
                    style={{
                        background: `url(${img}) `
                    }}
                >

                </div>

                <div class="card-body p-4">
                    <a href="#" class="help_card_title ps-1 pe-1 scholar-meet">

                        {name}</a>
                    <p class="help_card_text ps-2 pe-2">
                        {short_description.slice(0, 70)}


                        <div class="row ps-2 pe-3 pt-3 scholar-meet-time"  >
                            <label class="col-6 text-start" style={{ color: "#D1AD3C" }}>
                                <FontAwesomeIcon icon={faCalendar} />
                                <span style={{ color: "black" }}>
                                    {date}
                                </span>
                            </label>
                            <label class="col-6 text-start" style={{ color: "#D1AD3C" }}>

                                <FontAwesomeIcon icon={faClock} className="pe-1" />
                                <span style={{ color: "black" }}>{time}</span>
                            </label>
                        </div>
                    </p>

                </div>
            </div>
        </div>
    );
};

export default SingleEvent;