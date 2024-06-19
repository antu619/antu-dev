import { useEffect, useState } from "react";
import Card from "./Card";
// import { Element } from "react-scroll";

const Projects = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    fetch("projects.json")
      .then((res) => res.json())
      .then((data) => setProjects(data));
  }, []);
  return (
    <div>
        <div className="pt-20 max-w-7xl mx-auto p-5">
      <h2 className="text-3xl mb-20" data-aos="fade-right" data-aos-duration="1200">My Best Projects</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10" data-aos="fade-up" data-aos-duration="1200">
        {
          projects?.map(project => <Card key={project.id} project={project} />)
        }
      </div>
    </div>
    </div>
  );
};

export default Projects;
