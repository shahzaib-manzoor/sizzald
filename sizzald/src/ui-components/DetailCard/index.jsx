import Box from "@mui/material/Box";
import detailCard from "../../assets/detailCard.png";
import { Typography } from "@mui/material";
import ButtonDetailedCard from "./ButtonDetailedCard";
import feedback from "../../assets/feedback.png";

const DetailedCard = () => {
  return (
    <Box sx={{ display: "flex", gap: "10px", padding: "20px 33px" }}>
      <Box
        sx={{
          width: "50%",
          position: "relative",
          background: "rgba(43, 45, 80, 0.6)",
          borderRadius: "8px",
          padding: "10px 20px",
        }}
      >
        <Typography
          sx={{
            fontSize: "24px",
            fontWeight: "700",
            lineHeight: "40px",
            letterSpacing: "1px",
            textAlign: "left",
            fontFamily: "Poppins",
            color: "#ffffff",
            paddingTop: "4px",
            paddingBottom: "8px",
          }}
        >
          Crypto Online Casino
        </Typography>

        <Typography
          variant="h6"
          sx={{
            fontSize: {
              xs: "16px",
              sm: "16px",
              md: "16x",
              lg: "15px",
              xl: "20px",
            },
            color: "white",
          }}
        >
          Casinos online have not always been around, but we can safely say that
          online casinos have been used a lot since they came on the market. And
          it's not in short demand nor options, and now in 2022, we have 1000s
          and 1000s to pick from – it's just a matter of what you like and what
          payment options you would like to see at the casino.
        </Typography>
        <Box>
          <Box>
            <Typography
              variant="h6"
              sx={{
                fontSize: {
                  xs: "16px",
                  sm: "16px",
                  md: "16x",
                  lg: "15px",
                  xl: "20px",
                },
                color: "white",
                whiteSpace: "pre-line",
              }}
            >
              {` Players are always looking for something 
             new, which will help make the gaming 
             experience so much better and more 
             accessible. Allowing the player to focus
             on the absolute fun of a casino, that's
             right,the games themselves.`}
            </Typography>
            <ButtonDetailedCard color="#8C57F5" />
          </Box>
          <Box
            sx={{
              position: "absolute",
              right: { lg: "0%", xl: "2.5%" },
              bottom: { lg: "1%", xl: "0.5%" },
              width: { lg: "40%", xl: "43%" },
            }}
          >
            <img
              style={{ height: "100%", width: "100%", objectFit: "contain" }}
              src={detailCard}
              alt="Detail Card"
            />
          </Box>
        </Box>
      </Box>
      <Box
        sx={{
          width: "50%",
          padding: { xs: "10px 15px", lg: "15px 15px", xl: "20px 25px" },
          background: "rgba(43, 45, 80, 0.6)",
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
            paddingBottom: "20px",
            textTransform: "uppercase",
          }}
          variant="h6"
        >
          Help us to improve Your Experience
        </Typography>
        <input
          className="InputMedia"
          style={{
            height: "29%",
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
                paddingTop: { xs: "5px", md: "20px", lg: "20px", xl: "62px" },
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
          <Box
            sx={{
              position: "absolute",
              right: "0",
              bottom: "0",
              display: { xs: "none", sm: "none", md: "none", lg: "block" },
            }}
          >
            <img className="imgRight" src={feedback} alt="" />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default DetailedCard;
