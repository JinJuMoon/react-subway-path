import React from "react";
import { Route } from 'react-router-dom';

import Home from "./pages/Home";
import Layout from "./components/Layout";
import Search from './pages/Search';

import "./assets/service/css/app.css";

const App = () => (
  <Layout>
    <Route path="/" exact component={Home} />
    <Route path="/search" component={Search} />
  </Layout>
);

export default App;