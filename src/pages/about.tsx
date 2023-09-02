import { Link } from "react-router-dom"
import BasicButtons from "../Components/button"
import Aboutimg from '../images/about.png.webp'
import TextMobileStepper from "../Components/curousel"
import gallery1 from '../images/gallery1.png.webp'
import gallery2 from '../images/gallery2.png.webp'
import gallery3 from '../images/gallery3.png.webp'
import gallery4 from '../images/gallery4.png.webp'
import gallery5 from '../images/gallery5.png.webp'
export default function About() {
    return (
        <div>
            <div className="bg-overlay text-center">
                <h1 className="text-white p-5">ABOUT US</h1>
            </div>
            <div className="container">
                <div className="row " style={{ marginTop: 200 }}>
                    <div className="col-md-6 col-12">
                        <div>
                            <img className='w-100 img-fluid' src={Aboutimg} alt="" />
                        </div>
                    </div>
                    <div className="col-md-6 col-12">
                        <div className='row'>
                            <div className="col-md-2 col-6">
                                <div className="empty-div2"></div>
                            </div>
                            <div className="col-md-4 col-6">
                                <div className="marginTop2">
                                    <p>ABOUT OUR GYM</p>
                                </div>
                            </div>
                        </div>
                        <div>
                            <h2 className='mt-3  text-navy'>SAFE BODY BUILDING PROPER SOLUTIONS THAT SAVES OUR VALUABLE TIME!</h2>
                            <p className='mt-5'>Brook presents your services with flexible, convenient and cdpose layouts. You can select your favorite layouts & elements for cular ts with unlimited ustomization possibilities. Pixel-perfect replication of the designers is intended.</p>
                            <p className='mt-4 text-secondary'>Brook presents your services with flexible, convefnient and chient anipurpose layouts. You can select your favorite layouts.</p>
                        </div>
                        <div className='mt-5'>
                            <Link to={'NewMember'}><BasicButtons btnValue="BECAME A MEMBER" /></Link>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="row marginTop">
                    <div className="col-md-6 col-12 ">
                        <div className='mt-2'>
                            <img src={gallery1} alt="" className='w-100 gallery1' />
                        </div>
                    </div>
                    <div className="col-md-3 col-12">
                        <div className='mt-2'>
                            <img src={gallery2} alt="" className='w-100 galleries' />
                        </div>
                        <div className='mt-2'>
                            <img src={gallery4} alt="" className='w-100 galleries' />
                        </div>
                    </div>
                    <div className="col-md-3 col-12">
                        <div className='mt-2'>
                            <img src={gallery3} alt="" className='w-100 galleries' />
                        </div>
                        <div className='mt-2'>
                            <img src={gallery5} alt="" className='w-100 galleries' />
                        </div>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="row" style={{ marginTop: 200 }}>
                    <div className="col-md-6 col-12">
                        <img src="https://preview.colorlib.com/theme/fitnessclub/assets/img/gallery/about2.png" className=' w-100' alt="" />
                    </div>
                    <div className="col-md-6 col-12">
                        <div className='row'>
                            <div className="col-md-2 col-6">
                                <div className="empty-div2"></div>
                            </div>
                            <div className="col-md-4 col-6">
                                <div className="marginTop2">
                                    <p>CLIENT FEEDBACK</p>
                                </div>
                            </div>
                        </div>
                        <h2 className='text-navy mt-3 mb-5'>WHAT OUR CLIENT THIK ABOUT OUR GYM</h2>
                        <TextMobileStepper />
                    </div>
                </div>
            </div>
            <div className='container'>
                <div className="row mt-5">
                    <div className="col-md-7 ">
                        <div className="row">
                            <div className="col-md-2 col-6">
                                <div className='empty-div3'></div>
                            </div>
                            <div className="col-md-5 col-6">
                                <div className='marginTop3'>
                                    <p>OUR TEAM MAMBERS</p>
                                </div>
                            </div>
                        </div>
                        <div className=' mt-2'>
                            <h1 className='text-navy'>OUR MOST EXPRIENCED TRAINERS</h1>
                        </div>
                    </div>

                </div>
                <div className="col-12">
                    <div className='text-end service-btn' id='service-btn'>
                        <Link to={'Services'}><BasicButtons btnValue="MORE SERVICES" /></Link>
                    </div>

                </div>
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-md-4 col-12 mt-5">
                        <div className='bg-team' id='bg-team'>
                            <div className="row">
                                <div className="col-1"></div>
                                <div className="col-md-2 col-3">
                                    <div className="empty-div4 "></div>
                                </div>
                                <div className="col-md-8 col-7">
                                    <p className=' marginTop4'>Creative derector</p>
                                </div>
                            </div>
                            <h4 className='text-white ms-4'>Jhon Sunsaev</h4>
                        </div>
                    </div>
                    <div className="col-md-4 col-12 mt-5">
                        <div className='bg-team2' id='bg-team2'>
                            <div className="row">
                                <div className="col-1"></div>
                                <div className="col-md-2 col-3">
                                    <div className="empty-div4 "></div>
                                </div>
                                <div className="col-md-8 col-7">
                                    <p className=' marginTop4'>Creative derector</p>
                                </div>
                            </div>
                            <h4 className='text-white ms-4'>Jhon Sunsaev</h4>
                        </div>
                    </div>
                    <div className="col-md-4 col-12 mt-5">
                        <div className='bg-team3' id='bg-team3'>
                            <div className="row">
                                <div className="col-1"></div>
                                <div className="col-md-2 col-3">
                                    <div className="empty-div4 "></div>
                                </div>
                                <div className="col-md-8 col-7">
                                    <p className=' marginTop4'>Creative derector</p>
                                </div>
                            </div>
                            <h4 className='text-white ms-4'>Jhon Sunsaev</h4>
                        </div>
                    </div>
                </div>
            </div>
            <div className="bg-membership " style={{ marginTop: 200 }}>
                <div className="container">
                    <div className="row">
                        <div className="col-md-6 col-12" style={{ marginTop: 150 }}>
                            <h1 className='text-white'>April membership offer available Now</h1>
                        </div>
                        <div className="col-12" >
                            <div className='text-end' id='service-btn'>
                                <Link to={'Services'}><BasicButtons btnValue="MORE SERVICES" /></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )

}