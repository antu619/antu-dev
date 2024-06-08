import { FaFacebookSquare, FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import { Link } from "react-router-dom";


const Footer = () => {
    return (
        <footer className="footer footer-center p-10 mt-10 text-base-content bg-[#1D4786] rounded">
  <div className="">
  <Link to="/">
        <h2 className='text-3xl font-bold'><span className='text-yellow-700'>Antu</span> D.</h2>
    </Link>
  </div> 
  <div>
    <div className="grid grid-flow-col gap-6 text-2xl">
      <Link to='https://www.linkedin.com/in/antu619/' alt="" target="blank"><FaLinkedin /></Link>
      <Link to='https://github.com/antu619' alt="" target="blank"><FaGithub /></Link>
      <Link to='https://www.facebook.com/theantumoni/' alt="" target="blank"><FaFacebookSquare /></Link>
      <Link to='https://www.instagram.com/the_antum/' alt="" target="blank"><FaInstagram /></Link>
    </div>
  </div> 
  <div>
    <p>Copyright © 2025 - All right reserved by Antu D.</p>
  </div>
</footer>
    );
};

export default Footer;