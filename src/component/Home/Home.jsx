import About from "../About/About";
import Banner from "../Banner/Banner";
import Experience from "../Experience/Experience";
import Header from "../Header/Header";
import Skills from "../Skills/Skills";


const Home = () => {
    return (
        <div>
            <Header></Header>
            <Banner></Banner>
            <Skills></Skills>
            <Experience></Experience>
            <About></About>
        </div>
    );
};

export default Home;