import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import About from "../../pages/about";
import Contact from "../../pages/contact";
import Error from "../../pages/error";
import Gallery from "../../pages/gallery";
import Home from "../../pages/home";
import Schedule from "../../pages/schedule";
import Services from "../../pages/services";
import NewMember from "../../pages/newmember";
import BasicButtons from "../../Components/button";
import { Images } from "../../pages/images";

export default function AppRouter() {
    return (
        <Router>
            <nav className="navbar sticky-top navbar-expand-lg ">
                <div className="container">
                    <Link className="link1 navbar-brand" to={'#'}><Images /></Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="otherlink nav-link  mx-2 " to={'/'}>Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="otherlink nav-link mx-2 " to={'About'}>About</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="otherlink nav-link mx-2 " to={'Services'}>Services</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="otherlink nav-link mx-2 " to={'Contact'}>Contact</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="otherlink nav-link mx-2 " to={'Schedule'}>Schedule</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="otherlink nav-link mx-2 " to={'Gallery'}>Gallery</Link>
                            </li>

                        </ul>
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                
                                <Link className="linkend nav-link ms-auto" to={'NewMember'}><BasicButtons btnValue="BECAME A MEMBER" /></Link>

                            </li>
                        </ul>
                    </div>
                </div>
            </nav>

           

            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="about" element={<About />} />
                <Route path="services" element={<Services />} />
                <Route path="schedule" element={<Schedule />} />
                <Route path="gallery" element={<Gallery />} />
                <Route path="contact" element={<Contact />} />
                <Route path="newmember" element={<NewMember />} />
                <Route path="*" element={<Error />} />
            </Routes>

            <footer className="bg-footer mt-5">
                 <div className="container">
                    <div className="row">
                        <div className="col-md-3 col-12 mt-5">
                            <h4 className="text-white">COMPANY</h4>
                            <p className="mt-5">About Us</p>
                            <p>Company</p>
                            <p>Press & Blog</p>
                            <p>Privacy Policy</p>
                        </div>
                        <div className="col-md-3 col-12 mt-5">
                             <h4 className="text-white">OPEN HOUR</h4>
                             <p className="mt-5">Monday 11am-7pm</p>
                             <p>Tuesday-Friday 11am-8pm</p>
                             <p>Saturday 10am-6pm</p>
                             <p>Sunday 11am-6pm</p>
                        </div>
                        <div className="col-md-3 col-12 mt-5">
                        <h4 className="text-white">RESOURCES</h4>
                             <p className="mt-5">Home Insurance</p>
                             <p>Travel Insurance</p>
                             <p>Car Insurance</p>
                             <p>Business Insurance </p>
                        </div>
                        <div className="col-md-3 col-12 mt-5">
                             <Images/>
                             <p className="mt-5">GThe trade war currently ensuing between te US anfd several natxions around thdhe globe, most fiercely with.</p>
                        </div>
                    </div>
                 </div>
                 <hr className="text-white" style={{marginTop:200}}/>
                 <p className="text-center my-5 text-white">Copyright ©2023 All rights reserved | This template is made with  by Colorlib</p>
             </footer>
        </Router>
    )
    
}


