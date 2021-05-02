import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import ListEmployeeComponent from './components/ListEmployeeComponent';
import CreateEmployeeComponent from './components/CreateEmployeeComponent';
import FooterComponent from './components/FooterComponent';
import HeaderComponent from './components/HeaderComponent';
import updateEmployeeComponent from './components/updateEmployeeComponent';
import CreateAndUpdateEmployeeComponent from './components/CreateAndUpdateEmployeeComponent'

function App() {
  return (
    <div>
      <Router>
        <div className="container">
          <HeaderComponent />
          <div className="container">
            <Switch>
              <Route path="/" exact component={ListEmployeeComponent} />
              <Route path="/employee" component={ListEmployeeComponent} />
              {/*<Route path="/add-employee" component={CreateEmployeeComponent} />*/}
              //step 1
              <Route path="/add-update-employee/:id" component={CreateAndUpdateEmployeeComponent} />
              {/* <Route path="/update-employee/:id" component={updateEmployeeComponent} />*/}
            </Switch>
          </div>
        </div>
        <FooterComponent />
      </Router>
    </div>
  );
}

export default App;
