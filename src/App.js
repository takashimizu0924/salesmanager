import React from 'react';
// import { SideBar } from './Components/Sidebar';
// import Button from '@material-ui/core/Button'

import './App.css';
import  SideBar  from "./Components/Sidebar";
import { Content } from "./Components/Content";
import AddSales from './Components/AddSales';
import { BrowserRouter ,Route, Switch } from 'react-router-dom';



function App() {
  return (
    <BrowserRouter>
    <div className="app">
      <SideBar>
            <Switch>
                    <Route exact path={"/home"} component={Content} />
                    <Route exact path={"/add"} component={AddSales} />
            </Switch>
      </SideBar>      
    </div>
    </BrowserRouter>
  );
}

export default App;
