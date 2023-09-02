import gallery1 from '../images/gallery1.png.webp'
import gallery2 from '../images/gallery2.png.webp'
import gallery3 from '../images/gallery3.png.webp'
import gallery4 from '../images/gallery4.png.webp'
import gallery5 from '../images/gallery5.png.webp'
export default function Gallery() {
    return (
        <div>
             <div className="bg-overlay text-center">
                <h1 className="text-white p-5">GALLERY</h1>
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
        </div>
    )
}