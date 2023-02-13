import { Box, Typography, Button } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
function LotteryInfo() {
  return (
    <Box sx={{  display: "flex", gap: "15px",width:'98.6%',mt:'40px'}}>
      <Box
        sx={{
          width: "50%",
          background: "rgba(43, 45, 80, 0.6)",
          borderRadius: "5px",
          padding: "25px 20px",
        }}
      >
        <Typography
          sx={{
            fontFamily: "Poppins",
            fontSize: "20px",
            fontWeight: "700",
            lineHeight: "40px",
            letterSpacing: "1px",
            textAlign: "left",
            color: "#FFFFFF",
            textTransform:"uppercase"
          }}
          variant="h6"
        >
          Lottery Instructions:
        </Typography>
        <Typography
          sx={{
            fontFamily: "Poppins",
            fontSize: "13px",
            fontWeight: "400",
            lineHeight: "28px",
            letterSpacing: "0.01em",
            textAlign: "left",
            color: "white",
            padding: "10px 0px",
          }}
        >
          A provably fair algorithm is used to draw the lottery prizes. <br />
          Prizes are drawn at 15:00 UTC+0 everyday. <br /> You can buy a ticket
          for $0.1. The sale of tickets stop at 14:55 UTC+0 everyday. <br /> The
          player chooses six numbers for each ticket, the first five are from 1
          to 36, and the last one is from 1 to 10. <br /> You can choose numbers
          manually or automatically. <br /> If you have BCL, you can use BCL to
          redeem Tickets. <br /> Each draw produces six numbers. <br /> The more
          numbers you match in the first five numbers, greater prize you will
          win.
        </Typography>
      </Box>
      <Box
        sx={{
          width: "50%",
          background: "rgba(43, 45, 80, 0.6) ",
          borderRadius: "5px",
          padding: "25px 20px",
        }}
      >
        <Typography
          sx={{
            fontFamily: "Poppins",
            fontSize: "20px",
            fontWeight: "700",
            lineHeight: "40px",
            letterSpacing: "1px",
            textAlign: "left",
            color: "#FFFFFF",
            textTransform:"uppercase"
          }}
          variant="h6"
        >
          Winning Prize Details:
        </Typography>
        <Typography
          sx={{
            fontFamily: "Poppins",
            fontSize: "13px",
            fontWeight: "300",
            lineHeight: "28px",
            letterSpacing: "0.01em",
            textAlign: "left",
            color: "white",
            padding: "10px 0px",
          }}
        >
          All six numbers matched: $100,000 prize. In case you are not the only
          winner, you may need to share the prize equally with others. <br />{" "}
          Five numbers matched, and the sixth number is missed: Each ticket gets
          a $3,000 prize. <br /> Four of the first 5 numbers matched: Each
          ticket gets a $20 prize. <br /> Three of the first 5 numbers matched:
          Each ticket gets a $1 prize. <br /> If all six numbers are missed, the
          lottery will be reserved for free, and continue participating in the
          next day's draw.
        </Typography>
        <Button
          sx={{
            marginTop: "10px",
            fontFamily: "Poppins",
            fontSize: "13px",
            fontWeight: "600",
            lineHeight: "24px",
            textAlign: "left",
            textTransform: "capitalize",
            borderRadius: "80px",
            padding: "10px 15px",
            background: "#00B252",
            marginRight:"40px"
          }}
          variant="contained"
          endIcon={
            <ArrowForwardIcon
              sx={{
                padding: "2px",
                background: "#FFFFFF",
                color: "#03FB75",
                borderRadius: "50%",
                fontSize:"2px"
                
              }}
            />
          }
        >
          Buy Tickets Now
        </Button>
      </Box>
    </Box>
  );
}
export default LotteryInfo;