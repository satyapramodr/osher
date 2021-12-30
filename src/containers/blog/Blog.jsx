import React from 'react';
import Article from '../../components/article/Article';
import { blog01, blog02, blog03, blog04 } from './imports';
import './blog.css';

const Blog = () => (
  <div className="gpt3__blog section__padding" id="whatwedo">
    <div className="gpt3__blog-heading">
      <h1 className="gradient__head">What We Do</h1>
    </div>
    <div className="gpt3__blog-container">
      <div className="gpt3__blog-container_groupA">
        <Article imgUrl={blog01} date="Web" text="Great online experiences happen only when a well planned UX strategy is visualised with top class design aesthetics" />
      </div>
      <div className="gpt3__blog-container_groupB">
        <Article imgUrl={blog02} date="Web" text="Technology expertise coupled with award-winning UX skills" />
        <Article imgUrl={blog03} date="Web Development" text="Easy representation of data, Our visualization techniques will help you to make informed decision quickly." />
        <Article imgUrl={blog04} date="Design" text="Technology process design use to create products" />
        {/* <Article imgUrl={blog05} date="Sep 26, 2021" text="" /> */}
      </div>
    </div>
  </div>
);

export default Blog;
