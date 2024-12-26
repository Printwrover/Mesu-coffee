// src/components/Footer.jsx
import React from 'react';
import logo from '../../assets/img/logo.png'; // Đảm bảo rằng bạn có logo trong thư mục đúng

const Footer = () => {
    return (
        <footer className="bg-dark text-light py-5">
            <div className="container">
                <div className="row">
                    {/* Logo Quán Cà Phê */}
                    <div className="col-md-3">
                        <img src={logo} alt="Logo" className="footer-logo mb-3" />
                        <p>&copy; 2023 Quán Cà Phê XYZ. All rights reserved.</p>
                    </div>

                    {/* Liên kết nhanh */}
                    <div className="col-md-3 text-center">
                        <h5 className="mb-3">Liên Kết Nhanh</h5>
                        <ul className="list-unstyled">
                            <li><a href="#home" className="text-light">Trang chủ</a></li>
                            <li><a href="#menu" className="text-light">Menu</a></li>
                            <li><a href="#about" className="text-light">Về chúng tôi</a></li>
                            <li><a href="#services" className="text-light">Dịch vụ</a></li>
                            <li><a href="#contact" className="text-light">Liên hệ</a></li>
                        </ul>
                    </div>

                    {/* Dịch vụ */}
                    <div className="col-md-3 text-center">
                        <h5 className="mb-3">Dịch Vụ</h5>
                        <ul className="list-unstyled">
                            <li><a href="#coffee" className="text-light">Cà phê pha chế</a></li>
                            <li><a href="#wifi" className="text-light">WiFi miễn phí</a></li>
                            <li><a href="#takeaway" className="text-light">Mang đi</a></li>
                            <li><a href="#events" className="text-light">Tổ chức sự kiện</a></li>
                        </ul>
                    </div>

                    {/* Thông tin liên hệ */}
                    <div className="col-md-3 text-center text-md-left">
                        <h5 className="mb-3">Thông Tin Liên Hệ</h5>
                        <p>Email: info@cafe.xyz</p>
                        <p>Điện thoại: +84 123 456 789</p>
                        <p>Địa chỉ: Số 10, Đường ABC, Quận 1, TP.HCM</p>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
