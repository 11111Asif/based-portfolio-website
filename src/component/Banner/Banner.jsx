import banner from '../../assets/Banner.png'
import icon from '../../assets/Social icon.png'
import icon1 from '../../assets/Subtract.png'
import icon2 from '../../assets/Social icon (1).png'
import icon3 from '../../assets/Social icon (2).png'

const Banner = () => {
    return (
        <div className='lg:px-24 bg-[#ffffff]'>
            <div className="hero min-h-screen">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <img
                        src={banner}
                        className="lg:max-w-[500px] max-w-[343px] rounded-lg " />
                    <div>
                        <h1 className="lg:text-5xl text-3xl text-black">Hello I’am <span className='font-bold'>Evren Shah. Frontend</span> <span className='font-bold text-[#D9D9D9]'>Developer</span> Based In <span className='font-bold'>India.</span></h1>
                        <p className="py-6 text-[#71717A]">
                            I'm Evren Shah Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to specimen book.
                        </p>
                        <div className='py-4 flex gap-4'>
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
                </div>
            </div>
        </div>
    );
};

export default Banner;