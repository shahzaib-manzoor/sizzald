import {
  Avatar,
  Box,
  Button,
  ButtonGroup,
  styled,
  Typography,
} from "@mui/material";
// import SideBar from '../../layout/SideBar/SideBar'
import Card from "../../layout/SideBar/Card";
// import Card from "../../layout/SideBar/Card";

import DropDowns from "../../layout/SideBar/DropDowns";
import spinImage from "../../assets/Frame.svg";
import piggy from "../../assets/piggy.svg";
import firstCard from "../../assets/firstCard.png";
import fourCardImage from "../../assets/fourCardImage.png";
import secondCard from "../../assets/secondCard.png";
import cardThird from "../../assets/cardThird.png";
import firstCardImage from "../../assets/firstCardImage.png";
import secondCardImage from "../../assets/secondCardImage.png";
import thirdCardImage from "../../assets/thirdCardImage.png";
import fiveCardImage from "../../assets/fiveCardImage.png";
import sixCardImage from "../../assets/sixCardImage.png";
import cardFour from "../../assets/cardFour.png";
import cardFive from "../../assets/cardFive.png";
import cardSix from "../../assets/cardSix.png";
import arrowplane from "../../assets/arrowplane.svg";
import group from "../../assets/group.svg";
import gold from "../../assets/gold.svg";
import spinner from "../../assets/spiner.svg";
import icon from "../../assets/coins.svg";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import {
  firstChild,
  flex,
  font,
  secondChild,
  style,
  vip,
} from "./Sidebarstyle";
import { SidebarData } from "./SideBardata";
import { height } from "@mui/system";

export default function SideBar() {
  //   const styles = {
  //     sidebar: {
  //         overflow: 'auto',
  //         '&::-webkit-scrollbar': {
  //             width: '0.4em',
  //             backgroundColor: 'rgba(0, 0, 0, 0.5)',
  //         },
  //         '&::-webkit-scrollbar-thumb': {
  //           backgroundColor: '#000000',
  //         },
  //     },
  // };
  const HiddenScroll = styled(Box)`
    ::-webkit-scrollbar {
      display: none;
    }
    -ms-overflow-style: none; /* IE and Edge */
    scrollbar-width: none; /* Firefox */
  `;
  return (
    <div style={{ position: "relative" }}>
      <HiddenScroll sx={style} className="child">
        <Box sx={firstChild}>
          <Box>
            <Box sx={flex}>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  marginLeft: "10px",
                }}
              >
                <Typography sx={vip}>My VIP </Typography>
                <Typography sx={{ color: "#ffffff", marginLeft: "5px" }}>
                  Perks{" "}
                </Typography>
              </Box>
              <Typography sx={font}>view all</Typography>
            </Box>
          </Box>

          {/* <Card/> */}
          <Box sx={{ display: "flex", flexDirection: "column" }}>
            <Box sx={{ display: "flex" }}>
              <Card
                text={"task"}
                img={firstCardImage}
                // background={"#4DF3E2"}
                backgroundImage={`url(${firstCard})`}
                unlocked={"unlocked"}
                // marginLeft={"8px"}
              />
              <Card
                text={"spin"}
                img={secondCardImage}
                // background={"#AD63F5"}
                backgroundImage={`url(${secondCard})`}
                unlocked={"unlocked"}
                marginRight={"10px"}
              />
            </Box>
            <Box sx={{ display: "flex", mt: "10px" }}>
              <Card
                text={"RAKEBACK"}
                img={thirdCardImage}
                // background={
                //   "linear-gradient(282.29deg, #F8D82F 0%, rgba(20, 22, 61, 0) 100%)"
                // }
                unlocked={"vip 14"}
                backgroundImage={`url(${cardThird})`}
              />
              <Card
                text={"rECHARGE"}
                img={fourCardImage}
                // background={"#03FB75"}
                unlocked={"vip 22"}
                marginRight={"10px"}
                backgroundImage={`url(${cardFour})`}
                // marginLeft={'10px'}
              />
            </Box>
            <Box sx={{ display: "flex", mt: "10px" }}>
              <Card
                text={"bONUSCODE"}
                img={fiveCardImage}
                // background={
                //   "linear-gradient(282.29deg, #F8D82F 0%, rgba(20, 22, 61, 0) 100%)"
                // }
                unlocked={"vip 22"}
                backgroundImage={`url(${cardFive})`}
                // marginLeft={'15px'}
              />
              <Card
                text={"bONUS"}
                img={sixCardImage}
                // background={
                //   "linear-gradient(282.29deg, #F8D82F 0%, rgba(20, 22, 61, 0) 100%)"
                // }
                unlocked={"vip 22"}
                marginRight={"10px"}
                backgroundImage={`url(${cardSix })`}
                // marginLeft={'13px'}
              />
            </Box>
          </Box>
        </Box>
        {/* second div */}
        <Box sx={secondChild}>
          <img
            src={icon}
            alt=""
            style={{ maxWidth: "100%", marginLeft: "15px" }}
          />
          <Typography
            sx={{
              color: "#FBB315",
              fontWeight: 900,
              textTransform: "capitalize",
            }}
          >
            Refer and Earn
          </Typography>
        </Box>
        {/* third child */}
        <Box
          sx={{
            // height: 'auto',
            borderRadius: "0px 8px 0px 0px",
            // height:'1500px'
            background: "rgba(43, 45, 80, 0.6)",
            paddingBottom: "80px",
          }}
        >
          {SidebarData.map((item, index) => {
            return (
              <>
                <DropDowns item={item} key={`index${index}`}></DropDowns>
              </>
            );
          })}
          <ButtonGroup
            sx={{
              borderRadius: "8px",
              border: "1px solid rgba(95, 95, 111, 0.6)",
              mt: "30px",
            }}
          >
            <Button
              sx={{
                background: " #01022F",
                borderRadius: "8px",
                width: "123px",
                height: "52px",
                color: "#ffffff",
              }}
            >
              <Avatar
                sx={{
                  background: "#ffffff",
                  marginRight: "5px",
                  width: "38%",
                  height: "35px",
                }}
              >
                <DarkModeOutlinedIcon sx={{ color: "black" }} />{" "}
              </Avatar>{" "}
              Dark
            </Button>
            <Button
              sx={{
                // background: '#2B2D50',
                borderRadius: "8px",
                width: "123px",
                height: "52px",
                color: "#ffffff",
                border: "1px solid rgba(95, 95, 111, 0.6)",
              }}
            >
              {" "}
              <LightModeOutlinedIcon
                sx={{ color: "#ffffff", marginRight: "10px" }}
              />{" "}
              Light
            </Button>
          </ButtonGroup>
        </Box>
        {/* button */}
      </HiddenScroll>
    </div>
  );
}
