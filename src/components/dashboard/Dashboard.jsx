
import { useDispatch, useSelector } from "react-redux";
import "./Dashboard.css"
import { Outlet, useNavigate } from "react-router";
import { clearUser } from "../../../util/createSlice.jsx";

import api from "../../api/axitInstance.js";
import navbar from "../navbar/navbar.js";
import { useContext, useEffect } from "react";
import {myValue} from '../../main.jsx';

export default function Dashboard() {

  let pp = useContext(myValue);
  let user = useSelector((state) => state.user);
  let navigate = useNavigate();
  useEffect(() => {
    debugger;
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
      <div>{pp}</div>
      <div className="background">
        <div>This is dashboard</div>
        <br></br>
        <Outlet></Outlet>
      </div>
    </>
  );
}
