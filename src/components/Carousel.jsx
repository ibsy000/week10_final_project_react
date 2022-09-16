import React from 'react'
import logo1 from '../assets/SuggestionCards2.jpg'
import logo2 from '../assets/neverKnow.jpg'
import logo3 from '../assets/customizeSuggestions.jpg'

export default function Carousel() {
    return (
        <>
        <div className="row">
            <div id="carouselExampleFade" className="carousel slide carousel-fade mb-5" data-bs-ride="carousel" >
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleFade" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleFade" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleFade" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src={logo1} className="d-block img-fluid" alt="..." />
                    </div>
                    <div className="carousel-item">
                        <img src={logo2} className="d-block img-fluid" alt="..." />
                    </div>
                    <div className="carousel-item">
                        <img src={logo3} className="d-block img-fluid" alt="..." />
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
