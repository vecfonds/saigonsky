import React from "react";
import './cardeffect.css';
import { useState } from "react";

function CardEffect() {
    const [open, setOpen] = useState(false);
    return (
        <div>
            <div class={"search-box-"+ open}>
                <input type="text" class="search-input" />
                <button class="search-btn" onClick={()=>{setOpen(!open);}} >
                    <i class="fas fa-search"></i>
                </button>
            </div>
            <div class="box__">
                <div class="card__effect">
                    <div class="card__effect_img"><img src="/assets/images/meo.png" /></div>
                    <div class="card__effect_detail">
                        <h2>Mèo Ăn Đấm<br /><span>hit hit</span></h2>
                    </div>
                </div>

                <div class="card__effect">
                    <div class="card__effect_img"><img src="/assets/images/ho.jpg" /></div>
                    <div class="card__effect_detail">
                        <h2>Hổ giận dữ<br /><span>grừ ... grừ ... grừ ... grừ ... grừ ... grừ ... grừ ... grừ ... grừ ...</span></h2>
                    </div>
                </div>


                <div class="card__effect">
                    <div class="card__effect_img"><img src="/assets/images/meo.png" /></div>
                    <div class="card__effect_detail">
                        <h2>Mèo Ăn Đấm<br /><span>hit hit</span></h2>
                    </div>
                </div>

                <div class="card__effect">
                    <div class="card__effect_img"><img src="/assets/images/ho.jpg" /></div>
                    <div class="card__effect_detail">
                        <h2>Hổ giận dữ<br /><span>grừ ... grừ ... grừ ... grừ ... grừ ... grừ ... grừ ... grừ ... grừ ...</span></h2>
                    </div>
                </div>
                <div class="card__effect">
                    <div class="card__effect_img"><img src="/assets/images/meo.png" /></div>
                    <div class="card__effect_detail">
                        <h2>Mèo Ăn Đấm<br /><span>hit hit</span></h2>
                    </div>
                </div>


            </div>
        </div>
    )
    document.querySelector('.search-btn').addEventListener('click', function () {
        this.parentElement.classList.toggle('open')
        this.previousElementSibling.focus()
    })
}

export default CardEffect;