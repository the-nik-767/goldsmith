import React from "react";

export const ShopInfo = () => {
  return (
    <div className="col-12 col-lg-5 goldsmith-product-summary-col">
      <div className="goldsmith-product-summary">
        <div className="goldsmith-product-summary-inner">
          <div className="goldsmith-summary-item goldsmith-product-top-nav">
            <nav
              aria-label="Breadcrumbs"
              className="breadcrumb-trail goldsmith-breadcrumbs"
            >
              <ul className="trail-items goldsmith-breadcrumb">
                <li className="trail-item breadcrumb-item trail-begin">
                  <a href="https://ninetheme.com/themes/goldsmith/" rel="home">
                    <span>Home</span>
                  </a>
                </li>
                <li className="trail-item breadcrumb-item">
                  <a href="https://ninetheme.com/themes/goldsmith/shop/">
                    <span>Products</span>
                  </a>
                </li>
                <li className="trail-item breadcrumb-item trail-end active">
                  <span>Faceted crystal bracelet</span>
                </li>
              </ul>
            </nav>
          </div>
          <h2 className="goldsmith-summary-item goldsmith-product-title">
            Faceted crystal bracelet
          </h2>
          <div className="woocommerce-product-rating goldsmith-summary-item">
            <div
              className="star-rating"
              role="img"
              aria-label="Rated 5.00 out of 5"
            >
              <span style={{ width: "100%" }}>
                Rated <strong className="rating">5.00</strong> out of 5 based on{" "}
                <span className="rating">2</span> customer ratings
              </span>
            </div>
            <a
              href="#reviews"
              className="woocommerce-review-link"
              rel="nofollow"
            >
              <span className="count">2</span> reviews
            </a>
            <span className="cr-qna-separator">|</span>
            <a href="#cr_qna" className="cr-qna-link" rel="nofollow">
              <span className="count">1</span> answered question
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
