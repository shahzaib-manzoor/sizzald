import { Typography, Box, IconButton } from "@mui/material";
import CustomCard from "../ui-components/CustomCard";
import Lobby from "../ui-components/Lobby";
import CustomCardTwo from "../ui-components/CustomCardTwo";
import SecondBar from "../ui-components/SecondBar/SecondBar";
import CustomCarousal from "../ui-components/CustomCarousal";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import questionMark from "../assets/question-mark-circle.png";
import Keno from ".././assets/keno.svg" 
import videoPoker from ".././assets/videoPoker.svg"
import Baccarat from ".././assets/baccarat.svg"
import hillo from "../assets/hillo.svg"
import blackJack from ".././assets/blackJack.svg"
import crash from ".././assets/crash.svg"
import limbo from ".././assets/limbo.svg"
import wheel from ".././assets/wheel.svg"
import ultimateDice from ".././assets/ultimateDice.svg";
import ringOfFortune from "../assets/ringOfFortune.svg"
import kenoMultiplayer from ".././assets/kenoMultiplayer.svg"
import caveOfPlunder from "./../assets/caveOfPlunder.svg"
import coinFlip from "./../assets/coinFlip.svg"
import plinko from "./../assets/plinko.svg"  
import mine from "./../assets/mine.svg"
import towerOfLegend from "./../assets/towerOfLegend.svg"
import { Avatar } from "@mui/material";

import avator from ".././assets/avator.png";

import customCard1 from ".././assets/customCard1.svg";
import customCard2 from ".././assets/customCard2.svg";
import customCard3 from ".././assets/customCard3.svg";
import customCard4 from ".././assets/customCard4.svg";
import CustomCardThree from "../ui-components/CustomCardThree";

import gameProvider1 from "../assets/gameProvider1.png";
import gameProvider2 from "../assets/gameProvider2.png";
import gameProvider3 from "../assets/gameProvider3.png";
import gameProvider4 from "../assets/gameProvider4.png";
import gameProvider5 from "../assets/gameProvider5.png";
import gameProvider6 from "../assets/gameProvider6.png";
import Network from "../ui-components/Network";
import DetailedCard from "../ui-components/DetailCard/index";

// import { getLocalIPs } from "../utils/getIp";
// import RecentBigWin from "./Dashboard/RecentBigWin";

export default function Dashboard() {
  const slider = React.useRef(null);
  const sliderTwo = React.useRef(null);
  const sliderThree = React.useRef(null);
  const sliderFour = React.useRef(null);
  const sliderFive = React.useRef(null);
  const sliderSix = React.useRef(null);
  const sliderSeven = React.useRef(null);

   
  var settingCardOne = {
    slidesToShow: 5,

    responsive: [
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 1000,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 1600,
        settings: {
          slidesToShow: 3,
        },
      },{
        breakpoint: 2000,
        settings: {
          slidesToShow: 4,
        },
      },
      
     
    ],
  };
  var settingCardTwo = {
    slidesToShow: 6,

    responsive: [
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 1000,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 1600,
        settings: {
          slidesToShow: 5,
        },
      },
      
     
    ],
  };
  var settingCardThree = {
    slidesToShow: 6,
    rows: 2,
    slidesPerRow: 1,
    responsive: [
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 1000,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 1600,
        settings: {
          slidesToShow: 5,
        },
      },
      
     
    ],
   
  };
  var settingCardFour = {
    slidesToShow: 6,
    rows: 2,
    slidesPerRow: 1,

    responsive: [
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 1000,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 1600,
        settings: {
          slidesToShow: 5,
        },
      },
      
     
    ],
  };
  var settingCardFive = {
    slidesToShow: 6,
    slidesPerRow: 1,

    responsive: [
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 1000,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 1600,
        settings: {
          slidesToShow: 5,
        },
      },
      
     
    ],
   
  };

  return (
    <section style={{padding:"0px 20px"}}>
      <Box
        sx={{
          textAlign: "right",
          padding: { xs: "12px 8px", lg: "12px 8px" },
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <Typography
          sx={{
            fontSize: { xs: "14px", lg: "17px" },
            fontFamily: "Poppins",
            fontWeight: "700",
            lineHeight: "40px",
            letterSpacing: "1px",
            textAlign: "left",
            color: "#ffffff",
            textTransform: "uppercase",
          }}
        >
          PROMOTIONS
        </Typography>
        <Box>
          <IconButton
            hover={{ background: "#FFFFFF33" }}
            sx={{
              color: "#ffffff",
              marginRight: "15px",
              background: "#FFFFFF33",
              height: { sx: "30px", lg: "35px" },
              width: { sx: "30px", lg: "35px" },
            }}
            onClick={() => slider?.current?.slickPrev()}
          >
            <KeyboardBackspaceIcon
              sx={{ fontSize: { xs: "16px", lg: "19px" } }}
            />
          </IconButton>
          <IconButton
            sx={{
              color: "#ffffff",
              background: "#FFFFFF33",
              height: { sx: "35px", lg: "35px" },
              width: { sx: "35px", lg: "35px" },
            }}
            onClick={() => slider?.current?.slickNext()}
          >
            <ArrowRightAltIcon sx={{ fontSize: { xs: "16px", lg: "19px" } }} />
          </IconButton>
        </Box>
      </Box>
      <CustomCarousal
        sx={{ padding: "10px 35px" }}
        carousalRef={slider}
        settingCard={settingCardOne}
      >
        <CustomCard
          teamOne="Red Bull"
          vs="vs"
          teamTwo="Green Bull"
          img={customCard1}
          warIsOn="WAR IS ON"
        />
        <CustomCard
          teamOne="Red Bull"
          vs="vs"
          teamTwo="Green Bull"
          img={customCard2}
          warIsOn="WAR IS ON"
        />
        <CustomCard
          teamOne="Red Bull"
          vs="vs"
          teamTwo="Green Bull"
          img={customCard3}
          warIsOn="WAR IS ON"
        />
        <CustomCard
          teamOne="Red Bull"
          vs="vs"
          teamTwo="Green Bull"
          img={customCard4}
          warIsOn="WAR IS ON"
        />
        <CustomCard
          teamOne="Red Bull"
          vs="vs"
          teamTwo="Green Bull"
          img={customCard1}
          warIsOn="WAR IS ON"
        />
        <CustomCard
          teamOne="Red Bull"
          vs="vs"
          teamTwo="Green Bull"
          img={customCard2}
          warIsOn="WAR IS ON"
        />
        <CustomCard
          teamOne="Red Bull"
          vs="vs"
          teamTwo="Green Bull"
          img={customCard3}
          warIsOn="WAR IS ON"
        />
      </CustomCarousal>
      <Box
        sx={{
          marginTop:"20px",
                    textAlign: "right",
          padding: { xs: "10px 8px", lg: "10px 8px" },
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <Typography
          sx={{
            fontSize: { xs: "14px", lg: "17px" },
            fontWeight: "700",
            lineHeight: "40px",
            letterSpacing: "1px",
            textAlign: "left",
            color: "#ffffff",
            textTransform: "uppercase",
            fontFamily: "Poppins",
          }}
        >
          Recent Big Wins
        </Typography>
        <Box>
          <IconButton
            hover={{ background: "#FFFFFF33" }}
            sx={{
              color: "#ffffff",
              marginRight: "15px",
              background: "#FFFFFF33",
              height: { sx: "30px", lg: "35px" },
              width: { sx: "30px", lg: "35px" },
            }}
            onClick={() => sliderTwo?.current?.slickPrev()}
          >
            <KeyboardBackspaceIcon
              sx={{ fontSize: { xs: "16px", lg: "19px" } }}
            />
          </IconButton>
          <IconButton
            sx={{
              color: "#ffffff",
              background: "#FFFFFF33",
              height: { sx: "30px", lg: "35px" },
              width: { sx: "30px", lg: "35px" },
            }}
            onClick={() => sliderTwo?.current?.slickNext()}
          >
            <ArrowRightAltIcon sx={{ fontSize: { xs: "16px", lg: "19px" } }} />
          </IconButton>
        </Box>
      </Box>
      <CustomCarousal
        sx={{ padding: "10px 35px" }}
        carousalRef={sliderTwo}
        settingCard={settingCardTwo}
      >
         <CustomCardTwo
          name="Classic Dice"
          balance="$ 5346362"
          img={coinFlip}
          icon={
            <img style={{ height: "26px", width: "26px" }} src={questionMark} />
          }
          avator = {<Avatar
            sx={{
              height: { xs: "26px", lg: "28px" },
              width: { xs: "26px", lg: "28px" },
              marginRight: "4px",
              marginLeft: { lg: "3px", xl: "7px" },
            }}
            alt="Cindy Baker"
            src={avator}
          />}
        />
        <CustomCardTwo
          name="Classic Dice"
          balance="$ 5346362"
          img={plinko}
          icon={
            <img style={{ height: "26px", width: "26px" }} src={questionMark} />
          }
          avator = {<Avatar
            sx={{
              height: { xs: "26px", lg: "28px" },
              width: { xs: "26px", lg: "28px" },
              marginRight: "4px",
              marginLeft: { lg: "3px", xl: "7px" },
            }}
            alt="Cindy Baker"
            src={avator}
          />}
        />
        <CustomCardTwo
          name="Classic Dice"
          balance="$ 5346362"
          img={mine}
          icon={
            <img style={{ height: "26px", width: "26px" }} src={questionMark} />
          }
          avator = {<Avatar
            sx={{
              height: { xs: "26px", lg: "28px" },
              width: { xs: "26px", lg: "28px" },
              marginRight: "4px",
              marginLeft: { lg: "3px", xl: "7px" },
            }}
            alt="Cindy Baker"
            src={avator}
          />}
        />
        <CustomCardTwo
          name="Classic Dice"
          balance="$ 5346362"
          img={towerOfLegend}
          icon={
            <img style={{ height: "26px", width: "26px" }} src={questionMark} />
          }
          avator = {<Avatar
            sx={{
              height: { xs: "26px", lg: "28px" },
              width: { xs: "26px", lg: "28px" },
              marginRight: "4px",
              marginLeft: { lg: "3px", xl: "7px" },
            }}
            alt="Cindy Baker"
            src={avator}
          />}
        />
         <CustomCardTwo
          name="Classic Dice"
          balance="$ 5346362"
          img={blackJack}
          icon={
            <img style={{ height: "26px", width: "26px" }} src={questionMark} />
          }
          avator = {<Avatar
            sx={{
              height: { xs: "26px", lg: "28px" },
              width: { xs: "26px", lg: "28px" },
              marginRight: "4px",
              marginLeft: { lg: "3px", xl: "7px" },
            }}
            alt="Cindy Baker"
            src={avator}
          />}
        />
        <CustomCardTwo
          name="Classic Dice"
          balance="$ 5346362"
          img={crash}
          icon={
            <img style={{ height: "26px", width: "26px" }} src={questionMark} />
          }
          avator = {<Avatar
            sx={{
              height: { xs: "26px", lg: "28px" },
              width: { xs: "26px", lg: "28px" },
              marginRight: "4px",
              marginLeft: { lg: "3px", xl: "7px" },
            }}
            alt="Cindy Baker"
            src={avator}
          />}
        />
        <CustomCardTwo
          name="Classic Dice"
          balance="$ 5346362"
          img={limbo}
          icon={
            <img style={{ height: "26px", width: "26px" }} src={questionMark} />
          }
          avator = {<Avatar
            sx={{
              height: { xs: "26px", lg: "28px" },
              width: { xs: "26px", lg: "28px" },
              marginRight: "4px",
              marginLeft: { lg: "3px", xl: "7px" },
            }}
            alt="Cindy Baker"
            src={avator}
          />}
        />
        <CustomCardTwo
          name="Classic Dice"
          balance="$ 5346362"
          img={wheel}
          icon={
            <img style={{ height: "26px", width: "26px" }} src={questionMark} />
          }
          avator = {<Avatar
            sx={{
              height: { xs: "26px", lg: "28px" },
              width: { xs: "26px", lg: "28px" },
              marginRight: "4px",
              marginLeft: { lg: "3px", xl: "7px" },
            }}
            alt="Cindy Baker"
            src={avator}
          />}
        />
      </CustomCarousal>
      <Box sx={{ marginTop:"5px",}} >
        <Typography
          sx={{
           
            fontSize: { xs: "14px", lg: "17px" },
            fontFamily: "Poppins",
            fontWeight: "700",
            lineHeight: "40px",
            letterSpacing: "1px",
            textAlign: "left",
            color: "#ffffff",
            textTransform: "uppercase",
            padding: { xs: "10px 8px", lg: "10px 8px" },
          }}
        >
          Casino
        </Typography>
        <SecondBar />
      </Box>
      <Box
        sx={{
         
          textAlign: "right",
          padding: { xs: "10px 8px", lg: "10px 8px" },
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <Typography
          sx={{
            fontSize: { xs: "14px", lg: "17px" },
            fontFamily: "Poppins",
            fontWeight: "700",
            lineHeight: "40px",
            letterSpacing: "1px",
            textAlign: "left",
            color: "#ffffff",
            textTransform: "uppercase",
          }}
        >
          Sizzald Originals
        </Typography>
        <Box>
          <IconButton
            hover={{ background: "#FFFFFF33" }}
            sx={{
              color: "#ffffff",
              marginRight: "8px",
              background: "#FFFFFF33",
              height: { sx: "30px", lg: "35px" },
              width: { sx: "30px", lg: "35px" },
            }}
            onClick={() => sliderThree?.current?.slickPrev()}
          >
            <KeyboardBackspaceIcon
              sx={{ fontSize: { xs: "16px", lg: "19px" } }}
            />
          </IconButton>
          <Typography
            sx={{
              fontSize: { xs: "10px", lg: "12px" },
              color: "rgba(240, 75, 43, 1)",
              textDecoration: "underline",
              paddingRight: "6px",
            }}
            variant="span"
          >
             {`All 24 `}
            <Typography
              sx={{
                color: "#ffffff",
                textDecoration: "underline",
                textTransform: "uppercase",
              }}
              variant="span"
            >
              Games
            </Typography>
          </Typography>
          <IconButton
            sx={{
              color: "#ffffff",
              background: "#FFFFFF33",
              height: { sx: "30px", lg: "35px" },
              width: { sx: "30px", lg: "35px" },
            }}
            onClick={() => sliderThree?.current?.slickNext()}
          >
            <ArrowRightAltIcon sx={{ fontSize: { xs: "16px", lg: "19px" } }} />
          </IconButton>
        </Box>
      </Box>
      <CustomCarousal
        sx={{ padding: "10px 35px" }}
        carousalRef={sliderThree}
        settingCard={settingCardThree}
      >
        <CustomCardTwo
          name="Classic Dice"
          balance=""
          img={Keno}
          icon={
            <img style={{ height: "26px", width: "26px" }} src={questionMark} />
          }
        />
        <CustomCardTwo
          name="Classic Dice"
          balance=""
          img={videoPoker}
          icon={
            <img style={{ height: "26px", width: "26px" }} src={questionMark} />
          }
        />
        <CustomCardTwo
          name="Classic Dice"
          balance=""
          img={Baccarat}
          icon={
            <img style={{ height: "26px", width: "26px" }} src={questionMark} />
          }
        />
        <CustomCardTwo
          name="Classic Dice"
          balance=""
          img={hillo}
          icon={
            <img style={{ height: "26px", width: "26px" }} src={questionMark} />
          }
        />
        <CustomCardTwo
          name="Classic Dice"
          balance=""
          img={blackJack}
          icon={
            <img style={{ height: "26px", width: "26px" }} src={questionMark} />
          }
        />
        <CustomCardTwo
          name="Classic Dice"
          balance=""
          img={crash}
          icon={
            <img style={{ height: "26px", width: "26px" }} src={questionMark} />
          }
        />
        <CustomCardTwo
          name="Classic Dice"
          balance=""
          img={limbo}
          icon={
            <img style={{ height: "26px", width: "26px" }} src={questionMark} />
          }
        />
        <CustomCardTwo
          name="Classic Dice"
          balance=""
          img={wheel}
          icon={
            <img style={{ height: "26px", width: "26px" }} src={questionMark} />
          }
        /> <CustomCardTwo
          name="Classic Dice"
          balance=""
          img={ultimateDice}
          icon={
            <img style={{ height: "26px", width: "26px" }} src={questionMark} />
          }
        />
        <CustomCardTwo
          name="Classic Dice"
          balance=""
          img={ringOfFortune}
          icon={
            <img style={{ height: "26px", width: "26px" }} src={questionMark} />
          }
        />
        <CustomCardTwo
          name="Classic Dice"
          balance=""
          img={kenoMultiplayer}
          icon={
            <img style={{ height: "26px", width: "26px" }} src={questionMark} />
          }
        />
        <CustomCardTwo
          name="Classic Dice"
          balance=""
          img={caveOfPlunder}
          icon={
            <img style={{ height: "26px", width: "26px" }} src={questionMark} />
          }
        />





        <CustomCardTwo
          name="Classic Dice"
          balance=""
          img={coinFlip}
          icon={
            <img style={{ height: "26px", width: "26px" }} src={questionMark} />
          }
        />
        <CustomCardTwo
          name="Classic Dice"
          balance=""
          img={plinko}
          icon={
            <img style={{ height: "26px", width: "26px" }} src={questionMark} />
          }
        />
        <CustomCardTwo
          name="Classic Dice"
          balance=""
          img={mine}
          icon={
            <img style={{ height: "26px", width: "26px" }} src={questionMark} />
          }
        />
        <CustomCardTwo
          name="Classic Dice"
          balance=""
          img={towerOfLegend}
          icon={
            <img style={{ height: "26px", width: "26px" }} src={questionMark} />
          }
        />
         <CustomCardTwo
          name="Classic Dice"
          balance=""
          img={blackJack}
          icon={
            <img style={{ height: "26px", width: "26px" }} src={questionMark} />
          }
        />
        <CustomCardTwo
          name="Classic Dice"
          balance=""
          img={crash}
          icon={
            <img style={{ height: "26px", width: "26px" }} src={questionMark} />
          }
        />
        <CustomCardTwo
          name="Classic Dice"
          balance=""
          img={limbo}
          icon={
            <img style={{ height: "26px", width: "26px" }} src={questionMark} />
          }
        />
        <CustomCardTwo
          name="Classic Dice"
          balance=""
          img={wheel}
          icon={
            <img style={{ height: "26px", width: "26px" }} src={questionMark} />
          }
        />

      </CustomCarousal>
      <Box
        sx={{
          textAlign: "right",
          padding: { xs: "8px 8px", lg: "8px 8px" },
          display: "flex",
          justifyContent: "space-between",
          marginTop:"10px",
        }}
      >
        <Typography
          sx={{
            fontSize: { xs: "14px", lg: "17px" },
            textTransform: "uppercase",
            fontWeight: "700",
            fontFamily: "Poppins",
            lineHeight: "40px",
            letterSpacing: "1px",
            textAlign: "left",
            color: "#ffffff",
          }}
        >
          Slots
        </Typography>
        <Box>
          <IconButton
            hover={{ background: "#FFFFFF33" }}
            sx={{
              color: "#ffffff",
              marginRight: "8px",
              background: "#FFFFFF33",
              height: { sx: "30px", lg: "35px" },
              width: { sx: "30px", lg: "35px" },
            }}
            onClick={() => sliderFour?.current?.slickPrev()}
          >
            <KeyboardBackspaceIcon
              sx={{ fontSize: { xs: "16px", lg: "19px" } }}
            />
          </IconButton>
          <Typography
            sx={{
              fontSize: { xs: "10px", lg: "12px" },
              color: "rgba(240, 75, 43, 1)",
              textDecoration: "underline",
              paddingRight: "10px",
            }}
            variant="span"
          >
            {`All 24 `}
            <Typography
              sx={{
                color: "#ffffff",
                textDecoration: "underline",
                textTransform: "uppercase",
              }}
              variant="span"
            >
              Games
            </Typography>
          </Typography>
          <IconButton
            sx={{
              color: "#ffffff",
              background: "#FFFFFF33",
              height: { sx: "30px", lg: "35px" },
              width: { sx: "30px", lg: "35px" },
            }}
            onClick={() => sliderFour?.current?.slickNext()}
          >
            <ArrowRightAltIcon sx={{ fontSize: { xs: "16px", lg: "19px" } }} />
          </IconButton>
        </Box>
      </Box>
      <CustomCarousal
        sx={{ padding: "10px 35px" }}
        carousalRef={sliderFour}
        settingCard={settingCardFour}
      >
              <CustomCardTwo
          name="Classic Dice"
          balance=""
          img={coinFlip}
          icon={
            <img style={{ height: "26px", width: "26px" }} src={questionMark} />
          }
        />
        <CustomCardTwo
          name="Classic Dice"
          balance=""
          img={plinko}
          icon={
            <img style={{ height: "26px", width: "26px" }} src={questionMark} />
          }
        />
        <CustomCardTwo
          name="Classic Dice"
          balance=""
          img={mine}
          icon={
            <img style={{ height: "26px", width: "26px" }} src={questionMark} />
          }
        />
        <CustomCardTwo
          name="Classic Dice"
          balance=""
          img={towerOfLegend}
          icon={
            <img style={{ height: "26px", width: "26px" }} src={questionMark} />
          }
        />
              <CustomCardTwo
          name="Classic Dice"
          balance=""
          img={ultimateDice}
          icon={
            <img style={{ height: "26px", width: "26px" }} src={questionMark} />
          }
        />
        <CustomCardTwo
          name="Classic Dice"
          balance=""
          img={ringOfFortune}
          icon={
            <img style={{ height: "26px", width: "26px" }} src={questionMark} />
          }
        />
        <CustomCardTwo
          name="Classic Dice"
          balance=""
          img={kenoMultiplayer}
          icon={
            <img style={{ height: "26px", width: "26px" }} src={questionMark} />
          }
        />
        <CustomCardTwo
          name="Classic Dice"
          balance=""
          img={caveOfPlunder}
          icon={
            <img style={{ height: "26px", width: "26px" }} src={questionMark} />
          }
        />
    <CustomCardTwo
          name="Classic Dice"
          balance=""
          img={Keno}
          icon={
            <img style={{ height: "26px", width: "26px" }} src={questionMark} />
          }
        />
        <CustomCardTwo
          name="Classic Dice"
          balance=""
          img={videoPoker}
          icon={
            <img style={{ height: "26px", width: "26px" }} src={questionMark} />
          }
        />
        <CustomCardTwo
          name="Classic Dice"
          balance=""
          img={Baccarat}
          icon={
            <img style={{ height: "26px", width: "26px" }} src={questionMark} />
          }
        />
        <CustomCardTwo
          name="Classic Dice"
          balance=""
          img={hillo}
          icon={
            <img style={{ height: "26px", width: "26px" }} src={questionMark} />
          }
        />




       
      </CustomCarousal>
      <Box
        sx={{
          textAlign: "right",
          padding: { xs: "15px 8px", lg: "15px 8px" },
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <Typography
          sx={{
            fontSize: { xs: "14px", lg: "17px" },
            textTransform: "uppercase",
            fontFamily: "Poppins",
            fontWeight: "700",
            lineHeight: "40px",
            letterSpacing: "1px",
            textAlign: "left",
            color: "#ffffff",
          }}
        >
          Game Provider
        </Typography>
        <Box>
          <IconButton
            hover={{ background: "#FFFFFF33" }}
            sx={{
              color: "#ffffff",
              marginRight: "15px",
              background: "#FFFFFF33",
              height: { sx: "30px", lg: "35px" },
              width: { sx: "30px", lg: "35px" },
            }}
            onClick={() => sliderSix?.current?.slickPrev()}
          >
            <KeyboardBackspaceIcon
              sx={{ fontSize: { xs: "16px", lg: "19px" } }}
            />
          </IconButton>

          <IconButton
            sx={{
              color: "#ffffff",
              background: "#FFFFFF33",
              height: { sx: "30px", lg: "35px" },
              width: { sx: "30px", lg: "35px" },
            }}
            onClick={() => sliderSix?.current?.slickNext()}
          >
            <ArrowRightAltIcon sx={{ fontSize: { xs: "16px", lg: "19px" } }} />
          </IconButton>
        </Box>
      </Box>
      <CustomCarousal
        sx={{ padding: "10px 30px" }}
        carousalRef={sliderSix}
        settingCard={settingCardFive}
      >
        <CustomCardThree
          name="Mr SCHEMER"
          balance=""
          img={gameProvider1}
          marginRight="20px"
        />
        <CustomCardThree
          name="Mr SCHEMER"
          balance=""
          img={gameProvider2}
        />
        <CustomCardThree
          name="Mr SCHEMER"
          balance=""
          img={gameProvider3}
        />
        <CustomCardThree
          name="Mr SCHEMER"
          balance=""
          img={gameProvider4}
        />
        <CustomCardThree
          name="Mr SCHEMER"
          balance=""
          img={gameProvider5}
        />
        <CustomCardThree
          name="Mr SCHEMER"
          balance=""
          img={gameProvider6}
        />
        <CustomCardThree
          name="Mr SCHEMER"
          balance=""
          img={gameProvider1}
        />
        <CustomCardThree
          name="Mr SCHEMER"
          balance=""
          img={gameProvider2}
        />
        <CustomCardThree
          name="Mr SCHEMER"
          balance=""
          img={gameProvider3}
        />
        <CustomCardThree
          name="Mr SCHEMER"
          balance=""
          img={gameProvider4}
        />
        <CustomCardThree
          name="Mr SCHEMER"
          balance=""
          img={gameProvider5}
        />
        <CustomCardThree
          name="Mr SCHEMER"
          balance=""
          img={gameProvider6}
        />
      </CustomCarousal>
      <Lobby />
      <Box
        sx={{
          marginTop:"20px",
                    textAlign: "right",
          padding: { xs: "10px 8px", lg: "10px 8px" },
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <Typography
          sx={{
            fontSize: { xs: "14px", lg: "17px" },
            fontWeight: "700",
            lineHeight: "40px",
            letterSpacing: "1px",
            textAlign: "left",
            color: "#ffffff",
            textTransform: "uppercase",
            fontFamily: "Poppins",
          }}
        >
          Top Rated Games
        </Typography>
        <Box>
          <IconButton
            hover={{ background: "#FFFFFF33" }}
            sx={{
              color: "#ffffff",
              marginRight: "15px",
              background: "#FFFFFF33",
              height: { sx: "30px", lg: "35px" },
              width: { sx: "30px", lg: "35px" },
            }}
            onClick={() => sliderSeven?.current?.slickPrev()}
          >
            <KeyboardBackspaceIcon
              sx={{ fontSize: { xs: "16px", lg: "19px" } }}
            />
          </IconButton>
          <IconButton
            sx={{
              color: "#ffffff",
              background: "#FFFFFF33",
              height: { sx: "30px", lg: "35px" },
              width: { sx: "30px", lg: "35px" },
            }}
            onClick={() => sliderSeven?.current?.slickNext()}
          >
            <ArrowRightAltIcon sx={{ fontSize: { xs: "16px", lg: "19px" } }} />
          </IconButton>
        </Box>
      </Box>
      <CustomCarousal
        sx={{ padding: "10px 35px" }}
        carousalRef={sliderSeven}
        settingCard={settingCardTwo}
      >
         <CustomCardTwo
          name="Classic Dice"
          balance=""
          img={coinFlip}
          icon={
            <img style={{ height: "26px", width: "26px" }} src={questionMark} />
          }
        />
        <CustomCardTwo
          name="Classic Dice"
          balance=""
          img={plinko}
          icon={
            <img style={{ height: "26px", width: "26px" }} src={questionMark} />
          }
        />
        <CustomCardTwo
          name="Classic Dice"
          balance=""
          img={mine}
          icon={
            <img style={{ height: "26px", width: "26px" }} src={questionMark} />
          }
        />
        <CustomCardTwo
          name="Classic Dice"
          balance=""
          img={towerOfLegend}
          icon={
            <img style={{ height: "26px", width: "26px" }} src={questionMark} />
          }
        />
         <CustomCardTwo
          name="Classic Dice"
          balance=""
          img={blackJack}
          icon={
            <img style={{ height: "26px", width: "26px" }} src={questionMark} />
          }
        />
        <CustomCardTwo
          name="Classic Dice"
          balance=""
          img={crash}
          icon={
            <img style={{ height: "26px", width: "26px" }} src={questionMark} />
          }
        />
        <CustomCardTwo
          name="Classic Dice"
          balance=""
          img={limbo}
          icon={
            <img style={{ height: "26px", width: "26px" }} src={questionMark} />
          }
        />
        <CustomCardTwo
          name="Classic Dice"
          balance=""
          img={wheel}
          icon={
            <img style={{ height: "26px", width: "26px" }} src={questionMark} />
          }
        />
      </CustomCarousal>
      <DetailedCard />
      <Network />
    </section>
  );
}
