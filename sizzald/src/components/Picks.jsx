import RecentBig from "./Picks/RecentBig";
import { Box } from "@mui/material";
import DetailedCard from "../ui-components/DetailCard/index";
import Network from "../ui-components/Network";

const Picks = () => {
  const sliderTwo2 = React.useRef(null);
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
      <RecentBig settingCardTwo={settingCardTwo} sliderTwo={sliderTwo2} />
      <Box sx={{ marginTop: "30px" }}>
        <DetailedCard />
      </Box>
      <Network />
    </Box>
  );
};

export default Picks;
