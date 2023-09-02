import { Link } from 'react-router-dom'
import Aboutimg from '../images/about.png.webp'
import BasicButtons from "../Components/button"
import gallery1 from '../images/gallery1.png.webp'
import gallery2 from '../images/gallery2.png.webp'
import gallery3 from '../images/gallery3.png.webp'
import gallery4 from '../images/gallery4.png.webp'
import gallery5 from '../images/gallery5.png.webp'
import contactImg from '../images/contact_form.png.webp'
// import PlayArrowSharpIcon from '@mui/icons-material/PlayArrowSharp';
import FavoriteBorderSharpIcon from '@mui/icons-material/FavoriteBorderSharp';
import AcUnitSharpIcon from '@mui/icons-material/AcUnitSharp';
import EastIcon from '@mui/icons-material/East';
import FitnessCenterSharpIcon from '@mui/icons-material/FitnessCenterSharp';
import { IconButton } from '@mui/material';
import TextMobileStepper from '../Components/curousel';
import BasicTextFields from '../Components/input'
import SelectVariants from '../Components/Select'
import MinHeightTextarea from '../Components/textarea'
export default function Home() {
    return (
        <div>
            <div className="bg-img-hero1">
                <div className="container">
                    <div className="row">
                        <div className="col-md-7 col-12">
                            <div className="row">
                                <div className="col-md-2 col-6">
                                    <div className="empty-div"></div>
                                </div>
                                <div className="col-md-5 col-6">
                                    <p className="marginTop">WITH PATRICK POTTER</p>
                                </div>
                            </div>
                            <div className="text-white mt-5">
                                <h1>BUILD PERFECT BODY SHAPE FOR GOOD AND HEALTHY LIFE</h1>
                            </div>
                            <div className='mt-5'>
                                <Link to={'NewMember'}><BasicButtons btnValue="BECAME A MEMBER" /></Link>
                            </div>
                        </div>
                    </div>
                </div>
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
            <div className="bg-section-img" id='bg-section-img'>
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 col-12">
                            <div className="row">
                                <div className="col-md-2 col-6">
                                    <div className="empty-div"></div>
                                </div>
                                <div className="col-md-5 col-6">
                                    <div className="marginTop">
                                        <p>OUR SERVICES FOR YOU</p>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <h1 className='text-white mt-3'>PUSH YOUR LIMITS FORWARD WE OFFER TO YOU</h1>
                            </div>
                            <div className='text-end service-btn' id='service-btn'>
                                <Link to={'Services'}><BasicButtons btnValue="MORE SERVICES" /></Link>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-4 col-12 mt-5">
                            <div className='text-center bg-white service-cart' >
                                <IconButton disableRipple>
                                    <FitnessCenterSharpIcon className='service-icon mt-5' />
                                </IconButton>
                                <h4 className='mt-3 '>QUALITY EQUIPMENT</h4>
                                <p className='mt-3 mx-2 text-secondary'>The sea freight service has grown consider ably in recent years. We spend timetting to kn.</p>
                                <div className=' mt-5 paraNone'>
                                    <Link className=" paraNone" to={'Services'}>DISCOVER MORE ABOUT US <EastIcon fontSize='small' /></Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 col-12 mt-5">
                            <div className='text-center bg-white service-cart' >
                                <IconButton disableRipple>
                                    <FavoriteBorderSharpIcon className='service-icon mt-5' />
                                </IconButton>
                                <h4 className='mt-3 '>HEALTH CARING</h4>
                                <p className='mt-3 text-secondary mx-2 '>The sea freight service has grown consider ably in recent years. We spend timetting to kn.</p>
                                <div className=' mt-5 paraNone'>
                                    <Link className=" paraNone" to={'Services'}>DISCOVER MORE ABOUT US <EastIcon fontSize='small' /></Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 col-12 mt-5">
                            <div className='text-center bg-white service-cart' >
                                <IconButton disableRipple>
                                    <AcUnitSharpIcon className='service-icon mt-5' />
                                </IconButton>
                                <h4 className='mt-3'>GYM STRATIGIES</h4>
                                <p className='mt-3 text-secondary mx-2 '>The sea freight service has grown consider ably in recent years. We spend timetting to kn.</p>
                                <div className=' mt-5 paraNone'>
                                    <Link className=" paraNone" to={'Services'}>DISCOVER MORE ABOUT US <EastIcon fontSize='small' /></Link>
                                </div>
                            </div>
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
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="row">
                            <div className="col-md-5 col-0"></div>
                            <div className="col-md-1 col-6">
                                <div className="empty-div">
                                </div>
                            </div>
                            <div className="col-md-6 col-6">
                                <p style={{ marginTop: 140 }} className='text-danger'>OUR TIME SCHEDULE</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 text-center" >
                        <h1 className="text-navy">
                            SELECT THE PERFECT TIME YOU NEED NOW
                        </h1>
                    </div>
                </div>
            </div>
            <div className="container schedule-link my-5">
                <div className="row">
                    <div className="col-md-2 col-0"></div>
                    <div className="col-md-1 col-12 schedules border p-3 bg-light">
                        <a href="#boxing3"><h6 className='text-navy'>Saturday</h6></a>
                    </div>
                    <div className="col-md-1 col-12 schedules border p-3 bg-light">
                        <a href="#boxing1"><h6 className='text-navy'>Sunday</h6></a>
                    </div>
                    <div className="col-md-1 col-12 schedules border p-3 bg-light">
                        <a href="#boxing2"><h6 className='text-navy'>Monday</h6></a>
                    </div>
                    <div className="col-md-1 col-12 schedules border p-3 bg-light">
                        <a href="#boxing4"><h6 className='text-navy'>Tuesday</h6></a>
                    </div>
                    <div className="col-md-2 col-12 schedules border p-3 bg-light">
                        <a href="#boxing5"><h6 className='text-navy'>Wednesday</h6></a>
                    </div>
                    <div className="col-md-1 col-12 schedules border p-3 bg-light">
                        <a href=""><h6 className='text-navy'>Thursday</h6></a>
                    </div>
                    <div className="col-md-1 col-12 schedules border p-3 bg-light">
                        <a href=""><h6 className='text-navy'>Friday</h6></a>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-md-1"></div>
                    <div className="col-md-2 col-12 boxing p-3 bg-light border text-center" id='boxing1'>
                        <p className='schedule-para mt-5'>6am - 8am</p>
                        <h5 className='text-navy schedule-heading'>Kick Boxing</h5>
                        <span className='mb-5 span-text'>by</span><span className=' span-text text-secondary ms-1 mb-5'>Jhos Kusam</span>
                    </div>
                    <div className="col-md-2 col-12 boxing p-3 bg-light border text-center" id='boxing2'>
                        <p className='schedule-para mt-5'>6am - 8am</p>
                        <h5 className='text-navy schedule-heading'>Kick Boxing</h5>
                        <span className='mb-5 span-text'>by</span><span className=' span-text text-secondary ms-1 mb-5'>Jhos Kusam</span>
                    </div>
                    <div className="col-md-2 col-12 boxing p-3 bg-light border text-center" id='boxing3'>
                        <p className='schedule-para mt-5'>6am - 8am</p>
                        <h5 className='text-navy schedule-heading'>Kick Boxing</h5>
                        <span className='mb-5 span-text'>by</span><span className='text-secondary span-text ms-1 mb-5'>Jhos Kusam</span>
                    </div>
                    <div className="col-md-2 col-12 boxing p-3 bg-light border text-center" id='boxing4'>
                        <p className='schedule-para mt-5'>6am - 8am</p>
                        <h5 className='text-navy schedule-heading'>Kick Boxing</h5>
                        <span className='mb-5 span-text'>by</span><span className='span-text text-secondary ms-1 mb-5'>Jhos Kusam</span>
                    </div>
                    <div className="col-md-2 col-12 boxing p-3 bg-light border text-center" id='boxing5'>
                        <p className='schedule-para mt-5'>6am - 8am</p>
                        <h5 className='text-navy schedule-heading'>Kick Boxing</h5>
                        <span className='mb-5 span-text'>by</span><span className='span-text text-secondary ms-1 mb-5'>Jhos Kusam</span>
                    </div>
                    <div className="col-md-1"></div>
                </div>
            </div>
            <div className="container">
                <div className="row mt-5">
                    <div className="col-md-6 col-12">
                        <img src={contactImg} className='w-100' alt="" />
                    </div>
                    <div className="col-md-6 col-12">
                        <div className="row">
                            <div className="col-md-2 col-3">
                                <div className="empty-div6"></div>
                            </div>
                            <div className="col-md-4 col-3">
                                <p className='marginTop6'>CONTACT FORM</p>
                            </div>
                        </div>
                        <h1 className='text-navy mt-2'>FEEL FREE TO CONTACT WITH US!</h1>
                        <div className="row">
                            <div className="col-md-6 col-12 mt-3">
                                <BasicTextFields inplabel='Name' inptype = "text"/>
                            </div>
                            <div className="col-md-6 col-12 mt-3">
                                <BasicTextFields inplabel='Phone' inptype = "number"/>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-6 col-12 mt-3">
                                <SelectVariants/>
                            </div>
                            <div className="col-md-6 col-12 mt-3">
                                <BasicTextFields inplabel='Email' inptype = "email"/>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-12">
                            <MinHeightTextarea/>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-12">
                            <Link to={'#'} className='mt-2'><BasicButtons btnValue="SEND MESSAGE" /></Link>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}