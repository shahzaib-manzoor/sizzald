import HotGameComp from "./HotGameComp";
import { Box } from "@mui/material";

function HotGame() {
  const sliderTwo5 = React.useRef(null);
  var settingCardTwo = {
    slidesToShow: 4,
    rows: 2,
    slidesPerRow: 1,

    responsive: [
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 1000,
        settings: {
          slidesToShow: 3,
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
