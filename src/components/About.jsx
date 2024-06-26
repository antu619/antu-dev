import { HiArrowDownTray } from "react-icons/hi2";
import antu from "../assets/antud19.png";
import resumePdf from '../assets/antu-d-mern-resume.pdf';


const About = () => {
    return (
        <div>
            <div className="pt-20 max-w-7xl mx-auto p-5">
            <h2 className="text-3xl mb-20" data-aos="fade-right" data-aos-duration="1200">About Me</h2>
            <div className="hero">
            <div className="hero-content gap-10 lg:gap-40 flex-col lg:flex-row-reverse p-0">
                <div className="w-2/3 lg:w-1/4 md:w-auto" data-aos="fade-up" data-aos-duration="1200">
                    <img className='rounded-2xl border-4 border-[#1D4786]'  src={antu} alt='' />
                </div>
                <div className='lg:w-1/2' data-aos="fade-down" data-aos-duration="1200">
                <h1 className="text-3xl font-bold">Antu Chandra Das</h1>
               <div>
               <p className="py-6">As a passionate MERN Stack developer, I have acquired a solid understanding of HTML, CSS, JavaScript, and React. I am dedicated to staying up-to-date with the latest industry trends and best practices to create innovative and efficient web solutions.</p>
               <p>On the back-end, I am proficient with Node.js and Express, which I have used to build robust server-side applications. Additionally, I have experience with MongoDB for database management, completing projects that integrate full-stack functionality. </p>
                <br />
                <p>
                Driven by a constant desire to learn and grow, I enjoy tackling new challenges that push the boundaries of my knowledge, enabling me to deliver dynamic and scalable solutions within the MERN Stack ecosystem.
                </p>
               </div>
               <a  href={resumePdf} download='resume-antu-d'  className="btn mt-6 uppercase bg-[#1D4786] hover:bg-[#1D4786] text-white">Download CV <HiArrowDownTray className='ml-2' /></a>
                </div>
            </div>
            </div>
        </div>
        </div>
    );
};

export default About;