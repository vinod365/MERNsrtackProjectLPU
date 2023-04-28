import { Link } from "react-router-dom";
import "./post.css";

export default function Post({img,postDesc, postTitle,id}) {
  return (
    <div className="post">
      <img
        className="postImg"
        src={img}
        alt=""
      />
      <div className="postInfo">
        <div className="postCats">
          <span className="postCat">
            <Link className="link" to="/posts?cat=Music">
              Computer
            </Link>
          </span>
          <span className="postCat">
            <Link className="link" to="/posts?cat=Music">
              Science
            </Link>
          </span>
        </div>
        <span className="postTitle">
          <Link to="/post/abc" textvalue="hello" className="link">
          {postTitle}
          </Link>
        </span>
        <hr />
        <span className="postDate">1 hour ago</span>
      </div>
      <p className="postDesc">
        {postDesc}
      </p>
    </div>
  );
}
