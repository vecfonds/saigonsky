import React from 'react'
import './Slider.css'
import { motion } from "framer-motion"


const Slider = () => {
    return (
        <div className="slider">
            <div id="carouselExampleCrossfade" className="carousel slide carousel-fade" data-mdb-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active" data-mdb-interval="2000">
                        <img src='/assets/images/slider/slider1.jpg' className="d-block  w-100" alt="" />
                    </div>
                    <div className="carousel-item" data-mdb-interval="2000">
                        <img src='/assets/images/slider/slider2.jpg' className="d-block w-100" alt="" />
                    </div>
                </div>
                {/* <button className="carousel-control-prev" type="button" data-mdb-target="#carouselExampleTouch" data-mdb-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-mdb-target="#carouselExampleTouch" data-mdb-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button> */}
            </div>

            <div className="inner">
                <div className="inner-content">
                    <motion.div style={{ left: -500, position: 'relative' }} animate={{ left: 0 }} transition={{
                        duration: 3,
                        type: "spring",
                    }} >

                        <img src="/assets/images/slider/sliderlock.png" width={600} height={600} alt="lock" />
                    </motion.div>

                    <div className="content">
                        <h2>Singapore's Fastest Growing</h2>
                        <h2>Smart Lock Brand</h2>
                        <p>Raizo smart lock has been recognized and won the praises of the users, distributors,<br />suppliers and dealers everywhere around the world</p>
                    </div>
                </div>
            </div>

            {/* <div className="text-content">
                <div>
                    <img src="/assets/images/S.png" alt="S-logo" />
                </div>
                <div>
                    <h1>SaiGon Sky</h1>
                    <p>SPECIAL - GOOD - SMART</p>
                </div>
            </div> */}
        </div>
    )
}

export default Slider