import frame18 from '../../assets/Frame 18.png'
import frame from '../../assets/Frame 18 (1).png'

const Testimonial = () => {
    return (
        <div className='lg:px-24 px-4 py-10 bg-white'>
            <h1 className="text-4xl text-black text-center">My <span className='font-bold'>Testimonial</span></h1>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-10'>
                <div className="card bg-white w-auto shadow-xl">
                    <figure className="px-10 pt-10">
                        <img
                            src={frame18}
                            alt=""
                            className="rounded-xl" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title"></h2>
                        <p className='text-[#404040]'>I recently had to jump on 10+<br/> different calls across eight<br/> different countries to find the<br/> right owner.</p>
                        <div className='border-b-2 border-[#000000] w-[120px] py-3'></div>
                        <h4 className='text-[#404040]'>Evren Shah</h4>
                        <p className='text-[#71717A]'>Designer</p>
                    </div>
                </div>
                <div className="card bg-black w-auto shadow-xl">
                    <figure className="px-10 pt-10">
                        <img
                            src={frame}
                            alt=""
                            className="rounded-xl" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title"></h2>
                        <p className='text-white'>I recently had to jump on 10+<br/> different calls across eight<br/> different countries to find the<br/> right owner.</p>
                        <div className='border-b-2 border-[#ffffff] w-[120px] py-3'></div>
                        <h4 className='text-white'>Flora sheen</h4>
                        <p className='text-white'>Designer</p>
                    </div>
                </div>
                <div className="card bg-white w-auto shadow-xl">
                    <figure className="px-10 pt-10">
                        <img
                            src={frame18}
                            alt=""
                            className="rounded-xl" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title"></h2>
                        <p className='text-[#404040]'>I recently had to jump on 10+<br/> different calls across eight<br/> different countries to find the<br/> right owner.</p>
                        <div className='border-b-2 border-[#000000] w-[120px] py-3'></div>
                        <h4 className='text-[#404040]'>Evren Shah</h4>
                        <p className='text-[#71717A]'>Designer</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Testimonial;