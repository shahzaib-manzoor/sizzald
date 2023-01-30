import * as style from "./style";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Box, CardActionArea } from "@mui/material";
// import { Box } from "@mui/system";
const CustomCardThree = ({ img }) => {
  return (
    <Card
      sx={{
        width: "95%",
        background: "rgba(43, 45, 80, 0.6)",
        height: { xs: "80px", md: "105px" },
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <img src={img}></img>
    </Card>
  );
};

export default CustomCardThree;
