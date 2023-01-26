import { Typography, Box } from "@mui/material";
import ButtonDetailedCard from "./ButtonDetailedCard";
import feedback from "../../assets/feedback.png";
function Feedback() {
  return (
    <Box
      sx={{
        padding: { xs: "10px 15px", lg: "15px 15px" },
        background: "rgba(43, 45, 80, 1)",
        height: {xs:"95%",sm:"98%",md:"98%",lg:"100%"},
        borderRadius: "8px",
        marginTop: { xs: "15px", md: "0px" },
        position: "relative",
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
          height: "273px",
          width: "100%",
          outline: "none",
          border: "none",
          background: " rgba(1, 2, 47, 1)",
          borderRadius: "5px",
          color: "white",
          boxShadow: "0px 0px 6px 0px rgba(95, 95, 111, 1)",
        }}
      />
      <Box>
        <Box>
          <Typography
            sx={{
              fontSize: "16px",
              fontWeight: "400",
              lineHeight: "28px",
              letterSpacing: "0.01em",
              textAlign: "left",
              color: "white",
              padding: { xs: "5px 0px", md: "30px 0px" },
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
              paddingTop: { xs: "5px", md: "20px" },
              paddingBottom: { xs: "10px", md: "0px" },
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
        <Box sx={{ position: "absolute", right: "0", bottom: 0,display:{xs:"none",sm:"none",md:"none",lg:"block"}}}>
          <img style={{ height: "100px" }} src={feedback} alt="" />
        </Box>
      </Box>
    </Box>
  );
}

export default Feedback;
