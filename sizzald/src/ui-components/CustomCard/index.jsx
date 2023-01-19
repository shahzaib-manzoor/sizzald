import { Box, Typography, IconButton } from "@mui/material";
import NorthEastIcon from "@mui/icons-material/NorthEast";
import * as style from "./Style";

const CustomCard = () => {
  return (
    <Box sx={style.cardContainer} className="bg-clBlueContainer">
      <Box sx={style.cardMain}>
        <Box sx={style.cardContent}>
          <Typography sx={style.cardContentText} variant="h6" component="div">
            RED BULL
            <Typography
              variant="h6"
              component="span"
              sx={style.cardContentTextVS}
            >
              VS
            </Typography>
            GREEN BULL
          </Typography>
          <Typography
            sx={style.cardContentTextWar}
            variant="h6"
            component="div"
          >
            WAR IS ON
          </Typography>
        </Box>
        <Box>
          <IconButton
            className="!bg-clIconBackground"
            sx={style.cardContentIcon}
          >
            <NorthEastIcon sx={style.cardContentIconSize} />
          </IconButton>
        </Box>
      </Box>
    </Box>
  );
};

export default CustomCard;
