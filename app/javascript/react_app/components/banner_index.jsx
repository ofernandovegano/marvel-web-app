import React from 'react';
import { Link } from 'react-router-dom';

const BannerIndex = (props) => {
  return (
  <div className={`marvel-${props.bannerType}`}>
    <Link to={`/${props.bannerType}/page/1`}>
      <div className={`card-category card-${props.bannerType}`}>
        { props.bannerType.toUpperCase() }
      </div>
    </Link>
  </div>
  );
};

export default BannerIndex;