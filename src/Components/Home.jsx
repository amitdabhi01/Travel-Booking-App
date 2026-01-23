import Carousel from "react-bootstrap/Carousel";

function CarouselFadeExample() {
  return (
    <Carousel fade className="mt-5">
      <Carousel.Item>
        <video
          className="d-block w-100"
          autoPlay
          loop
          muted
          rounded
          style={{ height: "600px", objectFit: "cover" }}
        >
          <source
            src="https://www.pexels.com/download/video/33834286/"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>
        <Carousel.Caption>
          <h3>Explore Amazing Destinations</h3>
          <p>Discover the world's most beautiful places with us.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://images.pexels.com/photos/28271729/pexels-photo-28271729.jpeg"
          alt="Beautiful Mountains"
          style={{ height: "600px", objectFit: "cover" }}
        />
        <Carousel.Caption>
          <h3>Åndalsnes, Møre og Romsdal, Norwegen</h3>
          <p>A view of a mountain range with a town in the middle</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://images.pexels.com/photos/9149367/pexels-photo-9149367.jpeg"
          alt="Beautiful Beach"
          style={{ height: "600px", objectFit: "cover" }}
        />
        <Carousel.Caption>
          <h3>Maldives</h3>
          <p>An Island Surrounded by Clear Sea Water</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default CarouselFadeExample;
