import Box from "@mui/material/Box";
import detailCard from "../../assets/detailCard.png";
import { Typography } from "@mui/material";
import ButtonDetailedCard from "./ButtonDetailedCard";
import feedback from "../../assets/feedback.png";
import { useSelector } from 'react-redux';
import * as style from "./style";
const DetailedCard = () => {
  const { drawer } = useSelector((state) => state.layout);
  const detailCardImgStyle = !drawer ? {
    position: "absolute",
    right: { lg: "0.5%", xl: "2.5%" },
    bottom: { lg: "8%", xl: "0.5%" },
    width: { lg: "41%", xl: "45%" },
    height: { xl: "58%" },
  } : {
    position: "absolute",
    right: { lg: "7.5%", xl: "2.5%" },
    bottom: { lg: "0.5%", xl: "0.5%" },
    width: { lg: "41%", xl: "45%" },
    height: { xl: "58%" }
  }
  return (
    <Box sx={style.container}>
      <Box
        sx={style.detailCard}
      >
        <Typography
          sx={style.detailCardHeading}
        >
          Crypto Online Casino
        </Typography>
        <Typography
          variant="h6"
          className="detailCardText"
          sx={style.detailCardParagraph}
        >
          Casinos online have not always been around, but we can safely say that
          online casinos have been used a lot since they came on the market. And
          it's not in short demand nor options, in 2022, we have 1000s and 1000s
          to pick from – it's just a matter of what you like and what payment
          options you would like to see at the casino.
        </Typography>
        <Box>
          <Box>
            <Typography
              variant="h6"
              className="detailCardText"
              sx={style.detailCardParagraphPre}
            >
              {` Players are always looking for something
             new, which will help make the gaming
             experience so much better and more
             accessible. Allowing the player to focus
             on the absolute fun of a casino, that's
             right,the games themselves.`}
            </Typography>
            <Box sx={style.detailCardButton}>
              <ButtonDetailedCard color="#8C57F5" />
            </Box>
          </Box>
          <Box
            sx={detailCardImgStyle}
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
        sx={style.detailCard}
      >
        <Typography
          sx={style.detailCardHeadingTwo}
          variant="h6"
        >
          Help us to improve Your Experience
        </Typography>
        <input
          className="InputMedia"
          style={{
            height: "47%",
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
          <Box
            sx={style.detailCardFlex}
          >
            <Typography
              sx={style.detailCardText}
            >
              Now get rewarded for your valuable feedback.
            </Typography>
            <Box sx={style.detailCardPadding}>
              <ButtonDetailedCard color="rgba(49, 167, 57, 1)" />
            </Box>
            <Typography
              sx={style.detailCardEmailUs}
              variant="h6"
            >
              Or Email us:
              <Typography
                sx={style.detailCardEmail}
                variant="span"
              >
                feedback@Sizzldgame.com
              </Typography>
            </Typography>
          </Box>
          <Box
            sx={style.DetailedCardImageBottom}
          >
            <img className="imgRight" src={feedback} alt="" />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};
export default DetailedCard;