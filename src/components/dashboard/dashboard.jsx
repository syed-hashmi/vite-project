
import { useDispatch, useSelector } from "react-redux";
import "./dashboard.css"
import { Outlet, useNavigate } from "react-router";
import { clearUser } from "../../../util/createSlice.jsx";

import api from "../../api/axitInstance.js";
import { useContext, useEffect } from "react";
import {Navbar} from "../navbar/navbar.jsx";
 
export default function Dashboard() {

  let user = useSelector((state) => state.user);
  let navigate = useNavigate();
  useEffect(() => {
    if (!user) {
      const fetchData = async () => {
        try {
          let response = await api.get("/dashboard"); // Replace with your actual endpoint
          console.log("Fetched data:", response.data);
        } catch (error) {
          navigate("/login");
          console.error("Error fetching data:", error);
        }
      };

      fetchData();

    }

  }, []);
  return (
    <>
      <Navbar />
      <div className="background">
        <Outlet></Outlet>
      </div>
    </>
  );
}
