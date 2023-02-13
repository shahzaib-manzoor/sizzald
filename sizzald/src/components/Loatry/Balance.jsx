import { Box, Typography } from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import ButtonDetailedCard from "../../ui-components/DetailCard/ButtonDetailedCard";
function BalanceSlot() {
  return (
    <Box
      sx={{
        // margin: "0px 33px",
        color: "#FFFFFF",
        background: "rgba(43, 45, 80, 0.6)",
        // padding: "30px 30px",
        borderRadius: "4px",
        display: "flex",
        justifyContent: "space-between",
        width:'98.5%',mt:'40px',
        marginBottom:'20px'
      }}
    >
      <Box sx={{ width: "45%" ,paddingLeft:'20px',paddingTop:'20px'}}>
        <Box sx={{ display: "flex", alignItems: "flex-start" }}>
          <ArrowForwardIcon sx={{ fontSize: "25px", paddingRight: "15px",paddingTop:"7px" }} />
          <Box>
            <Typography
              sx={{
                fontFamily: "Poppins",
                color: "#FFFFFF",
                fontSize: "23px",
                fontWeight: "700",
                lineHeight: "40px",
                letterSpacing: "1px",
                textAlign: "left",
                textTransform:"uppercase"
              }}
            >
              What Is sCL?
            </Typography>
            <Typography
              sx={{
                fontFamily: "Poppins",
                fontSize: "13px",
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
          <ArrowForwardIcon sx={{fontSize: "25px", paddingRight: "15px",paddingTop:"7px" }} />
          <Box>
            <Typography
              sx={{
                fontFamily: "Poppins",
                color: "#FFFFFF",
                fontSize: "23px",
                fontWeight: "700",
                lineHeight: "40px",
                letterSpacing: "1px",
                textAlign: "left",
                textTransform:"uppercase"
              }}
            >
              How to get SCL?
            </Typography>
            <Typography
              sx={{
                fontFamily: "Poppins",
                fontSize: "13px",
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
          <ArrowForwardIcon sx={{ fontSize: "25px", paddingRight: "15px",paddingTop:"7px" }} />
          <Box>
            <Typography
              sx={{
                fontFamily: "Poppins",
                color: "#FFFFFF",
                fontSize: "23px",
                fontWeight: "700",
                lineHeight: "40px",
                letterSpacing: "1px",
                textAlign: "left",
                textTransform:"uppercase"
              }}
            >
              Can I gift SCL to others?
            </Typography>
            <Typography
              sx={{
                fontFamily: "Poppins",
                fontSize: "13px",
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
      <Box sx={{ width: "45%" ,padding:'20px 0'}}>
        <Typography
          sx={{
            fontFamily: "Poppins",
            color: "#FFFFFF",
            fontSize: "23px",
            fontWeight: "700",
            lineHeight: "40px",
            letterSpacing: "1px",
            textAlign: "left",
            textTransform:"uppercase"
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
              color: "rgba(188, 188, 188, 1)",
              padding:"0px 15px"
            }}
            type="text"
            value="00.000"
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










