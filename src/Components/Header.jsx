import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";

function Header() {
  const aboutUscontent =
    "A resume builder helps users create professional resumes using templates, structured sections, and easy download options.";

  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar
          position="sticky"
          sx={{
            background: "rgba(16, 52, 135, 0.89)",
            backdropFilter: "blur(12px)",
            boxShadow: "0 4px 20px rgba(0,0,0,0.4)",
            borderBottom: "1px solid rgba(255,255,255,0.08)",
          }}
        >
          <Toolbar sx={{ py: 1 }}>
            {/* Logo */}
            <img
              src="https://cdn-icons-png.freepik.com/256/13411/13411106.png?semt=ais_white_label"
              alt="Resume Builder"
              style={{
                height: "45px",
                marginRight: "12px",
                borderRadius: "8px",
              }}
            />

            {/* Brand Name */}
            <Typography
              variant="h5"
              sx={{
                flexGrow: 1,
                fontWeight: "bold",
                letterSpacing: "1px",
                color: "#f8fafc",
              }}
            >
              Resume Builder
            </Typography>

            {/* About Button */}
            <Tooltip
              title={aboutUscontent}
              arrow
              componentsProps={{
                tooltip: {
                  sx: {
                    bgcolor: "#1e293b",
                    color: "#fff",
                    fontSize: "0.9rem",
                    maxWidth: 250,
                  },
                },
              }}
            >
              <Button
                sx={{
                  color: "#fff",
                  border: "1px solid #3b82f6",
                  borderRadius: "10px",
                  px: 3,
                  py: 1,
                  transition: "0.3s",
                  "&:hover": {
                    backgroundColor: "#3b82f6",
                    transform: "translateY(-2px)",
                  },
                }}
              >
                About Us
              </Button>
            </Tooltip>
          </Toolbar>
        </AppBar>
      </Box>
    </>
  );
}

export default Header;