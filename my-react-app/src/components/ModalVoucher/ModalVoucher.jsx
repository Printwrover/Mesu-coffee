import { useState } from 'react';
import CategoryImage1 from '../../assets/img/Banner1.jpg';
import CategoryImage2 from '../../assets/img/Banner2.jpg';
import CategoryImage3 from '../../assets/img/Banner3.jpg';

const ModalVoucher = () => {
  const [selectedVouchers, setSelectedVouchers] = useState([]);

  const toggleVoucher = (id) => {
    setSelectedVouchers((prev) => {
      if (prev.includes(id)) {
        return prev.filter(voucherId => voucherId !== id);
      } else {
        return [...prev, id];
      }
    });
  };

  return (
    <div className="modal fade" id="voucherModal" tabIndex="-1" aria-labelledby="voucherModalLabel" aria-hidden="true">
      <div className="modal-dialog modal-lg">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="voucherModalLabel">Chọn Voucher</h5>
            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div className="modal-body">
            <div className="input-group mb-3">
              <input type="text" className="form-control" placeholder="Nhập mã giảm giá" />
              <button className="btn btn-outline-secondary">Áp Dụng</button>
            </div>

            <div className="container mt-4">
              {[
                { id: 'voucher-coffee', description: 'Voucher cho Cà Phê - Giảm 10%', imgSrc: CategoryImage1, count: 3 },
                { id: 'voucher-tea', description: 'Voucher cho Trà Đá - Giảm 15%', imgSrc: CategoryImage2, count: 5 },
                { id: 'voucher-orange-juice', description: 'Voucher cho Nước Cam - Giảm 20%', imgSrc: CategoryImage3, count: 2 },
                { id: 'voucher-milk', description: 'Voucher cho Sữa - Giảm 25%', imgSrc: CategoryImage2, count: 4 },
                { id: 'voucher-special', description: 'Voucher Đặc Biệt - Giảm 30%', imgSrc: CategoryImage1, count: 6 },
              ].map(voucher => (
                <div key={voucher.id} className={`voucher-item ${selectedVouchers.includes(voucher.id) ? 'selected' : ''}`} onClick={() => toggleVoucher(voucher.id)}>
                  <input type="checkbox" className="voucher-checkbox" id={voucher.id} checked={selectedVouchers.includes(voucher.id)} readOnly />
                  <div className="d-flex align-items-center">
                    <img src={voucher.imgSrc} alt={voucher.description} className="img-fluid me-3" />
                    <span className="voucher-description">{voucher.description}</span>
                  </div>
                  <span className="badge bg-success ms-2">{voucher.count}</span>
                </div>
              ))}
            </div>

          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-primary w-100">Áp Dụng</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalVoucher;
