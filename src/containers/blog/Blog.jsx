import React from 'react';
import Article from '../../components/article/Article';
import OrderList from '../../components/orderlist/order';
import { blog01, blog02, blog03, blog04, blog05, blog06, blog07, blog08, blog09, blog10, blog11 } from './imports';
import './blog.css';

const Blog = () => (
  <div className="gpt3__blog section__padding" id="whatwedo">
    <div className="gpt3__blog-heading">
      <h1 className="gradient__head">What We Do</h1>
    </div>
    <div className="gpt3__blog-container">
      <div className="gpt3__blog-container_groupA">
        <OrderList imgUrl={blog08} heading="SERVICES" text1="IT CONSULTING" text2="MARKETING" text3="STAFFING & RECRUITING" text4="DEVELOPMENT" />
      </div>
      <div className="gpt3__blog-container_groupB">
        <Article imgUrl={blog03} text="APPLICATION DEVELOPMENT" data="" />
        <Article imgUrl={blog07} text="DATA SCIENCE" data="Web Development" />
        <Article imgUrl={blog02} date="Design" text="HADOOP & BIG DATA" />
        <Article imgUrl={blog04} date="Design" text="JAVA" />
        {/* <Article imgUrl={blog05} date="Sep 26, 2021" text="" /> */}
      </div>
    </div>
  </div>
);

export default Blog;
