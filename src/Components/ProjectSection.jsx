import  { useEffect } from 'react';
import axios from 'axios';
import { setProjects } from '../redux/slices/userSlice';
import { useDispatch, useSelector } from 'react-redux';
import { FaGithub, FaLink } from 'react-icons/fa';

const ProjectSection = () => {
  const dispatch = useDispatch();
  const projects = useSelector((state) => state.user.projects);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get('http://localhost:5000/api/getProjects');
        const data = res.data.project;
        dispatch(setProjects(data));
      } catch (error) {
        console.log('invalid data fetching', error);
      }
    };
    fetchData();
  }, [dispatch]);

  return (
    <section className="py-12 text-white" id='projects'>
      <div className="container mx-auto px-4">
        <h2 className="text-6xl font-bold mb-8 text-left gradient-text"> Projects</h2>
        <div className="grid gap-8 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 mt-20">
          {projects.map((project) => (
            <div key={project._id} className="bg-gray-900 shadow-lg rounded-lg overflow-hidden  project-image ">
              <img src={project.img} alt={project.name} className="w-full h-48 object-cover" />
              <div className="flex justify-between mt-4 m-4">
                <a href={project.githubUrl} className="text-gray-500 hover:text-white">
                  <FaGithub size={24} />
                </a>
                <a href={project.hostedUrl} className="text-gray-500 hover:text-white">
                  <FaLink size={24} />
                </a>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 gradient-text uppercase">{project.name}</h3>
                <p className="text-gray-400">{project.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectSection;
