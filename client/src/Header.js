import React, { useEffect, useContext, useState } from "react";
import { Avatar } from "@material-ui/core";
import SpotifyWebApi from "spotify-web-api-node";
import useAuth from "./useAuth";



const spotifyApi = new SpotifyWebApi({
    clientId: "debf6540ddc74edfabe88fa07b71ed37",
  })

function Header({ accessToken }) {

    
    const [user, setUser] = useState({
      display_name: "",
      images: [],
    });
  
    // * This will set the accessToken to the spotify api
    useEffect(() => {
      if (!accessToken) return;
  
      spotifyApi.setAccessToken(accessToken);
  
      //Get user details with help of accessToken  
      spotifyApi.getMe().then(data => {
        // console.log(data);
        setUser(data.body)
      })
    }, [accessToken]);

  
    return (
      <div >
       
          <Avatar src={user?.images[0]?.url} alt={user?.display_name} />
          <h4>{user?.display_name}</h4>
        
      </div>
    );
  }
  
  export default Header;