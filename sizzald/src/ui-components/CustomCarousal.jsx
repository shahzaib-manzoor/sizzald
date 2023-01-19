import Slider from "react-slick";

export default function SimpleSlider({ children, carousalRef }) {
  var settings = {
    infinite: true,
    speed: 1000,
    slidesToShow: 3,
    arrows: false,
  };
  return (
    <Slider ref={carousalRef} {...settings}>
      {children}
    </Slider>
  );
}
