import {
  Avatar,
  Box,
  Button,
  Container,
  OutlinedInput,
  RadioGroup,
  Typography,
} from "@mui/material";
import img from "../assets/background.png";
import img2 from "../assets/backgroundSign.png";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import img3 from '../assets/facebookicon.png'
import img4 from '../assets/VectorA.png'
import img5 from '../assets/Ellipse 175.png'
import img6 from '../assets/fox 1.png'
import SocialButton from "../ui-components/SocialButton";
import { useNavigate } from 'react-router-dom';
import { useState } from "react";
import Web3 from "web3";
import { Web3ReactProvider } from "@web3-react/core";

import {
  LoginSocialGoogle,
  LoginSocialFacebook

} from 'reactjs-social-login'

const Signin = () => {
  const navigate = useNavigate();
  const [address, setAddress] = useState('')
  const handleSocialLogin = (user, err) => {
    console.log(user);
    navigate('/')
    console.log(err);
    localStorage.setItem('auth', true)
  };

  const handleSocialLoginFailure = (err) => {
    console.error(err);
  };

  const handleLogin = () => {

    navigate('/')
  }
  const handleSignup = () => {

    navigate('/signup')
  }

  //Meta

  const onPressConnect = async () => {
    console.log("connect");
    // setLoading(true);

    try {
      if (window?.ethereum?.isWalletConnect) {
        // Desktop browser
        const accounts = await window.ethereum.request({
          method: "eth_requestAccounts",
        });

        const account = Web3.utils.toChecksumAddress(accounts[0]);
        if (account) {
          navigate('/')
          localStorage.setItem('auth', true)
        }
        setAddress(account);
      }
    } catch (error) {
      console.log(error);
    }

    // setLoading(false);
  };



  return (

    <Box
      sx={{
        backgroundImage: `url(${img})`,
        height: "100vh",
        width: "100%",
        backgroundPosition: "center",
        backgroundSize: "cover",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Box
        sx={{
          backgroundImage: `url(${img2})`,
          width: "30%",
          height: "700px",
          borderRadius: "7px",
          //   background:'linear-gradient(0deg, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8))',
          mixBlendMode: "normal",
          backgroundPosition: "center",
          backgroundSize: "cover",
          // opacity:1
        }}
      >
        <Box
          sx={{

            padding: '10px',
          }}
        >
          <Box sx={{ mt: '60px' }}>
            <Typography
              sx={{
                fontWeight: 700,
                fontSize: "30px",
                color: "#ffffff",
                textShadow: "1px 2px 4px rgba(175, 175, 175, 0.18)",
                textAlign: "center",
              }}
            >
              BULID THE BEST
            </Typography>
            <Typography
              sx={{
                fontWeight: 700,
                fontSize: "30px",
                color: "#ffffff",
                textShadow: "1px 2px 4px rgba(175, 175, 175, 0.18)",
                textAlign: "center",
                lineHeight: "54px",
              }}
            >
              CRYPTO CASINO TOGETHER!
            </Typography>
          </Box>
          {/* input start box */}
          <Box>
            <Container maxWidth="xl" sx={{ width: "80%" }}>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  gap: 2,
                  mt: "30px",

                }}
              >
                <OutlinedInput
                  sx={{
                    border: "3px solid #7617EA",
                    backdropFilter: " blur(10px)",
                    borderRadius: "12px",
                    color: "#ffffff",
                    bgcolor: 'rgba(255, 255, 255, 0.2)'
                  }}
                  placeholder="Enter user name"
                ></OutlinedInput>
                <OutlinedInput
                  sx={{
                    border: "3px solid #7617EA",
                    backdropFilter: " blur(10px)",
                    borderRadius: "12px",
                    color: "#ffffff",
                    bgcolor: 'rgba(255, 255, 255, 0.2)',
                    mt: '20px'

                  }}
                  placeholder="password"
                ></OutlinedInput>
              </Box>
              <RadioGroup
                aria-labelledby="demo-controlled-radio-buttons-group"
                name="controlled-radio-buttons-group"
                sx={{ mt: '20px' }}
              // value={value}
              // onChange={handleChange}
              >
                <Typography sx={{ color: '#ffffff', fontSize: '14px', fontWeight: '300', ml: '60%', }}>Forgot Password?</Typography>

              </RadioGroup>
              {/* button group box */}
              <Box sx={{ mt: "30px", display: "flex", gap: 2 }}>
                <Button
                  sx={{
                    background: "#5842F4",
                    boxShadow: "0px 0px 6px #5F5F6F",
                    backdropFilter: "blur(10px)",
                    borderRadius: "68px",
                    width: "50%",
                    height: "60px",
                    color: "#ffffff",
                  }}
                  onClick={() => {
                    handleLogin()
                  }
                  }
                >
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      width: "100%",
                    }}

                  >
                    <Typography
                      sx={{
                        marginLeft: '10px'
                      }}
                    >Login</Typography>

                    <Avatar sx={{ bgcolor: "#ffffff" }}>
                      <ArrowForwardIcon
                        sx={{ color: "#7617EA" }}
                      ></ArrowForwardIcon>
                    </Avatar>
                  </Box>
                </Button>
                <Button
                  sx={{
                    background: "#31343C",
                    boxShadow: "0px 0px 6px #5F5F6F",
                    backdropFilter: "blur(10px)",
                    borderRadius: "68px",
                    width: "50%",
                    height: "60px",
                    color: "#ffffff",
                  }}
                  onClick={() => {
                    handleSignup()
                  }
                  }
                >
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      width: "100%",
                    }}
                  >
                    <Typography>Sign up</Typography>

                    <Avatar sx={{ background: "rgba(255, 255, 255, 0.2)" }}>
                      <ArrowForwardIcon
                        sx={{ color: "#ffffff" }}
                      ></ArrowForwardIcon>
                    </Avatar>
                  </Box>
                </Button>
              </Box>
            </Container>
            {/* last section */}
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexDirection: 'column',
                mt: '40px'

              }}
            >
              <Box>
                <Typography
                  sx={{
                    fontSize: "24px",
                    fontWeight: 400,
                    lineHeight: "60px",
                    textTransform: "uppercase",
                    color: '#ffffff',

                  }}
                >
                  Log in directly with:{" "}
                </Typography>
              </Box>
              <Box sx={{ display: 'flex', gap: 2 }}>
                <Box>
                  <Avatar sx={{ bgcolor: "#F44336" }}>
                    <LoginSocialGoogle
                      client_id={import.meta.env.VITE_APP_GOOGLE_CLIENT_ID}
                      buttonText="Login"
                      scope="https://www.googleapis.com/auth/userinfo.email"
                      onResolve={({ provider, data }) => {
                        handleSocialLogin(data)
                      }}
                      onReject={(err) => {
                        handleSocialLoginFailure(err)
                      }}
                      cookiePolicy={'single_host_origin'}

                    >G+</LoginSocialGoogle>

                  </Avatar>
                </Box>
                <Box>
                  <LoginSocialFacebook
                    appId={import.meta.env.VITE_APP_FB_APP_ID}
                    autoLoad={false}

                    onResolve={({ provider, data }) => {
                      handleSocialLogin(data)
                    }}
                    onReject={(err) => {
                      handleSocialLoginFailure(err)
                    }}>
                    <Avatar sx={{ bgcolor: "#039BE5" }}><Box sx={{ height: '25px' }}><img src={img3}></img></Box>
                    </Avatar>
                  </LoginSocialFacebook>
                </Box>
                <Box>


                  <Avatar sx={{ bgcolor: "#039BE5" }}><img src={img4}></img></Avatar>

                </Box>
                <Button onClick={() => onPressConnect()}>
                  <Box>
                    <Avatar sx={{ bgcolor: '#ffffff' }}>
                      <img
                        src={img6}
                        alt=""
                      />

                    </Avatar>
                  </Box>
                </Button>
                <Box>
                  <Avatar sx={{ bgcolor: "#ffffff" }}> <img src={img5}></img></Avatar>
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>

  );
};

export default Signin;

