import React from 'react'

function Carousel() {
  return (
    <div
        id="carouselExampleFade"
        className="carousel slide carousel-fade"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              src="https://image01.realme.net/general/20221104/1667545514225.jpg.webp"
              className="d-block w-100 img-fluid"
              alt="picture"
            />
          </div>
          <div className="carousel-item">
            <img
              src="https://image01.realme.net/general/20230106/1672975963663.jpg.webp"
              className="d-block w-100 img-fluid "
              alt="picture"
            />
          </div>
          <div className="carousel-item">
            <img
              src="https://image01.realme.net/general/20221219/1671465693265.jpg.webp"
              className="d-block w-100 img-fluid"
              alt="picture"
            />
          </div>
          <div className="carousel-item">
            <img
              src="https://image01.realme.net/general/20221124/1669271311931.jpg.webp"
              className="d-block w-100 img-fluid"
              alt="picture"
            />
          </div>
          <div className="carousel-item">
            <img
              src="https://image01.realme.net/general/20230103/1672720308761.jpg.webp"
              className="d-block w-100 img-fluid"
              alt="picture"
            />
          </div>
          <div className="carousel-item">
            <img
              src="https://image01.realme.net/general/20221219/1671465693265.jpg.webp"
              className="d-block w-100 img-fluid"
              alt="picture"
            />
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleFade"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleFade"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
  )
}

export default Carousel