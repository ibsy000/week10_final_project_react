import React from 'react'

export default function Carousel() {
    return (
        <>
        <div className="row">
            <div id="carouselExampleFade" className="carousel slide carousel-fade" data-bs-ride="carousel" >
                <div class="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleFade" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleFade" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleFade" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
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
