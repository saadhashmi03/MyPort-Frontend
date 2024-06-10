import {useState} from "react";
import axios from  "axios"



const CreateSkill = () => {

  const [skill, setSkill]=useState("")
  const [level,setLevel]=useState(0);
  // const [selectedImg, setSelectImg] = useState("");

  // const handleImg = (e) => {
  //   const file = e.target.files[0];
  //   setSelectImg(file);
  //   // console.log(file);
  // };


  const addSkill = async(e)=>{
    e.preventDefault();
    if(skill==="" || level===0){
      alert("Please fill all the fields")
      return ;   // exit the function to avoid making the api call 

    }
    if(level>=1 && level <=5){
      try {
        // const uploadedImg = await uploadImage(selectedImg);

        // if (!uploadedImg) {
        //   return console.log("image not uploaded");
        // }
        const res = await axios.post('https://myportapi.onrender.com/api/addSkill',{
          skill,
          level,
          // secureUrl: uploadedImg.secureUrl,
        });

        console.log(res.data);
        alert(res.data.msg)
        setSkill("");
        setLevel(0);
        // setSelectImg('');
        
      } catch (error) {
        console.log(error);
      }
      
    }else {
      alert("Level should be between 1 and 5")
    }

    


  }

  return (
    <div className="p-4 backdrop-blur-3xl rounded-md w-full lg:w-fit mx-auto ">
      <h1 className="text-3xl lg:text-5xl text-white my-5">Create Skill</h1>
      <form className="flex flex-col gap-3" onSubmit={addSkill}>
      {/* <img
                src={skill.img}
                alt={skill.name}
                className="w-full lg:w-1/4 max-h-48 rounded-lg object-cover"
              />
              <input
                type="file"
                name="img"
                id="img"
                accept="img"
                
                // className={`${edit ? "block" : "hidden"} `}
                onChange={handleImg}
              /> */}
        <input
          type="text"
          name="skill"
          id="skill"
          placeholder="enter new skill"
          required
          onChange={(e)=>{setSkill(e.target.value)}}
          value={skill}
          className="bg-transparent px-3 py-2 border rounded-full w-full lg:w-[40vw] font-bold text-xl gradient-text "
        />
        <input
          type="tel"
          name="level"
          id="level"
          placeholder="not more than 5 "
          className="bg-transparent px-3 py-2 border rounded-full w-full lg:w-[40vw] font-bold text-xl gradient-text "
          onChange={(e)=>{setLevel(e.target.value)}}
          value={level}
          
          required
        />
        <button className="bg-purple-500 px-3 py-2 border rounded-full mx-auto w-[40vw] lg:w-[10vw] text-xl " type="submit">
          Add Skill
        </button>
      </form>
    </div>
  );
};

export default CreateSkill;
