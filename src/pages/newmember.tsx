import BasicTextFields from "../Components/input"
import BasicButtons from "../Components/button"
import MinHeightTextarea from "../Components/textarea"
import { Link } from "react-router-dom"
import SelectVariants from "../Components/Select"
import contactImg from '../images/contact_form.png.webp'
export default function Contact() {
    return (
        <div>
             <div className="bg-overlay text-center">
                <h1 className="text-white p-5">New Members</h1>
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