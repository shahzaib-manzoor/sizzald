import { Box, Typography } from "@mui/material";
import advertisment1 from "../../assets/advertisment1.svg";
import advertisment2 from "../../assets/advertisment2.svg";

function EarningCard() {
  return (
    <Box sx={{ padding: "30px 0px" }}>
      <Typography
        sx={{
          fontFamily: "Poppins",
          fontSize: "30px",
          fontWeight: 400,
          lineHeight: "40px",
          letterSpacing: "1px",
          textAlign: "left",
          color: "rgba(255, 255, 255, 1)",
          paddingBottom: "20px",
        }}
      >
        START EARNING TODAY
      </Typography>
      <Box sx={{ display: "flex", gap: 3 }}>
        <Box
          sx={{
            width: "50%",
            background: "rgba(43, 45, 80, 0.6)",
            borderRadius: "8px",
            padding: "15px 20px",
            position: "relative",
          }}
        >
          <Typography
            sx={{
              fontFamily: "Poppins",
              fontSize: { lg: "20px", xl: "30px" },
              fontStyle: "italic",
              fontWeight: 400,
              lineheight: "40px",
              letterSpacing: "1px",
              textAlign: "left",
              color: "rgba(3, 251, 117, 1)",
              textTransform: "uppercase",
              paddingBottom: "15px",
            }}
          >
            Build Your Own <br /> Casino Club <br /> Quickly.
          </Typography>
          <Typography
            sx={{
              padding: "15px 0px",
              fontFamily: "Poppins",
              fontSize: { lg: "15px", xl: "18px" },
              fontWeight: "700",
              lineHeight: "26px",
              letterSpacing: "0.01em",
              textAlign: "left",
              color: "#ffff",
            }}
          >
            It's hard to build a casino, but you can <br /> start from managing
            your own table on <br /> SIZZLD.GAME.
          </Typography>
          <Typography
            sx={{
              fontFamily: "Poppins",
              fontSize: { lg: "15px", xl: "18px" },
              fontWeight: "700",
              lineHeight: "26px",
              letterSpacing: "0.01em",
              textAlign: "left",
              color: "#ffff",
              paddingBottom: "20px",
            }}
          >
            SIZZLD.GAME is not just games, it’s a platform to realize the
            potential of your hidden dreams. Join SIZZLD.GAME and set sail on a
            new chapter in your wealth journey immediately!
          </Typography>
          <img className="imgAdvertisment" src={advertisment1} alt="" />
        </Box>
        <Box
          sx={{
            width: "50%",
            background: "rgba(43, 45, 80, 0.6)",
            borderRadius: "8px",
            padding: "15px 20px",
            position: "relative",
          }}
        >
          <Typography
            sx={{
              fontFamily: "Poppins",
              fontSize: { lg: "20px", xl: "30px" },
              fontStyle: "italic",
              fontWeight: 400,
              lineheight: "40px",
              letterSpacing: "1px",
              textAlign: "left",
              color: "rgba(3, 251, 117, 1)",
              textTransform: "uppercase",
              paddingBottom: "15px",
            }}
          >
            Build A Casino Website <br /> With Your Own <br /> Domain.
          </Typography>
          <Typography
            sx={{
              padding: "15px 0px",
              fontFamily: "Poppins",
              fontSize: { lg: "15px", xl: "18px" },
              fontWeight: "700",
              lineHeight: "26px",
              letterSpacing: "0.01em",
              textAlign: "left",
              color: "#ffff",
            }}
          >
            If you got your own plan. you can set up a casino website with your
            own domain, design style and theme. If you are capable to invite
            players and their wager amount reaches a billion dollars and above,
            you will be able to get your own customized casino!
          </Typography>
          <Typography
            sx={{
              fontFamily: "Poppins",
              fontSize: { lg: "15px", xl: "18px" },
              fontWeight: "700",
              lineHeight: "26px",
              letterSpacing: "0.01em",
              textAlign: "left",
              color: "#ffff",
              paddingBottom: "20px",
            }}
          >
            Contact
            <Typography
              sx={{
                fontFamily: "Poppins",
                fontSize: { lg: "15px", xl: "18px" },
                fontWeight: "700",
                lineHeight: "26px",
                letterSpacing: "0.01em",
                textAlign: "left",
                color: "rgba(3, 251, 117, 1)",
                padding: "0px 10px",
              }}
              variant="span"
            >
              Affiliate@Sizzld.game
            </Typography>
            for more <br /> details
          </Typography>
          <img className="imgAdvertisment2" src={advertisment2} alt="" />
        </Box>
      </Box>
    </Box>
  );
}

export default EarningCard;
