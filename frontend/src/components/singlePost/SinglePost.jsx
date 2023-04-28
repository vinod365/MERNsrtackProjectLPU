import { useState , useEffect } from "react";
import { Link } from "react-router-dom";
import "./singlePost.css";

import { useParams } from 'react-router-dom';

export default function SinglePost(props) {

  const params = useParams();
  console.log(params);
 
  let API = `http://localhost:3000/api/blog/${params.id}`;
  let [apiData ,setApiData ]= useState({image : "htp.com" , title: "fjakfd" ,postDesc:"http://dog.ceo"});

  const fetchApiData = async ( url) => {
    try {
      const res = await fetch(url);
      const {data} = await res.json();
      setApiData(data.blog);
    }
    catch(error){
    }
  };
  
  useEffect(() => {
    fetchApiData(API);
  },[]);

  return (
    <div className="singlePost">
      <div className="singlePostWrapper">
        <img
          className="singlePostImg"
          src= {apiData.image}
          alt=""
        />
        <h1 className="singlePostTitle">
          {apiData.title}
          <div className="singlePostEdit">
          </div>
        </h1>
        <div className="singlePostInfo">
          <span>
            Author:
            <b className="singlePostAuthor">
              <Link className="link" to="/posts?username=Safak">
                Vinod
              </Link>
            </b>
          </span>
          <span>2 day ago</span>
        </div>
        <p className="singlePostDesc">
         {apiData.desc}
          <br />
          <br />
          After many explorations, the individual who established the framework for artificial insight was the dad of AI, John McCarthy, an American researcher. In 1956, he composed a gathering “The Dartmouth Summer Research Project on Artificial Intelligence” to additionally build up the field of AI. In which each one of those individuals who were keen on machine insight could take part. The motivation behind this gathering was to draw in the ability and mastery of intrigued individuals to assist McCarthy regarding this errand.In later years the AI ​​Research Center was framed at Carnegie Mellon University just as the Massachusetts Institute of Technology. Alongside this, AI additionally confronted many difficulties. The primary test they confronted was to manufacture a framework that could take care of an issue productively with almost no exploration. The subsequent test is building a framework that can get familiar with an errand with no one else. The principal forward leap in man-made consciousness came when a Novel program called General Problem Solver (G.P.S) was made by Newell and Simon in 1957. 
          <br />
          <br />
          Computerized reasoning advantages scientists in financial aspects and law, yet additionally in specialized teaching, for example, authenticity, security, check, and control. 

      A few instances of innovation, for example, administration help decrease ailment and deprivation, making AI the most significant and most prominent creation in humanity’s history
        </p>
      </div>
    </div>
  );
}
