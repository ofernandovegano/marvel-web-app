  
import React from 'react';
import { Link } from 'react-router-dom';

const Pagination = (props) => {
  return (
    <div className="pages">

          <div className="last-page">
          {props.page !== "1"
              ? <Link
                  onClick={() => window.location.href = `/${props.type}/page/${parseInt(props.page, 10) - 1}`} className='last-page' >
                  &#60;&#60; {parseInt(props.page, 10) - 1}
                </Link>
              : ""}
          </div>
          <div className="next-page">
            {props.nextPage !== null && props.nextPage != []
              ? <Link
                  onClick={() => window.location.href = `/${props.type}/page/${parseInt(props.page, 10) + 1}`} className='next-page' >
                  {parseInt(props.page, 10) + 1} &#62;&#62;
                </Link>
              : ""}
          </div>

        </div>
  );
};

export default Pagination;