
 
import Slider from "react-slick";

export default function SimpleSlider({children}) {
  var settings = {
    
    infinite: true,
    speed: 10000,
    slidesToShow: 3,
    slidesToScroll: 1
  };
  return (
    <Slider {...settings}>
       {children}
    </Slider>
  );
}