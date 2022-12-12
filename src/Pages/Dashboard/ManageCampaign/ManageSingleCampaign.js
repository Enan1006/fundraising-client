import { faCreativeCommons } from '@fortawesome/free-brands-svg-icons';
import { faEye } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import CreateIcon from '@mui/icons-material/Create';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import { TableBody, TableContainer, TableHead, TableRow } from '@mui/material';
import React, { useState } from 'react';
import { Table } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';

const ManageSingleCampaign = ({ cause }) => {

    const { _id, img, name, short_description, Raised, Goal } = cause;
    const navigate = useNavigate();
    const handlenavigateToHelpDetails = id => {
        navigate(`/campaign/${id}`)
    }
    const handlenavigateToUpdateDetails = id => {
        navigate(`/dashboard/update-campaign/${id}`)
    }

    const [causes, setCauses] = useState([]);

    const handleDelete = id => {
        console.log(id);
        const proceed = window.confirm('Are you Sure?');
        if (proceed) {
            const url = `http://localhost:5000/campaign/${id}`;
            fetch(url, {
                method: 'DELETE'
            })

                .then(response => response.json())
                .then(data => {
                    console.log(data);
                    const remaining = causes.filter(cause => cause._id !== id)
                    setCauses(remaining);
                })

        }
    }
    return (
        <>
            <div className=' col-md-4 py-3 px-3 d-flex justify-content-center'>
                <div class="help_card_shadow">
                    <div class="card_banner card-img-top help-banner"
                        style={{
                            background: `url(${img}) `
                        }}
                    >



                    </div>

                    <div class="card-body p-2">
                        <h5 class="help_card_title ps-1 pe-1">{name}</h5>
                        <p class="help_card_text ps-2 pe-2">
                            {short_description.slice(0, 40)}



                        </p>

                    </div>

                    <div className="row">

                        <div className='col d-flex justify-content-center'>
                            <button type="button " class="btn btn-success m-2  " onClick={() => handlenavigateToHelpDetails(_id)}><RemoveRedEyeIcon /></button>
                            <button onClick={() => handlenavigateToUpdateDetails(_id)} type="button" class="btn btn-primary m-2 "><CreateIcon /></button>
                            <button type="button" class="btn btn-danger m-2" onClick={() => handleDelete(cause._id)}><DeleteOutlineIcon /></button>
                        </div>
                    </div>
                </div>

            </div>









        </>
    );
};

export default ManageSingleCampaign;