import React from "react";
import "../App.css";

function Header() {
    return (
        <div class="topnav">
            <input type="checkbox" hidden name="" id="nav__input" />

            <ul class="dropdown">
                <li>
                    <a href="">GIỚI THIỆU</a>
                    <div className="line"></div>
                </li>
                <li>
                    <a href="">SẢN PHẨM</a>
                    <div className="line"></div>
                    <ul>
                        <li>
                            <a href="">Layout</a>
                        </li>
                        <li>Input</li>
                        <li>
                            <div>Navigation</div>
                            <ul>
                                <li>
                                <a href="">Breadcrumb</a>
                                </li>
                                <li>Dropdown</li>
                                <li>Menu</li>
                                <li>Nested dropdown</li>
                            </ul>
                        </li>
                        <li>DỰ ÁN</li>
                        <li>Feedback</li>
                    </ul>
                </li>
                <li>DỰ ÁN</li>
            </ul>
            <div class="trans">
                <a>
                    <img src="/assets/images/logo_SGS.png" alt="logo" />
                </a>
            </div>
            <ul class="dropdown">
                <li>TIN TỨC</li>
                <li>
                    <div>LIÊN HỆ</div>
                    <ul>
                        <li>Layout</li>
                        <li>Input</li>
                        <li>
                            <div>Navigation</div>
                            <ul>
                                <li>Breadcrumb</li>
                                <li>Dropdown</li>
                                <li>Menu</li>
                                <li>Nested dropdown</li>
                            </ul>
                        </li>
                        <li>Display</li>
                        <li>Feedback</li>
                    </ul>
                </li>
                <li>NGHỀ NGHIỆP</li>
            </ul>

            <div class="nav__btn">
                <label for="nav__input">
                    <i class="fas fa-bars"></i>
                </label>
            </div>

            

            <label for="nav__input" class="nav__overlay"></label>

            <div class="nav__mobile">
                <label for="nav__input" class="nav__mobile-close">
                    <i class="far fa-window-close"></i>
                </label>
                <ul class="nav__mobile-list">
                    <li class="nav__mobile-item">GIỚI THIỆU</li>
                    <li class="nav__mobile-item">
                        <div>
                            SẢN PHẨM <i class="fas fa-angle-down"></i>
                        </div>
                        <ul class="nav__mobile-list">
                            <li class="nav__mobile-item">Layout</li>
                            <li class="nav__mobile-item">Input</li>
                            <li class="nav__mobile-item">
                                <div>Navigation</div>
                                <ul class="nav__mobile-list">
                                    <li class="nav__mobile-item">Breadcrumb</li>
                                    <li class="nav__mobile-item">Dropdown</li>
                                    <li class="nav__mobile-item">Menu</li>
                                    <li class="nav__mobile-item">Nested dropdown</li>
                                </ul>
                            </li>
                            <li class="nav__mobile-item">DỰ ÁN</li>
                            <li class="nav__mobile-item">Feedback</li>
                        </ul>
                    </li>
                    <li class="nav__mobile-item">DỰ ÁN</li>
                    <li class="nav__mobile-item">TIN TỨC</li>
                    <li class="nav__mobile-item">
                        <div>LIÊN HỆ</div>
                        <ul class="nav__mobile-list">
                            <li class="nav__mobile-item">Layout</li>
                            <li class="nav__mobile-item">Input</li>
                            <li class="nav__mobile-item">
                                <div>Navigation</div>
                                <ul class="nav__mobile-list">
                                    <li class="nav__mobile-item">Breadcrumb</li>
                                    <li class="nav__mobile-item">Dropdown</li>
                                    <li class="nav__mobile-item">Menu</li>
                                    <li class="nav__mobile-item">Nested dropdown</li>
                                </ul>
                            </li>
                            <li class="nav__mobile-item">Display</li>
                            <li class="nav__mobile-item">Feedback</li>
                        </ul>
                    </li>
                    <li class="nav__mobile-item">NGHỀ NGHIỆP</li>
                </ul>
            </div>
        </div>
    );
}

export default Header;

// import React from "react";
// import '../App.css';

// function Header() {
//     return (
//         <div>
//             <nav class="navbar navbar-expand-lg navbar-light imgheader">
//                 <div class="container-fluid">
//                     <button
//                         class="navbar-toggler"
//                         type="button"
//                         data-mdb-toggle="collapse"
//                         data-mdb-target="#navbarRightAlignExample"
//                         aria-controls="navbarRightAlignExample"
//                         aria-expanded="false"
//                         aria-label="Toggle navigation"
//                     >
//                         <i class="fas fa-bars"></i>
//                     </button>
//                     <div class="collapse navbar-collapse" id="navbarRightAlignExample">
//                         <ul class="navbar-nav ms-auto me-auto mb-2 mb-lg-0">
//                             <li class="nav-item">
//                                 <a class="nav-link" aria-current="page" href="#">Home</a>
//                             </li>
//                             <li class="nav-item">
//                                 <a class="nav-link" href="#">About Us</a>
//                             </li>
//                             <li class="nav-item dropdown">
//                                 <a
//                                     class="nav-link dropdown-toggle"
//                                     href="#"
//                                     id="navbarDropdown"
//                                     role="button"
//                                     data-mdb-toggle="dropdown"
//                                     aria-expanded="false"
//                                 >
//                                     Products
//                                 </a>
//                                 <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
//                                     <li>
//                                         <a class="dropdown-item" href="#">Raizo R190</a>
//                                     </li>
//                                     <li><hr class="dropdown-divider" /></li>
//                                     <li>
//                                         <a class="dropdown-item" href="#">Raizo R300</a>
//                                     </li>
//                                     <li><hr class="dropdown-divider" /></li>
//                                     <li>
//                                         <a class="dropdown-item" href="#">Raizo R320</a>
//                                     </li>
//                                     <li><hr class="dropdown-divider" /></li>
//                                     <li>
//                                         <a class="dropdown-item" href="#">Raizo Hotel Door Lock</a>
//                                     </li>
//                                     <li><hr class="dropdown-divider" /></li>
//                                     <li>
//                                         <a class="dropdown-item" href="#">Digital Locker Lock</a>
//                                     </li>
//                                 </ul>
//                             </li>
//                             <li class="nav-item">
//                                 <img src="/assets/images/logo_SGS.png" alt="logo" style={{width:100,height:60}} />
//                             </li>
//                             <li class="nav-item dropdown">
//                                 <a
//                                     class="nav-link dropdown-toggle"
//                                     href="#"
//                                     id="navbarDropdown"
//                                     role="button"
//                                     data-mdb-toggle="dropdown"
//                                     aria-expanded="false"
//                                 >
//                                     Solution
//                                 </a>
//                                 <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
//                                     <li>
//                                         <a class="dropdown-item" href="#">Hotel Solution</a>
//                                     </li>
//                                     <li><hr class="dropdown-divider" /></li>
//                                     <li>
//                                         <a class="dropdown-item" href="#">Residential Solution</a>
//                                     </li>
//                                     <li><hr class="dropdown-divider" /></li>
//                                     <li>
//                                         <a class="dropdown-item" href="#">Airbnb Solution</a>
//                                     </li>
//                                 </ul>
//                             </li>
//                             <li class="nav-item">
//                                 <a class="nav-link" href="#">Blog</a>
//                             </li>
//                             <li class="nav-item">
//                                 <a class="nav-link" href="#">Contact Us</a>
//                             </li>
//                         </ul>
//                     </div>
//                 </div>

//             </nav>
//         </div>
//     );
// }

// export default Header;
