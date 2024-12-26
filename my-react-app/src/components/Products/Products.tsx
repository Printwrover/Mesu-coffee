import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate } from 'react-router-dom'; // Thêm hook useNavigate
import drink from '../../assets/img/Drink menu.jpg';
import drink1 from '../../assets/img/Drink menu1.jpg';
import drink2 from '../../assets/img/Drink menu2.jpg';
import drink3 from '../../assets/img/Drink menu3.jpg';
import drink4 from '../../assets/img/Drink menu4.jpg';
import drink5 from '../../assets/img/Drink menu5.jpg';
import drink6 from '../../assets/img/Drink menu6.jpg';
import drink7 from '../../assets/img/Drink menu7.jpg';
import drink8 from '../../assets/img/Drink menu8.jpg';
import drink9 from '../../assets/img/Drink menu9.jpg';
import drink10 from '../../assets/img/Drink menu10.jpg';

import CategoryImage1 from '../../assets/img/Banner1.jpg';
import CategoryImage2 from '../../assets/img/Banner2.jpg';
import CategoryImage3 from '../../assets/img/Banner3.jpg';
import '../../assets/css/Products.css';
import { Link } from 'react-router-dom';

const Products = () => {
  const navigate = useNavigate(); // Khai báo navigate
  const [searchTerm, setSearchTerm] = useState('');
  const [filter, setFilter] = useState('all');
  const [sortOrder, setSortOrder] = useState('asc');
  const [priceFilter, setPriceFilter] = useState('all');
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 8;

  const products = [
        { id: 1, name: 'Trà Sữa Trân Châu', price: 300000, discountPrice: 250000, image: drink, isFavorite: false, likes: 0, category: 'tea' },
        { id: 2, name: 'Nước Ép Cam', price: 250000, discountPrice: 200000, image: drink1, isFavorite: false, likes: 0 ,category: 'juice'},
        { id: 3, name: 'Cà Phê Sữa Đá', price: 200000, discountPrice: 180000, image: drink2, isFavorite: false, likes: 0, category: 'coffee' },
        { id: 4, name: 'Cà Phê Sữa Đá', price: 200000, discountPrice: 180000, image: drink3, isFavorite: false, likes: 0, category: 'coffee' },
        { id: 5, name: 'Trà Sữa Trân Châu', price: 300000, discountPrice: 250000, image: drink4, isFavorite: false, likes: 0, category: 'tea' },
        { id: 6, name: 'Nước Ép Cam', price: 250000, discountPrice: 200000, image: drink5, isFavorite: false, likes: 0, category: 'juice' },
        { id: 7, name: 'Cà Phê Sữa Đá', price: 200000, discountPrice: 180000, image: drink6, isFavorite: false, likes: 0, category: 'coffee' },
        { id: 8, name: 'Cà Phê Sữa Đá', price: 200000, discountPrice: 180000, image: drink7, isFavorite: false, likes: 0, category: 'coffee' },
        { id: 9, name: 'Trà Đào', price: 150000, discountPrice: 120000, image: drink8, isFavorite: false, likes: 0, category: 'tea' },
        { id: 10, name: 'Cà Phê Sữa Đá', price: 200000, discountPrice: 180000, image: drink9, isFavorite: false, likes: 0, category: 'coffee' },
        { id: 11, name: 'Cà Phê Sữa Đá', price: 200000, discountPrice: 180000, image: drink10, isFavorite: false, likes: 0, category: 'coffee' },
        { id: 12, name: 'Trà Đào', price: 150000, discountPrice: 120000, image: drink1, isFavorite: false, likes: 0, category: 'tea' },
        { id: 13, name: 'Cà Phê Sữa Đá', price: 200000, discountPrice: 180000, image: drink2, isFavorite: false, likes: 0, category: 'coffee' },
        { id: 14, name: 'Cà Phê Sữa Đá', price: 200000, discountPrice: 180000, image: drink3, isFavorite: false, likes: 0, category: 'coffee' },
        { id: 15, name: 'Trà Đào', price: 150000, discountPrice: 120000, image: drink, isFavorite: false, likes: 0, category: 'tea' },
        { id: 16, name: 'Cà Phê Sữa Đá', price: 200000, discountPrice: 180000, image: drink6, isFavorite: false, likes: 0, category: 'coffee' },
  
        // Thêm nhiều sản phẩm hơn nếu cần
      ];
    
      const handleAddToCart = (product) => {
        console.log('Thêm vào giỏ hàng:', product);
      };
    
      const handleToggleFavorite = (product) => {
        setProducts(products.map(p => 
          p.id === product.id ? { 
            ...p, 
            isFavorite: !p.isFavorite, 
            likes: p.isFavorite ? p.likes - 1 : p.likes + 1 
          } : p
        ));
      };
    
      const filteredProducts = products.filter(product => {
        const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase());
        const matchesFilter = filter === 'all' || product.category === filter;
    
        const matchesPriceFilter = priceFilter === 'all' || 
          (priceFilter === 'under500.000' && product.price <= 500000) ||
          (priceFilter === 'under300.000' && product.price <= 300000) ||
          (priceFilter === 'under200.000' && product.price <= 200000) ||
          (priceFilter === 'under100.000' && product.price <= 100000) ||
          (priceFilter === 'under50.000' && product.price <= 50000);
    
        return matchesSearch && matchesFilter && matchesPriceFilter;
      });
    
      const sortedProducts = filteredProducts.sort((a, b) => {
        return sortOrder === 'asc' ? a.price - b.price : b.price - a.price;
      });
    
      const totalPages = Math.ceil(sortedProducts.length / productsPerPage);
      const indexOfLastProduct = currentPage * productsPerPage;
      const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
      const currentProducts = sortedProducts.slice(indexOfFirstProduct, indexOfLastProduct);
    
      const formatPrice = (price) => {
        if (price >= 1000000) {
          return `${(price / 1000000).toFixed(0)} triệu`;
        } else if (price >= 1000) {
          return `${(price / 1000).toFixed(0)}k`;
        } else {
          return `${price} VNĐ`;
        }
      };
    
      return (
        <div className="container my-5">
          <div className="row">
            <div className="col-md-3 col-12">
              <h5>Phân loại đồ uống</h5>
              <div className="filter-wrapper">
                <div className="filter-grid">
                  <div className="filter-card" onClick={() => setFilter('tea')}>
                    <img src={CategoryImage1} alt="Trà Sữa" className="filter-image" />
                    <div className="filter-overlay">
                      <p className="filter-text">Trà Sữa</p>
                    </div>
                  </div>
                  <div className="filter-card" onClick={() => setFilter('juice')}>
                    <img src={CategoryImage2                } alt="Nước Ép Cam" className="filter-image" />
                <div className="filter-overlay">
                  <p className="filter-text">Nước Ép Cam</p>
                </div>
              </div>
              <div className="filter-card" onClick={() => setFilter('coffee')}>
                <img src={CategoryImage3} alt="Cà Phê Sữa Đá" className="filter-image" />
                <div className="filter-overlay">
                  <p className="filter-text">Cà Phê</p>
                </div>
              </div>
            </div>
          </div>
          <h5 className="mt-4">Sắp xếp theo</h5>
          <select className="form-select" value={sortOrder} onChange={(e) => setSortOrder(e.target.value)}>
            <option value="asc">Giá từ thấp đến cao</option>
            <option value="desc">Giá từ cao đến thấp</option>
          </select>
          <h5 className="mt-4">Lọc theo giá</h5>
          <select className="form-select" value={priceFilter} onChange={(e) => setPriceFilter(e.target.value)}>
            <option value="all">Tất cả giá</option>
            <option value="under500.000">Giá từ 500.000 đổ xuống</option>
            <option value="under300.000">Giá từ 300.000 đổ xuống</option>
            <option value="under200.000">Giá từ 200.000 đổ xuống</option>
            <option value="under100.000">Giá từ 100.000 đổ xuống</option>
            <option value="under50.000">Giá từ 50.000 đổ xuống</option>
          </select>
        </div>

        <div className="col-md-9 col-12">
          <div className="d-flex justify-content-between mb-4">
            <select className="form-select w-25" value={filter} onChange={(e) => setFilter(e.target.value)}>
              <option value="all">Tất cả sản phẩm</option>
              <option value="tea">Trà</option>
              <option value="juice">Nước Ép</option>
              <option value="coffee">Cà Phê</option>
            </select>
            <div className="input-group w-50">
              <input
                type="text"
                className="form-control"
                placeholder="Tìm kiếm sản phẩm..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <button className="btn btn-primary custom-button" type="button">Tìm</button>
            </div>
          </div>
          <div className="row">
            {currentProducts.length === 0 ? (
              <div className="col-12 text-center">
                <p>Không tìm thấy sản phẩm nào.</p>
              </div>
            ) : (
              currentProducts.map(product => (
                <div className="col-md-3 col-6" key={product.id}>
                  <div className="card mb-4 shadow-sm border-light position-relative">
                    <img src={product.image} alt={product.name} className="card-img-top" style={{ height: '200px', objectFit: 'cover' }} />
                    <div className="card-body text-center">
                      <h5 className="card-title">{product.name}</h5>
                      <p className="card-text">
                        <span className="price-original">
                          {product.discountPrice < product.price ? (
                            <del>{formatPrice(product.price)}</del>
                          ) : (
                            <span>{formatPrice(product.price)}</span>
                          )}
                        </span>
                        {product.discountPrice < product.price && (
                          <span className="price-discount ms-2">
                            <strong>{formatPrice(product.discountPrice)}</strong>
                          </span>
                        )}
                      </p>
                      <div className="d-flex justify-content-center button-container">
                 <Link to='/detail'>     <button className="button">
                         <i className="fa-solid fa-eye"></i>
                        </button></Link> 
                        <Link to='/ThanhToan'>
                        <button className="button" onClick={() => handleAddToCart(product)}>
                          <i className="fa-solid fa-cart-shopping"></i>
                        </button>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>

          {/* Phân trang */}
          {totalPages > 1 && (
            <nav>
              <ul className="pagination justify-content-center">
                <li className={`page-item ${currentPage === 1 ? 'disabled' : ''}`}>
                  <button className="page-link" onClick={() => setCurrentPage(currentPage - 1)}><i className="fa-solid fa-angle-left"></i></button>
                </li>
                {[...Array(totalPages)].map((_, index) => (
                  <li key={index} className={`page-item ${currentPage === index + 1 ? 'active' : ''}`}>
                    <button className="page-link" onClick={() => setCurrentPage(index + 1)}>{index + 1}</button>
                  </li>
                ))}
                <li className={`page-item ${currentPage === totalPages ? 'disabled' : ''}`}>
                  <button className="page-link" onClick={() => setCurrentPage(currentPage + 1)}><i className="fa-solid fa-angle-right"></i></button>
                </li>
              </ul>
            </nav>
          )}
        </div>
      </div>
    </div>
  );
};

export default Products;