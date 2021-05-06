import * as React from 'react';
import { ISinglePageAppProps } from './ISinglePageAppProps';
import { Stack, StackItem } from 'office-ui-fabric-react';
import HomePage from './DashBoard/index';
import AppPage from './Apps/App_Page';
import Pages from './Pages/Pages';
import EmployeeHandbook from './EmployeeHandbook/Index';
import EmployeeVolunteering from './EmployeeVolunteering/EmployeeVolunteering';
import HiringAndEmployment from './HiringAndEmployment/HiringAndEmployment';
import LeaveAndDisability from './LeaveAndDisability/LeaveAndDisability';
import PersonalConduct from './PersonalConduct/PersonalConduct';
import PuertoRicoPolocies from './PersonalConduct/PersonalConduct';
import TimeAndAttendace from './TImeAndAttendance/TImeAndAttendance';
import WorkplacePolocies from './WorkplacePolicies/WorkplacePolicies';

import { BrowserRouter as Router, Route, Link, Redirect, Switch, HashRouter, PropsRoute } from 'react-router-dom';
import Navigation from '../components/SideNav/Navigation';



export default class SinglePageApp extends React.Component<ISinglePageAppProps, {}> {
  public render(): React.ReactElement<ISinglePageAppProps> {
    return (
      <HashRouter >
        <Stack horizontal gap={15}>
          <Navigation />
          <StackItem grow={2}>
            <Switch>
              <Route path='/' exact={true} component={() => <HomePage  {...this.props} />} />
              <Route path='/Apps' component={() => <AppPage  {...this.props} />} />
              <Route path='/EmployeeHandbook' component={() => <EmployeeHandbook  {...this.props} />} />
              <Route path='/EmployeeVolunteering' component={() => <EmployeeVolunteering  {...this.props} />} />
              <Route path='/HiringAndEmployment' component={() => <HiringAndEmployment  {...this.props} />} />
              <Route path='/LeaveAndDisability' component={() => <LeaveAndDisability  {...this.props} />} />
              <Route path='/PersonalConduct' component={() => <PersonalConduct  {...this.props} />} />
              <Route path='/PuertoRicoPolocies' component={() => <PuertoRicoPolocies  {...this.props} />} />
              <Route path='/TimeAndAttendance' component={() => <TimeAndAttendace  {...this.props} />} />
              <Route path='/WorkplacePolocies' component={() => <WorkplacePolocies  {...this.props} />} />
              <Route path='/Pages' component={() => <Pages  {...this.props} />} />
            </Switch>
          </StackItem>
        </Stack>
      </HashRouter>
    );
  }
}
