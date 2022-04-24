import React from "react";
import '../App.css';

function Introduce() {
    return (
        <div>
            <h1 className="intro_content"><u>Về chúng tôi</u></h1>
            <div className="introduce">
                <div className="card_">
                    <div className="imgBx" data-text="TẦM NHÌN">
                        <img src="/assets/images/tamnhin.png" alt="TẦM NHÌN" />
                    </div>
                    <div className="content">
                        <h2>TẦM NHÌN</h2>
                        <p><i className="far fa-gem"></i> Trở thành đơn vị Phân Phối Vật Liệu TrangTrí Nội Thất xây dựng hàng đầu tại Việt Nam.<br />
                            <i className="far fa-gem"></i> Luôn thuộc nhóm các công ty dẫn đầu trong lĩnh vực mà Saigon Sky tham gia.</p>
                    </div>
                </div>

                <div className="card_">
                    <div className="imgBx" data-text=" SỨ MỆNH">
                        <img src="/assets/images/sumenh.png" alt=" SỨ MỆNH" />
                    </div>
                    <div className="content">
                        <h2>SỨ MỆNH</h2>
                        <p><i className="far fa-gem"></i> Cung cấp sản phẩm, dịch vụ làm hài lòng khách hàng.<br />
                            <i className="far fa-gem"></i> Luôn quan tâm đến nhu cầu sử dụng của từng phân khúc khách hàng, để từ đó lựa chọn và phân phối những mẫu sản phẩm phù hợp nhất đến cho từng đối tượng khách hàng khác nhau.<br />
                            <i className="far fa-gem"></i> Trở thành nơi làm việc lý tưởng để nâng cao kỹ năng, phát triển bản thân cũng như mang đến sự hài lòng cho mỗi nhân viên với tâm niệm con người là tài sản vô giá.</p>
                    </div>
                </div>


                <div className="card_">
                    <div className="imgBx" data-text="TRIẾT LÝ KINH DOANH">
                        <img src="/assets/images/trietlykinhdoanh.png" alt="TRIẾT LÝ KINH DOANH" />
                    </div>
                    <div className="content">
                        <h2>TRIẾT LÝ KINH DOANH</h2>
                        <p><i className="far fa-gem"></i> Uy tín xây dựng thương hiệu, chất lượng tạo nên uy tín.
                        </p>
                    </div>
                </div>

                <div className="card_">
                    <div className="imgBx" data-text="GIÁ TRỊ CỐT LÕI">
                        <img src="/assets/images/giatricotloi.png" alt="GIÁ TRỊ CỐT LÕI" />
                    </div>
                    <div className="content">
                        <h2>GIÁ TRỊ CỐT LÕI</h2>
                        <p><i className="far fa-gem"></i> S – Special: Sản phẩm đặc biệt.<br />
                            <i className="far fa-gem"></i> G – Good: Chất lượng tốt, dịch vụ tốt, hậu mãi tốt.<br />
                            <i className="far fa-gem"></i> S – Smart: Công nghệ thông minh.</p>
                    </div>
                </div>
            </div>
        </div>


    )
}

export default Introduce;


{/* <div class="intro">
            <section class="vision">
                <div class="vision__container">
                    <div class="emphasized-block">
                        <div class="title">
                            <h4><i class="far fa-eye"></i> TẦM NHÌN</h4>
                        </div>
                        <div class="content">
                            <p><i class="far fa-gem"></i> Trở thành đơn vị Phân Phối Vật Liệu TrangTrí Nội Thất xây dựng hàng đầu tại Việt Nam.<br />
                            <i class="far fa-gem"></i> Luôn thuộc nhóm các công ty dẫn đầu trong lĩnh vực mà Saigon Sky tham gia.</p>
                        </div>
                    </div>
                </div>

                <div class="vision__container">
                    <div class="emphasized-block">
                        <div class="title">
                            <h4><i class="far fa-flag"></i> SỨ MỆNH</h4>
                        </div>
                        <div class="content">
                            <p><i class="far fa-gem"></i> Cung cấp sản phẩm, dịch vụ làm hài lòng khách hàng.<br />
                            <i class="far fa-gem"></i> Luôn quan tâm đến nhu cầu sử dụng của từng phân khúc khách hàng, để từ đó lựa chọn và phân phối những mẫu sản phẩm phù hợp nhất đến cho từng đối tượng khách hàng khác nhau.<br />
                            <i class="far fa-gem"></i> Trở thành nơi làm việc lý tưởng để nâng cao kỹ năng, phát triển bản thân cũng như mang đến sự hài lòng cho mỗi nhân viên với tâm niệm con người là tài sản vô giá.</p>
                        </div>
                    </div>
                </div>

                <div class="vision__container">
                    <div class="emphasized-block">
                        <div class="title">
                            <h4><i class="fas fa-city"></i> TRIẾT LÝ KINH DOANH</h4>
                        </div>
                        <div class="content">
                            <p><i class="far fa-gem"></i> Uy tín xây dựng thương hiệu, chất lượng tạo nên uy tín.
                            </p>
                        </div>
                    </div>
                </div>

                <div class="vision__container">
                    <div class="emphasized-block">
                        <div class="title">
                            <h4><i class="fab fa-react"></i> GIÁ TRỊ CỐT LÕI</h4>
                        </div>
                        <div class="content">
                            <p><i class="far fa-gem"></i> S – Special: Sản phẩm đặc biệt.<br />
                            <i class="far fa-gem"></i> G – Good: Chất lượng tốt, dịch vụ tốt, hậu mãi tốt.<br />
                            <i class="far fa-gem"></i> S – Smart: Công nghệ thông minh.</p>
                        </div>
                    </div>
                </div>
            </section>
        </div> */}