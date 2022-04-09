import React from "react";
import './cardeffect2.css';
import './cardeffect.css';

import { useState } from "react";

function CardEffect2() {
    const [open, setOpen] = useState(false);

    return (
        <div>
            <div class={"search-box-" + open}>
                <input type="text" class="search-input" id="search_box" />
                <button class="search-btn" onClick={() => { setOpen(!open); }} >
                    <label for="search_box" >
                        <i class="fas fa-search"></i>
                    </label>
                </button>
            </div>
            <div class="box2__">
                <div class="card__effect2">
                    <div class="card__effect2_img"><img src="/assets/images/meo.png" /></div>
                    <div class="card__effect2_detail">
                        <h2>Mèo Ăn Đấm<br /><span>hit hit</span></h2>
                    </div>
                </div>

                <div class="card__effect2">
                    <div class="card__effect2_img"><img src="/assets/images/ho.jpg" /></div>
                    <div class="card__effect2_detail">
                        <h2>Hổ giận dữ<br /><span>grừ ... grừ ... grừ ...</span></h2>
                    </div>
                </div>


                <div class="card__effect2">
                    <div class="card__effect2_img"><img src="/assets/images/meo.png" /></div>
                    <div class="card__effect2_detail">
                        <h2>Mèo Ăn Đấm<br /><span>hit hit</span></h2>
                    </div>
                </div>

                <div class="card__effect2">
                    <div class="card__effect2_img"><img src="/assets/images/ho.jpg" /></div>
                    <div class="card__effect2_detail">
                        <h2>Hổ giận dữ<br /><span>grừ ... grừ ... grừ ...</span></h2>
                    </div>
                </div>


                <div class="card__effect2">
                    <div class="card__effect2_img"><img src="/assets/images/meo.png" /></div>
                    <div class="card__effect2_detail">
                        <h2>Mèo Ăn Đấm<br /><span>hit hit</span></h2>
                    </div>
                </div>

                <div class="card__effect2">
                    <div class="card__effect2_img"><img src="/assets/images/ho.jpg" /></div>
                    <div class="card__effect2_detail">
                        <h2>Hổ giận dữ<br /><span>grừ ... grừ ... grừ ...</span></h2>
                    </div>
                </div>

                <div class="card__effect2">
                    <div class="card__effect2_img"><img src="/assets/images/meo.png" /></div>
                    <div class="card__effect2_detail">
                        <h2>Mèo Ăn Đấm<br /><span>hit hit</span></h2>
                    </div>
                </div>



            </div>


        </div>
    )
}

export default CardEffect2;