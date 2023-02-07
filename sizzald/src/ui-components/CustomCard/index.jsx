import { Box, Typography, IconButton } from "@mui/material";
import * as style from "./Style";
import NorthEastIcon from "@mui/icons-material/NorthEast";

const CustomCard = ({ teamOne, vs, teamTwo, img, warIsOn }) => {
  return (
    <Box sx={{ height: "240px",position:"relative",borderRadius:"8px",margin:"0px 8px" }}>
        <Box sx={{position:"absolute",background:"linear-gradient(357.95deg, rgba(0, 0, 0, 0.4) 32.88%, rgba(0, 0, 0, 0) 98.27%, rgba(0, 0, 0, 0) 98.27%);",width:"100%",height:"100%"}}  >

        </Box>
      <img style={{ width: "100%",height:"100%", objectFit: "cover",borderRadius:"8px" }} src={img} alt="" />
      <Box  sx={{display:"flex",justifyContent:"space-between",alignItems:"center",position:"absolute",bottom:"10px",width:"100%"}}>
        <Box>
          <Typography sx={style.cardContentText} component="h6">
            {teamOne}{" "}
            <Typography sx={style.cardContentTextVS} component="span">
              {vs}
            </Typography>{" "}
            {teamTwo}{" "}
          </Typography>
          <Typography
            sx={style.cardContentTextWar}
            variant="h6"
            component="div"
          >
            {warIsOn}
          </Typography>
        </Box>
        <IconButton
            className="!bg-clIconBackground"
            sx={style.cardContentIcon}
          >
            <NorthEastIcon sx={style.cardContentIconSize} />
         </IconButton>
      
      </Box>
    </Box>
    // <Box>
    /* <Box
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
          // alignContent: "space-between",
          alignItems: "baseline",
        }}
      >
      <Box sx={{display:"flex",justifyContent:"space-between",alignItems:"center"}}>
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
        <Box sx={{display: "flex",
  alignItems: " flex-start",
  flexDirection: "column",
  justifyContent: "flex-end",}}>
          <IconButton
            className="!bg-clIconBackground"
            sx={style.cardContentIcon}
          >
            <NorthEastIcon sx={style.cardContentIconSize} />
          </IconButton>
      </Box>
        </Box>
      </Box>
    </Box> */
  );
};

export default CustomCard;
