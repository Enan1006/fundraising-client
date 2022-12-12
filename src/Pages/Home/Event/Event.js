import React, { useEffect, useState } from 'react';
// import divbanner from "../../../1_images/5_events/1_events.jpg";
import "./Event.css"
import SingleEvent from './SingleEvent';
const Event = () => {
    const [events, setEvents] = useState([])

    useEffect(() => {
        fetch('http://localhost:5000/events')
            .then(res => res.json())
            .then(data => setEvents(data))
    }, [])
    return (
        <section class="container-fluid pt-5 pb-5 poppins event-bg"  >


            <div class="row pt-5 pb-5 ps-0 ps-md-0 ps-lg-5 ">


                {/* <!-- 1st card --> */}
                <div class="col-12 col-md-12 col-lg-8 col-xl-8 ps-8">

                    <div>
                        <div class="">
                            <h5 class="main_heading text-start"><span style={{ color: "#2A486C" }}>Upcoming</span> Events</h5>
                        </div>

                        <div class="mt-4">
                            <div class="heading_line card-event" ></div>
                        </div>
                    </div>



                    <div class="row mt-5 d-flex justify-content-center">

                        {
                            events.map(event => <SingleEvent
                                key={event._id}
                                event={event}
                            ></SingleEvent>)
                        }

                        {/* <div class="col-12 col-md-6 col-lg-6 col-xl-6 justify-content-center ">
                            <div class="div-card-bg"  >
                                <div class="card_banner card-img-top div-banner-bg"
                                    style={{
                                        background: `url(${divbanner}) `
                                    }}
                                >

                                </div>

                                <div class="card-body p-4">
                                    <a href="#" class="help_card_title ps-1 pe-1 scholar-meet">

                                        World Scholars Meetup</a>
                                    <p class="help_card_text ps-2 pe-2">
                                        Join our coming virtual meeting link by following url of the pla...


                                        <div class="row ps-2 pe-3 pt-3 scholar-meet-time"  >
                                            <label class="col-6 text-start" style={{ color: "#D1AD3C" }}>
                                                <i class="far fa-calendar-alt"></i> <span style={{ color: "black" }}>Nov 25,
                                                    2022</span>
                                            </label>
                                            <label class="col-6 text-start" style={{ color: "#D1AD3C" }}>
                                                <i class="fal fa-clock"></i>

                                                <span style={{ color: "black" }}>9:30 am to 1:15
                                                    pm</span>
                                            </label>
                                        </div>
                                    </p>

                                </div>
                            </div>
                        </div> */}








                    </div>

                </div>



                {/* <!-- 2nd card-- > */}
                <div class="col-12 col-md-12 col-lg-3 col-xl-3 mt-5 mt-md-5 mt-lg-0 mt-xl-0">
                    <div>
                        <div class="">
                            <h5 class="main_heading"><span style={{ color: "#2A486C" }}>Prayer</span> Times</h5>
                        </div>

                        <div class="mt-4">
                            <div class="heading_line card-heading-div"  ></div>
                        </div>
                    </div>

                    <div>
                        <table class="table table-hover mt-5 justify-content-center">
                            <thead>
                                <tr class="prayer_time_table_heading">
                                    <th scope="col">Salat</th>
                                    <th scope="col">Start</th>
                                    <th scope="col" class="text-end">Iqamah</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td class="salat_color">Fajr</td>
                                    <td class="slat_time">12:27 AM</td>
                                    <td class="text-end slat_time">12:27 AM</td>
                                </tr>
                                <tr>
                                    <td class="salat_color">Zuhr</td>
                                    <td class="slat_time">12:27 AM</td>
                                    <td class="text-end slat_time">12:27 AM</td>
                                </tr>
                                <tr>
                                    <td class="salat_color">Asr</td>
                                    <td class="slat_time">12:27 AM</td>
                                    <td class="text-end slat_time">12:27 AM</td>
                                </tr>
                                <tr>
                                    <td class="salat_color">Magrib</td>
                                    <td class="slat_time">12:27 AM</td>
                                    <td class="text-end slat_time">12:27 AM</td>
                                </tr>
                                <tr>
                                    <td class="salat_color">Isha</td>
                                    <td class="slat_time">12:27 AM</td>
                                    <td class="text-end slat_time">12:27 AM</td>
                                </tr>
                                <tr>
                                    <td class="salat_color">Jumah</td>
                                    <td class="slat_time">12:27 AM</td>
                                    <td class="text-end slat_time">12:27 AM</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <div class="bg-light ps-5 pe-5 pt-4 pb-3">
                        <p class="text-center event_location">Location: London, UK</p>
                        <p class="text-center event_regular_date">Sunday, 22nd May, 2022</p>
                        <p class="text-center evente_arabic_date">(21th Shawwal, 1443)</p>
                    </div>


                </div>


            </div >
        </section >
    );
};

export default Event;