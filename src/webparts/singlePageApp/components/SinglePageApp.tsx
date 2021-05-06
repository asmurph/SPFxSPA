import * as React from 'react';
import { ISinglePageAppProps } from './ISinglePageAppProps';
import { Stack, StackItem } from 'office-ui-fabric-react';
import HomePage from './DashBoard/index';
import AppPage from './Apps/App_Page';
import Pages from './Pages/Pages';
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
              <Route path='/Pages' component={() => <Pages  {...this.props} />} />
            </Switch>
          </StackItem>
        </Stack>
      </HashRouter>
    );
  }
}
