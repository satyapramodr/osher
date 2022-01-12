import React from 'react';
import './order.css';

const OrderList = ({ imgUrl, heading, text1, text2, text3, text4 }) => (
  <div className="gpt3__blog-container_article">
    <div className="gpt3__blog-container_article-image">
      <img src={imgUrl} alt="blog_image" />
    </div>
    <div className="gpt3__blog-container_article-content">
      <div>
        <h2>{heading}</h2>
        <h3>{text1}</h3>
        <h3>{text2}</h3>
        <h3>{text3}</h3>
        <h3>{text4}</h3>
      </div>
    </div>
  </div>
);

export default OrderList;