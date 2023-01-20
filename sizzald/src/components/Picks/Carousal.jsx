import CustomCardTwo from "../../ui-components/CustomCardTwo";

import CustomCarousal from "../../ui-components/CustomCarousal";

import customCardd1 from "../../assets/customcardd1.png";
import customCardd2 from "../../assets/customCardd2.png";
import customCardd3 from "../../assets/customCardd3.png";
import customCardd4 from "../../assets/customCardd4.png";
import customCardd5 from "../../assets/customCardd5.png";
import customCardd6 from "../../assets/customCardd6.png";
import customCardd7 from "../../assets/customCardd7.png";
import customCardd8 from "../../assets/customCardd8.png";
import customCardd9 from "../../assets/customCardd9.png";
import customCardd from "../../assets/customCardd.png";
function Carousal({ sliderTwo, settingCardTwo }) {
  return (
    <CustomCarousal
      sx={{ padding: "10px 35px" }}
      carousalRef={sliderTwo}
      settingCard={settingCardTwo}
    >
      <CustomCardTwo name="MR SCHEMER" balance="$ 5346362" img={customCardd7} />
      <CustomCardTwo name="MR SCHEMER" balance="$ 5346362" img={customCardd8} />
      <CustomCardTwo name="MR SCHEMER" balance="$ 5346362" img={customCardd9} />
      <CustomCardTwo name="MR SCHEMER" balance="$ 5346362" img={customCardd6} />
      <CustomCardTwo name="MR SCHEMER" balance="$ 5346362" img={customCardd7} />
      <CustomCardTwo name="MR SCHEMER" balance="$ 5346362" img={customCardd8} />
      <CustomCardTwo name="MR SCHEMER" balance="$ 5346362" img={customCardd1} />
      <CustomCardTwo name="MR SCHEMER" balance="$ 5346362" img={customCardd2} />
      <CustomCardTwo name="MR SCHEMER" balance="$ 5346362" img={customCardd7} />
      <CustomCardTwo name="MR SCHEMER" balance="$ 5346362" img={customCardd8} />
      <CustomCardTwo name="MR SCHEMER" balance="$ 5346362" img={customCardd1} />
      <CustomCardTwo name="MR SCHEMER" balance="$ 5346362" img={customCardd2} />
    </CustomCarousal>
  );
}

export default Carousal;
