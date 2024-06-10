import axios from "axios";
import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setSkills } from "../../../redux/slices/userSlice";
import { MdDelete } from "react-icons/md";

const AllSkills = () => {
  const dispatch = useDispatch();
  const skills = useSelector((state) => state.user.skills);

  useEffect(() => {
    const getSkills = async () => {
      try {
        const res = await axios.get("https://myportapi.onrender.com/api/getSkill");
        const data = res.data.skills;
        dispatch(setSkills(data));
        console.log(data);
      } catch (error) {
        console.log(error);
      }
    };

    getSkills();
  }, [dispatch]);

  const deleteSkill = async (id) => {
    if (!window.confirm('Are you sure you want to delete this project?')) {
      return;
    }
    try {
      const res = await axios.delete(`https://myportapi.onrender.com/api/removeSkill/${id}`);
      const data = res.data;
      alert(data.msg);
      if (res.data.success) {
        const updatedSkills = skills.filter((skill) => skill._id !== id);
        dispatch(setSkills(updatedSkills));

       
      }
    } catch (error) {
      console.log(error);
      alert("An error occurred while deleting the skill.");
    }
  };

  return (
    <div className="flex flex-col justify-center items-center h-full w-full gap-3 bg-gray-900 p-5 text-white">
      {skills.map((skill) => (
        <div
          key={skill._id}
          className="flex justify-between items-center bg-gray-800 px-4 py-3 border border-gray-700 rounded-full w-full lg:w-[30vw] max-w-[600px]"
          style={{ backgroundColor: '#2d3748', borderColor: '#1a202c' }}
        >
          <div className="flex items-center gap-3 w-full">
            {/* {skill.image && (
              <img
                src={skill.image}
                alt={skill.skill}
                className="w-12 h-12 rounded-full object-cover border border-gray-700"
              />
            )} */}
            <span className="flex-1 text-lg">{skill.skill}</span>
          </div>
          <div className="w-1/2 mx-2">
            <progress
              max={100}
              value={skill.level * 20}
              className="w-full h-3 bg-blue-400 rounded-full"
              title={`Level: ${skill.level}`}
            />
          </div>
          <MdDelete
            onClick={() => deleteSkill(skill._id)}
            className="text-red-500 hover:text-red-700 cursor-pointer transition-all ease-in-out delay-100 transform hover:scale-110"
            title="Delete Skill"
          />
        </div>
      ))}
    </div>
  );
};

export default AllSkills;
