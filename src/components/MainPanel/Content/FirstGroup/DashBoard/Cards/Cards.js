import React from "react";
import '../dashboard.css'

const Cards = () => {
  return (
    <div class="row">
      <div class="col-lg-3 col-md-6 col-sm-6">
        <div class="card card-stats">
          <div class="card-body ">
            <div class="row">
              <div class="col-5 col-md-4">
                <div class="icon-big text-center icon-warning">
                  <img
                    alt="icon"
                    src="assets/img/components/home/Group 9.png"
                  />
                </div>
              </div>
              <div class="col-7 col-md-8">
                <div class="numbers">
                  <p className="card-category">30</p>
                  <p className="card-title">Hospital</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="col-lg-3 col-md-6 col-sm-6">
        <div class="card card-stats">
          <div class="card-body ">
            <div class="row">
              <div class="col-5 col-md-4">
                <div class="icon-big text-center icon-warning">
                  <img
                    alt="icon"
                    src="assets/img/components/home/Group 10.png"
                  />
                </div>
              </div>
              <div class="col-7 col-md-8">
                <div class="numbers">
                  <p className="card-category">220</p>
                  <p className="card-title">user</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="col-lg-3 col-md-6 col-sm-6">
        <div class="card card-stats">
          <div class="card-body ">
            <div class="row">
              <div class="col-5 col-md-4">
                <div class="icon-big text-center icon-warning">
                  <img
                    alt="icon"
                    src="assets/img/components/home/Group 11.png"
                  />
                </div>
              </div>
              <div class="col-7 col-md-8">
                <div class="numbers">
                  <p className="card-category">1,250</p>
                  <p className="card-title">Patient</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="col-lg-3 col-md-6 col-sm-6">
        <div class="card card-stats">
          <div class="card-body ">
            <div class="row">
              <div class="col-5 col-md-4">
                <div class="icon-big text-center icon-warning">
                  <img
                    alt="icon"
                    src="assets/img/components/home/Group 12.png"
                  />
                </div>
              </div>
              <div class="col-7 col-md-8">
                <div class="numbers">
                  <p className="card-category">2,064</p>
                  <p className="card-title">Website Visit</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cards;
