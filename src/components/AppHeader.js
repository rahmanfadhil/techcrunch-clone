import React, { Component } from "react";
import { Header, Body, Title, Right, Button, Icon } from "native-base";
import { connect } from "react-redux";
import Axios from "axios";

class AppHeader extends Component {
  render() {
    return (
      <Header>
        <Body>
          <Title>News App</Title>
        </Body>
        <Right>
          <Button transparent onPress={this.props.fetchNews}>
            <Icon name="refresh" />
          </Button>
        </Right>
      </Header>
    );
  }
}

export default connect(
  null,
  dispatch => ({
    fetchNews: () =>
      dispatch({
        type: "FETCH_NEWS",
        payload: Axios.get(
          "https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=0d1ce78f19e749b7aed2ae84978dc610"
        )
      })
  })
)(AppHeader);
