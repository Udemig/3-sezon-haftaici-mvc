import axios from "axios";
import React,{useState,useEffect} from "react";
import ListStudentsView from "./ListStudentsView";

const ListStudentsController = ()=>{
    const [students,setStudents]=useState(null)
    useEffect(()=>{
        axios.get("http://localhost:3004/students")
        .then(res=>setStudents(res.data))
    },[])
    if (!students) return null
    return <ListStudentsView students={students} />
}
export default ListStudentsController