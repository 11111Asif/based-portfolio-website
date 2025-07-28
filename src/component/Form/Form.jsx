import icon from '../../assets/Social icon.png'
import icon1 from '../../assets/Subtract.png'
import icon2 from '../../assets/Social icon (1).png'
import icon3 from '../../assets/Social icon (2).png'

const Form = () => {
    return (
        <div className="lg:px-24 bg-[#ffffff]">
            <div className="hero">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center lg:w-[400px] w-[343px] lg:text-left">
                        <h1 className="text-4xl font-bold text-black">Let’s <span className='font-bold text-[#D9D9D9]'>talk</span> for</h1>
                         <h1 className="text-4xl font-bold text-black mt-3">Something special</h1>
                        <p className="py-6 text-[#71717A]">
                            I seek to push the limits of creativity to create high-engaging, user-friendly, and memorable interactive experiences.
                        </p>
                        <div>
                            <h3 className="text-2xl font-bold text-black">Youremail@gmail.com</h3>
                            <h3 className="text-2xl font-bold text-black mt-3">1234567890</h3>
                        </div>
                    </div>
                    <div className="card bg-[#ffffff] lg:w-[600px] w-[350px] shrink-0">
                        <form className="card-body">
                            <div className="form-control">
                                <input type="text" placeholder="Your name" className="lg:w-[500px] w-[320px] h-[56px] border-2 px-3 bg-white rounded-md border-black" required />
                            </div>
                            <div className="form-control">
                                <input type="email" placeholder="Email" className="lg:w-[500px] w-[320px] h-[56px] border-2 px-3 bg-white rounded-md border-black" required />
                            </div>
                            <div className="form-control">
                                <input type="text" placeholder="Your website (If exists)" className="lg:w-[500px] w-[320px] h-[56px] border-2 px-3 bg-white rounded-md border-black" required />
                            </div>
                            <div className="form-control">
                                <textarea className="lg:w-[500px] w-[320px] h-[140px] bg-white border-2 border-black rounded-md py-4 px-4" placeholder="How can I help?*" required></textarea>
                            </div>

                            <div className='lg:flex gap-5'>
                                <div className="form-control mt-6 w-[173px] h-[56px] rounded-md bg-black">
                                    <button className="text-white py-4 px-10">Get In Touch</button>
                                </div>
                                <div className='py-4 mt-2 flex gap-4'>
                                    <div className='bg-black w-[56px] h-[56px] rounded-md py-4 px-4'>
                                        <img src={icon} alt="" className='w-[24px] h-[24px]' />
                                    </div>
                                    <div className='border-2 border-black w-[56px] h-[56px] rounded-md py-3.5 px-4'>
                                        <img src={icon1} alt="" className='w-[24px] h-[24px]' />
                                    </div>
                                    <div className='border-2 border-black w-[56px] h-[56px] rounded-md py-3.5 px-4'>
                                        <img src={icon2} alt="" className='w-[24px] h-[24px]' />
                                    </div>
                                    <div className='border-2 border-black w-[56px] h-[56px] rounded-md py-3.5 px-4'>
                                        <img src={icon3} alt="" className='w-[24px] h-[24px]' />
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Form;