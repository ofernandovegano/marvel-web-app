import React from 'react';
import { Link } from 'react-router-dom';

const Comic = (props) => {
  return (
    < div key = { props.comic.id } className = "comic" >
              
      <Link to={`/comics/${props.comic.id}`} key={props.comic.id}>
        < div>
          <div className="comic-img-div">
              <img src={`${props.comic.thumbnail.path}/portrait_uncanny.${props.comic.thumbnail.extension}`} className="comic-img" />
            
          </div>
          <div className="comic-title">
              {props.comic.title.length > 30 ? `${props.comic.title.slice(0, 30)}...` : props.comic.title }
          </div>
        </div>
      </Link>
        
    </div>
  );
};

export default Comic;