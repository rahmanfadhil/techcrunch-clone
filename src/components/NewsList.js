import React, { Component } from "react";
import { connect } from "react-redux";
import { FlatList, TouchableOpacity } from "react-native";
import { Card, CardItem, Body, Text, Left, Thumbnail } from "native-base";
import { Image, Linking } from "react-native";

class NewsList extends Component {
  renderList(data) {
    const openLink = () => Linking.openURL(data.item.url);
    return (
      <TouchableOpacity onPress={openLink} key={data.item.url}>
        <Card>
          <CardItem>
            <Left>
              <Thumbnail
                source={{
                  uri:
                    "https://is1-ssl.mzstatic.com/image/thumb/Purple115/v4/0b/31/46/0b314661-9b82-323f-8d28-5e8a93904747/AppIcon-1x_U007emarketing-0-0-GLES2_U002c0-512MB-sRGB-0-0-0-85-220-0-0-0-6.png/246x0w.jpg"
                }}
              />
              <Body>
                <Text>{data.item.source.name}</Text>
                <Text note>{data.item.author}</Text>
              </Body>
            </Left>
          </CardItem>
          <CardItem cardBody>
            <Image
              source={{ uri: data.item.urlToImage }}
              style={{ height: 200, width: null, flex: 1 }}
            />
          </CardItem>
          <CardItem header>
            <Text>{data.item.title}</Text>
          </CardItem>
        </Card>
      </TouchableOpacity>
    );
  }
  render() {
    return <FlatList data={this.props.news} renderItem={this.renderList} />;
  }
}

export default connect(({ news }) => ({ news }))(NewsList);
