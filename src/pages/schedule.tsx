export default function Schedule() {
    return (
        <div>
            <div className="bg-overlay text-center">
                <h1 className="text-white p-5">SCHEDULE</h1>
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
           < div className="container">
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
        </div>
    )
}