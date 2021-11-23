import React from "react"
import { Container } from "react-bootstrap"

const AUTH_URL =
  "https://accounts.spotify.com/authorize?client_id=debf6540ddc74edfabe88fa07b71ed37&redirect_uri=http://localhost:3000/&scope=streaming%20user-read-email%20user-read-private%20user-library-read%20user-library-modify%20user-read-playback-state%20user-modify-playback-state%20user-read-currently-playing%20user-read-recently-played%20user-read-playback-state%20user-top-read%20user-modify-playback-state&response_type=code"

export default function Login() {
  return (
    <Container
      className="d-flex justify-content-center align-items-center"
      style={{ minHeight: "100vh" }}
    >
      <a className="btn btn-success btn-lg" href={AUTH_URL}>
        Login With Spotify
      </a>
    </Container>
  )
}
