import { Typography, Box } from "@mui/material";
import ButtonDetailedCard from "./ButtonDetailedCard";
import feedback from "../../assets/feedback.png";
function Feedback() {
  return (
    <Box
      sx={{
        padding: "10px 20px",
        background: "rgba(43, 45, 80, 1)",
        height: "90%",
        borderRadius: "8px",
      }}
    >
      <Typography
        sx={{
          fontFamily: "Poppins",
          fontSize: "24px",
          fontWeight: "700",
          lineHeight: "40px",
          letterSpacing: "1px",
          textAlign: "left",
          color: "white",
          paddingBottom: "10px",
        }}
        variant="h6"
      >
        Help us to improve Your Experience
      </Typography>
      <input
        style={{
          height: "170px",
          width: "95%",
          outline: "none",
          border: "none",
          background: " rgba(1, 2, 47, 1)",
          borderRadius: "5px",
          color: "white",
          boxShadow: "0px 0px 6px 0px rgba(95, 95, 111, 1)",
        }}
      />
      <Box sx={{ display: "flex", alignItems: "flex-end" }}>
        <Box>
          <Typography
            sx={{
              fontSize: "16px",
              fontWeight: "400",
              lineHeight: "28px",
              letterSpacing: "0.01em",
              textAlign: "left",
              color: "white",
              padding: "20px 0px",
            }}
          >
            Now get rewarded for your valuable feedback.
          </Typography>
          <ButtonDetailedCard color="rgba(49, 167, 57, 1)" />
          <Typography
            sx={{
              color: "white ",
              fontWeight: "600",
              fontSize: "16px",
              padding: "15px 0px",
            }}
            variant="h6"
          >
            Or Email us:
            <Typography
              sx={{
                color: "rgba(3, 251, 117, 1)",
                fontWeight: "400",
                paddingLeft: "5px",
              }}
              variant="span"
            >
              feedback@Sizzldgame.com
            </Typography>
          </Typography>
        </Box>
        <Box>
          <img style={{ height: "100px" }} src={feedback} alt="" />
        </Box>
      </Box>
    </Box>
  );
}

export default Feedback;
