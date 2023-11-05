// import { useState } from "react";
import vincent from "../../assets/vincent-trener1.png";
import jordan from "../../assets/jordan.png";
import adele from "../../assets/adele-trener.png";
import leo from "../../assets/leo-trener1.png";
import islandFloat from "../../assets/islandFloat.png";
import "../styles/Mintrener.css";

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
