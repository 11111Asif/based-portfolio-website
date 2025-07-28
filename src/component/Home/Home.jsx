import About from "../About/About";
import Banner from "../Banner/Banner";
import Experience from "../Experience/Experience";
import Footer from "../Footer/Footer";
import Form from "../Form/Form";
import Header from "../Header/Header";
import MyProjects from "../MyProjects/MyProjects";
import Skills from "../Skills/Skills";
import Testimonial from "../Testimonial/Testimonial";


const Home = () => {
    return (
        <div>
            <Header></Header>
            <Banner></Banner>
            <Skills></Skills>
            <Experience></Experience>
            <About></About>
            <MyProjects></MyProjects>
            <Testimonial></Testimonial>
            <Form></Form>
            <Footer></Footer>
        </div>
    );
};

export default Home;