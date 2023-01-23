import Box from "@mui/material/Box";
import detailCard from "../../assets/detailCard.png";
import { Typography } from "@mui/material";
import * as style from "./style";
function DetailCard() {
  return (
    <Box sx={style.mainContainer}>
      <Typography
        sx={{
          color: "white",
          fontSize: "24px",
          fontWeight: "700",
          lineHeight: "40px",
          letterSpacing: "1px",
          textAlign: "left",
          textTransform: "uppercase",
        }}
      >
        Crypto Online Casino
      </Typography>
      <Box sx={style.wrapper}>
        <Box sx={style.box}>
          <Box sx={style.float}>
            <img
              style={style.detailCardImg}
              src={detailCard}
              alt="Detail Card"
            />
          </Box>
          Casinos online have not always been around, but we can safely say that
          online casinos have been used a lot since they came on the market. And
          it's not in short demand nor options, and now in 2022, we have 1000s
          and 1000s to pick from – it's just a matter of what you like and what
          payment options you would like to see at the casino. Players are
          always looking for something new, which will help make the gaming
          experience so much better and more accessible. Allowing the player to
          focus on the absolute fun of a casino, that's right, the games
          themselves. Players are always looking for something new, which will
          help make the gaming experience so much better and more accessible.
          Allowing the player to focus on the absolute fun of a casino, that's
          right, the games themselves.
        </Box>
      </Box>
    </Box>
  );
}

export default DetailCard;