import React from "react";

import ListStudentsController from "../components/ListStudents/ListStudentsController";
import { Link } from "react-router-dom";
import ListStudents2 from "../components/ListStudents2/ListStudents2";

const Home=()=>{
    return(
        <div>
            <Link to={"/add-student"}>Öğrenci Ekle</Link>
            {/* <ListStudentsController /> */}
            <ListStudents2 />
        </div>
    )
}

export default Home