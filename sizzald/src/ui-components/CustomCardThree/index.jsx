import * as style from "./style";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
const CustomCardThree = ({ img }) => {
  return (
    <Card sx={{ width: 163, background: "rgba(43, 45, 80, 1)", height: 123 }}>
      <CardActionArea sx={{ color: "transparent" }}>
        <CardMedia
          component="img"
          height="140"
          image={img}
          alt="green iguana"
          sx={{ objectFit: "none" }}
        />
      </CardActionArea>
    </Card>
  );
};

export default CustomCardThree;
