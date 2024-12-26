import { useState } from 'react';
import '../../assets/css/Products.css'; // Assuming styles will be added here
import drink1 from '../../assets/img/Drink menu1.jpg';

function Detail() {
  const [selectedSize, setSelectedSize] = useState(null);
  const [selectedIce, setSelectedIce] = useState('yes');
  const [selectedMilk, setSelectedMilk] = useState('normal');
  const [review, setReview] = useState('');
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState('');
  const [reviews, setReviews] = useState([
      {
          author: 'Nguyễn Văn A',
          rating: 5,
          comment: 'Cà phê rất ngon, đậm đà và thơm lừng. Mình rất thích!',
      },
      {
          author: 'Trần Thị B',
          rating: 4,
          comment: 'Sữa đá hơi ngọt một chút nhưng cà phê rất thơm. Rất đáng thử!',
      },
  ]);

  const handleRatingClick = (value) => {
      setRating(value);
  };

  const handleSubmit = (e) => {
      e.preventDefault();
      if (comment.trim() === '' || rating === 0) return;

      const newReview = {
          author: 'Người dùng', // Có thể thay đổi để lấy tên người dùng từ một input khác
          rating,
          comment,
      };

      setReviews([...reviews, newReview]);
      setComment('');
      setRating(0);
  };
  const handleSizeSelect = (size) => {
    setSelectedSize(size);
  };

  const handleReviewChange = (event) => {
    setReview(event.target.value);
  };

  const handleSubmitReview = () => {
    if (review.trim()) {
      // Submit review logic
      setReviews([...reviews, review]); // Add review to list
      alert('Đánh giá đã được gửi!');
      setReview(''); // Reset review after submission
    } else {
      alert('Vui lòng nhập đánh giá!');
    }
  };

  return (
    <div className="container mt-5">
        <div className="row mb-4">
            <div className="col-md-6">
                <img src={drink1} alt="Cà Phê Sữa Đá" className="img-fluid border rounded" />
            </div>

  <div className="col-md-6">
    <div className="border p-4 rounded">
      <h1 className="text-warning">Cà Phê Sữa Đá</h1>
      <p className="fs-4 text-success">50,000 VNĐ</p>
      <p className="fs-5">Cà phê sữa đá với hương vị đậm đà, hòa quyện hoàn hảo giữa cà phê thơm ngon và sữa đặc, mang lại trải nghiệm tuyệt vời cho mọi người.</p>

      <div className="mb-3">
        <label className="form-label">Chọn kích cỡ:</label>
        <div className="btn-group size-selection" role="group">
          {['S', 'M', 'L'].map((size) => (
            <button
              key={size}
              type="button"
              className={`btn btn-outline-primary size-btn ${selectedSize === size ? 'active' : ''}`}
              onClick={() => handleSizeSelect(size)}
            >
              {size}
            </button>
          ))}
        </div>
      </div>
      <div className="mb-3">
        <label htmlFor="iceOption" className="form-label">Chọn thêm đá</label>
        <select
          id="iceOption"
          className="form-select"
          value={selectedIce}
          onChange={(e) => setSelectedIce(e.target.value)}
        >
          <option value="yes">Có đá</option>
          <option value="no">Không đá</option>
        </select>
      </div>

      <div className="mb-3">
        <label htmlFor="milkOption" className="form-label">Chọn lượng sữa</label>
        <select
          id="milkOption"
          className="form-select"
          value={selectedMilk}
          onChange={(e) => setSelectedMilk(e.target.value)}
        >
          <option value="less">Ít sữa</option>
          <option value="normal">Vừa sữa</option>
          <option value="more">Nhiều sữa</option>
        </select>
      </div>

      <div className="d-flex gap-2">
        <button className="btn btn-warning btn-lg"><i className="fa-solid fa-cart-shopping"></i>Thêm vào giỏ hàng</button>
     
      </div>
    </div>
  </div>
</div>


       <section className="product-reviews">
            {/* Form đánh giá mới */}
            <div className="review-form">
                <h4>Viết đánh giá của bạn</h4>
                <form onSubmit={handleSubmit}>
                    <label htmlFor="rating">Đánh giá: </label>
                    <div className="star-rating" id="star-rating">
                        {[1, 2, 3, 4, 5].map((value) => (
                            <span
                                key={value}
                                className={`star ${rating >= value ? 'selected' : ''}`}
                                onClick={() => handleRatingClick(value)}
                                style={{ cursor: 'pointer' }}
                            >
                                ⭐
                            </span>
                        ))}
                    </div>
                    <br />
                    <label htmlFor="comment">Nhận xét: </label>
                    <textarea
                        id="comment"
                        name="comment"
                        rows="4"
                        value={comment}
                        onChange={(e) => setComment(e.target.value)}
                        required
                    />
                    <br />
                    <button type="submit">Gửi Đánh Giá</button>
                </form>
            </div>

            {/* Phần đánh giá khách hàng */}
            <div className="reviews-list">
                {reviews.map((review, index) => (
                    <div className="review" key={index}>
                        <p className="review-author">{review.author}</p>
                        <p className="review-rating">{'⭐'.repeat(review.rating)}</p>
                        <p className="review-comment">{review.comment}</p>
                    </div>
                ))}
            </div>
        </section>

      {/* Review Modal */}
      <div className="modal fade" id="reviewModal" tabIndex="-1" aria-labelledby="reviewModalLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="reviewModalLabel">Đánh giá sản phẩm</h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <textarea
                className="form-control"
                rows="4"
                placeholder="Viết đánh giá của bạn..."
                value={review}
                onChange={handleReviewChange}
              ></textarea>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Đóng</button>
              <button type="button" className="btn btn-primary" onClick={handleSubmitReview}>Gửi đánh giá</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Detail;
