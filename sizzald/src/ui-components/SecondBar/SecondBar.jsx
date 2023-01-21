import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Searchh from "./Searchh";
import * as style from "./style";

const SecondBar = () => {
  return (
    <Box sx={style.mainContainer}>
      <Box sx={style.containerLeft}>
        <Button sx={style.buttonActive} variant="contained">
          All
        </Button>
        <Button sx={style.buttonNotActive} variant="outlined">
          Sizzld Game
        </Button>
        <Button sx={style.buttonNotActive} variant="outlined">
          Slots
        </Button>
      </Box>
      <Box sx={style.containerRight}>
        <Searchh />
      </Box>
    </Box>
  );
};

export default SecondBar;
