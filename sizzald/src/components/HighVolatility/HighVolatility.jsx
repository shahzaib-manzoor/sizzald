import HighVolatilityComp from "./HighVolatilityComp";
import { Box } from "@mui/material";

function HighVolatility() {
  const sliderTwo6 = React.useRef(null);
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
      <HighVolatilityComp
        sliderTwo={sliderTwo6}
        settingCardTwo={settingCardTwo}
      />
    </Box>
  );
}

export default HighVolatility;
