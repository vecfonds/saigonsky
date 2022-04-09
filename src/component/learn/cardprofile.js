import React from "react";
import './cardprofile.css';

function CardProfile() {
    return (
        <div class="card__profile_body">
            <div class="card__profile">
                <div class="card__profile_img"><img src="/assets/images/ho.jpg" alt="avatar" /></div>
                <h2>Pé Hổ</h2>
                <p>Network Security</p>
                <div class="card__profile_social">
                    <a href=""><i class="fab fa-facebook"></i></a>
                    <a href=""><i class="fab fa-youtube"></i></a>
                    <a href=""><i class="fab fa-instagram"></i></a>
                    <a href=""><i class="fab fa-github"></i></a>
                </div>
            </div>


        </div>
    )
}

export default CardProfile;