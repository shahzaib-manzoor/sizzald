import Card from "@mui/material/Card";
import * as style from "./style";
import CardActions from "@mui/material/CardActions";
import Box from "@mui/material/Box";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import CustomCardTwoImg from "../../assets/customCardTwo.png";

import IconButton from "@mui/material/IconButton";
export default function CustomCardTwo({ img, name, balance, icon,avator }) {
  return (
    <Card
      sx={style.cardContainer}
    >
      <CardMedia
        sx={{
          height: {
            xs: "150px",
            sm: "200px",
            md: "240px",
            lg: "220px",
            xl: "200px",
          },
          background: `url(${img}) `,
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          borderRadius: "6px",
        }}
        title="game"
      />
      <CardContent sx={style.cardFlex}>
        <Box sx={style.cardFlexTwo}>
          {avator}
          <Box sx={{ padding: "4px" }}>
            <Typography sx={style.cardTextName} >
              {name}
            </Typography>
            <Typography sx={style.cardTextPrice} >
              {balance}
            </Typography>
          </Box>
        </Box>
        <Box sx={{ marginRight: "6px" }}>{icon}</Box>
      </CardContent>
    </Card>
  );
}
