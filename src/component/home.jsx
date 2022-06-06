import React from "react";
import '../App.css';
import Carousel from "./carousel";
import Cart from "./cart/cart";

function Home() {
    return (
        <div className="slider">
            <div className="text-content">
                <div>
                    <img src="/assets/images/S.png" alt="S-logo" />
                </div>
                <div>
                    <h1>SaiGon Sky</h1>
                    <p>SPECIAL - GOOD - SMART</p>
                </div>
            </div>
            <div id="carouselExampleCrossfade" className="carousel slide carousel-fade" data-mdb-ride="carousel">

                <div className="carousel-inner">

                    <div className="carousel-item active" data-mdb-interval="2000">
                        <img src="/assets/images/bia1.png" className="d-block w-100" alt="Wild Landscape" />
                    </div>
                    <div className="carousel-item" data-mdb-interval="2000">
                        <img src="https://mdbcdn.b-cdn.net/img/new/slides/042.webp" className="d-block w-100" alt="Camera" />
                    </div>
                    <div className="carousel-item" data-mdb-interval="2000">
                        <img src="https://mdbcdn.b-cdn.net/img/new/slides/043.webp" className="d-block w-100" alt="Exotic Fruits" />
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-mdb-target="#carouselExampleTouch" data-mdb-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-mdb-target="#carouselExampleTouch" data-mdb-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </div>
    );
}

export default Home;

























{/* <div className="slider">
<div className="text-content">
    <div>
        <img src="/assets/images/S.png" alt="S-logo" />
    </div>
    <div>
        <h1>SaiGon Sky</h1>
        <p>SPECIAL - GOOD - SMART</p>
    </div>
</div>
<div id="carouselExampleCrossfade" className="carousel slide carousel-fade" data-mdb-ride="carousel">

    <div className="carousel-inner">

        <div className="carousel-item active" data-mdb-interval="2000">
            <img src="/assets/images/bia1.png" className="d-block w-100" alt="Wild Landscape" />
        </div>
        <div className="carousel-item" data-mdb-interval="2000">
            <img src="https://mdbcdn.b-cdn.net/img/new/slides/042.webp" className="d-block w-100" alt="Camera" />
        </div>
        <div className="carousel-item" data-mdb-interval="2000">
            <img src="https://mdbcdn.b-cdn.net/img/new/slides/043.webp" className="d-block w-100" alt="Exotic Fruits" />
        </div>
    </div>
    <button className="carousel-control-prev" type="button" data-mdb-target="#carouselExampleTouch" data-mdb-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
    </button>
    <button className="carousel-control-next" type="button" data-mdb-target="#carouselExampleTouch" data-mdb-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
    </button>
</div>
</div> */}








{/* <div class="text-typing">
<h1>SAIGON SKY</h1>
</div>
<div class="text-typing">
<p>SPECIAL - GOOD - SMART</p>
</div> */}





        //     <div className="slide-home">
        //     <div id="carouselExampleCrossfade" class="carousel slide carousel-fade" data-mdb-ride="carousel">
                // <div class="text-typing">
                //     <h1>SAIGON SKY</h1>
                // </div>
                // <div class="text-typing">
                //     <p>SPECIAL - GOOD - SMART</p>
                // </div>
        //         <div class="carousel-indicators">
        //             <button
        //                 type="button"
        //                 data-mdb-target="#carouselExampleCrossfade"
        //                 data-mdb-slide-to="0"
        //                 class="active"
        //                 aria-current="true"
        //                 aria-label="Slide 1"
        //             ></button>
        //             <button
        //                 type="button"
        //                 data-mdb-target="#carouselExampleCrossfade"
        //                 data-mdb-slide-to="1"
        //                 aria-label="Slide 2"
        //             ></button>
        //             <button
        //                 type="button"
        //                 data-mdb-target="#carouselExampleCrossfade"
        //                 data-mdb-slide-to="2"
        //                 aria-label="Slide 3"
        //             ></button>
        //         </div>
        //         <div class="carousel-inner">
        //             <div class="carousel-item active" data-mdb-interval="2000">
        //                 <img src="/assets/images/bia1.png" class="d-block h-100" alt="Wild Landscape" />
        //             </div>
        //             <div class="carousel-item" data-mdb-interval="2000">
        //                 <img src="https://mdbcdn.b-cdn.net/img/new/slides/042.webp" class="d-block h-100" alt="Camera" />
        //             </div>
        //             <div class="carousel-item" data-mdb-interval="2000">
        //                 <img src="https://mdbcdn.b-cdn.net/img/new/slides/043.webp" class="d-block h-100" alt="Exotic Fruits" />
        //             </div>
        //         </div>
        //         <button class="carousel-control-prev" type="button" data-mdb-target="#carouselExampleCrossfade" data-mdb-slide="prev">
        //             <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        //             <span class="visually-hidden">Previous</span>
        //         </button>
        //         <button class="carousel-control-next" type="button" data-mdb-target="#carouselExampleCrossfade" data-mdb-slide="next">
        //             <span class="carousel-control-next-icon" aria-hidden="true"></span>
        //             <span class="visually-hidden">Next</span>
        //         </button>
        //     </div>
        // </div>