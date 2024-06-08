import React from "react";
import AdminNavbar from "./components/AdminNavbar";
import { GiHamburgerMenu } from "react-icons/gi";
import { useSelector, useDispatch } from "react-redux";
import { toggle } from "../../redux/slices/NavSlice";
import CreateSkill from "./components/CreateSkill";
import CreateProject from "./components/CreateProject";
import AllProjects from "./components/AllProjects";
import AllSkills from "./components/AllSkills";

const AdminDashboard = () => {
  const dispatch = useDispatch();
  const toggleNavbar = useSelector((state) => state.nav.toggleNavbar);
  const page= useSelector((state) => state.page.page);
  return (
    <div>
      <AdminNavbar />
      <GiHamburgerMenu
        className={`fixed text-xl text-white top5 right-5 z-10 cursor-pointer lg:hidden  ${
          toggleNavbar ? "hidden z-0" : "block"
        } `}
        onClick={() => dispatch(toggle())}
      />
      <div className="w-full h-screen   ">
        {(() => {
          switch (page) {
            case "CreateSkill":
              return <CreateSkill />;
            case "CreateProject":
              return <CreateProject />;
            case "AllProjects":
              return <AllProjects />;
            case "AllSkills":
              return <AllSkills />;

            default:
              return <CreateProject />;
          }
        })()}
      </div>
    </div>
  );
};

export default AdminDashboard;
