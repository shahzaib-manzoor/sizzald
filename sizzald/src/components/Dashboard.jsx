import { Typography, Box, IconButton } from "@mui/material";
import CustomCard from "../ui-components/CustomCard";
import Lobby from "../ui-components/Lobby";
import CustomCardTwo from "../ui-components/CustomCardTwo";
import SecondBar from "../ui-components/SecondBar/SecondBar";
import { useRef } from "react";
import CustomCarousal from "../ui-components/CustomCarousal";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import customCardTwo from ".././assets/customCardTwo.png";
import customCardThree from ".././assets/customCardThree.png";
import customCardFour from ".././assets/customCardFour.png";
import customCardFive from ".././assets/customCardFive.png";

import customCard1 from ".././assets/customCard1.png";
import customCard2 from ".././assets/customCard2.png";
import customCard3 from ".././assets/customCard3.png";
import customCardd1 from ".././assets/customCardd1.png";
import customCardd2 from ".././assets/customCardd2.png";
import customCardd3 from ".././assets/customCardd3.png";
import customCardd4 from ".././assets/customCardd4.png";
import customCardd5 from ".././assets/customCardd5.png";
import customCardd6 from ".././assets/customCardd6.png";
import customCardd7 from ".././assets/customCardd7.png";
import customCardd8 from ".././assets/customCardd8.png";
import customCardd9 from ".././assets/customCardd9.png";
import customCardd from ".././assets/customCardd.png";
import ultimate from ".././assets/ultimate.png";
import CustomCardThree from "../ui-components/CustomCardThree";

import gameProvider1 from "../assets/gameProvider1.png";
import gameProvider2 from "../assets/gameProvider2.png";
import gameProvider3 from "../assets/gameProvider3.png";
import gameProvider4 from "../assets/gameProvider4.png";
import gameProvider5 from "../assets/gameProvider5.png";
import gameProvider6 from "../assets/gameProvider6.png";
import Network from "../ui-components/Network";
import Footer from "../layout/Footer";

export default function Dashboard() {
  const slider = React.useRef(null);
  const sliderTwo = React.useRef(null);
  const sliderThree = React.useRef(null);
  const sliderFour = React.useRef(null);
  const sliderFive = React.useRef(null);
  const sliderSix = React.useRef(null);

  const sliderSeven = React.useRef(null);
  var settingCardOne = {
    slidesToShow: 3,

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
    ],
  };
  var settingCardTwo = {
    slidesToShow: 4,

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
    ],
  };
  var settingCardThree = {
    slidesToShow: 4,
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
    ],
  };
  var settingCardFour = {
    slidesToShow: 4,
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
    ],
  };
  var settingCardFive = {
    slidesToShow: 5,
    slidesPerRow: 1,

    responsive: [
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 1000,
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  };

  return (
    <section className="!bg-clBlueContainer ">
      <Box
        sx={{
          textAlign: "right",
          padding: "30px 33px",
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <Typography
          sx={{
            fontSize: "24px",
            fontWeight: "700",
            lineHeight: "40px",
            letterSpacing: "1px",
            textAlign: "left",
            color: "white",
            textTransform: "uppercase",
          }}
        >
          PROMOTIONS
        </Typography>
        <Box>
          <IconButton
            hover={{ background: "#FFFFFF33" }}
            sx={{ color: "white", marginRight: "8px", background: "#FFFFFF33" }}
            onClick={() => slider?.current?.slickPrev()}
          >
            <KeyboardBackspaceIcon />
          </IconButton>
          <IconButton
            sx={{ color: "white", background: "#FFFFFF33" }}
            onClick={() => slider?.current?.slickNext()}
          >
            <ArrowRightAltIcon />
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
      <Box
        sx={{
          textAlign: "right",
          padding: "30px 33px",
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <Typography
          sx={{
            fontSize: "24px",
            fontWeight: "700",
            lineHeight: "40px",
            letterSpacing: "1px",
            textAlign: "left",
            color: "white",
            textTransform: "uppercase",
          }}
        >
          RECENT BIG WINS
        </Typography>
        <Box>
          <IconButton
            hover={{ background: "#FFFFFF33" }}
            sx={{ color: "white", marginRight: "8px", background: "#FFFFFF33" }}
            onClick={() => sliderTwo?.current?.slickPrev()}
          >
            <KeyboardBackspaceIcon />
          </IconButton>
          <IconButton
            sx={{ color: "white", background: "#FFFFFF33" }}
            onClick={() => sliderTwo?.current?.slickNext()}
          >
            <ArrowRightAltIcon />
          </IconButton>
        </Box>
      </Box>
      <CustomCarousal
        sx={{ padding: "10px 35px" }}
        carousalRef={sliderTwo}
        settingCard={settingCardTwo}
      >
        <CustomCardTwo
          name="MR SCHEMER"
          balance="$ 5346362"
          img={customCardd7}
        />
        <CustomCardTwo
          name="MR SCHEMER"
          balance="$ 5346362"
          img={customCardd8}
        />
        <CustomCardTwo
          name="MR SCHEMER"
          balance="$ 5346362"
          img={customCardd9}
        />
        <CustomCardTwo
          name="MR SCHEMER"
          balance="$ 5346362"
          img={customCardd6}
        />
        <CustomCardTwo
          name="MR SCHEMER"
          balance="$ 5346362"
          img={customCardd7}
        />
        <CustomCardTwo
          name="MR SCHEMER"
          balance="$ 5346362"
          img={customCardd8}
        />
        <CustomCardTwo
          name="MR SCHEMER"
          balance="$ 5346362"
          img={customCardd1}
        />
        <CustomCardTwo
          name="MR SCHEMER"
          balance="$ 5346362"
          img={customCardd2}
        />
      </CustomCarousal>
      <Box>
        <Typography
          sx={{
            fontSize: "24px",
            fontWeight: "700",
            lineHeight: "40px",
            letterSpacing: "1px",
            textAlign: "left",
            color: "white",
            textTransform: "uppercase",
            padding: "30px 33px",
          }}
        >
          Casino
        </Typography>
        <SecondBar />
      </Box>
      <Box
        sx={{
          textAlign: "right",
          padding: "30px 33px",
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <Typography
          sx={{
            fontSize: "24px",
            fontWeight: "700",
            lineHeight: "40px",
            letterSpacing: "1px",
            textAlign: "left",
            color: "white",
            textTransform: "uppercase",
          }}
        >
          BC Original
        </Typography>
        <Box>
          <IconButton
            hover={{ background: "#FFFFFF33" }}
            sx={{ color: "white", marginRight: "8px", background: "#FFFFFF33" }}
            onClick={() => sliderThree?.current?.slickPrev()}
          >
            <KeyboardBackspaceIcon />
          </IconButton>
          <Typography
            sx={{
              color: "rgba(240, 75, 43, 1)",
              textDecoration: "underline",
              paddingRight: "6px",
            }}
            variant="span"
          >
            Show all 24{" "}
            <Typography
              sx={{
                color: "white",
                textDecoration: "underline",
                textTransform: "uppercase",
              }}
              variant="span"
            >
              Games
            </Typography>
          </Typography>
          <IconButton
            sx={{ color: "white", background: "#FFFFFF33" }}
            onClick={() => sliderThree?.current?.slickNext()}
          >
            <ArrowRightAltIcon />
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
          img={customCardd5}
        />
        <CustomCardTwo
          name="Classic Dice"
          balance="$ 5346362"
          img={customCardd6}
        />
        <CustomCardTwo
          name="Classic Dice"
          balance="$ 5346362"
          img={customCardd7}
        />
        <CustomCardTwo
          name="Classic Dice"
          balance="$ 5346362"
          img={customCardd8}
        />
        <CustomCardTwo
          name="Classic Dice"
          balance="$ 5346362"
          img={customCardd1}
        />
        <CustomCardTwo
          name="Classic Dice"
          balance="$ 5346362"
          img={customCardd2}
        />
        <CustomCardTwo
          name="Classic Dice"
          balance="$ 5346362"
          img={customCardd3}
        />
        <CustomCardTwo
          name="Classic Dice"
          balance="$ 5346362"
          img={customCardd4}
        />
        <CustomCardTwo
          name="Classic Dice"
          balance="$ 5346362"
          img={customCardd5}
        />
        <CustomCardTwo
          name="Classic Dice"
          balance="$ 5346362"
          img={customCardd6}
        />
        <CustomCardTwo
          name="Classic Dice"
          balance="$ 5346362"
          img={customCardd7}
        />
        <CustomCardTwo
          name="Classic Dice"
          balance="$ 5346362"
          img={customCardd8}
        />
        <CustomCardTwo
          name="Classic Dice"
          balance="$ 5346362"
          img={customCardd1}
        />
        <CustomCardTwo
          name="Classic Dice"
          balance="$ 5346362"
          img={customCardd2}
        />
        <CustomCardTwo
          name="Classic Dice"
          balance="$ 5346362"
          img={customCardd3}
        />
        <CustomCardTwo img={customCardd4} />
      </CustomCarousal>
      <Box
        sx={{
          textAlign: "right",
          padding: "30px 33px",
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <Typography
          sx={{
            fontSize: "24px",
            textTransform: "uppercase",
            fontWeight: "700",
            lineHeight: "40px",
            letterSpacing: "1px",
            textAlign: "left",
            color: "white",
          }}
        >
          Slot
        </Typography>
        <Box>
          <IconButton
            hover={{ background: "#FFFFFF33" }}
            sx={{ color: "white", marginRight: "8px", background: "#FFFFFF33" }}
            onClick={() => sliderFour?.current?.slickPrev()}
          >
            <KeyboardBackspaceIcon />
          </IconButton>
          <Typography
            sx={{
              color: "rgba(240, 75, 43, 1)",
              textDecoration: "underline",
              paddingRight: "6px",
            }}
            variant="span"
          >
            Show all 24{" "}
            <Typography
              sx={{
                color: "white",
                textDecoration: "underline",
                textTransform: "uppercase",
              }}
              variant="span"
            >
              Games
            </Typography>
          </Typography>
          <IconButton
            sx={{ color: "white", background: "#FFFFFF33" }}
            onClick={() => sliderFour?.current?.slickNext()}
          >
            <ArrowRightAltIcon />
          </IconButton>
        </Box>
      </Box>
      <CustomCarousal
        sx={{ padding: "10px 35px" }}
        carousalRef={sliderFour}
        settingCard={settingCardFour}
      >
        <CustomCardTwo
          name="Mr SCHEMER"
          balance="$ 5346362"
          img={ultimate}
        />
        <CustomCardTwo
          name="Mr SCHEMER"
          balance="$ 5346362"
          img={customCardd}
        />
        <CustomCardTwo
          name="Mr SCHEMER"
          balance="$ 5346362"
          img={customCardd3}
        />
        <CustomCardTwo
          name="Mr SCHEMER"
          balance="$ 5346362"
          img={customCardd4}
        />
        <CustomCardTwo
          name="Mr SCHEMER"
          balance="$ 5346362"
          img={customCardd5}
        />
        <CustomCardTwo
          name="Mr SCHEMER"
          balance="$ 5346362"
          img={customCardd6}
        />
        <CustomCardTwo
          name="Mr SCHEMER"
          balance="$ 5346362"
          img={customCardd7}
        />
        <CustomCardTwo
          name="Mr SCHEMER"
          balance="$ 5346362"
          img={customCardd8}
        />
        <CustomCardTwo
          name="Mr SCHEMER"
          balance="$ 5346362"
          img={customCardd5}
        />
        <CustomCardTwo
          name="Mr SCHEMER"
          balance="$ 5346362"
          img={customCardd6}
        />
        <CustomCardTwo
          name="Mr SCHEMER"
          balance="$ 5346362"
          img={customCardd7}
        />
        <CustomCardTwo
          name="Mr SCHEMER"
          balance="$ 5346362"
          img={customCardd8}
        />
        <CustomCardTwo img={customCardd1} />
        <CustomCardTwo
          name="Mr SCHEMER"
          balance="$ 5346362"
          img={customCardd2}
        />
        <CustomCardTwo
          name="Mr SCHEMER"
          balance="$ 5346362"
          img={customCardd3}
        />
        <CustomCardTwo
          name="Mr SCHEMER"
          balance="$ 5346362"
          img={customCardd4}
        />
      </CustomCarousal>

      <Box
        sx={{
          textAlign: "right",
          padding: "30px 33px",
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <Typography
          sx={{
            fontSize: "24px",
            textTransform: "uppercase",
            fontWeight: "700",
            lineHeight: "40px",
            letterSpacing: "1px",
            textAlign: "left",
            color: "white",
          }}
        >
          Game Provider
        </Typography>
        <Box>
          <IconButton
            hover={{ background: "#FFFFFF33" }}
            sx={{ color: "white", marginRight: "8px", background: "#FFFFFF33" }}
            onClick={() => sliderSix?.current?.slickPrev()}
          >
            <KeyboardBackspaceIcon />
          </IconButton>
          <Typography
            sx={{
              color: "rgba(240, 75, 43, 1)",
              textDecoration: "underline",
              paddingRight: "6px",
            }}
            variant="span"
          >
            Show all 24{" "}
            <Typography
              sx={{
                color: "white",
                textDecoration: "underline",
                textTransform: "uppercase",
              }}
              variant="span"
            >
              Games
            </Typography>
          </Typography>
          <IconButton
            sx={{ color: "white", background: "#FFFFFF33" }}
            onClick={() => sliderSix?.current?.slickNext()}
          >
            <ArrowRightAltIcon />
          </IconButton>
        </Box>
      </Box>
      <CustomCarousal
        sx={{ padding: "10px 35px" }}
        carousalRef={sliderSix}
        settingCard={settingCardFive}
      >
        <CustomCardThree
          name="Mr SCHEMER"
          balance="$ 5346362"
          img={gameProvider1}
          marginRight='20px'
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
          padding: "30px 33px",
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <Typography
          sx={{
            fontSize: "24px",
            fontWeight: "700",
            lineHeight: "40px",
            letterSpacing: "1px",
            textAlign: "left",
            color: "white",
            textTransform: "uppercase",
          }}
        >
          Top Rated Games
        </Typography>
        <Box>
          <IconButton
            hover={{ background: "#FFFFFF33" }}
            sx={{ color: "white", marginRight: "8px", background: "#FFFFFF33" }}
            onClick={() => sliderSeven?.current?.slickPrev()}
          >
            <KeyboardBackspaceIcon />
          </IconButton>
          <IconButton
            sx={{ color: "white", background: "#FFFFFF33" }}
            onClick={() => sliderSeven?.current?.slickNext()}
          >
            <ArrowRightAltIcon />
          </IconButton>
        </Box>
      </Box>
      <CustomCarousal
        sx={{ padding: "10px 35px" }}
        carousalRef={sliderSeven}
        settingCard={settingCardTwo}
      >
        <CustomCardTwo
          name="Mr SCHEMER"
          balance="$ 5346362"
          img={customCardd7}
        />
        <CustomCardTwo
          name="Mr SCHEMER"
          balance="$ 5346362"
          img={customCardd8}
        />
        <CustomCardTwo
          name="Mr SCHEMER"
          balance="$ 5346362"
          img={customCardd9}
        />
        <CustomCardTwo
          name="Mr SCHEMER"
          balance="$ 5346362"
          img={customCardd6}
        />
        <CustomCardTwo
          name="Mr SCHEMER"
          balance="$ 5346362"
          img={customCardd7}
        />
        <CustomCardTwo
          name="Mr SCHEMER"
          balance="$ 5346362"
          img={customCardd8}
        />
        <CustomCardTwo
          name="Mr SCHEMER"
          balance="$ 5346362"
          img={customCardd}
        />
        <CustomCardTwo
          name="Mr SCHEMER"
          balance="$ 5346362"
          img={customCardd2}
        />
      </CustomCarousal>
      <Network />
      
    </section>
  );
}
