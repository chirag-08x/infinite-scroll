import React from "react";

const Photo = (props) => {
  const {
    urls: { full },
    likes,
    user: {
      name,
      portfolio_url,
      profile_image: { large },
    },
  } = props;

  return (
    <article className="single-img-container">
      <img src={full} alt="" />
      <div className="img-footer">
        <div className="user-info">
          <h5 className="user-name">{name}</h5>
          <p className="likes">{likes} likes</p>
        </div>
        <a href={portfolio_url} target="_blank" rel="noreferrer">
          <img src={large} alt={name} className="user-img" />
        </a>
      </div>
    </article>
  );
};

export default Photo;
