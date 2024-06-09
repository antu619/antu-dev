import { Link } from "react-router-dom";

const Card = ({ project }) => {
  const { id, title, images, description } = project;
  return (
    <div className="card card-compact bg-[#1D4786] shadow-xl duration-700 hover:bg-opacity-80 hover:scale-105">
      <figure>
        <img src={images[0]} alt="Thumbnail" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <p>{description?.slice(0, 300)}...</p>
        <div className="card-actions justify-end">
          <Link to={`/project-details/${id}`} className="btn text-white uppercase">
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Card;
