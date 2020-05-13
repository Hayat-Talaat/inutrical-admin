import React from "react";
import HospitalsCharts from "./HospitalsCharts";
import BarChart from './Formulas'

const Charts = () => {
  return (
    <>
      <div class="row charts">
        <div class="col-md-6">
          <div class="card ">
            <div class="card-header ">
              <h5 class="card-title">Formulas</h5>
              <p class="card-category">Top 5</p>
            </div>
            <div class="card-body ">
              <BarChart />
            </div>
          </div>
        </div>

        <div class="col-md-6">
          <div class="card ">
            <div class="card-header ">
              <h5 class="card-title">Diseases</h5>
              <p class="card-category">Top 5</p>
            </div>
            <div class="card-body ">
              <BarChart />
            </div>
          </div>
        </div>

        <div class="col-md-6">
          <div class="card ">
            <div class="card-header ">
              <h5 class="card-title">Website Visits</h5>
              <p class="card-category">Top 5 (Countries)</p>
            </div>
            <div class="card-body ">
              <BarChart />
            </div>
          </div>
        </div>

        <div class="col-md-6">
          <div class="card ">
            <div class="card-header ">
              <h5 class="card-title">Hospitals</h5>
              <p class="card-category">Top 5</p>
            </div>
            <div class="card-body ">
              <HospitalsCharts />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Charts;
