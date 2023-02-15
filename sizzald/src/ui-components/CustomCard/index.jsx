import { Box, Typography, IconButton } from "@mui/material";
import * as style from "./Style";
import NorthEastIcon from "@mui/icons-material/NorthEast";

const CustomCard = ({ teamOne, vs, teamTwo, img, warIsOn }) => {
  return (
    <Box sx={style.cardContainer}>
        <Box sx={style.cardOverlay}  >

        </Box>
      <img style={{ width: "100%",height:"100%", objectFit: "cover",borderRadius:"8px" }} src={img} alt="" />
      <Box  sx={style.textContainer}>
        <Box>
          <Typography sx={style.cardContentText} component="h6">
            {teamOne}
            <Typography sx={style.cardContentTextVS} component="span">
              {vs}
            </Typography>
            {teamTwo}
          </Typography>
          <Typography
            sx={style.cardContentTextWar}
            variant="h6"
            component="h6"
          >
            {warIsOn}
          </Typography>
        </Box>
        <IconButton
            sx={style.cardContentIcon}
          >
            <NorthEastIcon sx={style.cardContentIconSize} />
         </IconButton>
      
      </Box>
    </Box>
   
  );
};

export default CustomCard;
