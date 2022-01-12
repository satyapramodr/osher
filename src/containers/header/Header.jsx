import React from 'react';
// import people from '../../assets/people.png';
// import ai from '../../assets/ai.png';
import video from '../../assets/videos/nextgen-video.mp4';
import './header.css';

const Header = () => (
  <>
    <div className="gpt3__header-video">
      {/* <img src={ai} /> */}
      <video src={video} autoPlay loop muted />
    </div>
  </>
);

export default Header;
