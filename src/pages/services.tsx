import { IconButton } from '@mui/material';
import { Link } from 'react-router-dom';
import FavoriteBorderSharpIcon from '@mui/icons-material/FavoriteBorderSharp';
import AcUnitSharpIcon from '@mui/icons-material/AcUnitSharp';
import EastIcon from '@mui/icons-material/East';
import FitnessCenterSharpIcon from '@mui/icons-material/FitnessCenterSharp';

export default function Services() {
    return (
        <div>
            <div className="bg-overlay text-center">
                <h1 className="text-white p-5">SERVICES</h1>
            </div>
            <div className="container">
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
    )
}