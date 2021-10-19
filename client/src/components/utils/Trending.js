import '../../css/trending.css';

const Trending = () => {
  const images = [
    {
      title:
        'https://cdn.pixabay.com/photo/2014/12/15/17/16/chrysler-building-569317_1280.jpg',
      text: 'Where can Wiki Airline travel right now?',
    },
    {
      title:
        'https://cdn.pixabay.com/photo/2016/03/24/17/44/palm-trees-1277243_1280.jpg',
      text: 'White sand beaches, dozens of trails and outdoor dining await in sunny Florida',
    },
    {
      title:
        'https://cdn.pixabay.com/photo/2013/11/14/18/04/las-vegas-210534_1280.jpg',
      text: 'What happens here, only happens here',
    },
    {
      title:
        'https://cdn.pixabay.com/photo/2016/11/10/11/08/san-francisco-1814030_1280.jpg',
      text: 'Around the margins the words, "Seal of the City and County of San Francisco."',
    },
  ];

  const display = images.map((image, i) => {
    return (
      <div key={i} className="col-md-3">
        <div className="img-hover-zoom">
          <img src={image.title} alt={image.title} />
        </div>
        <p className="slogan">{image.text}</p>
      </div>
    );
  });

  return (
    <div className="container">
      <h2 className="my-4 ">Trending now</h2>
      <hr className="hr-trending"></hr>
      <div className="row">{display}</div>
    </div>
  );
};

export default Trending;
