import { customCardThreeStyle } from "./style";
import { Box } from "@mui/material";

const CustomCardThree = ({ img }) => {
  const classes = customCardThreeStyle();
  return (
    <Box className={classes.container}>
      <Box className={classes.cardContainer}>
        <img src={img}></img>
      </Box>
    </Box>
  );
};

export default CustomCardThree;
