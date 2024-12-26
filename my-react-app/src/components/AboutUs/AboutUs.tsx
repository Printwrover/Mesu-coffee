import React from 'react';
import '../../assets/css/Products.css';

// Import hình ảnh trực tiếp để sử dụng trong component
import logo from '../../assets/img/Logo.png';
import productImage1 from '../../assets/img/Drink menu.jpg';
import productImage2 from '../../assets/img/Drink menu1.jpg';
import productImage3 from '../../assets/img/Drink menu2.jpg';

const products = [
  { id: 1, name: "Sản phẩm 1", price: "500,000 VND", image: productImage1 },
  { id: 2, name: "Sản phẩm 2", price: "750,000 VND", image: productImage2 },
  { id: 3, name: "Sản phẩm 3", price: "1,200,000 VND", image: productImage3 },
  
];

const About = () => {
  return (
    <section className="about container py-5">
      {/* Phần giới thiệu */}
      <div className="row align-items-center mb-5">
        <div className="col-md-6 text-center">
          <img src={logo}
           
            alt="About Us" 
            className="img-fluid rounded shadow"
          />
        </div>
        <div className="col-md-6">
          <h2 className="mb-3">Về Chúng Tôi</h2>
          <p className="text-muted">
            Chúng tôi tự hào mang đến cho bạn những sản phẩm chất lượng cao, 
            phong cách hiện đại và giá cả hợp lý. Đội ngũ của chúng tôi luôn 
            sẵn sàng phục vụ và mang đến trải nghiệm mua sắm tốt nhất.
          </p>
          <a href="#about" className="btn btn-primary">Tìm Hiểu Thêm</a>
        </div>
      </div>

      {/* Phần sản phẩm mẫu */}
      <div className="featured-products">
        <h3 className="text-center mb-4">Sản Phẩm Nổi Bật</h3>
        <div className="row">
          {products.map((product) => (
            <div className="col-md-4 mb-4" key={product.id}>
              <div className="card h-100 shadow">
                <img 
                  src={product.image} 
                  alt={product.name} 
                  className="card-img-top"
                />
                <div className="card-body text-center">
                  <h5 className="card-title">{product.name}</h5>
                  <p className="card-text text-muted">Giá: {product.price}</p>
                  <a href="#details" className="btn btn-success">Xem Chi Tiết</a>
                </div>
              </div>
            </div>
            
          ))}
        </div>
      </div>

      
    </section>
  );
};

export default About;
