// import { useState } from "react";
import vincent from "./vincent-trener1.png";
import jordan from "./jordan.png";
import adele from "./adele-trener.png";
import leo from "./leo-trener1.png";
import islandFloat from "./islandFloat.png";
import "./Mintrener.css";

export function TrainerAvatar({ setAvatar }) {
  const imageRoutes = [jordan, leo, adele, vincent];
  console.log("jordan variabel:", jordan);

  return (
    <div className="avatarPicture">
      {imageRoutes.map((route) => {
        return (
          <img
            key={route}
            onClick={() => setAvatar(route)}
            className="avatarPicture"
            src={route}
          />
        );
      })}
      <img
        src={islandFloat}
        alt="floatingIsland"
        className="trainer-ImagePlatform"
      ></img>
    </div>
  );
}
