import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import donatebanner from "../../../1_images/8_donate_page/1_donate_home.jpg";
import onelinee from "../../../1_images/1_line.png"
import "./HelpDetails.css";
import { useForm } from "react-hook-form";
import Payment from "../../Payment/Payment";

const HelpDetails = () => {
    const { campaignId } = useParams();
    const [cause, setCauses] = useState({});

    useEffect(() => {
        const url = `http://localhost:5000/campaign/${campaignId}`;
        fetch(url)
            .then((res) => res.json())
            .then((data) => setCauses(data));
    }, [campaignId]);
    const navigate = useNavigate();
    const { register, handleSubmitt, watch, reset, formState: { errors } } = useForm();
    const handleSubmit = event => {
        event.preventDefault();
        const amount = event.target.amount.value;
        const name = event.target.name.value;
        const telEmail = event.target.telEmail.value;
        const datas = {
            amount: amount,
            name: name,
            telEmail: telEmail
        }
        fetch('http://localhost:5000/grant-info', {
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(datas)
        })
            .then(res => res.json())
            .then(result => {
                const insertedId = result.insertedId;
                navigate(`/payment/${insertedId}`);

            })
        console.log(datas)
    };




    return (
        <div className="body">
            <div className='home_banner'
                style={{
                    background: `url(${donatebanner}) `
                }}
                class="pb-5">

                <h5 class="poppins text-center charity_campaing_heading pt-5 mt-">Our Causes</h5>

                <div class="text-center pb-3">
                    <img src={onelinee} alt='' />
                </div>

                <div class="text-center when_things">
                    <p class="poppins donate_home_icon">
                        <Link to='/'>Home</Link> / <span class="charity-text" >Our Causes</span>
                    </p>
                </div>

            </div>

            <div className="container my-4">
                <div className="row">
                    <div className="col-lg-6">
                        <img className="my-4 shadow-sm rounded img-fluid" src={cause.img} alt="" />
                        <div className="bg-white rounded p-4 text-start">
                            <h5><b>{cause.name}</b></h5>
                            <p>{cause.short_description}</p>
                        </div>
                        <div class="row ps-2 pe-3 pt-3 raised bg-white my-2 m-0 rounded">
                            <p class="col-6 text-start">
                                {" "}
                                <b>Raised: </b>
                                <span style={{ color: "#D1AD3C" }}>{cause.Raised} </span>{" "}
                            </p>

                            <p class="col-6 text-end">
                                <b> Goal: </b>
                                <span style={{ color: "#D1AD3C" }}>{cause.Goal} </span>{" "}
                            </p>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="bg-white rounded p-4 lg-m-4 text-start">
                            <h5><b>??????-????????????????????? ??????????????????????????? ??????????????? ???????????????????????????</b></h5>
                            <p className="py-2">
                                ?????????, ???????????? ??? ????????????????????? ????????????????????????????????? ???????????????????????? ??????-????????????????????? ?????????????????????????????????
                                ???????????????????????? ????????????????????????????????? ??????????????????????????????????????? ????????? ??????-????????????????????? ??????????????????????????? ???????????????
                                ?????????????????????????????? ?????? ?????????????????????????????? ???????????? ??????????????? ??????????????? ????????? ?????????-?????????????????? ???????????????
                                ?????????????????? ????????????????????? ?????????????????? ??????????????? ????????????????????? ????????????????????? ??????????????????????????? ???????????? ??????????????????
                                ??????????????????????????? ?????????????????? ???????????? ??? ???????????????????????????????????? ????????????????????? ??????????????????????????? ????????????????????? ?????????
                                ??????-??????-?????????????????????
                            </p>
                            <p className="py-2">
                                ????????? ???????????? ????????????????????? ????????????????????????????????? ?????????????????????, ????????? ?????????????????? ????????????????????? ?????????
                                ???????????????????????? ??????????????? ????????? ??????????????? ??????-??????-??????????????????{" "}
                            </p>
                            <a className="text-decoration-none" href="#">
                                <b>?????? ??????????????? ??????-????????????????????? ??????????????????????????? ??????????????? ??????????????????????????????</b>
                            </a>
                            <p>
                                <b>???????????????????????????????????? ????????? :</b> As sunnah Foundation <br />
                                <b>?????????????????????????????? ??????????????? :</b> 20503100201496517 <br />
                                <b>?????????????????? :</b> Islami Bank Bangladesh ltd <br />
                                <b>???????????? :</b> Badda, Dhaka. <br />
                                <b>?????????????????? ????????????????????? :</b> 125260341 <br />
                                <b>??????????????? ????????? :</b> IBBLBDDH
                            </p>
                            <br />
                            <form onSubmit={handleSubmit} className='d-flex flex-column mx-3 shadow p-3 rounded' >
                                <label className="text-left ">
                                    <h5>Grant amount *</h5>
                                </label>
                                <input {...register("amount")} name="amount" type="number" required className='mb-2 ' placeholder='Grant amount' />
                                <label className="text-left ">
                                    <h5>Name *</h5>
                                </label>
                                <input {...register("name")} name="name" type="text" required className='mb-2 ' placeholder='Your Name' />
                                <label className="text-left ">
                                    <h5>Telephone or Email *</h5>
                                </label>
                                <input {...register("telEmail")} name="telEmail" type="text" required className='mb-2 ' placeholder='Telephone or Email' />


                                <input className='mt-2 btn btn-dark' type="submit" value='Pay' />
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default HelpDetails;
