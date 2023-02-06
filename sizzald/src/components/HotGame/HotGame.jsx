import HotGameComp from "./HotGameComp";
import { Box } from "@mui/material";

function HotGame() {
  const sliderTwo5 = React.useRef(null);
  var settingCardTwo = {
    slidesToShow: 6,
    rows: 2,
    slidesPerRow: 1,

    responsive: [
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 1000,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 1600,
        settings: {
          slidesToShow: 5,
        },
      },
      
     
    ],
  };
  return (
    <Box>
      <HotGameComp sliderTwo={sliderTwo5} settingCardTwo={settingCardTwo} />
    </Box>
  );
}

export default HotGame;
