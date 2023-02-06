import {
  Avatar,
  Box,
  Button,
  Container,
  FormControlLabel,
  OutlinedInput,
  Radio,
  RadioGroup,
  Typography,
} from "@mui/material";
import { useParams } from "react-router-dom";
import img from "../assets/background.png";
import img2 from "../assets/backgroundSign.png";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import img3 from '../assets/Vector.png'
import img4 from '../assets/VectorA.png'
import img5 from '../assets/Ellipse 175.png'
import img6 from '../assets/fox 1.png'
import { useNavigate } from "react-router-dom";
import WalletConnect from "../ui-components/WalletConnect";
import {
  LoginSocialGoogle,
  LoginSocialFacebook

} from 'reactjs-social-login'
import ApiServices from "../services/ApiServices";
import url from "../constants/urls";
import { useEffect } from "react";
const Signup = () => {
  const { code } = useParams();
  const [input, setInput] = React.useState({
    email: '',
    password: '',
    referralCode:code?code:null
  })
  const navigate = useNavigate();

  const handleLogin = () => {

    navigate('/')
  }
  const handleSignup = () => {
    
    ApiServices.post(url.signup, input).then((res) => {
      localStorage.setItem('uid',res?.data?.data?.user?._id);
      localStorage.setItem('auth', true)

      navigate('/')
    })

    navigate('/signup')

  }
  const handleSocialLogin = (user, err) => {
    localStorage.setItem('auth', true)
    navigate('/')
    console.log(user);
    console.log(err);
  };

  const handleInput = (e) => {
    setInput({
      ...input,
      [e.target.name]: e.target.value
    })
  }

  return (
    <Box
      sx={{
        backgroundImage: `url(${img})`,
        minHeight: "100vh",
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
          width: { xs: "100%", sm: "100%", md: "70%", lg: "40%" },
          height: 'auto',
          margin: 'auto',
          padding: '20px',
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
                fontSize: { xs: "16px", sm: "18px", md: "30px", lg: "30px" },

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
                fontSize: { xs: "16px", sm: "18px", md: "30px", lg: "30px" },

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
                  onChange={(e) => handleInput(e)}
                  name="email"
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
                  onChange={(e) => handleInput(e)}
                  name="password"
                  type="password"
                  sx={{
                    border: "3px solid #7617EA",
                    backdropFilter: " blur(10px)",
                    borderRadius: "12px",
                    color: "#ffffff",
                    bgcolor: 'rgba(255, 255, 255, 0.2)'

                  }}
                  placeholder="password"
                ></OutlinedInput>
                {
                  code && ( 
                <OutlinedInput
                onChange={(e) => handleInput(e)}
                defaultValue={code}
                name="referralCode"
                sx={{
                  border: "3px solid #7617EA",
                  backdropFilter: " blur(10px)",
                  borderRadius: "12px",
                  color: "#ffffff",
                  bgcolor: 'rgba(255, 255, 255, 0.2)'
                }}
                placeholder="Enter Referral Code"
              ></OutlinedInput>
                  )
                }
              </Box>
              <RadioGroup
                aria-labelledby="demo-controlled-radio-buttons-group"
                name="controlled-radio-buttons-group"
                sx={{ mt: '20px' }}
              // value={value}
              // onChange={handleChange}
              >
                <FormControlLabel
                  value="female"
                  control={<Radio sx={{ color: '#ffffff' }} />}
                  sx={{ color: "#ffffff" }}
                  label="I agree with user agreement, and confirm that I am at least 18 years old!"
                />
                {/* <FormControlLabel value="male" control={<Radio />} label="Male" /> */}
              </RadioGroup>
              {/* button group box */}
              <Box sx={{ mt: "30px", display: "flex", gap: 2 }}>
                <Button
                  sx={{
                    background: "#5842F4",
                    boxShadow: "0px 0px 6px #5F5F6F",
                    backdropFilter: "blur(10px)",
                    borderRadius: "68px",
                    width: "100%",
                    height: "60px",
                    color: "#ffffff",
                  }}
                  onClick={handleLogin}
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
                        marginLeft: '12px'
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
                    width: "100%",
                    height: "60px",
                    color: "#ffffff",
                  }}
                  onClick={handleSignup}
                >
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      width: "100%",
                    }}
                  >
                    <Typography sx={{ marginLeft: '10px' }} >Sign up</Typography>

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

                <Box onClick={() => onPressConnect()}>
                  <Avatar sx={{ bgcolor: '#ffffff' }}>
                    <img
                      src={img6}
                      alt=""
                    />

                  </Avatar>

                </Box>
                <WalletConnect>
                  <Box>
                    <Avatar sx={{ bgcolor: "#ffffff" }}> <img src={img5}></img></Avatar>
                  </Box>
                </WalletConnect>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Signup;

