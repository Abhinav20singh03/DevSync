import { useEffect, useState } from "react";
import "./Home.css"; // Import CSS file
import {v4 as uuidV4} from "uuid";
import devsynclogo from "../assets/DevSync_logo_cyan_text.png"
export default function Home() {
  const [roomId,setRoomId] =  useState("");
  const [username,setUsername] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:",roomId,username);
  };

  const createRoomListener = (event)=>{
    const id = uuidV4();
    console.log(id);
    setRoomId(id);
  }

  return (
    <div className="container">
      <div className="card">
        <div className="cardHeader">
          <div className="imageContainer">
            <img 
              src={devsynclogo}
              alt="Code sync"
              className="image"
            />
          </div>
        </div>
        <div className="cardContent">
          <form onSubmit={handleSubmit} className="form">
            <div className="inputContainer">
              <input
                type="text"
                id="roomId"
                placeholder="ROOM ID"
                value={roomId}
                onChange={(e) =>
                  setRoomId(e.target.value)
                }
                className="input"
              />
            </div>
            <div className="inputContainer">
              <input
                type="text"
                id="username"
                placeholder="USERNAME"
                value={username}
                onChange={(e) =>
                 setUsername(e.target.value)
                }
                className="input"
              />
            </div>
            <button type="submit" className="button">
              Join
            </button>
            <p className="text">
              If you don't have an invite, create{" "}
              <a onClick={createRoomListener} className="link">
                a new room
              </a>
            </p>
          </form>

        </div>
      </div>
    </div>
  );
}
