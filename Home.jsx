import React from 'react'
import Carousel from 'react-bootstrap/Carousel';

function Home() {
  return (
    <div>
      <Carousel data-bs-theme="dark" style={{color:'white'}}>
      <Carousel.Item>
        <img
          className="img"
          src="https://media.istockphoto.com/id/506293036/photo/lotus-flower-blossom.jpg?s=612x612&w=0&k=20&c=HXkm6oyUG9TWaD2Y0xGtnDvwjnNUARvo7IPLF6dh0s8="
          alt="First slide"
        />
        <Carousel.Caption>
          <h5>First slide label</h5>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block img"
          src="https://media.istockphoto.com/id/486573132/photo/terraced-rice-field.jpg?s=612x612&w=0&k=20&c=dnWbypnMH5SIs2sB26jjGavNYJS3Qh86Xc2gLTp0Gz4="
          alt="Second slide"
        />
        <Carousel.Caption>
          <h5>Second slide label</h5>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block img"
          src="https://media.istockphoto.com/id/1195458582/photo/aerial-view-of-misty-mountains-at-sunrise.jpg?s=612x612&w=0&k=20&c=UQ4ZHZk0H_c75Vy9Wv5VaXn00obvPT98LMTOvjXZOWc="
          alt="Third slide"
        />
        <Carousel.Caption>
          <h5>Third slide label</h5>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </div>
  )
}

export default Home
