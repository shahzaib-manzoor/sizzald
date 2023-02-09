import { Box, Typography, Button, IconButton } from "@mui/material";
import arrowGreenDown from "../../assets/arrowGreenDown.svg";
import medal from "../../assets/medal.svg";
import arrowRewardRight from "../../assets/arrowRewardRight.svg";
import arrowRewardLeft from "../../assets/arrowRewardLeft.svg";
import cash from "../../assets/cash.svg";
import cash2 from "../../assets/cash2.png";
import RightImg from "../../assets/RightImg.svg";
import Table from "./TableAffiliate";

import CallMadeIcon from "@mui/icons-material/CallMade";

function AffiliateReward() {
  return (
    <Box>
      <Typography
        sx={{
          fontFamily: "Poppins",
          fontSize: "24px",
          fontWeight: "400",
          lineHeight: "40px",
          letterSpacing: "1px",
          textAlign: "center",
          color: "rgba(3, 251, 117, 1)",
          
        }}
      >
        AFFILIATE
        <Typography
          variant="span"
          sx={{
            color: "#ffffff",
            fontFamily: "Poppins",
            fontSize: "24px",
            fontWeight: "400",
            lineHeight: "40px",
            letterSpacing: "1px",
            textAlign: "center",
            paddingLeft:"10px"
          }}
        >
          REWARD SYSTEM
        </Typography>
      </Typography>
      <Typography
        sx={{
          fontFamily: "Poppins",
          fontSize: "15px",
          fontWeight: 600,
          lineHeight: "26px",
          letterSpacing: "0.01em",
          textAlign: "center",
          width: "58%",
          margin: "0 auto",
          color: "#ffffff",
          padding: "15px",
        
        }}
      >
        BC.GAME sets up a reward of 1000 USD for each referral you invite in
        addition to commission. Click "Create Referral Code Now" and set sail on
        a new chapter on your journey of wealth immediately!
      </Typography>
      <Box sx={{ textAlign: "center",padding:"15px 0px" }}>
        <img style={{ margin: "0 auto" }} src={arrowGreenDown} alt="" />
        <Box sx={{ display: "flex", position: "relative" }}>
          <img
            className="arrowPosition"
            // style={{ position: "absolute", top: "50%", left: "13%" }}
            src={arrowRewardLeft}
            alt=""
          />
          <Box
            sx={{
              // marginTop: "15px",
              margin: "15px auto",
              background: "rgba(43, 45, 80, 0.6)",
              padding: "20px 0px",
              width: "26%",
              borderRadius: "8px",
            }}
          >
            <img style={{height:"60px"}} src={medal} alt="" />
            <Typography
              sx={{
                padding: "0 20px",
                fontFamily: "Poppins",
                fontSize: "26px",
                fontWeight: "400",
                lineHeight: " 40px",
                letterSpacing: "1px",
                textAlign: "center",
                color: "white",
              }}
            >
              Affiliate Rewards
            </Typography>
          </Box>
          <img
            // style={{ position: "absolute", top: "50%", right: "13%" }}
            className="arrowPositionRight"
            src={arrowRewardRight}
            alt=""
          />
        </Box>
      </Box>
      <Box sx={{ display: "flex", gap: "15px", paddingTop: "112px" }}>
        <Box
          sx={{
            width: "50%",
            borderRadius: "8px",
            background: "rgba(43, 45, 80, 0.6) ",
          }}
        >
          <Box
            sx={{
              padding: "25px 20px",
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <Box>
              <Typography
                sx={{
                  fontFamily: "Poppins",
                  fontSize: { lg: "22px", xl: "26px" },
                  fontStyle: "italic",
                  fontWeight: 400,
                  lineHeight: "40px",
                  letterSpacing: "1px",
                  textAlign: "left",
                  color: "rgba(3, 251, 117, 1)",
                }}
              >
                USD REWARDS
              </Typography>
              <Typography
                sx={{
                  fontFamily: "Poppins",
                  fontSize: { lg: "12px", xl: "14px" },
                  fontWeight: 700,
                  lineHeight: "26px",
                  letterSpacing: "0.08em",
                  textAlign: "left",
                  color: "white",
                  paddingTop: "10px",
                }}
              >
                Every friend you invite will get <br /> you
              </Typography>
              <Box sx={{ display: "flex", alignItems: "center" }}>
                <Typography
                  sx={{
                    color: "rgba(251, 179, 21, 1)",
                    fontFamily: "Poppins",
                    fontSize: { lg: "19px", xl: "26px" },
                    fontStyle: "italic",
                    fontWeight: 400,
                    lineHeight: "40px",
                    letterSpacing: "1px",
                    textAlign: "left",
                  }}
                >
                  $1,000.00
                </Typography>
                <Button
                  sx={{
                    background: "rgba(1, 210, 97, 1)",
                    borderRadius: "50px",
                    boxShadow: "0px 4px 4px 0px rgba(5, 5, 5, 0.25)",
                    // marginTop: { sx: "10px", lg: "10px", xl: "30px" },
                    padding: "5px 10px",
                    height: "44px",
                    // marginLeft: "7px",
                    fontFamily: "Poppins",
                    fontSize: { lg: "10px", xl: "12px" },
                    fontWeight: "500",
                    letterSpacing: "0.01em",
                    textAlign: "left",
                    marginLeft: "20px",
                  }}
                  variant="contained"
                >
                  USD REWARD RULES
                  <IconButton sx={{ background: "white", marginLeft: "20px" }}>
                    <CallMadeIcon sx={{ fontSize: "10px" }} />
                  </IconButton>
                </Button>
              </Box>
            </Box>
            <Box>
              <img src={cash} alt="" />
            </Box>
          </Box>
          <Box sx={{ padding: "0px 30px" }}>
            <Table />
          </Box>
        </Box>
        <Box
          sx={{
            width: "50%",
            borderRadius: "8px",
            background: "rgba(43, 45, 80, 0.6) ",
          }}
        >
          <Box
            sx={{
              padding: "30px 20px",
              display: "flex",
            }}
          >
            <Box sx={{ width: "65%" }}>
              <Typography
                sx={{
                  fontFamily: "Poppins",
                  fontSize: { lg: "22px", xl: "26px" },
                  fontStyle: "italic",
                  fontWeight: 400,
                  lineHeight: "40px",
                  letterSpacing: "1px",
                  textAlign: "left",
                  color: "rgba(3, 251, 117, 1)",
                  paddingBottom: "10px",
                }}
                variant="h6"
              >
                COMMISSION REWARDS
              </Typography>
              <Typography
                sx={{
                  width:"90%",
                  fontFamily: "Poppins",
                  fontSize: { lg: "12px", xl: "14px" },
                  fontWeight: 700,
                  lineHeight: "26px",
                  letterSpacing: "0.01em",
                  textAlign: "left",
                  color: "white",
                }}
                variant="h6"
              >
                Every friend you invite will rebate you a percentage of their
                wagers as your commission and will be credited directly to your
                balance.
              </Typography>
            </Box>
            <img style={{ width: "30%", height: "60%" }} src={cash2} alt="" />
          </Box>
          <Box
            sx={{
              // width: "97%",
              background: "#01022F",
              width: "90%",
              height: "450px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              margin: "0 auto",
              borderRadius: "8px",
              marginBottom: "20px",
              marginTop:"13px"
            }}
          >
            <img style={{ width: "75%" }} src={RightImg} alt="" />
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default AffiliateReward;
