import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableHighlight,
  TouchableOpacity,
} from 'react-native'; 

export default class Reddit extends Component<{}> {
  
  constructor(){
    super()
    this.state={posts:[]}
  }
  componentWillMount(){
    fetch('https://www.reddit.com/.json')
    .then((response) => response.json())
      .then((responseJson) => {
      console.log(responseJson.data.children)
      this.setState({posts:responseJson.data.children})
      })
  }
  

  render() {

    return (
      <View style={styles.container}>
        <Text>Reddit</Text>
        <View>
          {this.state.posts.map(post=>(
            <Text key={post.data.created}>{post.data.author}</Text>
            ))}
        </View>
      </View>
    );
  }
}


const styles = StyleSheet.create({
  container:{
  	flex:1,
  	padding:20
  }
  
});