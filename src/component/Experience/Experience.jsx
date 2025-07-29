import google from '../../assets/google.png'
import youtube from '../../assets/youtube.png'
import apple from '../../assets/apple.png'

const Experience = () => {
    return (
        <div className="lg:px-24 px-4 py-12 bg-black">
            <h1 className="text-4xl text-center text-white">My <span className="font-bold">Experience</span></h1>
            <div className='lg:w-full lg:h-[192px] w-[330px] h-[426px] mt-8 space-y-5 rounded-md px-8 py-7 border-2 border-[#71717A]'>
                <div className='lg:flex justify-between'>
                    <div className='flex gap-3'>
                        <img src={google} alt="" />
                        <p className='text-xl text-white'>Lead Software Engineer at Google</p>
                    </div>
                    <p className='lg:mt-0 mt-3 text-white'>Nov 2019 - Present</p>
                </div>
                <p className='text-white'>
                    As a Senior Software Engineer at Google, I played a pivotal role in developing innovative solutions for Google's core search algorithms. Collaborating with a dynamic team of engineers, I contributed to the enhancement of search accuracy and efficiency, optimizing user experiences for millions of users worldwide.
                </p>
            </div>
            <div className='lg:w-full lg:h-[192px] w-[330px] h-[426px] bg-[#27272A] mt-8 space-y-5 rounded-md px-8 py-7 border-2 border-[#71717A]'>
                <div className='lg:flex justify-between'>
                    <div className='flex gap-3'>
                        <img src={youtube} alt="" />
                        <p className='text-xl text-white'>Software Engineer at Youtube</p>
                    </div>
                    <p className='lg:mt-0 mt-3 text-white'>Jan 2017 - Oct 2019</p>
                </div>
                <p className='text-white'>
                    At Youtube, I served as a  Software Engineer, focusing on the design and implementation of backend systems for the social media giant's dynamic platform. Working on projects that involved large-scale data processing and user engagement features, I leveraged my expertise to ensure seamless functionality and scalability.
                </p>
            </div>
            <div className='lg:w-full lg:h-[192px] w-[330px] h-[426px] mt-8 space-y-5 rounded-md px-8 py-7 border-2 border-[#71717A]'>
                <div className='lg:flex justify-between'>
                    <div className='flex gap-3'>
                        <img src={apple} alt="" />
                        <p className='text-xl text-white'>Junior Software Engineer at Apple</p>
                    </div>
                    <p className='lg:mt-0 mt-3 text-white'>Jan 2016 - Dec 2017</p>
                </div>
                <p className='text-white'>
                    During my tenure at Apple, I held the role of Software Architect, where I played a key role in shaping the architecture of mission-critical software projects. Responsible for designing scalable and efficient systems, I provided technical leadership to a cross-functional team.
                </p>
            </div>
        </div>
    );
};

export default Experience;