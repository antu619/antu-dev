import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FiMail } from "react-icons/fi";


const SocialBar = () => {
    return (
            <div className='flex justify-center items-center bg-[#1D4786] w-10 h-32 rounded-full'>
            <ul className='flex flex-col gap-3'>
                <li className='text-xl'><a href='https://www.linkedin.com/in/antud19/' alt="" target="blank"><FaLinkedin className='duration-700 hover:bg-opacity-80 hover:scale-125' /></a></li>
                <li className='text-xl cursor-pointer'><a href='https://github.com/antu619' alt="" target="blank"><FaGithub className='duration-700 hover:bg-opacity-80 hover:scale-125' /></a></li>
                <li data-tip='antu.das.619@gmail.com' className='text-xl cursor-pointer tooltip tooltip-left'><FiMail className='duration-700 hover:bg-opacity-80 hover:scale-125'/></li>
            </ul>
        </div>
    );
};

export default SocialBar;