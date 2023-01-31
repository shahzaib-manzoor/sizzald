import SlotComp from "./SlotComp";
import { Box } from "@mui/material";

function Slot() {
  const sliderTwo4 = React.useRef(null);
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
      <SlotComp sliderTwo={sliderTwo4} settingCardTwo={settingCardTwo} />
    </Box>
  );
}

export default Slot;
