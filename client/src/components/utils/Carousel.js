import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';
import '../../css/carousel.css';

const Carousel = ({ elements }) => {
  const image = elements.map((element) => {
    return (
      <div key={element.title} className="carousel-wrapper">
        <img
          className="img-fluid"
          src={process.env.PUBLIC_URL + `/images/${element.photo}`}
          alt="slide"
        />
        <div className="carousel-text">
          <h1>{element.title}</h1>
          <h4>{element.text}</h4>
        </div>
      </div>
    );
  });
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 3000,
    cssEase: 'linear',
  };

  return <Slider {...settings}>{image}</Slider>;
};

export default Carousel;
