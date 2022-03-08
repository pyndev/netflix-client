import "./listitem.scss";
import {
  PlayArrow,
  Add,
  ThumbUpAltOutlined,
  ThumbDownOutlined,
} from "@material-ui/icons";
import { useEffect, useState } from "react";
import axios from "axios";

export default function ListItem({ index, item }) {
  const [isHovered, setIsHovered] = useState(false);
  const [movie, setMovie] = useState({});

  useEffect(()=>{
    const getMovie = async ()=>{
      try {
        const res = await axios.get("/movies/find/"+item, {
        headers: {
          token:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyMjZlNTAxNjc5MGJkNmIzY2JiMzkwNCIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY0NjczNjI4OCwiZXhwIjoxNjQ3MTY4Mjg4fQ.uYTK2VbnfrJ1c5t1KkUa7UX3S60HZ8iw4a1JTsf_lcY",
          // "Bearer "+JSON.parse(localStorage.getItem("user")).accessToken,
        },
        });
        setMovie(res.data);
      } catch (error) {
        console.log(error)
      }
    };
    getMovie()
  },[item]);

  return (
    <div
      className="listItem"
      style={{ left: isHovered && index * 225 - 50 + index * 2.5 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <img
        src={movie.img}
        alt=""
      />
      {isHovered && (
        <>
          <video src={movie.trailer} autoPlay={true} loop muted/>
          <div className="itemInfo">
            <div className="icons">
              <PlayArrow className="icon" />
              <Add className="icon" />
              <ThumbUpAltOutlined className="icon" />
              <ThumbDownOutlined className="icon" />
            </div>
            <div className="itemInfoTop">
              <span>{movie.duration}</span>
              <span className="limit">{movie.limit}</span>
              <span>{movie.year}</span>
            </div>
            <div className="desc">
                 {movie.desc}
            </div>
            <div className="genre">{movie.genre}</div>
          </div>
        </>
      )}
    </div>
  );
}