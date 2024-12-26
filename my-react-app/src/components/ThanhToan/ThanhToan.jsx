import 'bootstrap/dist/css/bootstrap.min.css';
import './ThanhToan.css';
import ModalVoucher from '../ModalVoucher/ModalVoucher';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import drink1 from '../../assets/img/Drink menu1.jpg';
import drink2 from '../../assets/img/Drink menu2.jpg';
const products = [
  { id: 1, name: 'Espresso', image: drink1, quantity: 1, originalPrice: 80000, discountedPrice: 70000 },
  { id: 2, name: 'Cappuccino', image: drink2, quantity: 2, originalPrice: 100000, discountedPrice: 90000 },
];

const totalAmount = products.reduce((total, product) => total + product.discountedPrice * product.quantity, 0);

function ThanhToan() {
  return (
    <div>
      <main className="container my-5">
        <div className="row">
          <div className="col-lg-8">
            <div className="table-responsive">
              <table className="table table-bordered table-hover">
                <thead className="table-dark text-white">
                  <tr>
                    <th>#</th>
                    <th>Sản Phẩm</th>
                    <th>Hình Ảnh</th>
                    <th>Số Lượng</th>
                    <th>Giá Gốc</th>
                    <th>Giá Giảm</th>
                    <th>Tổng Tiền</th>
                    <th>Hành Động</th>
                  </tr>
                </thead>
                <tbody>
                  {products.map((product, index) => (
                    <tr key={product.id}>
                      <td>{index + 1}</td>
                      <td>{product.name}</td>
                      <td>
                        <img
                          src={drink1}
                          alt={product.name}
                          className="img-thumbnail img-large"
                        />
                      </td>

                      <td>
                        <input
                          type="number"
                          value={product.quantity}
                          className="form-control w-50 mx-auto"
                        />
                      </td>
                      <td>{product.originalPrice.toLocaleString()}₫</td>
                      <td>{product.discountedPrice.toLocaleString()}₫</td>
                      <td>{(product.discountedPrice * product.quantity).toLocaleString()}₫</td>
                      <td>
                        <button className="btn btn-danger btn-sm">Xóa</button>
                      </td>
                    </tr>
                  ))}
                </tbody>
                <tfoot>
                  <tr>
                    <td colSpan="6" className="text-end fw-bold">Tạm Tính</td>
                    <td colSpan="2">{totalAmount.toLocaleString()}₫</td>
                  </tr>
                </tfoot>
              </table>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="card">
              <div className="card-header text-white" style={{ backgroundColor: '#4b3832' }}>
                <h5>Thông Tin Đơn Hàng</h5>
              </div>
              <div className="card-body">
                <p className="mb-2"><strong>Người Nhận:</strong> Nguyễn Văn A</p>
                <p className="mb-3"><strong>Số Điện Thoại:</strong> 0123 456 789</p>
                <p className="mb-3"><strong>Địa Chỉ Giao Hàng:</strong></p>
                <p>123 Đường Cà Phê, Quận 1, TP.HCM</p>
                <p className="mb-3"><strong><a href="#" data-bs-toggle="modal" data-bs-target="#voucherModal">Chọn Voucher</a></strong></p>
                <p className="mb-3"><strong>Chọn Phương Thức Thanh Toán:</strong></p>
                <div className="mb-3">
                  <select className="form-select" aria-label="Chọn phương thức thanh toán">
                    <option value="credit-card">Thẻ tín dụng</option>
                    <option value="bank-transfer">Chuyển khoản ngân hàng</option>
                    <option value="cash-on-delivery">Thanh toán khi nhận hàng</option>
                  </select>
                </div>
                <p className="mb-2"><strong>Tạm Tính:</strong> 250,000₫</p>
                <p className="mb-2"><strong>Giảm Giá:</strong> -20,000₫</p>
                <p className="mb-3"><strong>Phí Vận Chuyển:</strong> 30,000₫</p>
                <hr />
                <p className="mb-0"><strong>Tổng Cộng:</strong> 260,000₫</p>
              </div>
            </div>
          </div>
        </div>

        <div className="text-end mt-3">
          <Link to='/Products'><button className="btn btn-primary">Tiếp Tục Mua Sắm</button></Link>
          <button className="btn btn-primary">Thanh Toán</button>
        </div>
      </main>

      <ModalVoucher />
    </div>
  );
}

export default ThanhToan;
