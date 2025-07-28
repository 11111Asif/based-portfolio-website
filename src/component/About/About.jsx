import column from '../../assets/column.png'

const About = () => {
    return (
        <div className="lg:px-24 px-4 py-10 bg-[#ffffff]">
            <div className="hero min-h-screen">
                <div className="hero-content flex-col lg:flex-row">
                    <img
                        src={column}
                        className="lg:w-[525px] lg:h-[572px] w-[343px] h-[374px] rounded-lg shadow-2xl" />
                    <div>
                        <h1 className="text-5xl text-black">About <span className="font-bold">Me</span></h1>
                        <p className="lg:py-6 py-3 text-[#71717A]">
                            I'm a passionate, self-proclaimed designer who specializes in full stack development (React.js & Node.js). I am very enthusiastic about bringing the technical and visual aspects of digital products to life. User experience, pixel perfect design, and writing clear, readable, highly performant code matters to me.
                        </p>
                        <p className="lg:py-6 py-3 text-[#71717A]">
                            I began my journey as a web developer in 2015, and since then, I've continued to grow and evolve as a developer, taking on new challenges and learning the latest technologies along the way. Now, in my early thirties, 7 years after starting my web development journey, I'm building cutting-edge web applications using modern technologies such as Next.js, TypeScript, Nestjs, Tailwindcss, Supabase and much more.
                        </p>
                        <p className="lg:py-6 py-3 text-[#71717A]">
                            When I'm not in full-on developer mode, you can find me hovering around on twitter or on indie hacker, witnessing the journey of early startups or enjoying some free time. You can follow me on Twitter where I share tech-related bites and build in public, or you can follow me on GitHub.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;