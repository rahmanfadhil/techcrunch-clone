import React from "react";
import { Provider } from "react-redux";
import { Container, Content } from "native-base";

import store from "./store";
import NewsList from "./components/NewsList";
import AppHeader from "./components/AppHeader";

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <Container>
          <AppHeader />
          <Content style={{ padding: 10 }}>
            <NewsList />
          </Content>
        </Container>
      </Provider>
    );
  }
}
