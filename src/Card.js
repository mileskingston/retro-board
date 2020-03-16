import React, { useState } from 'react';

const Card = (props) => {
  const [hidden, setHidden] = useState(false);
  const [title, setTitle] = useState(props.text);

  const handleChange = e => {
    setTitle(e.target.value);
  }

  return (
    <div className="card">
      <div className="card__text">
        {!hidden ? (
            <h3 onClick={() => setHidden(hidden => !hidden)}>{title}</h3>
          ) : (
            <input
              className="input input--no-bg"
              onChange={handleChange}
              onBlur={() => setHidden(hidden => !hidden)}
              placeholder={title}
              autoFocus={hidden}
            />
          )
        }
      </div>
      <button className="btn btn--delete" type="button" onClick={props.deleteClick}>Delete</button>
      <div className="card__like-btn">
        <button className="btn btn--like" type="button" onClick={props.likeClick}>Like</button>
        <span>{props.likes > 0 && props.likes}</span>
      </div>
    </div>
  );
}

export default Card;
