import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FiMail } from "react-icons/fi";
import { Link } from "react-router-dom";


const SocialBar = () => {
    return (
            <div className='flex justify-center items-center bg-[#1D4786] w-10 h-32 rounded-full'>
            <ul className='flex flex-col gap-3'>
                <li className='text-xl'><Link to='https://www.linkedin.com/in/antu619/' alt="" target="blank"><FaLinkedin className='duration-700 hover:bg-opacity-80 hover:scale-125' /></Link></li>
                <li className='text-xl cursor-pointer'><Link to='https://github.com/antu619' alt="" target="blank"><FaGithub className='duration-700 hover:bg-opacity-80 hover:scale-125' /></Link></li>
                <li data-tip='antu.das.619@gmail.com' className='text-xl cursor-pointer tooltip tooltip-left'><FiMail className='duration-700 hover:bg-opacity-80 hover:scale-125'/></li>
            </ul>
        </div>
    );
};

export default SocialBar;