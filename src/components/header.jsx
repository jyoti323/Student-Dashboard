import React from "react";

const Header = ({ studentCount }) => (
  <section className="welcome-banner" id="overview">
    <div className="welcome-copy">
      <p className="welcome-date"><span>✦</span> YOUR HAPPY PLACE TO TEACH</p>
      <h1>Little steps,<br /><span>big bright futures.</span> <span className="wave" role="img" aria-label="waving hand">👋</span></h1>
      <p className="welcome-subtitle">Every score tells a story. Here’s how your wonderful class is doing today.</p>
      <a className="welcome-cta" href="#records">Meet your students <span>↘</span></a>
    </div>
    <div className="welcome-art" aria-hidden="true">
      <span className="art-sparkle sparkle-a">✳</span><span className="art-sparkle sparkle-b">✦</span>
      <div className="art-orbit orbit-one" /><div className="art-orbit orbit-two" />
      <div className="sun-face">☀️</div>
      <span className="art-sticker sticker-book">📚</span><span className="art-sticker sticker-pencil">✏️</span>
      <span className="art-sticker sticker-star">⭐</span><span className="art-sticker sticker-flower">🌼</span>
      <span className="art-sticker sticker-heart">💜</span>
      <div className="art-caption">You’re doing<br />amazing! <span>💛</span></div>
    </div>
    <div className="banner-foot"><span className="banner-foot-icon">🌈</span><span><strong>{studentCount} little legends</strong><br />and endless possibilities</span><span className="banner-foot-arrow">↗</span></div>
  </section>
);

export default Header;
