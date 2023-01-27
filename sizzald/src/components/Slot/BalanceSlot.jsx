import { Box, Typography } from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import ButtonDetailedCard from "../../ui-components/DetailCard/ButtonDetailedCard";

function BalanceSlot() {
  return (
    <Box
      sx={{
        margin: "0px 33px",
        color: "#ffffff",
        background: "#2B2D50",
        padding: "30px 30px",
        borderRadius: "4px",
        display: "flex",
        justifyContent: "space-between",
      }}
    >
      <Box sx={{ width: "45%" }}>
        <Box sx={{ display: "flex", alignItems: "flex-start" }}>
          <ArrowForwardIcon sx={{ fontSize: "35px", paddingRight: "15px" }} />
          <Box>
            <Typography
              sx={{
                fontFamily: "Poppins",
                color: "#ffffff",
                fontSize: "30px",
                fontWeight: "700",
                lineHeight: "40px",
                letterSpacing: "1px",
                textAlign: "left",
              }}
            >
              What Is sCL?
            </Typography>
            <Typography
              sx={{
                fontFamily: "Poppins",
                fontSize: "16px",
                fontWeight: "400",
                lineHeight: "23px",
                letterSpacing: "0.01em",
                textAlign: "left",
                paddingTop: "10px",
              }}
            >
              SCL (BC Lottery) is a token created by sIzzld.GAME for players who
              love the Lottery. You can use SCL to redeem lottery tickets in the
              Lottery at any time, 1 BCL = 1 lottery ticket.
            </Typography>
          </Box>
        </Box>
        <Box
          sx={{
            display: "flex",
            alignItems: "flex-start",
            padding: "30px 0px",
          }}
        >
          <ArrowForwardIcon sx={{ fontSize: "35px", paddingRight: "15px" }} />
          <Box>
            <Typography
              sx={{
                fontFamily: "Poppins",
                color: "#ffffff",
                fontSize: "30px",
                fontWeight: "700",
                lineHeight: "40px",
                letterSpacing: "1px",
                textAlign: "left",
              }}
            >
              How to get SCL?
            </Typography>
            <Typography
              sx={{
                fontFamily: "Poppins",
                fontSize: "16px",
                fontWeight: "400",
                lineHeight: "23px",
                letterSpacing: "0.01em",
                textAlign: "left",
                paddingTop: "10px",
              }}
            >
              SCL ( Sizzld Lottery) is a token created by sIzzld.GAME for
              players who love the Lottery. You can use SCL to redeem lottery
              tickets in the Lottery at any time, 1 BCL = 1 lottery ticket.
            </Typography>
          </Box>
        </Box>
        <Box
          sx={{
            display: "flex",
            alignItems: "flex-start",
            padding: "30px 0px",
          }}
        >
          <ArrowForwardIcon sx={{ fontSize: "35px", paddingRight: "15px" }} />
          <Box>
            <Typography
              sx={{
                fontFamily: "Poppins",
                color: "#ffffff",
                fontSize: "30px",
                fontWeight: "700",
                lineHeight: "40px",
                letterSpacing: "1px",
                textAlign: "left",
              }}
            >
              Can I gift SCL to others?
            </Typography>
            <Typography
              sx={{
                fontFamily: "Poppins",
                fontSize: "16px",
                fontWeight: "400",
                lineHeight: "23px",
                letterSpacing: "0.01em",
                textAlign: "left",
                paddingTop: "10px",
              }}
            >
              Of course, you can send BCL to other players through the Tip
              function.
            </Typography>
          </Box>
        </Box>
      </Box>
      <Box sx={{ width: "45%" }}>
        <Typography
          sx={{
            fontFamily: "Poppins",
            color: "#ffffff",
            fontSize: "30px",
            fontWeight: "700",
            lineHeight: "40px",
            letterSpacing: "1px",
            textAlign: "left",
          }}
        >
          Your BCL Balance:
        </Typography>
        <Box
          sx={{
            width: "90%",
            marginTop: "40px",
            background: "#01022F",
            borderRadius: "12px",
            paddingTop: "25px",
            boxShadow: "0px 0px 6px #5F5F6F",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-around",
          }}
        >
          <input
            style={{
              margin: "40px auto",
              borderRadius: "8px",
              height: "100px",
              width: "80%",
              background: "rgba(25, 26, 64, 1)",
              outline: "none",
              border: "none",
              boxShadow: "0px 0px 6px 0px rgba(95, 95, 111, 1)",
              color: "white",
            }}
            type="text"
          />
          <Box
            sx={{
              width: "100%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              marginBottom: "70px",
            }}
          >
            <Box sx={{ paddingRight: "30px" }}>
              <ButtonDetailedCard color="#5842F4" margin="25px 10px" />
            </Box>
            <ButtonDetailedCard color="#F8D82F" margin="25px 10px" />
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default BalanceSlot;
