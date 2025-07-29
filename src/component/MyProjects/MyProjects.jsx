import image from '../../assets/image.png'
import image1 from '../../assets/image (1).png'
import image2 from '../../assets/image (2).png'
import read from '../../assets/Read More.png'

const MyProjects = () => {
    return (
        <div className="lg:px-24 px-2 py-10 bg-black">
            <div className="text-center">
                <h1 className="text-4xl text-white">My <span className="font-bold">Projects</span></h1>
            </div>
            <div className='py-6'>
                <div className="hero ">
                    <div className="hero-content flex-col lg:flex-row">
                        <img
                            src={image}
                            className="lg:w-[530px] lg:h-[397px] w-[343px] h-[397px] rounded-lg" />
                        <div>
                            <h1 className="text-5xl font-bold text-white">01</h1>
                            <h3 className="text-2xl font-bold text-white mt-4">Crypto Screener Application</h3>
                            <p className="py-6 text-[#71717A]">
                                I'm Evren Shah Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to specimen book.
                            </p>
                            <img src={read} alt="" />
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <div className="hero">
                    <div className="hero-content flex-col lg:flex-row-reverse">
                        <img
                            src={image1}
                            className="lg:w-[530px] lg:h-[397px] w-[343px] h-[397px] rounded-lg " />
                        <div>
                            <h1 className="text-5xl font-bold text-white">02</h1>
                            <h3 className="text-2xl font-bold text-white mt-4">Euphoria - Ecommerce (Apparels) Website Template</h3>
                            <p className="py-6 text-[#71717A]">
                                I'm Evren Shah Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to specimen book.
                                when an unknown printer took a galley of type and scrambled it to specimen book.
                            </p>
                            <img src={read} alt="" />
                        </div>
                    </div>
                </div>
            </div>
             <div className=''>
                <div className="hero ">
                    <div className="hero-content flex-col lg:flex-row">
                        <img
                            src={image2}
                            className="lg:w-[530px] lg:h-[397px] w-[343px] h-[397px] rounded-lg" />
                        <div>
                            <h1 className="text-5xl font-bold text-white">03</h1>
                            <h3 className="text-2xl font-bold text-white mt-4">Blog Website Template</h3>
                            <p className="py-6 text-[#71717A]">
                                I'm Evren Shah Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to specimen book.
                            </p>
                            <img src={read} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MyProjects;