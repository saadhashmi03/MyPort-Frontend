import { useState } from "react";
import { uploadImage } from "../../../helpers/uploadImage";
import axios from "axios";

const CreateProject = () => {
  const [name, setName] = useState("");
  const [desc, setDesc] = useState("");
  const [selectImg, setSelectImg] = useState("");
  const [githubUrl, setGithubUrl] = useState("");
  const [hostedUrl, setHostedUrl] = useState("");
  const handleImg = (e) => {
    const file = e.target.files[0];
    setSelectImg(file);
    // console.log(file);
  };
  const addProject = async (e) => {
    e.preventDefault();

    if (!name || !desc || !selectImg) {
      return console.log("please fill all the required fields");
    }
    
    try {
      const uploadedImg = await uploadImage(selectImg);

      if (!uploadedImg) {
        return console.log("image not uploaded");
      }
      const res = await axios.post("http://localhost:5000/api/addProject", {
        name,
        desc,
        githubUrl,
        hostedUrl,
        secureUrl: uploadedImg.secureUrl,
        public_id: uploadedImg.publicId, // Changed publicId to public_id
        deleteToken: uploadedImg.deleteToken,
      });
      alert(res.data.msg);
      setName('');
      setDesc('');
      setSelectImg('');
      setGithubUrl('');
      setHostedUrl('');
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className=" p-3 backdrop-blur-3xl rounded-md w-fit mx-auto  ">
      <h1 className="text-3xl lg:text-5xl text-white mb-5">Create Project</h1>
      <form className="flex flex-col gap-3 " onSubmit={addProject}>
        <input
          type="text"
          name="name"
          id="name"
          placeholder=" project name"
          required
          onChange={(e) => setName(e.target.value)}
          value={name}
          className=" bg-transparent px-3 py-2 border rounded-full w-full lg:w-[40vw] font-bold text-xl gradient-text "
        />
        <textarea
          name="desc"
          id="desc"
          cols="30"
          rows="8"
          placeholder="project description"
          required
          onChange={(e) => setDesc(e.target.value)}
          value={desc}
          className=" bg-transparent px-3 py-2 border rounded-lg w-full lg:w-[40vw] font-bold text-xl gradient-text  "
        ></textarea>
        <div>
          <label htmlFor="img" className="text-white  text-xl gradient-text ">
            {" "}
            Project Image :
          </label>
          <input
            type="file"
            name="img"
            id="img"
            accept="image"
            onChange={handleImg}
            required
          />
        </div>

        <input
          type="url"
          name="githubUrl"
          id="githubUrl"
          placeholder="github Url"
          onChange={(e) => setGithubUrl(e.target.value)}
          value={githubUrl}
          className=" bg-transparent px-3 py-2 border rounded-full w-full lg:w-[40vw] font-bold text-xl gradient-text "
        />
        <input
          type="url"
          name="hostedUrl"
          id="hostedUrl"
          placeholder="hosted Url"
          onChange={(e) => setHostedUrl(e.target.value)}
          value={hostedUrl}
          className=" bg-transparent px-3 py-2 border rounded-full w-full lg:w-[40vw] font-bold text-xl gradient-text "
        />
        <button
          type="submit"
          className="bg-purple-500 px-2 py-2 border rounded-full mx-auto w-[40vw lg:w-[10vw]  font-bold text-xl  "
        >
          Add Project
        </button>
      </form>
    </div>
  );
};

export default CreateProject;
