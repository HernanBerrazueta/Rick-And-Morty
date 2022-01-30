import React from "react";

const Character = ({ characterInfo }) => {
  return (
    <div className="container mt-3 mb-3">
      <div className="row align-items-center">
        <div className="col-4">
          <img src={characterInfo.image} />
        </div>
        <div className="col-8">
          <div className="card text-center">
            <div className="card-header">{characterInfo.species}</div>
            <div className="card-body">
              <h5 className="card-title">{characterInfo.name}</h5>
              <p className="card-text">Gender: {characterInfo.gender}</p>
            </div>
            <div className="card-footer text-muted">
              Status: {characterInfo.status}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Character;
