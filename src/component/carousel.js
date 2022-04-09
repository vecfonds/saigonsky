import React from "react";

function Carousel() {
    return (
        <div id="carouselExampleCrossfade" class="carousel slide carousel-fade" data-mdb-ride="carousel">
            <div class="carousel-indicators">
                <button
                    type="button"
                    data-mdb-target="#carouselExampleCrossfade"
                    data-mdb-slide-to="0"
                    class="active"
                    aria-current="true"
                    aria-label="Slide 1"
                ></button>
                <button
                    type="button"
                    data-mdb-target="#carouselExampleCrossfade"
                    data-mdb-slide-to="1"
                    aria-label="Slide 2"
                ></button>
                <button
                    type="button"
                    data-mdb-target="#carouselExampleCrossfade"
                    data-mdb-slide-to="2"
                    aria-label="Slide 3"
                ></button>
            </div>
            <div class="carousel-inner">
                <div class="carousel-item active" data-mdb-interval="2000">
                    <img src="/assets/images/bia1.png" class="d-block h-100" alt="Wild Landscape" />
                </div>
                <div class="carousel-item" data-mdb-interval="2000">
                    <img src="https://mdbcdn.b-cdn.net/img/new/slides/042.webp" class="d-block h-100" alt="Camera" />
                </div>
                <div class="carousel-item" data-mdb-interval="2000">
                    <img src="https://mdbcdn.b-cdn.net/img/new/slides/043.webp" class="d-block h-100" alt="Exotic Fruits" />
                </div>
            </div>
            <button class="carousel-control-prev" type="button" data-mdb-target="#carouselExampleCrossfade" data-mdb-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-mdb-target="#carouselExampleCrossfade" data-mdb-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Next</span>
            </button>
        </div>
    );
}

export default Carousel;