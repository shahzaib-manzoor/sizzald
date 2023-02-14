import { customCardThreeStyle } from "./style";
import { Box } from "@mui/material";

const CustomCardThree = ({ img }) => {
   
  return (
    <Box sx={customCardThreeStyle.container} >
      <Box sx={customCardThreeStyle.cardContainer}>
        <img src={img}></img>
      </Box>
    </Box>
  );
};

export default CustomCardThree;
