import React from "react";
import DashBoard from './FirstGroup/DashBoard/DashBoard';
// import Notifications from './Notifications/Notifications';
// import TableList from './TableList/TableList';
// import Typography from './Typography/Typography';
// import UserProfile from "./UserProfile/UserProfile";
import StaffList from './FirstGroup/StaffList/StaffList';
import HospitalsList from './FirstGroup/HospitalList/HospitalList';
import DiseaseList from './FirstGroup/DiseaseList/DiseaseList';
import FormulaList from "./FirstGroup/FormulaList/FormulaList";

// Group two
import MoreInfo from './SconedGroup/MoreInfo/MoreInfo';
import Settings from './SconedGroup/Settings/Settings';
import STMP from './SconedGroup/SMTP/STMP';
import Website from './SconedGroup/Website/Website'

import { Switch, Route } from 'react-router-dom'

const Content = () => {
  return (
    <div class="content">
      <Switch>
        {/* First Group */}
        <Route exact path="/" component={DashBoard} />
        <Route exact path="/staff-list" component={StaffList} />
        <Route exact path="/hospitals-list" component={HospitalsList} />
        <Route exact path="/disease-list" component={DiseaseList} />
        <Route exact path="/formula-list" component={FormulaList} />

        {/* Sconed Group */}
        <Route exact path="/more-info" component={MoreInfo} />
        <Route exact path="/stmp" component={STMP} />
        <Route exact path="/settings" component={Settings} />
        <Route exact path="/website" component={Website} />
      </Switch>
    </div>
  );
};

export default Content;
