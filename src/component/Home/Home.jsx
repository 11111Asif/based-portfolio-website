import About from "../About/About";
import Banner from "../Banner/Banner";
import Experience from "../Experience/Experience";
import Header from "../Header/Header";
import MyProjects from "../MyProjects/MyProjects";
import Skills from "../Skills/Skills";


const Home = () => {
    return (
        <div>
            <Header></Header>
            <Banner></Banner>
            <Skills></Skills>
            <Experience></Experience>
            <About></About>
            <MyProjects></MyProjects>
        </div>
    );
};

export default Home;