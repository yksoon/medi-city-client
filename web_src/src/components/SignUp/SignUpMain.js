import React from "react";
// import { Link } from "react-router-dom";
// import { routerPath } from "webPath";

import Header from "components/Common/Header";

import "common/css/style/SignUp/SignUp.css";
import {
  Box,
  Button,
  TextField,
  Stack,
  Select,
  MenuItem,
  Checkbox,
} from "@mui/material";
import RadioButtonUncheckedIcon from "@mui/icons-material/RadioButtonUnchecked";
import RadioButtonCheckedIcon from "@mui/icons-material/RadioButtonChecked";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import CircleIcon from "@mui/icons-material/Circle";
import CheckCircleTwoToneIcon from "@mui/icons-material/CheckCircleTwoTone";
import CircleTwoToneIcon from "@mui/icons-material/CircleTwoTone";

function SignUpMain() {
  return (
    <>
      <Header />
      <div className="signup-content-wrapper">
        <div className="signup-title">
          <h3 class="title">회원가입</h3>
        </div>
      </div>
      <Box className="signup-content">
        <Box className="id-section">
          <Box>
            <h5>
              아이디 <span class="red">*</span>
            </h5>
          </Box>
          <Box className="section">
            <Box className="input-wrapper">
              <Stack direction="row" spacing={1} sx={{ width: "100%" }}>
                <TextField
                  size="normal"
                  fullWidth
                  InputProps={{ sx: { borderRadius: 2 } }}
                />
                <Button variant="outlined" sx={{ borderRadius: 2, width: 146 }}>
                  중복확인
                </Button>
              </Stack>
            </Box>
            <Box className="notice-wrapper">
              <p class="mark" id="mark_id">
                아이디는 이메일 형식으로 입력하세요
              </p>
            </Box>
          </Box>
        </Box>
        <Box className="pw-section" marginTop={5}>
          <Box className="input-wrapper">
            <Stack direction="row" spacing={1} sx={{ width: "100%" }}>
              <Box
                sx={{
                  width: "40%",
                }}
              >
                <h5>
                  비밀번호 <span class="red">*</span>
                </h5>
              </Box>
              <Box
                sx={{
                  width: "30%",
                }}
              >
                <h5>
                  비밀번호 확인 <span class="red">*</span>
                </h5>
              </Box>
            </Stack>
          </Box>
          <Box className="section">
            <Box className="input-wrapper">
              <Stack direction="row" spacing={1} sx={{ width: "100%" }}>
                <TextField
                  size="normal"
                  fullWidth
                  InputProps={{ sx: { borderRadius: 2 } }}
                  type="password"
                />
                <TextField
                  size="normal"
                  fullWidth
                  InputProps={{ sx: { borderRadius: 2 } }}
                  type="password"
                />
              </Stack>
            </Box>
            <Box className="notice-wrapper">
              <p class="mark" id="mark_id">
                비밀번호는 4-10자리로 입력해주세요
              </p>
            </Box>
          </Box>
        </Box>
        <Box className="name-section" marginTop={5}>
          <Box className="input-wrapper">
            <Stack direction="row" spacing={1} sx={{ width: "100%" }}>
              <Box
                sx={{
                  width: "40%",
                }}
              >
                <h5>
                  성명 (국문) <span class="red">*</span>
                </h5>
              </Box>
              <Box
                sx={{
                  width: "30%",
                }}
              >
                <h5>
                  성명 (영문) <span class="red">*</span>
                </h5>
              </Box>
            </Stack>
          </Box>
          <Box className="section">
            <Box className="input-wrapper">
              <Stack direction="row" spacing={1} sx={{ width: "100%" }}>
                <Stack direction="row" spacing={1} sx={{ width: "50%" }}>
                  <TextField
                    size="normal"
                    fullWidth
                    InputProps={{ sx: { borderRadius: 2 } }}
                    label="성"
                  />
                  <TextField
                    size="normal"
                    fullWidth
                    InputProps={{ sx: { borderRadius: 2 } }}
                    label="이름"
                  />
                </Stack>
                <Stack direction="row" spacing={1} sx={{ width: "50%" }}>
                  <TextField
                    size="normal"
                    fullWidth
                    InputProps={{ sx: { borderRadius: 2 } }}
                    label="First name"
                  />
                  <TextField
                    size="normal"
                    fullWidth
                    InputProps={{ sx: { borderRadius: 2 } }}
                    label="Last name"
                  />
                </Stack>
              </Stack>
            </Box>
            <Box className="notice-wrapper"></Box>
          </Box>
        </Box>
        <Box className="phone-section" marginTop={5}>
          <Box>
            <h5>
              휴대전화 <span class="red">*</span>
            </h5>
          </Box>
          <Box className="section">
            <Box className="input-wrapper">
              <Stack direction="row" spacing={1} sx={{ width: "100%" }}>
                <Stack direction="row" spacing={1} sx={{ width: "100%" }}>
                  <Select size="normal" fullWidth sx={{ borderRadius: 2 }}>
                    <MenuItem value={"+82"}>+82</MenuItem>
                  </Select>
                  <TextField
                    size="normal"
                    fullWidth
                    InputProps={{ sx: { borderRadius: 2 } }}
                  />
                  <TextField
                    size="normal"
                    fullWidth
                    InputProps={{ sx: { borderRadius: 2 } }}
                  />
                  <TextField
                    size="normal"
                    fullWidth
                    InputProps={{ sx: { borderRadius: 2 } }}
                  />
                </Stack>
                <Button variant="outlined" sx={{ borderRadius: 2, width: 146 }}>
                  인증번호
                </Button>
              </Stack>
            </Box>
            <Box className="notice-wrapper">
              <p class="mark" id="mark_id">
                휴대폰 인증을 진행해주세요.
              </p>
            </Box>
          </Box>
        </Box>
        <Box className="license-section" marginTop={5}>
          <Box>
            <h5>
              면허번호 <span class="red">*</span>
            </h5>
          </Box>
          <Box className="section">
            <Box className="input-wrapper">
              <Stack direction="row" spacing={1} sx={{ width: "100%" }}>
                <TextField
                  size="normal"
                  fullWidth
                  InputProps={{ sx: { borderRadius: 2 } }}
                />
              </Stack>
            </Box>
            <Box className="notice-wrapper"></Box>
          </Box>
        </Box>
        <Box className="affiliation-section" marginTop={5}>
          <Box className="input-wrapper">
            <Stack direction="row" spacing={1} sx={{ width: "100%" }}>
              <Box
                sx={{
                  width: "40%",
                }}
              >
                <h5>소속 기관</h5>
              </Box>
              <Box
                sx={{
                  width: "30%",
                }}
              >
                <h5>전공과</h5>
              </Box>
            </Stack>
          </Box>
          <Box className="section">
            <Box className="input-wrapper">
              <Stack direction="row" spacing={1} sx={{ width: "100%" }}>
                <TextField
                  size="normal"
                  fullWidth
                  InputProps={{ sx: { borderRadius: 2 } }}
                />
                <TextField
                  size="normal"
                  fullWidth
                  InputProps={{ sx: { borderRadius: 2 } }}
                />
              </Stack>
            </Box>
            <Box className="notice-wrapper"></Box>
          </Box>
        </Box>
        <Box className="terms-section" marginTop={5}>
          <Box>
            <h5>
              약관에 동의하겠습니까? <span class="red">*</span>
            </h5>
          </Box>
          <Box className="terms-box">
            <Box className="terms-box-section">
              <Box>
                <h6>
                  이용약관{" "}
                  <a href="term.html" class="font-12">
                    전문보기
                  </a>
                </h6>
              </Box>
              <Box>
                <Checkbox
                  size="large"
                  icon={<RadioButtonUncheckedIcon />}
                  checkedIcon={<CheckCircleIcon />}
                />
              </Box>
            </Box>
            <Box className="terms-box-section">
              <Box>
                <h6>
                  개인정보처리동의{" "}
                  <a href="privacy.html" class="font-12">
                    전문보기
                  </a>
                </h6>
              </Box>
              <Box>
                <Checkbox
                  size="large"
                  icon={<RadioButtonUncheckedIcon />}
                  checkedIcon={<CheckCircleIcon />}
                />
              </Box>
            </Box>
          </Box>
        </Box>
        <Box className="btn-section" marginTop={5}>
          <a href="sign_ok.html" class="mainbtn btn01">
            가입하기
          </a>
          <a href="index.html" class="mainbtn btn02">
            뒤로가기
          </a>
        </Box>
      </Box>
      {/* <div>
        <h1>회원가입</h1>
      </div>
      <div>
        <button>
          <Link to={routerPath.myPage_url}>테스트 버튼 마이페이지</Link>
        </button>
        <button>
          <Link to="/mypage">테스트 버튼2</Link>
        </button>
        <button>
          <Link to={routerPath.main_url}>테스트 버튼 홈</Link>
        </button>
      </div> */}
    </>
  );
}

export default SignUpMain;
