// src/Login.jsx
import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from '../../assets/img/Logo.png';
import '../../assets/css/Login.css'
import { Link } from 'react-router-dom';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Đăng nhập với:', { username, password });
    // Thêm logic xử lý đăng nhập ở đây
  };

  return (
    <section className="about container py-5">
      <div className="row align-items-center mb-5">
        <div className="col-md-6 text-center">
          <img src={logo} alt="About Us" className="img-fluid rounded shadow" />
        </div>
        <div className="col-md-6">
          <form onSubmit={handleSubmit}>
          <div className="mb-3">
                <label htmlFor="email" className="form-label">Email</label> 
                <input
                    type="email" 
                    className="form-control"
                    id="email"
                    value={username} 
                    onChange={(e) => setUsername(e.target.value)} 
                    required
                />
                </div>
            <div className="mb-3">
              <label htmlFor="password" className="form-label">Mật Khẩu</label>
              <input
                type="password"
                className="form-control"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <button type="submit" className="custom-button1">
              Đăng Nhập
            </button>

          </form>
          <div className="text-end mb-3">
            <a href="/forgot-password" className="link-primary">Quên Mật Khẩu?</a> {/* Nút Quên Mật Khẩu */}
          </div>
          <div className="row mb-3">
            <div className="col-6">
            <button className="facebook-button">
              <i className="fab fa-facebook-f"></i> Đăng Nhập Bằng Facebook
            </button>

            </div>
            <div className="col-6">
            <button className="google-button">
                <i className="fab fa-google"></i> Đăng Nhập Bằng Google
              </button>

            </div>
          </div>
          <Link to='/Register'>
          <p className="mt-3 text-center"> 
            Chưa có tài khoản? <a href="/register" className="link-primary">Đăng Ký</a>
            </p>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Login;