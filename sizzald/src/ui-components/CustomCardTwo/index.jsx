import Card from "@mui/material/Card";
import * as style from "./style";
import CardActions from "@mui/material/CardActions";
import Box from "@mui/material/Box";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import CustomCardTwoImg from "../../assets/customCardTwo.png";
import { Avatar } from "@mui/material";
import avator from "../../assets/avator.png";
import NorthEastIcon from "@mui/icons-material/NorthEast";
import IconButton from "@mui/material/IconButton";
import { ClassNames } from "@emotion/react";

export default function CustomCardTwo({ img, name, balance }) {
  return (
    <Card
      sx={{
        marginTop: "10px",
        width: { xs: "95%", md: "94%" },
        background: "rgba(43, 45, 80, 1)",
        marginLeft: "8px",

        margin: "8px auto",
        // paddingLeft:'20'
      }}
    >
      <CardMedia
        sx={{
          height: { xs: "150px", md: "240px" },
          background: `url(${img}) `,
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          borderRadius: "6px",
        }}
        title="green iguana"
      />
      <CardContent sx={style.cardFlex}>
        <Box sx={style.cardFlexTwo}>
          <Avatar sx={style.cardAvatar} alt="Cindy Baker" src={avator} />
          <Box sx={{ padding: "4px" }}>
            <Typography sx={style.cardTextName} component="div">
              {name}
            </Typography>
            <Typography sx={style.cardTextPrice} component="div">
              {balance}
            </Typography>
          </Box>
        </Box>
        <Box sx={{ width: "18%" }}>
          <IconButton
            sx={{
              background: "rgba(255, 255, 255, 0.3)",
              marginRight: "8px",
              color: "white",
            }}
          >
            <NorthEastIcon sx={style.cardContentIconSize} />
          </IconButton>
        </Box>
      </CardContent>
    </Card>
  );
}
