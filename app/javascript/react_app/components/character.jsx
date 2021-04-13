import React from 'react';
import { Link } from 'react-router-dom';

const Character = (props) => {
  return (
  < div key = { props.character.id } className = "character" >
            
    <Link to={`/characters/${props.character.id}`} key={props.character.id}>
      < div>
        <div className="character-img-div">
            <img src={`${props.character.thumbnail.path}/standard_fantastic.${props.character.thumbnail.extension}`} className="character-img" />
          
        </div>
        <div className="character-name">
            {props.character.name.length > 30 ? `${props.character.name.slice(0, 30)}...` : props.character.name }
        </div>
      </div>
    </Link>
      
  </div>
  );
};

export default Character;