// src/Register.jsx
import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from '../../assets/img/Logo.png';
import '../../assets/css/Login.css';
import { Link } from 'react-router-dom';
const Register = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');


  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Đăng ký với:', { username, email, password });
    // Thêm logic xử lý đăng ký ở đây
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
              <label htmlFor="username" className="form-label">Tên Người Dùng</label>
              <input
                type="text"
                className="form-control"
                id="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
              />
            </div>
         
            <div className="mb-3">
              <label htmlFor="email" className="form-label">Email</label>
              <input
                type="email"
                className="form-control"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="phone" className="form-label">Số điện thoại</label>
              <input
                type="text"
                className="form-control"
                id="phone"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
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
            <button type="submit" className="custom-button1">
              Đăng Ký
            </button>
          </form>
          <Link to='/Login'>
          <p className="mt-3 text-center">
            Đã có tài khoản? 
            <a  className="link-primary">Đăng Nhập</a>
          </p>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Register;