import { useState , useEffect } from "react";
import Post from "../post/Post";
import "./posts.css";

export default function Posts() {
  
  let API = "http://localhost:3000/api/blog";
  let [apiData ,setApiData ]= useState([{image : "https://images.unsplash.com/photo-1607434472257-d9f8e57a643d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=872&q=80" , title: "loading" ,postDesc:"" }]);
  const fetchApiData = async ( url) => {
    try {
      const res = await fetch(url);
      const {data} = await res.json();
      setApiData(data.blogs);
      console.log(apiData);
    }
    catch(error){
    }
  };

  useEffect(() => {
    fetchApiData(API);
    console.log("render");
    console.log("useEffect" + apiData.message);
  },[]);
   
  return (
    <div className="posts">
      {
        apiData.map((apiData) => (
          <Post img={apiData.image}
          postTitle={apiData.title}
          postDesc = {apiData.desc}
          key={apiData._id}
          _id={apiData._id}
          />
        ))
      }
    </div>
  );


}
