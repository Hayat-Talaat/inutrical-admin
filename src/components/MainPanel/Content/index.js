import React from "react";

// import Notifications from './Notifications/Notifications';
// import TableList from './TableList/TableList';
// import Typography from './Typography/Typography';
// import UserProfile from "./UserProfile/UserProfile";

// Group One
import DashBoard from "./FirstGroup/DashBoard/DashBoard";
import StaffList from "./FirstGroup/StaffList/StaffList";
import HospitalsList from "./FirstGroup/HospitalList/HospitalList";
import DiseaseList from "./FirstGroup/DiseaseList/DiseaseList";
import FormulaList from "./FirstGroup/FormulaList/FormulaList";
import NewStaff from './FirstGroup/StaffList/NewSatff';
import NewHospital from './FirstGroup/HospitalList/NewHospital';
import NewDisease from "./FirstGroup/DiseaseList/NewDisease";
import NewFormula from "./FirstGroup/FormulaList/NewFormula";

// Group two
import MoreInfo from "./SconedGroup/MoreInfo/MoreInfo";
import Settings from "./SconedGroup/Settings/Settings";
import STMP from "./SconedGroup/SMTP/STMP";
import Website from "./SconedGroup/Website/Website";


// Group Three
import AdminHospital from "./ThirdGroup/Dashboard/Dashboard";
import MoreInfoHospital from "./ThirdGroup/MoreInfo/MoreInfo";
import SupportHospital from "./ThirdGroup/Support/Support";
import UsersHospital from "./ThirdGroup/Users/Users";

// Patient Pages
import NewPatient from "./ThirdGroup/Dashboard/Nested/NewPatient";
import ExcitingPatient from "./ThirdGroup/Dashboard/Nested/ExcitingPatient";
import HistoryPatients from "./ThirdGroup/Dashboard/Nested/HistoryPatients";
import PatientInfo from "./ThirdGroup/Dashboard/Nested/Pages/PatientInfo";
import FollowUp from "./ThirdGroup/Dashboard/Nested/Pages/FollowUp";
import History from "./ThirdGroup/Dashboard/Nested/Pages/History";

import { Switch, Route } from "react-router-dom";

const Content = () => {
  return (
    <div className="content">
      <Switch>
        {/* First Group */}
        <Route exact path="/" component={DashBoard} />
        <Route path="/staff-list" component={StaffList} />
        <Route path="/hospitals-list" component={HospitalsList} />
        <Route path="/disease-list" component={DiseaseList} />
        <Route path="/formula-list" component={FormulaList} />
        <Route path="/new-staff" component={NewStaff} />
        <Route path="/new-hospital" component={NewHospital} />
        <Route path="/new-disese" component={NewDisease} />
        <Route path="/new-formula" component={NewFormula} />

        {/* Sconed Group */}
        <Route exact path="/more-info" component={MoreInfo} />
        <Route exact path="/stmp" component={STMP} />
        <Route exact path="/settings" component={Settings} />
        <Route exact path="/website" component={Website} />

        {/* Third Group */}
        <Route exact path="/admin" component={AdminHospital} />
        <Route exact path="/hospital-more-info" component={MoreInfoHospital} />
        <Route exact path="/support" component={SupportHospital} />
        <Route exact path="/users" component={UsersHospital} />

        {/* Patient Pages */}
        <Route exact path="/new" component={NewPatient} />
        <Route exact path="/search" component={ExcitingPatient} />
        <Route exact path="/patients-history" component={HistoryPatients} />
        <Route exact path="/patient-info" component={PatientInfo} />
        <Route exact path="/follow-up" component={FollowUp} />
        <Route exact path="/history" component={History} />
      </Switch>
    </div>
  );
};

export default Content;
