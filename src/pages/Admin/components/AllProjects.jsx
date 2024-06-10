import { useEffect, useState } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { setProjects } from "../../../redux/slices/userSlice";
import { MdDelete, MdEdit, MdPropaneTank } from "react-icons/md";
import { getSignature } from "../../../helpers/getSignature";
import { deleteImage } from "../../../helpers/deleteImage";
import { TiTick } from "react-icons/ti";
import { uploadImage } from "../../../helpers/uploadImage";

const AllProjects = () => {
  const [edit, setEdit] = useState();
  const [selectorProject, setSelectorProject] = useState("");
  const [newName, setNewName] = useState("");
  const [newDesc, setNewDesc] = useState("");
  const [newGithubUrl, setNewGithubUrl] = useState("");
  const [newHostedUrl, setNewHostedUrl] = useState("");
  const [selectedImg, setSelectImg] = useState("");

  const dispatch = useDispatch();
  const projects = useSelector((state) => state.user.projects);

  const getProject = async () => {
    const res = await axios.get("https://myportapi.onrender.com/api/getProjects");

    const data = await res.data.project;
    dispatch(setProjects(data));

    console.log(data);
  };
  useEffect(() => {
    getProject();
  }, []);

  const deleteProject = async (id, publicId) => {
    if (!window.confirm("Are you sure you want to delete this project?")) {
      return;
    }

    const signature = await getSignature(publicId);
    console.log("Signature generated  while deleting", signature);

    // Delete project from cloudinary
    const newData = await deleteImage(publicId, signature);

    console.log(newData);

    // Delete project from database

    const delProj = await axios.delete(
      `https://myportapi.onrender.com/api/removeProject/${id}`
    );
    const data = await delProj.data;
    alert(data.msg);

    getProject();
  };

  const handleImage = (e) => {
    const file = e.target.files[0];
    setSelectImg(file);

    console.log(file);
  };
  const updateProject = async (id, public_id) => {
    setEdit(false);
    let uploadedImg;
    if (selectedImg) {
      uploadedImg = await uploadImage(selectedImg);
    }

    const myData = {
      name: newName,
      desc: newDesc,
      id: id,
      img: uploadedImg ? uploadedImg.secureUrl : null,
      publicId: uploadedImg ? uploadedImg.publicId : null,
      deleteToken: uploadedImg ? uploadedImg.deleteToken : null,
      githubUrl: newGithubUrl,
      hostedUrl: newHostedUrl,
    };

    const res = await axios.put(
      `https://myportapi.onrender.com/api/updateProject/${id}`,
      myData
    );

    const data = await res.data;
    alert(data.msg);

    if (selectedImg) {
      const signature = await getSignature(public_id);

      const nwData = await deleteImage(public_id, signature);
      console.log(nwData);
    }
    getProject();
  };

  return (
    <div className="flex flex-col justify-center items-center gap-5 text-white  p-5 overflow-y-auto">
      {projects.map((project) => {
        return (
          <div
            key={project._id}
            className="bg-gray-800 rounded-lg shadow-lg p-5 w-full lg:w-2/3"
          >
            <div className="flex flex-col lg:flex-row gap-5 justify-between items-center">
              <img
                src={project.img}
                alt={project.name}
                className="w-full lg:w-1/4 max-h-48 rounded-lg object-cover"
              />
              <input
                type="file"
                name="img"
                id="img"
                accept="img"
                className={`${edit ? "block" : "hidden"} `}
                onChange={(e) => setSelectImg(e.target.files[0])}
              />
              <div className="flex flex-col gap-1 flex-1">
                <h1
                  className={`text-xl lg:text-3xl ${
                    edit &&
                    selectorProject === project._id &&
                    "bg-indigo-500 bg-opacity-30"
                  } p-2 rounded`}
                  style={{
                    backgroundColor:
                      edit && selectorProject === project._id
                        ? "#4c51bf80"
                        : "transparent",
                  }}
                >
                  {edit && selectorProject === project._id ? (
                    <input
                      type="text"
                      name="name"
                      id="name"
                      value={newName}
                      className="w-full bg-transparent outline-none"
                      onChange={(e) => setNewName(e.target.value)}
                    />
                  ) : (
                    project.name
                  )}
                </h1>
                <div className="text-sm lg:text-base text-gray-300">
                  <label htmlFor="desc" className="block">
                    Desc:
                  </label>
                  {edit && selectorProject === project._id ? (
                    <input
                      type="text"
                      name="desc"
                      id="desc"
                      value={newDesc}
                      className="w-full bg-transparent outline-none"
                      onChange={(e) => setNewDesc(e.target.value)}
                    />
                  ) : (
                    project.desc
                  )}
                </div>
                <div className="text-sm lg:text-base text-gray-300">
                  <label htmlFor="githubUrl" className="block">
                    Github:
                  </label>
                  {edit && selectorProject === project._id ? (
                    <input
                      type="text"
                      name="githubUrl"
                      id="githubUrl"
                      value={newGithubUrl}
                      className="w-full bg-transparent outline-none"
                      onChange={(e) => setNewGithubUrl(e.target.value)}
                    />
                  ) : (
                    <a
                      href={project.githubUrl}
                      className="text-blue-400 hover:underline"
                    >
                      {project.githubUrl}
                    </a>
                  )}
                </div>
                <div className="text-sm lg:text-base text-gray-300">
                  <label htmlFor="hostedUrl" className="block">
                    Hosted:
                  </label>
                  {edit && selectorProject === project._id ? (
                    <input
                      type="text"
                      name="hostedUrl"
                      id="hostedUrl"
                      value={newHostedUrl}
                      className="w-full bg-transparent outline-none"
                      onChange={(e) => setNewHostedUrl(e.target.value)}
                    />
                  ) : (
                    <a
                      href={project.hostedUrl}
                      className="text-blue-400 hover:underline"
                    >
                      {project.hostedUrl}
                    </a>
                  )}
                </div>
              </div>
              <div className="flex lg:flex-col justify-between items-center rounded-lg gap-3 px-3 lg:px-1 py-2 bg-indigo-500 bg-opacity-30">
                <MdEdit
                  className={`text-lg hover:scale-125  transition-all ease-in-out delay-100 cursor-pointer hover:text-red-500 ${
                    edit && selectorProject === project._id ? "hidden" : "block"
                  }`}
                  onClick={() => {
                    setEdit(!edit);
                    setSelectorProject(project._id);
                    setNewName(project.name);
                    setNewDesc(project.desc);
                    setNewGithubUrl(project.githubUrl);
                    setNewHostedUrl(project.hostedUrl);
                  }}
                />
                <TiTick
                  className={`text-lg hover:scale-125  transition-all ease-in-out delay-100 cursor-pointer hover:text-red-500 ${
                    edit && selectorProject === project._id ? "block" : "hidden"
                  }`}
                  onClick={() => updateProject(project._id, project.publicId)}
                />

                <MdDelete
                  className={`text-lg hover:scale-125  transition-all ease-in-out delay-100 cursor-pointer hover:text-red-500`}
                  onClick={() => deleteProject(project._id, project.publicId)}
                />
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default AllProjects;
