import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import SettingsPage from "./settings";
import ProjectsPage from "./projects";
import MembersPage from "./members";
import TeamsPage from "./teams";
import HomePage from "./home";
import BlogPage from "./blog";
import AboutPage from "./about";

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/about/members">
          <MembersPage />
        </Route>
        <Route path="/about/projects">
          <ProjectsPage />
        </Route>
        <Route path="/about">
          <AboutPage />
        </Route>
        <Route path="/another/teams">
          <TeamsPage />
        </Route>
        <Route path="/settings">
          <SettingsPage />
        </Route>
        <Route path="/blog">
          <BlogPage />
        </Route>
        <Route path="/">
          <HomePage />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
