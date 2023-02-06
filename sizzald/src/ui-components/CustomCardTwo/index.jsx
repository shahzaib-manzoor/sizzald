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
import IconButton from "@mui/material/IconButton";
export default function CustomCardTwo({ img, name, balance, icon }) {
  return (
    <Card
      sx={{
        marginTop: "10px",
        // width: { xs: "95%", sm: "94%", md: "94%", lg: "94%", xl: "100%" },
        // width:"240px",
        background: "rgba(43, 45, 80, 1)",
        margin: "4px",
        // paddingLeft:'20'
      }}
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
        <Box sx={{ marginRight: "6px" }}>{icon}</Box>
      </CardContent>
    </Card>
  );
}
