import React from "react";
import '../App.css';

function ProductDetails() {
    return (
        <div className="product-view">
            <div className="product-essential">
                <div className="product-essential-img">
                    <img src="/assets/images/voichau.jpg" />
                </div>
                <div class="product-essential-information">
                    <div class="product-info">
                        <div class="product-name">
                            <h1 class="product-title" itemprop="name">TLP02310B</h1>
                        </div>

                        <div class="description" itemprop="description">
                            <div class="short-description">Vòi chậu gắn tường (Vòi dài)</div>
                        </div>
                        <div class="product-info-content">
                            <span class="info-title">Mã sản phẩm:</span>
                            <span class="info-value">TLP02310B</span>
                        </div>
                        <div class="product-info-content">
                            <span class="info-title">Kích cỡ:</span>
                            <span class="info-value"></span>
                        </div>
                        <div class="price-info">



                            <div class="price-box">
                                <span class="regular-price" id="product-price-3083">
                                    <span class="price-label">Giá niêm yết (bao gồm VAT)</span>
                                    <span class="price">49.610.000&nbsp;₫</span>                                    
                                </span>
                            </div>


                        </div>

                        <div class="additional-buttons">
                            <div class="compare-button">
                                <a href="#" data-id="3083" data-action="https://vn.toto.com/toto/catalog_product/addToComparison" class="button">So sánh</a>
                            </div>

                            <div class="store-list-button">
                                <a href="https://vn.toto.com/he-thong-phan-phoi/?f=store" class="button primary">Mua Hàng</a>
                            </div>
                        </div>
                    </div>
                </div>



            </div>
        </div>
    );
}

export default ProductDetails;