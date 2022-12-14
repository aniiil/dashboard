import React from "react";
import "./dash.css";
import Chart from "../Chart/Chart";
import Ar from "../Chart/Area";
import Ba from "../Chart/Bar";
import PieComponent from "../Chart/Pie";

const Dash = () => {
  return (
    <>
      {" "}
      <div className="row mb-3">
        <div className="col-xl-3 col-sm-6 py-2">
          <div className="card bg-success text-white h-100">
            <div className="card-body bg-success">
              <div className="rotate">
                <i className="fa fa-user fa-4x"></i>
              </div>
              <h6 className="text-uppercase">Users</h6>
              <h1 className="display-4">134</h1>
            </div>
          </div>
        </div>
        <div className="col-xl-3 col-sm-6 py-2">
          <div className="card text-white bg-danger h-100">
            <div className="card-body bg-danger">
              <div className="rotate">
                <i className="fa fa-list fa-4x"></i>
              </div>
              <h6 className="text-uppercase">Posts</h6>
              <h1 className="display-4">87</h1>
            </div>
          </div>
        </div>
        <div className="col-xl-3 col-sm-6 py-2">
          <div className="card text-white bg-info h-100">
            <div className="card-body bg-info">
              <div className="rotate">
                <i className="fab fa-twitter fa-4x"></i>
              </div>
              <h6 className="text-uppercase">Tweets</h6>
              <h1 className="display-4">125</h1>
            </div>
          </div>
        </div>
        <div className="col-xl-3 col-sm-6 py-2">
          <div className="card text-white bg-warning h-100">
            <div className="card-body ">
              <div className="rotate">
                <i className="fa fa-share fa-4x"></i>
              </div>
              <h6 className="text-uppercase">Shares</h6>
              <h1 className="display-4 ">36</h1>
            </div>
          </div>
        </div>

        <div className="col-xl-3 col-sm-6 py-2">
          <div className="card text-white line_bg h-100">
            <div className="card-body">
              <div className="rotate">
                <Chart />
              </div>
            </div>
          </div>
        </div>

        <div className="col-xl-3 col-sm-6 py-2">
          <div className="card text-white bar_bg h-100">
            <div className="card-body">
              <div className="rotate">
                <Ba />
              </div>
            </div>
          </div>
        </div>

        <div className="col-xl-3 col-sm-6 py-2">
          <div className="card text-white area_bg h-100">
            <div className="card-body">
              <div className="rotate">
                <Ar />
              </div>
            </div>
          </div>
        </div>

        <div className="col-xl-3 col-sm-6 py-2 ">
          <div className="card text-white pie_bg h-100">
            <div className="card-body">
              <div className="rotate">
                <PieComponent />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dash;
