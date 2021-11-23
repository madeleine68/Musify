import { Avatar } from "@material-ui/core"
import useAuth from "./useAuth"
import Header from "./Header"

  

export default function Library({ accessToken }) {
 

    return(
        <div>
            <Header accessToken={accessToken} />
            <h1> User Library</h1>
           
      </div>
    )
}