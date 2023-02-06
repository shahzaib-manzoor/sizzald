import SlotComp from "./SlotComp";
import { Box } from "@mui/material";

function Slot() {
  const sliderTwo4 = React.useRef(null);
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
      <SlotComp sliderTwo={sliderTwo4} settingCardTwo={settingCardTwo} />
    </Box>
  );
}

export default Slot;
