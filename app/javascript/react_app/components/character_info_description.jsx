import React from 'react';

const CharacterInfoDescription = (props) => {
  return (
    <div>
      {props.info[0] ?
        <div className="info-show-details">
          <p><strong>{props.typeDescription}: </strong></p>
          {props.info.map((description, index) => {
            return (<span key={description.name} >{(index ? ', ' : "") + description.name}</span>)
          })}<span>.</span>
        </div>
        : ""
      }
    </div>
  );
};

export default CharacterInfoDescription;