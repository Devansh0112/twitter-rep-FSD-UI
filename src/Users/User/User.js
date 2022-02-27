import React from "react";

function User(props) {
  return (
    <div className="content mt-3">
      <div className="container">
        <div className="row">
          <div className="col-4">avatar</div>
          <div className="col-8">
            <div className="container">
              <div className="row">
                <div className="col-9">@{props.users.Name}</div>
              </div>
              <div className="row mt-1">
                <div className="col-12">{props.users.message}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default User;
