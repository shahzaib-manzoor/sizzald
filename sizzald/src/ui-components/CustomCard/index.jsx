import { Box, Typography, IconButton } from "@mui/material";
import * as style from "./Style";
import NorthEastIcon from "@mui/icons-material/NorthEast";

const CustomCard = ({ teamOne, vs, teamTwo, img, warIsOn }) => {
  return (
    <Box>
      <Box
        sx={{
          // maxWidth: "420px",
          width: "95%",
          borderRadius: "12px",
          marginLeft: "10px",
          background: `linear-gradient(357.95deg, rgba(0, 0, 0, 0.4) 32.88%, rgba(0, 0, 0, 0) 98.27%, rgba(0, 0, 0, 0) 98.27%),url(${img}) center/cover`,
          position: "relative",
          padding: "0px 0px",
          display: "flex",
          margin: "0 10px ",
          justifyContent: "space-between",
          // alignContent: "space-between",
          alignItems: "baseline",
        }}
      >
        <Box sx={style.cardContent}>
          <Typography sx={style.cardContentText} variant="h6" component="div">
            {teamOne}
            <Typography
              variant="h6"
              component="span"
              sx={style.cardContentTextVS}
            >
              {vs}
            </Typography>
            {teamTwo}
          </Typography>
          <Typography
            sx={style.cardContentTextWar}
            variant="h6"
            component="div"
          >
            {warIsOn}
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
