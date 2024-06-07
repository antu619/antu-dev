import banner from '../assets/antu-banner.png';
import Typewriter from 'typewriter-effect';

const Banner = () => {
    return (
        <div className='flex flex-col lg:flex-row items-center gap-5 lg:gap-20 max-w-7xl mx-auto my-5'>
            {/* Banner Image */}
            <div>
                <img className='w-[586px]' src={banner} alt="Banner Image" />
            </div>
            {/* Banner Content */}
            <div className='p-5 lg:p-0'>
            <h3 className='text-base-content text-xl md:text-2xl lg:text-4xl font-semibold w-full'>Hi! I'm Antu.
                </h3>
                <h1 className='text-yellow-700 text-3xl md:text-5xl lg:text-6xl font-bold lg:mt-3'>
                <Typewriter
                        options={{
                            strings: ['MERN Developer.', 'Full-Stack Developer.'],
                            autoStart: true,
                            loop: true,
                        }}
                    />
                </h1>
                    
                <p className='text-white my-5 lg:my-8'>I'm a passionate Full Stack Developer specializing in the MERN stack <br /> (MongoDB, Express.js, React, Node.js). With a keen eye for detail and a love for <br /> problem-solving, I enjoy building dynamic and responsive web applications <br />that enhance user experiences.</p>
                <a className='btn uppercase w-28 bg-[#1D4786] hover:bg-[#1D4786] text-white'>Hire Me</a>
            </div>
        </div>
    );
};

export default Banner;