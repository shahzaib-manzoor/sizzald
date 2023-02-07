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

import customCard1 from ".././assets/customCard1.png";
import customCard2 from ".././assets/customCard2.png";
import customCard3 from ".././assets/customCard3.png";
import CustomCardThree from "../ui-components/CustomCardThree";

import gameProvider1 from "../assets/gameProvider1.png";
import gameProvider2 from "../assets/gameProvider2.png";
import gameProvider3 from "../assets/gameProvider3.png";
import gameProvider4 from "../assets/gameProvider4.png";
import gameProvider5 from "../assets/gameProvider5.png";
import gameProvider6 from "../assets/gameProvider6.png";
import Network from "../ui-components/Network";
import DetailedCard from "../ui-components/DetailCard/index";
import Footer from "../layout/Footer";
import RecentBig from "./Picks/RecentBig";
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
    <section className="!bg-clBlueContainer ">
      <Box
        sx={{
          textAlign: "right",
          padding: { xs: "10px 25px", lg: "30px 33px" },
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <Typography
          sx={{
            fontSize: { xs: "16px", lg: "24px" },
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
              marginRight: "8px",
              background: "#FFFFFF33",
              height: { sx: "35px", lg: "45px" },
              width: { sx: "35px", lg: "45px" },
            }}
            onClick={() => slider?.current?.slickPrev()}
          >
            <KeyboardBackspaceIcon
              sx={{ fontSize: { xs: "16px", lg: "23px" } }}
            />
          </IconButton>
          <IconButton
            sx={{
              color: "#ffffff",
              background: "#FFFFFF33",
              height: { sx: "35px", lg: "45px" },
              width: { sx: "35px", lg: "45px" },
            }}
            onClick={() => slider?.current?.slickNext()}
          >
            <ArrowRightAltIcon sx={{ fontSize: { xs: "16px", lg: "23px" } }} />
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
      <RecentBig sliderTwo={sliderTwo} settingCardTwo={settingCardTwo} />
      <Box>
        <Typography
          sx={{
            fontSize: { xs: "16px", lg: "24px" },
            fontFamily: "Poppins",
            fontWeight: "700",
            lineHeight: "40px",
            letterSpacing: "1px",
            textAlign: "left",
            color: "#ffffff",
            textTransform: "uppercase",
            padding: { xs: "10px 25px", lg: "30px 33px 0px 33px" },
          }}
        >
          Casino
        </Typography>
        <SecondBar />
      </Box>
      <Box
        sx={{
          textAlign: "right",
          padding: { xs: "10px 25px", lg: "30px 33px" },
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <Typography
          sx={{
            fontSize: { xs: "16px", lg: "24px" },
            fontFamily: "Poppins",
            fontWeight: "700",
            lineHeight: "40px",
            letterSpacing: "1px",
            textAlign: "left",
            color: "#ffffff",
            textTransform: "uppercase",
          }}
        >
          Sizzald Original
        </Typography>
        <Box>
          <IconButton
            hover={{ background: "#FFFFFF33" }}
            sx={{
              color: "#ffffff",
              marginRight: "8px",
              background: "#FFFFFF33",
              height: { sx: "35px", lg: "45px" },
              width: { sx: "35px", lg: "45px" },
            }}
            onClick={() => sliderThree?.current?.slickPrev()}
          >
            <KeyboardBackspaceIcon
              sx={{ fontSize: { xs: "16px", lg: "23px" } }}
            />
          </IconButton>
          <Typography
            sx={{
              fontSize: { xs: "10px", lg: "16px" },
              color: "rgba(240, 75, 43, 1)",
              textDecoration: "underline",
              paddingRight: "6px",
            }}
            variant="span"
          >
            Show all 24
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
              height: { sx: "35px", lg: "45px" },
              width: { sx: "35px", lg: "45px" },
            }}
            onClick={() => sliderThree?.current?.slickNext()}
          >
            <ArrowRightAltIcon sx={{ fontSize: { xs: "16px", lg: "23px" } }} />
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
          balance="$ 5346362"
          img={Keno}
          icon={
            <img style={{ height: "32px", width: "32px" }} src={questionMark} />
          }
        />
        <CustomCardTwo
          name="Classic Dice"
          balance="$ 5346362"
          img={videoPoker}
          icon={
            <img style={{ height: "32px", width: "32px" }} src={questionMark} />
          }
        />
        <CustomCardTwo
          name="Classic Dice"
          balance="$ 5346362"
          img={Baccarat}
          icon={
            <img style={{ height: "32px", width: "32px" }} src={questionMark} />
          }
        />
        <CustomCardTwo
          name="Classic Dice"
          balance="$ 5346362"
          img={hillo}
          icon={
            <img style={{ height: "32px", width: "32px" }} src={questionMark} />
          }
        />
        <CustomCardTwo
          name="Classic Dice"
          balance="$ 5346362"
          img={blackJack}
          icon={
            <img style={{ height: "32px", width: "32px" }} src={questionMark} />
          }
        />
        <CustomCardTwo
          name="Classic Dice"
          balance="$ 5346362"
          img={crash}
          icon={
            <img style={{ height: "32px", width: "32px" }} src={questionMark} />
          }
        />
        <CustomCardTwo
          name="Classic Dice"
          balance="$ 5346362"
          img={limbo}
          icon={
            <img style={{ height: "32px", width: "32px" }} src={questionMark} />
          }
        />
        <CustomCardTwo
          name="Classic Dice"
          balance="$ 5346362"
          img={wheel}
          icon={
            <img style={{ height: "32px", width: "32px" }} src={questionMark} />
          }
        /> <CustomCardTwo
          name="Classic Dice"
          balance="$ 5346362"
          img={ultimateDice}
          icon={
            <img style={{ height: "32px", width: "32px" }} src={questionMark} />
          }
        />
        <CustomCardTwo
          name="Classic Dice"
          balance="$ 5346362"
          img={ringOfFortune}
          icon={
            <img style={{ height: "32px", width: "32px" }} src={questionMark} />
          }
        />
        <CustomCardTwo
          name="Classic Dice"
          balance="$ 5346362"
          img={kenoMultiplayer}
          icon={
            <img style={{ height: "32px", width: "32px" }} src={questionMark} />
          }
        />
        <CustomCardTwo
          name="Classic Dice"
          balance="$ 5346362"
          img={caveOfPlunder}
          icon={
            <img style={{ height: "32px", width: "32px" }} src={questionMark} />
          }
        />





        <CustomCardTwo
          name="Classic Dice"
          balance="$ 5346362"
          img={coinFlip}
          icon={
            <img style={{ height: "32px", width: "32px" }} src={questionMark} />
          }
        />
        <CustomCardTwo
          name="Classic Dice"
          balance="$ 5346362"
          img={plinko}
          icon={
            <img style={{ height: "32px", width: "32px" }} src={questionMark} />
          }
        />
        <CustomCardTwo
          name="Classic Dice"
          balance="$ 5346362"
          img={mine}
          icon={
            <img style={{ height: "32px", width: "32px" }} src={questionMark} />
          }
        />
        <CustomCardTwo
          name="Classic Dice"
          balance="$ 5346362"
          img={towerOfLegend}
          icon={
            <img style={{ height: "32px", width: "32px" }} src={questionMark} />
          }
        />
         <CustomCardTwo
          name="Classic Dice"
          balance="$ 5346362"
          img={blackJack}
          icon={
            <img style={{ height: "32px", width: "32px" }} src={questionMark} />
          }
        />
        <CustomCardTwo
          name="Classic Dice"
          balance="$ 5346362"
          img={crash}
          icon={
            <img style={{ height: "32px", width: "32px" }} src={questionMark} />
          }
        />
        <CustomCardTwo
          name="Classic Dice"
          balance="$ 5346362"
          img={limbo}
          icon={
            <img style={{ height: "32px", width: "32px" }} src={questionMark} />
          }
        />
        <CustomCardTwo
          name="Classic Dice"
          balance="$ 5346362"
          img={wheel}
          icon={
            <img style={{ height: "32px", width: "32px" }} src={questionMark} />
          }
        />

      </CustomCarousal>
      <Box
        sx={{
          textAlign: "right",
          padding: { xs: "10px 25px", lg: "30px 33px" },
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <Typography
          sx={{
            fontSize: { xs: "16px", lg: "24px" },
            textTransform: "uppercase",
            fontWeight: "700",
            fontFamily: "Poppins",
            lineHeight: "40px",
            letterSpacing: "1px",
            textAlign: "left",
            color: "#ffffff",
          }}
        >
          Slot
        </Typography>
        <Box>
          <IconButton
            hover={{ background: "#FFFFFF33" }}
            sx={{
              color: "#ffffff",
              marginRight: "8px",
              background: "#FFFFFF33",
              height: { sx: "35px", lg: "45px" },
              width: { sx: "35px", lg: "45px" },
            }}
            onClick={() => sliderFour?.current?.slickPrev()}
          >
            <KeyboardBackspaceIcon
              sx={{ fontSize: { xs: "16px", lg: "23px" } }}
            />
          </IconButton>
          <Typography
            sx={{
              fontSize: { xs: "10px", lg: "16px" },
              color: "rgba(240, 75, 43, 1)",
              textDecoration: "underline",
              paddingRight: "10px",
            }}
            variant="span"
          >
            Show all 24
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
              height: { sx: "35px", lg: "45px" },
              width: { sx: "35px", lg: "45px" },
            }}
            onClick={() => sliderFour?.current?.slickNext()}
          >
            <ArrowRightAltIcon sx={{ fontSize: { xs: "16px", lg: "23px" } }} />
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
          balance="$ 5346362"
          img={coinFlip}
          icon={
            <img style={{ height: "32px", width: "32px" }} src={questionMark} />
          }
        />
        <CustomCardTwo
          name="Classic Dice"
          balance="$ 5346362"
          img={plinko}
          icon={
            <img style={{ height: "32px", width: "32px" }} src={questionMark} />
          }
        />
        <CustomCardTwo
          name="Classic Dice"
          balance="$ 5346362"
          img={mine}
          icon={
            <img style={{ height: "32px", width: "32px" }} src={questionMark} />
          }
        />
        <CustomCardTwo
          name="Classic Dice"
          balance="$ 5346362"
          img={towerOfLegend}
          icon={
            <img style={{ height: "32px", width: "32px" }} src={questionMark} />
          }
        />
              <CustomCardTwo
          name="Classic Dice"
          balance="$ 5346362"
          img={ultimateDice}
          icon={
            <img style={{ height: "32px", width: "32px" }} src={questionMark} />
          }
        />
        <CustomCardTwo
          name="Classic Dice"
          balance="$ 5346362"
          img={ringOfFortune}
          icon={
            <img style={{ height: "32px", width: "32px" }} src={questionMark} />
          }
        />
        <CustomCardTwo
          name="Classic Dice"
          balance="$ 5346362"
          img={kenoMultiplayer}
          icon={
            <img style={{ height: "32px", width: "32px" }} src={questionMark} />
          }
        />
        <CustomCardTwo
          name="Classic Dice"
          balance="$ 5346362"
          img={caveOfPlunder}
          icon={
            <img style={{ height: "32px", width: "32px" }} src={questionMark} />
          }
        />
    <CustomCardTwo
          name="Classic Dice"
          balance="$ 5346362"
          img={Keno}
          icon={
            <img style={{ height: "32px", width: "32px" }} src={questionMark} />
          }
        />
        <CustomCardTwo
          name="Classic Dice"
          balance="$ 5346362"
          img={videoPoker}
          icon={
            <img style={{ height: "32px", width: "32px" }} src={questionMark} />
          }
        />
        <CustomCardTwo
          name="Classic Dice"
          balance="$ 5346362"
          img={Baccarat}
          icon={
            <img style={{ height: "32px", width: "32px" }} src={questionMark} />
          }
        />
        <CustomCardTwo
          name="Classic Dice"
          balance="$ 5346362"
          img={hillo}
          icon={
            <img style={{ height: "32px", width: "32px" }} src={questionMark} />
          }
        />




       
      </CustomCarousal>
      <Box
        sx={{
          textAlign: "right",
          padding: { xs: "10px 25px", lg: "30px 33px" },
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <Typography
          sx={{
            fontSize: { xs: "16px", lg: "24px" },
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
              marginRight: "8px",
              background: "#FFFFFF33",
              height: { sx: "35px", lg: "45px" },
              width: { sx: "35px", lg: "45px" },
            }}
            onClick={() => sliderSix?.current?.slickPrev()}
          >
            <KeyboardBackspaceIcon
              sx={{ fontSize: { xs: "16px", lg: "23px" } }}
            />
          </IconButton>

          <IconButton
            sx={{
              color: "#ffffff",
              background: "#FFFFFF33",
              height: { sx: "35px", lg: "45px" },
              width: { sx: "35px", lg: "45px" },
            }}
            onClick={() => sliderSix?.current?.slickNext()}
          >
            <ArrowRightAltIcon sx={{ fontSize: { xs: "16px", lg: "23px" } }} />
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
          balance="$ 5346362"
          img={gameProvider1}
          marginRight="20px"
        />
        <CustomCardThree
          name="Mr SCHEMER"
          balance="$ 5346362"
          img={gameProvider2}
        />
        <CustomCardThree
          name="Mr SCHEMER"
          balance="$ 5346362"
          img={gameProvider3}
        />
        <CustomCardThree
          name="Mr SCHEMER"
          balance="$ 5346362"
          img={gameProvider4}
        />
        <CustomCardThree
          name="Mr SCHEMER"
          balance="$ 5346362"
          img={gameProvider5}
        />
        <CustomCardThree
          name="Mr SCHEMER"
          balance="$ 5346362"
          img={gameProvider6}
        />
        <CustomCardThree
          name="Mr SCHEMER"
          balance="$ 5346362"
          img={gameProvider1}
        />
        <CustomCardThree
          name="Mr SCHEMER"
          balance="$ 5346362"
          img={gameProvider2}
        />
        <CustomCardThree
          name="Mr SCHEMER"
          balance="$ 5346362"
          img={gameProvider3}
        />
        <CustomCardThree
          name="Mr SCHEMER"
          balance="$ 5346362"
          img={gameProvider4}
        />
        <CustomCardThree
          name="Mr SCHEMER"
          balance="$ 5346362"
          img={gameProvider5}
        />
        <CustomCardThree
          name="Mr SCHEMER"
          balance="$ 5346362"
          img={gameProvider6}
        />
      </CustomCarousal>
      <Lobby />
      <Box
        sx={{
          textAlign: "right",
          padding: { xs: "10px 25px", lg: "30px 33px" },
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <Typography
          sx={{
            fontSize: { xs: "16px", lg: "24px" },
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
              marginRight: "8px",
              background: "#FFFFFF33",
              height: { sx: "35px", lg: "45px" },
              width: { sx: "35px", lg: "45px" },
            }}
            onClick={() => sliderSeven?.current?.slickPrev()}
          >
            <KeyboardBackspaceIcon
              sx={{ fontSize: { xs: "16px", lg: "23px" } }}
            />
          </IconButton>
          <IconButton
            sx={{
              color: "#ffffff",
              background: "#FFFFFF33",
              height: { sx: "35px", lg: "45px" },
              width: { sx: "35px", lg: "45px" },
            }}
            onClick={() => sliderSeven?.current?.slickNext()}
          >
            <ArrowRightAltIcon sx={{ fontSize: { xs: "16px", lg: "23px" } }} />
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
          balance="$ 5346362"
          img={coinFlip}
          icon={
            <img style={{ height: "32px", width: "32px" }} src={questionMark} />
          }
        />
        <CustomCardTwo
          name="Classic Dice"
          balance="$ 5346362"
          img={plinko}
          icon={
            <img style={{ height: "32px", width: "32px" }} src={questionMark} />
          }
        />
        <CustomCardTwo
          name="Classic Dice"
          balance="$ 5346362"
          img={mine}
          icon={
            <img style={{ height: "32px", width: "32px" }} src={questionMark} />
          }
        />
        <CustomCardTwo
          name="Classic Dice"
          balance="$ 5346362"
          img={towerOfLegend}
          icon={
            <img style={{ height: "32px", width: "32px" }} src={questionMark} />
          }
        />
         <CustomCardTwo
          name="Classic Dice"
          balance="$ 5346362"
          img={blackJack}
          icon={
            <img style={{ height: "32px", width: "32px" }} src={questionMark} />
          }
        />
        <CustomCardTwo
          name="Classic Dice"
          balance="$ 5346362"
          img={crash}
          icon={
            <img style={{ height: "32px", width: "32px" }} src={questionMark} />
          }
        />
        <CustomCardTwo
          name="Classic Dice"
          balance="$ 5346362"
          img={limbo}
          icon={
            <img style={{ height: "32px", width: "32px" }} src={questionMark} />
          }
        />
        <CustomCardTwo
          name="Classic Dice"
          balance="$ 5346362"
          img={wheel}
          icon={
            <img style={{ height: "32px", width: "32px" }} src={questionMark} />
          }
        />
      </CustomCarousal>
      <DetailedCard />
      <Network />
    </section>
  );
}
