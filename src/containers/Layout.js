import React, { Suspense } from "react"
import { Route } from "react-router-dom";
import { Switch } from "react-router-dom";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import Home from "../pages/Home";
import Main from "./Main";

const Layout = () => {
  return (
    <div className="">
      <Header/>
      <Main>
        <Suspense>
          <Switch>
            <Route path="/" component={Home} exact/>
          </Switch>
        </Suspense>
      </Main>
      <Footer/>
    </div>
  )
}

export default Layout;