import Slider from "react-slick";

export default function SimpleSlider({ children, carousalRef, settingCard }) {
  var settings = {
    ...settingCard,
    infinite: true,
    speed: 1000,
    arrows: false,
    // autoplay: true,
    // autoplaySpeed: 2000,
  };
  // {
  //   console.log(settingCard);
  // }
  return (
    <Slider ref={carousalRef} {...settings}>
      {children}
    </Slider>
  );
}
