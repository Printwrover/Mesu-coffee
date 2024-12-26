// src/components/Banner.jsx
import React from 'react';
import bannerImage from '../../assets/img/banner1.jpg'; // Import hình ảnh banner

const Banner = () => {
    return (
        <div
            className="banner-container"
            style={{
                backgroundImage: `url(${bannerImage})`,
            }}
        >
            {/* Lớp phủ mờ */}
            <div className="banner-overlay"></div>

            {/* Nội dung Banner */}
            <div className="banner-content">
                <h1>Thỏa Thích Giải Khát, Tươi Mát Từng Giọt</h1>
                <p>Khám phá hương vị đặc biệt với các sản phẩm nước uống tuyệt vời.</p>
                <a href="#products" className="banner-btn">
                    Xem Ngay
                </a>
            </div>
        </div>
    );
};

export default Banner;
