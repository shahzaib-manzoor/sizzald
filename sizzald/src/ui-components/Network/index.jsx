import { Box, Typography } from "@mui/material";
import * as style from "./style";
import network1 from "../../assets/network1.png";
import network2 from "../../assets/network2.png";
import network3 from "../../assets/network3.png";
import network4 from "../../assets/network4.png";
import network5 from "../../assets/network5.png";
import network6 from "../../assets/network6.png";
import network7 from "../../assets/network7.png";
import network8 from "../../assets/network8.png";
import network9 from "../../assets/network9.png";
import network10 from "../../assets/network10.png";
import network11 from "../../assets/network11.png";
import network12 from "../../assets/network12.png";
import network13 from "../../assets/network13.png";
import network14 from "../../assets/network14.png";
import network15 from "../../assets/network15.png";
const Network = () => {
  return (
    <Box sx={style.networkContainer}>
      <Typography sx={style.networkText}>Accepted Networks</Typography>
      <Box sx={style.networkBox}>
        <Box sx={style.networkBoxImg}>
          <img className="networkImg" src={network1} alt="" />
        </Box>
        <Box sx={style.networkBoxImg}>
          <img className="networkImg" src={network2} alt="" />
        </Box>
        <Box sx={style.networkBoxImg}>
          <img className="networkImg" src={network3} alt="" />
        </Box>
        <Box sx={style.networkBoxImg}>
          <img className="networkImg" src={network4} alt="" />
        </Box>
        <Box sx={style.networkBoxImg}>
          <img className="networkImg" src={network5} alt="" />
        </Box>
        <Box sx={style.networkBoxImg}>
          <img className="networkImg" src={network6} alt="" />
        </Box>
        <Box sx={style.networkBoxImg}>
          <img className="networkImg" src={network7} alt="" />
        </Box>
        <Box sx={style.networkBoxImg}>
          <img className="networkImg" src={network8} alt="" />
        </Box>
        <Box sx={style.networkBoxImg}>
          <img className="networkImg" src={network9} alt="" />
        </Box>
        <Box sx={style.networkBoxImg}>
          <img className="networkImg" src={network10} alt="" />
        </Box>
        <Box sx={style.networkBoxImg}>
          <img className="networkImg" src={network11} alt="" />
        </Box>
        <Box sx={style.networkBoxImg}>
          <img className="networkImg" src={network12} alt="" />
        </Box>
        <Box sx={style.networkBoxImg}>
          <img className="networkImg" src={network13} alt="" />
        </Box>
        <Box sx={style.networkBoxImg}>
          <img className="networkImg" src={network14} alt="" />
        </Box>
        <Box sx={style.networkBoxImg}>
          <img className="networkImg" src={network15} alt="" />
        </Box>
      </Box>
    </Box>
  );
};

export default Network;
