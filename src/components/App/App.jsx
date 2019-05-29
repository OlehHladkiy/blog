import React from "react";
import { Route, Switch } from "react-router-dom";

import { Container, Wrapper } from "./styled";
import Header from "../Header";
import Posts from "../Posts";
import CreatePost from "../CreatePost";
import Post from "../Post";
import "antd/dist/antd.css";

function App() {
  return (
    <Container>
      <Wrapper>
        <Header />
        <Switch>
          <Route exact path="/" component={Posts} />
          <Route exact path="/create" component={CreatePost} />
          <Route exact path="/post/:id" component={Post} />
          <Route exact />
        </Switch>
      </Wrapper>
    </Container>
  );
}

export default App;
