import React from 'react';
import { useNavigate } from 'react-router-dom';
import Banner from '../Banner/Banner';

const SingleHelp = ({ cause }) => {
    const { _id, img, name, short_description, Raised, Goal } = cause;
    const navigate = useNavigate();
    const handlenavigateToHelpDetails = id => {
        navigate(`/campaign/${id}`)
    }
    return (
        <div class="col-12 col-md-6 col-lg-4 col-xl-4 justify-content-center  mt-3 mt-md-3 mt-lg-0">
            <div class="help_card_shadow">
                <div class="card_banner card-img-top help-banner"
                    style={{
                        background: `url(${img}) `


                    }}
                >



                </div>

                <div class="card-body p-4">
                    <h5 class="help_card_title ps-1 pe-1">{name}</h5>
                    <p class="help_card_text ps-2 pe-2">
                        {short_description.slice(0, 70)}
                        <div class="ps-1">
                            <div class="col-11">
                                <input class="col-12" type="range" value="90"></input>
                            </div>
                        </div>

                        <div class="row ps-2 pe-3 pt-3 raised" >
                            <p class="col-6 text-start"> Raised: <span
                                style={{ color: "#D1AD3C" }}>{Raised}</span> </p>

                            <p class="col-6 text-end"> Goal: <span
                                style={{ color: "#D1AD3C" }}>{Goal} </span> </p>
                        </div>
                    </p>

                </div>
                <button className="btn btn-dark" onClick={() => handlenavigateToHelpDetails(_id)}>Donate</button>
            </div>
        </div>
    );
};

export default SingleHelp;