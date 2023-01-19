import Slider from "react-slick";

export default function SimpleSlider({ children, carousalRef }) {
  var settings = {
    infinite: true,
    speed: 1000,
    slidesToShow: 3,
    arrows: false,

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
    ],
  };
  return (
    <Slider ref={carousalRef} {...settings}>
      {children}
    </Slider>
  );
}
