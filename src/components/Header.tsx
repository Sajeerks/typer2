import { AppBar, Toolbar, Typography } from '@mui/material'

import { Link } from 'react-router-dom'


const stylers={
  color:"white",
  margin:"0.5rem",
  textDecoration:"none"
}
const Header = () => {
  return (
  <AppBar position='static'>
    <Toolbar>
        <Typography variant='h5' mr={"auto"} textTransform={"uppercase"}>LearnDo .</Typography>
        <Link style={stylers} to={"/"}>HOme</Link>
        {/* <Link to={"/result"}>Result</Link>
        <Link to={"/quiz"}>quiz</Link> */}
        <Link  style={stylers} to={"/login"}>Login</Link>

    </Toolbar>
  </AppBar>
  )
}

export default Header