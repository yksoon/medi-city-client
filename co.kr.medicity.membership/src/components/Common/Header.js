import React from "react";
import { Button, Stack, TextField } from "@mui/material";

import "common/css/header.css";

function Header() {
  return (
    <>
      <div className="header_content">
        {/* 로고 */}
        <div className="logo-wrapper">
          <h1 className="logo">
            <a href="">
              <img src="img/common/logo.png" alt="" />
            </a>
          </h1>
        </div>

        {/* 컨텐츠 */}
        <div className="header-content-wrapper">
          <div class="login">
            <div class="login-field">
              <Stack direction="row" spacing={2}>
                <TextField
                  id="login_id"
                  label="ID"
                  variant="outlined"
                  type="email"
                  size="small"
                />
                <TextField
                  id="login_password"
                  label="PASSWORD"
                  variant="outlined"
                  type="password"
                  size="small"
                />
                <Button variant="contained">LOGIN</Button>
                <Button variant="contained">SIGN UP</Button>
              </Stack>
            </div>
            <a href="id_find_step1.html" class="font-12">
              로그인에 문제가 발생하였나요?
            </a>
          </div>
          <nav id="menu" onclick="menu_show();">
            <div class="menu">
              <span></span>
              <span></span>
              <span></span>
            </div>
          </nav>
        </div>
      </div>
    </>
  );
}

export default Header;
