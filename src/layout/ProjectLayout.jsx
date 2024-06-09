import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import { MdOutlineFileDownload } from "react-icons/md";


const ProjectLayout = () => {
    return (
        <div>
            <div className="sticky top-0 z-50 bg-[#1D4786]">
  <div className="navbar max-w-7xl mx-auto">
  <div className="navbar-start">
    <a className='ml-2' href="/">
        <h2 className='text-3xl font-bold'><span className='text-yellow-700'>Antu</span> D.</h2>
    </a>
  </div>
  <div className="navbar-end">
    <button className="btn uppercase text-white">Resume <MdOutlineFileDownload className="text-xl" /></button>
  </div>
  </div>
</div>
            <Outlet />
            <Footer/>
        </div>
    );
};

export default ProjectLayout;