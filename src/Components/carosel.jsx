import Carousel from 'react-bootstrap/Carousel';


function Carousel1() {
  return (
    <Carousel className="mb-4">
      <Carousel.Item>
      <img className="d-block w-100" src="https://www.freewebheaders.com/wp-content/gallery/wildlife/wild-predator-lioness-website-header.jpg" alt="First slide" />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img className="d-block w-100" src="https://www.freewebheaders.com/wp-content/gallery/wildlife/dangerous-wild-tigers-website-header.jpg" alt="Second slide" />
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img className="d-block w-100" src="https://www.freewebheaders.com/wp-content/gallery/wildlife/elephants-in-the-distance-sunset-landscape-website-header.jpg" alt="Third slide" />
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default Carousel1;
