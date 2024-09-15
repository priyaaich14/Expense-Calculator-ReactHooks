//es6 module loader - frontend
import React from 'react';//const React = require('react')
import ReactDOM from 'react-dom/client';
//import AllUsers from './State-Exercise/All-Users-Async';
//import PostFetcher from './State-Exercise/PostFecther';
//import MarkAllAsComplete from './React-Assignment-Forms/MarkAllAsComplete';
//import MarkAsComplete from './React-Assignment-Forms/MarkAsComplete';
//import EmployeeTable from './React-Assignment-Forms/SelectEmployees';
//import DisplayCap from './React-Assignment-Forms/DisplayInCapital';
//import VowelSkip from './React-Assignment-Forms/SkipVowels';
//import MilesConverter from './React-Assignment-Forms/MileToKm';
//import BillPayment from './React-Assignment-Forms/PhoneBillPayemt';
//import TaskManager from './task-manager-reducer/TaskManager';
//import TaskList from './State-Exercise/TaskList';
//import App from './App'; //const App = require('./App')
//import Counter from './State-Exercise/Counter';
//import Show from './State-Exercise/Show';
//import StringVowel from './State-Exercise/StringVowel';
//import EmployessList from './State-Exercise/Employess';
//import CountryList from './State-Exercise/Countries';
//import Users from './State-Exercise/Users';
//import UserList from './State-Exercise/Interview-Coding';
//import RegisterComponent from './State-Exercise/RegisterComponent';
//import ShowEmployees from './State-Exercise/ShowEmployees';
//import TaskManagement from './State-Exercise/TaskManagement';
//import UsersTable from './Assignment-React/UsersTable';
//import UsersSelect from './Assignment-React/UserSelect';
//import UsersSelectDisplay from './Assignment-React/UserSelectedDisplay';
//import SingleUser from './Assignment-React/ShowSingleUser';
//import SearchSingleUserById from './Assignment-React/SearchUserById';
//import SearchSingleEmailUser from './Assignment-React/SearchByEmail';
//import TodosList from './Assignment-React/UserToDoTask';
//import CompletedTask from './Assignment-React/CompletedTask';
//import NeighbouringCountries from './Assignment-React/NeighbouringCountries';
//import ChangeBackground from './Assignment-React/ChangeColour';
//import CatchEvens from './Assignment-React/CatchEvens';
//import Dashboard from './Assignment-React/Dashboard';
//import UserCity from './Assignment-React/UserLocation&City';
//import ExchangeRateConverter from './Assignment-React/InrConverter';
//import FormPersist from './Assignment-React/FormPersist';
//import Converter from './Assignment-React/InrConverter';
//import ExchangeRate from './Assignment-React/InrConverter';
//import UsersList from './State-Exercise/UserListFromApi';
//import Component from './State-Exercise/ComponentUseEffect';
//import TaskManager from './Task-Context/TaskManager';
import App from './redux-imp/App'
import store from './redux-imp/store';
import {Provider} from 'react-redux'
import 'bootstrap/dist/css/bootstrap.min.css';

const root = ReactDOM.createRoot(document.getElementById('root'));

//components - logic + UI

root.render(
    <Provider store={store}>
        <App/>
    </Provider>
 //<Counter/>
 //<Show/>
 //<TaskList/>
 //<StringVowel/>
 //<EmployessList/>
 //<CountryList/>
 //<Users/>
 //<UserList/>
 //<RegisterComponent/>
 //<ShowEmployees/>
 //<TaskManagement/>
 //<UsersTable/>
 //<UsersSelect/>
 //<UsersSelectDisplay/>
 //<SingleUser/>
//<SearchSingleUserById/>
 //<SearchSingleEmailUser/>
 //<TodosList/>
 //<CompletedTask/>
 //<ExchangeRateConverter/>
 //<NeighbouringCountries/>
 //<ChangeBackground/>
 //<CatchEvens/>
 //<Dashboard/>
 //<UserCity/>
 //<FormPersist/>
 //<Converter/>
 //<ExchangeRate/>
 //<UsersList/>
// <Component/>
//<TaskManager/>
//<MilesConverter/>
//<BillPayment/>
//<DisplayCap/>
//<VowelSkip/>
//<EmployeeTable/>
//<MarkAsComplete/>
//<MarkAllAsComplet>
//<TaskManager/>
//<PostFetcher/>
//<AllUsers/>

);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

//backend--> common js module loader
//const express = require('express')