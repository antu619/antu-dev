import { Carousel } from "react-responsive-carousel";
import { Link, useLoaderData, useParams } from "react-router-dom";
import Slider from "./Slider";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { useEffect } from "react";

const ProjectDetails = () => {
    const {id} = useParams();
    const projects = useLoaderData();
    console.log(projects.find(project => project.id === id))

    const project = projects.find((project) => project.id === id);

    useEffect(() => {
      window.scrollTo(0, 0); // Scrolls to the top of the page when the component mounts
    }, []);

    console.log(project.live)
    return (
        <div className="max-w-7xl mx-auto">
           <Carousel showArrows={true} >
           {
            project?.images?.map((image, i) => <Slider key={i} image={image} i={i} />)
           }
           </Carousel>
           <div className="p-5">
           <h2 className="text-3xl font-semibold">{project?.title}</h2>
           <p className="my-5">{project?.description}</p>
           <p>For more details, you can contact me at <span className="font-bold text-white">{project?.email}</span> or <span className="font-bold text-white">{project?.number}</span></p>
           <h4 className="text-xl font-bold mt-5 mb-3">Links</h4>
           {
              project?.clientRepo &&
                <li className=""><Link className="btn btn-link text-[#1D4786]" to={project?.clientRepo} target="_blank">GitHub Clinet Link</Link></li>
           }
           {
              project?.serverRepo &&
                <li className=""><Link className="btn btn-link text-[#1D4786]" to={project?.serverRepo} target="_blank">GitHub Server Link</Link></li>
           }
           {
              project?.live &&
                <li className=""><Link className="btn btn-link text-[#1D4786]" to={project?.live} target="_blank">Live Website Link</Link></li>
           }
           </div>
        </div>
    );
};

export default ProjectDetails;