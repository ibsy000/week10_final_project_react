import React from 'react'

export default function Carousel() {
    return (
        <>
        <div className="row">
            <div id="carouselExampleFade" className="carousel slide carousel-fade" data-bs-ride="carousel" >
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src="https://via.placeholder.com/1300x400.png?text=First+Slide" className="d-block img-fluid" alt="..." />
                    </div>
                    <div className="carousel-item">
                        <img src="https://via.placeholder.com/1300x400.png?text=Second+Slide" className="d-block img-fluid" alt="..." />
                    </div>
                    <div className="carousel-item">
                        <img src="https://via.placeholder.com/1300x400.png?text=Third+Slide" className="d-block img-fluid" alt="..." />
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </div>
        </>
    )
}
