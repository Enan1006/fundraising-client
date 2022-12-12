import React, { useEffect, useState } from 'react';
import "./Team.css";
import member from "../../../1_images/4_team-section/1_member.jpg"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLongArrowRight, faFacebook, faMosque, faHands, faHand, faHandsHelping, faBox, faBook, faFaceAngry } from '@fortawesome/free-solid-svg-icons';
import SingleTeam from './SingleTeam';
import Experts from '../../../hooks/Experts';
const Team = () => {


	const [experts] = Experts();

	return (

		<div>
			<section class="container pt-5 pb-5 ">

				<div class="mini_title">
					<p class="text-center">Our Expert</p>
				</div>

				<div class="text-center">
					<h5 class="main_heading">Islamic Scholars</h5>
				</div>

				<div class="d-flex justify-content-center mt-4">
					<div class="heading_line"></div>
				</div>
				<p class="text-center help_section_body_text mt-3">
					Highly Qualified Team Supervises psum dolor sit amet, consectetur adipisicing elit, sed do <br></br> eiusmod
					tempor incididunt ut labore et dolore magna aliqua.
				</p>

				<div class="row mt-5 d-flex justify-content-center text-center poppins">


					{/* <!-- 1st card --> */}
					{/* <div class="col-12 col-md-6 col-lg-3 col-xl-3 d-flex justify-content-center mt-3 mt-md-3 mt-lg-0 mt-xl-0">

						<div class="col-12 card_shadow pt-5 pb-5 ps-3 pe-3 team_card">
							<div class="team_section_img_container ">
								<div class="d-flex justify-content-center">
									<div class="team_section_img p-2 rounded-circle ">
										<img src={member} class="rounded-circle" />
									</div>
								</div>
							</div>


							<h5 class="team_heading mt-4">Bilal Hatim</h5>
							<p class="team_body mt-3 about-scholar"  >
								About Scholar Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
							</p>
							<a href="#" class="service_read_more_btn p-1 m-1 social_media_icon rounded-circle">
								<FontAwesomeIcon icon={faBook} className="icon" />

							</a>

							<a href="#" class="service_read_more_btn p-1 m-1 social_media_icon rounded-circle">

								<FontAwesomeIcon icon={faBook} className="icon" />
							</a>
							<a href="#" class="service_read_more_btn p-1 m-1 social_media_icon rounded-circle">
								<FontAwesomeIcon icon={faBook} className="icon" />
							</a>
							<a href="#" class="service_read_more_btn p-1 m-1 social_media_icon rounded-circle">
								<FontAwesomeIcon icon={faBook} className="icon" />
							</a>
						</div>

					</div> */}


					{
						experts.map(expert => <SingleTeam
							key={expert._id}
							expert={expert}
						></SingleTeam>)
					}



				</div>
			</section>
		</div>
	);
};

export default Team;