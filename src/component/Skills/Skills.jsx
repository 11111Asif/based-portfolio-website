import vector from '../../assets/Vector.png'
import js from '../../assets/icon-javascript.png'
import sass from '../../assets/Vector (1).png'
import nest from '../../assets/Vector (2).png'
import book from '../../assets/icon-storybook.png'
import lo from '../../assets/Vector (4).png'
import ex from '../../assets/icon-express.png'
import ts from '../../assets/icon-typescript.png'

const Skills = () => {
    return (
        <div className="lg:px-24 px-5 bg-[#ffffff]">
            <div className="text-center">
                <h1 className="text-5xl text-black">My <span className="font-bold">Skills</span></h1>
            </div>
            <div className='py-9 grid grid-cols-2 lg:grid-cols-5 gap-5'>
                <div className='w-[150px] block lg:hidden h-[150px] py-9 px-12 border-2 border-black'>
                    <img src={ex} alt="" className='text-black' />
                    <p className='text-black -mr-3 mt-3'>javascript</p>
                </div>
                <div className='w-[150px] hidden lg:block h-[150px] py-9 px-12 border-2 border-black'>
                    <img src={vector} alt="" />
                    <p className='text-black text-center mt-3'>Git</p>
                </div>
                <div className='w-[150px] h-[150px] lg:bg-black py-9 px-12 border-2 border-black'>
                    <img src={js} alt="" />
                    <p className='lg:text-white text-black text-center  mt-3'>javascript</p>
                </div>
                <div className='w-[150px] bg-black block lg:hidden h-[150px] py-9 px-12 border-2 border-black'>
                    <img src={ts} alt="" className='text-black' />
                    <p className='text-white -mr-3 mt-3'>typescript</p>
                </div>
                <div className='w-[150px] h-[150px] justify-center py-9 px-12 border-2 border-black'>
                    <img src={sass} alt="" />
                    <p className='text-black text-center mt-3'>Sass/scss</p>
                </div>
                <div className='w-[150px] hidden lg:block h-[150px] justify-center py-9 px-12 border-2 border-black'>
                    <img src={nest} alt="" />
                    <p className='text-black text-center mt-3'>Nest.Js</p>
                </div>
                <div className='w-[150px] h-[150px] justify-center py-9 px-12 border-2 border-black'>
                    <img src={book} alt="" />
                    <p className='text-black text-center mt-3'>Storybook</p>
                </div>
                <div className='w-[150px] hidden lg:block h-[150px] justify-center py-9 px-12 border-2 border-black'>
                    <img src={nest} alt="" />
                    <p className='text-black text-center mt-3'>Nest.Js</p>
                </div>
                <div className='w-[150px] hidden lg:block h-[150px] py-9 px-12 border-2 border-black'>
                    <img src={vector} alt="" />
                    <p className='text-black text-center mt-3'>Git</p>
                </div>
                <div className='w-[150px] hidden lg:block h-[150px] justify-center py-9 px-12 border-2 border-black'>
                    <img src={book} alt="" />
                    <p className='text-black text-center mt-3'>Storybook</p>
                </div>
                <div className='w-[150px]  h-[150px] justify-center py-9 px-12 border-2 border-black'>
                    <img src={lo} alt="" />
                    <p className='text-black text-center mt-3'>Socket.io</p>
                </div>
                <div className='w-[150px] hidden lg:block h-[150px] py-9 px-12 border-2 border-black'>
                    <img src={sass} alt="" className='text-black' />
                    <p className='text-black -mr-3 mt-3'>Sass/scss</p>
                </div>
                 
                 
            </div>
        </div>
    );
};

export default Skills;