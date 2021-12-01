import React, { useEffect, useState } from "react";
import { Avatar } from "@material-ui/core";
import { Container, Navbar } from "react-bootstrap"


function Header({ accessToken, spotifyApi }) {
  
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
      <Navbar className="me-auto" bg="light" >
          <Container >  
           <Navbar.Brand className="d-flex justify-content-right align-items-center" >
                <Avatar src={user?.images[0]?.url} alt={user?.display_name} />
                <br/>
                <h5 style={{padding: "20px"}}>{user?.display_name}</h5>
            </Navbar.Brand>
          </Container>
          
      </Navbar>
    );
  }
  
  export default Header;