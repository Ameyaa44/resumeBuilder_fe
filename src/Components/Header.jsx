import React from 'react'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';

function Header() {
    const aboutUscontent="A resume builder is a tool that helps users create professional resumes quickly using templates, structured sections, automatic formatting, and easy download options."
  return (
    <>
        <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" style={{backgroundColor:'#033083f7'}}> 
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <img src="https://cdn-icons-png.freepik.com/256/13411/13411106.png?semt=ais_white_label" alt="Icon" style={{height:'50px'}}/>
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Resume Builder
          </Typography>
          <Tooltip title={aboutUscontent}>
          <Button color="inherit">AboutUs</Button>
          </Tooltip>
        </Toolbar>
      </AppBar>
    </Box>
    </>
  )
}

export default Header