import { MdOutlineFileDownload } from "react-icons/md";
import { Link } from "react-scroll";
import resumePdf from '../assets/antu-d-mern-resume.pdf'

const Navbar = () => {


  const navLinks = <>
    <li><a href="/" >Home</a></li>
    <li><Link to="projects" smooth={true} duration={500} >Projects</Link></li>
    <li><Link to="about" smooth={true} duration={500} >About</Link></li>
    <li><Link to="skills" smooth={true} duration={500} >Skills</Link></li>
    <li><Link to="contact" smooth={true} duration={500} >Contact</Link></li>
  </>

    return (
        <div className="sticky top-0 z-50 bg-[#1D4786]">
  <div className="navbar max-w-7xl mx-auto">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </div>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-[#1d4786] rounded-box w-52 gap-1">
        {navLinks}
      </ul>
    </div>
    <a className='ml-2' href="/">
        <h2 className='text-3xl font-bold'><span className='text-yellow-700'>Antu</span> D.</h2>
    </a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1 gap-1">
      {navLinks}
    </ul>
  </div>
  <div className="navbar-end">
    <a href={resumePdf} download='resume-antu-d' className="btn uppercase text-white">Resume <MdOutlineFileDownload className="text-xl" /></a>
  </div>
  </div>
</div>
    );
};

export default Navbar;