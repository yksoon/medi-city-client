import React, { useState } from "react";
import { Link } from "react-router-dom";
import { routerPath } from "webPath";
import {
  Button,
  Stack,
  TextField,
  Box,
  Drawer,
  List,
  Divider,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";

import "common/css/header.css";

function Header() {
  const [isOpen, setIsOpen] = useState({
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setIsOpen({ ...isOpen, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      sx={{ width: anchor === "top" || anchor === "bottom" ? "auto" : 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        {["Inbox", "Starred", "Send email", "Drafts"].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        {["All mail", "Trash", "Spam"].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );
  return (
    <>
      <div className="header_content">
        {/* 로고 */}
        <div className="logo-wrapper">
          <h1 className="logo">
            <Link to={routerPath.main_url}>
              <img src="/img/common/logo.png" alt="" />
            </Link>
          </h1>
        </div>

        {/* 컨텐츠 */}
        <div className="header-content-wrapper">
          <div className="login">
            <div className="login-field">
              <Stack direction="row" spacing={1}>
                <TextField
                  id="login_id"
                  label="ID"
                  variant="outlined"
                  type="email"
                  size="small"
                  InputProps={{ sx: { borderRadius: 10 } }}
                  InputLabelProps={{
                    sx: {
                      fontSize: 15,
                    },
                  }}
                />
                <TextField
                  id="login_password"
                  label="PASSWORD"
                  variant="outlined"
                  type="password"
                  size="small"
                  InputProps={{ sx: { borderRadius: 10 } }}
                  InputLabelProps={{
                    sx: {
                      fontSize: 15,
                    },
                  }}
                />
                <Button
                  variant="contained"
                  sx={{
                    borderRadius: 15,
                    width: 100,
                    backgroundColor: "#0047A0",
                    fontSize: 12,
                  }}
                >
                  LOGIN
                </Button>

                <Link to={routerPath.signup_url}>
                  <Button
                    variant="contained"
                    sx={{
                      borderRadius: 15,
                      width: 100,
                      backgroundColor: "#0047A0",
                      fontSize: 12,
                      height: "100%",
                    }}
                  >
                    SIGN UP
                  </Button>
                </Link>
                <Button
                  onClick={toggleDrawer("right", true)}
                  sx={{
                    color: "#818181",
                    padding: 0,
                  }}
                >
                  <MenuOutlinedIcon sx={{ fontSize: 35 }}></MenuOutlinedIcon>
                </Button>
                <a href="/" class="home">
                  <img src="/img/common/header_home.png" alt="" />
                </a>
              </Stack>
            </div>
            <Box
              sx={{
                display: "flex",
                justifyContent: "end",
                marginTop: "7px",
              }}
            >
              <a href="id_find_step1.html" class="login-problem font-12">
                로그인에 문제가 발생하였나요?
              </a>
            </Box>
          </div>
        </div>
        <Drawer
          anchor="right"
          open={isOpen["right"]}
          onClose={toggleDrawer("right", false)}
        >
          {list("right")}
        </Drawer>
      </div>
    </>
  );
}

export default Header;
