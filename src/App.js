import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Header from './components/header';
import MainContent from './containers/main-page';
import ForFutureParents from './containers/forFutureParents';
import InformationAboutChilds from './containers/InformationAboutChildren';
import YouAreParent from './containers/youAreParent';
import Specialist from './containers/specialist';
import Staff from './containers/staff';
import Categories from './containers/categories';
import InformationAboutChildrenForm from './containers/informationAboutChildrenForm';
import './fonts.scss';

function App() {
  return (
    <React.Fragment>
      <Header />
        <div className="content all-center">
          <Switch>
            <Route exact path="/" component={MainContent}/>
            <Route path="/want" component={ForFutureParents}/>
            <Route exact path="/informationAboutChildren" component={InformationAboutChilds}/>
            <Route path="/informationAboutChildren/:newsId" component={Categories}/>
            <Route path="/youAreParent" component={YouAreParent}/>
            <Route exact path="/specialist" component={Specialist}/>
            <Route path="/specialist/:number" component={Staff}/>
            <Route path="/informationAboutChildrenForm" component={InformationAboutChildrenForm}/>
          </Switch>
        </div>
    </React.Fragment>
  );
}

export default App;
