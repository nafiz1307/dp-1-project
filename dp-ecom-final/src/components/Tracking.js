import React from "react";
const Tracking = () => {
  return (
    <div>
      <div style={{display: 'flex',  justifyContent:'center', alignItems:'center', height: '100vh'}}>
        <section class="root">
          <figure>
            <img
              src="https://i.postimg.cc/WzXQ7rL3/Logo-J-T-Merah-Square.jpg"
              alt=""
            />
            <figcaption>
              <h4>Marley.Co</h4>
              <h6>Order Number</h6>
              <h2>620098315677</h2>
            </figcaption>
          </figure>
          <div class="order-track">
            <div class="order-track-step">
              <div class="order-track-status">
                <span class="order-track-status-dot"></span>
                <span class="order-track-status-line"></span>
              </div>
              <div class="order-track-text">
                <p class="order-track-text-stat">Deilvered</p>
                <span class="order-track-text-sub">1st June, 2021</span>
              </div>
            </div>
            <div class="order-track-step">
              <div class="order-track-status">
                <span class="order-track-status-dot"></span>
                <span class="order-track-status-line"></span>
              </div>
              <div class="order-track-text">
                <p class="order-track-text-stat">Picked Up For Delivery</p>
                <span class="order-track-text-sub">1st June, 2021</span>
              </div>
            </div>
            <div class="order-track-step">
              <div class="order-track-status">
                <span class="order-track-status-dot"></span>
                <span class="order-track-status-line"></span>
              </div>
              <div class="order-track-text">
                <p class="order-track-text-stat">Ready For Delivery</p>
                <span class="order-track-text-sub">1st June, 2021</span>
              </div>
            </div>
            <div class="order-track-step">
              <div class="order-track-status">
                <span class="order-track-status-dot"></span>
                <span class="order-track-status-line"></span>
              </div>
              <div class="order-track-text">
                <p class="order-track-text-stat">Received By WareHouse</p>
                <span class="order-track-text-sub">2nd June, 2021</span>
              </div>
            </div>
            <div class="order-track-step">
              <div class="order-track-status">
                <span class="order-track-status-dot"></span>
                <span class="order-track-status-line"></span>
              </div>
              <div class="order-track-text">
                <p class="order-track-text-stat">Shipped To WareHouse</p>
                <span class="order-track-text-sub">3rd June, 2021</span>
              </div>
            </div>
            <div class="order-track-step">
              <div class="order-track-status">
                <span class="order-track-status-dot"></span>
                <span class="order-track-status-line"></span>
              </div>
              <div class="order-track-text">
                <p class="order-track-text-stat">Order Placed</p>
                <span class="order-track-text-sub">4 June, 2021</span>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Tracking;
