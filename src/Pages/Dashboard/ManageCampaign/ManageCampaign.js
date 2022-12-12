import React from 'react';
import { Link } from 'react-router-dom';
import AllCampaigns from '../../../hooks/AllCampaigns';
import SingleHelp from '../../Home/Help/SingleHelp';
import ManageSingleCampaign from './ManageSingleCampaign';

const ManageCampaign = () => {
    const [causes] = AllCampaigns()
    return (
        <section className="content-main">
            <div className="content-header">
                <h2 className="content-title">Products</h2>
                <div>
                    <Link to="/dashboard/addcampaign" className="btn btn-primary">
                        Create Campaign
                    </Link>
                </div>
            </div>

            <div className="card mb-4 shadow-sm">
                <header className="card-header bg-white ">
                    <div className="row gx-3 py-3">
                        <div className="col-lg-4 col-md-6 me-auto ">
                            <input
                                type="search"
                                placeholder="Search..."
                                className="form-control p-2"
                            />
                        </div>
                        <div className="col-lg-2 col-6 col-md-3">
                            <select className="form-select">
                                <option>All category</option>
                                <option>Electronics</option>
                                <option>Clothings</option>
                                <option>Something else</option>
                            </select>
                        </div>
                        <div className="col-lg-2 col-6 col-md-3">
                            <select className="form-select">
                                <option>Latest added</option>
                                <option>Cheap first</option>
                                <option>Most viewed</option>
                            </select>
                        </div>
                    </div>
                </header>

                <div className="card-body">
                    <div className="row ">

                        {
                            causes.map(cause => <ManageSingleCampaign
                                key={cause._id}
                                cause={cause}
                            ></ManageSingleCampaign>)
                        }

                    </div>

                    <nav className="float-end mt-4" aria-label="Page navigation">
                        <ul className="pagination">
                            <li className="page-item disabled">
                                <Link className="page-link" to="#">
                                    Previous
                                </Link>
                            </li>
                            <li className="page-item active">
                                <Link className="page-link" to="#">
                                    1
                                </Link>
                            </li>
                            <li className="page-item">
                                <Link className="page-link" to="#">
                                    2
                                </Link>
                            </li>
                            <li className="page-item">
                                <Link className="page-link" to="#">
                                    3
                                </Link>
                            </li>
                            <li className="page-item">
                                <Link className="page-link" to="#">
                                    Next
                                </Link>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </section>
    );
};

export default ManageCampaign;