import logo from '../../assets/logo 1.png'

const Footer = () => {
    return (
        <div className='lg:px-24 px-4 py-5 bg-black'>
            <div className='flex justify-between'>
                <div className='flex gap-3'>
                    <img src={logo} alt="" />
                    <h2 className="lg:text-3xl font-bold text-white">Personal</h2>
                </div>
                <div>
                    <p className='text-white'>@ 2019-2023 Personal</p>
                    <p className='text-white text-end'>Made In Figma</p>
                </div>
            </div>
        </div>
    );
};

export default Footer;