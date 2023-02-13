import { Box } from "@mui/material";
import bannerAffliate from "../../assets/bannerAffilate.svg";
function Advertisment() {
  return (
    <Box sx={{ padding: "30px 0px", }}>
      <img
        style={{ width: "100%", height: "auto" }}
        src={bannerAffliate}
        alt=""
      />
    </Box>
  );
}

export default Advertisment;
