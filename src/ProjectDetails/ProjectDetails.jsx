import { Carousel } from "react-responsive-carousel";
import { useLoaderData, useParams } from "react-router-dom";
import Slider from "./Slider";
import "react-responsive-carousel/lib/styles/carousel.min.css";


const ProjectDetails = () => {
    const {id} = useParams();
    console.log(id)
    const projects = useLoaderData();
    console.log(projects.find(project => project.id === id))

    const project = projects.find((project) => project.id === id);

    console.log(project)
    return (
        <div className="max-w-7xl mx-auto">
           {/* <Slider images={project?.images} /> */}
           <Carousel showArrows={true} >
           {
            project?.images?.map((image, i) => <Slider key={i} image={image} i={i} />)
           }
           </Carousel>
        </div>
    );
};

export default ProjectDetails;