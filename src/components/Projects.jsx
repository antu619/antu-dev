import travellerThumbnail from '../assets/traveLLer-1.png'
import tastyThumbnail from '../assets/tasty-recipes-1.png'
import landThumbnail from '../assets/land-times-1.png'

const Projects = () => {
  return (
    <div className="py-10 max-w-7xl mx-auto p-5">
      <h2 className="text-3xl mb-20">My Best Projects</h2>

      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10'>
        <div className="card card-compact bg-[#1D4786] shadow-xl duration-700 hover:bg-opacity-80 hover:scale-105">
          <figure>
            <img
              src={travellerThumbnail}
              alt="Thumbnail"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">traveLLer</h2>
            <p>traveLLer is a responsive travel blogging website built using the MERN stack along with additional technologies such as Tailwind CSS, Daisy UI, React Router DOM, Firebase. It allows users to explore travel blogs, search for specific posts, and engage in various activities such as registering, logging in, and managing their posts through a user-friendly dashboard.</p>
            <div className="card-actions justify-end">
              <button className="btn text-white">View Details</button>
            </div>
          </div>
        </div>
        <div className="card card-compact bg-[#1D4786] shadow-xl duration-700 hover:bg-opacity-80 hover:scale-105">
          <figure>
            <img
              src={tastyThumbnail}
              alt="Thumbnail"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Tasty Recipes</h2>
            <p>Tasty Recipes features a delicious homepage with various sections such as Our Food Categories, Our Sea Foods, and a Subscribe section. The project leverages Firebase and react-firebase-hooks for authentication and data handling with CRUD Operation.</p>
            <div className="card-actions justify-end">
              <button className="btn text-white">View Details</button>
            </div>
          </div>
        </div>
        <div className="card card-compact bg-[#1D4786] shadow-xl duration-700 hover:bg-opacity-80 hover:scale-105">
          <figure>
            <img
              src={landThumbnail}
              alt="Thumbnail"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">The Land Times</h2>
            <p>Authentication-based project built with React.js and Firebase Authentication. This project features a secure login system, protected routes, and dynamic user interface elements.</p>
            <div className="card-actions justify-end">
              <button className="btn text-white">View Details</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
