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

export default class Todo extends Component<{}> {
  constructor(){
    super()
    this.state={todos:[],newTodo:''}
    this.handleChange=this.handleChange.bind(this)
    this.handleSubmit=this.handleSubmit.bind(this)
  }
  // componentWillMount(){
  // 	fetch('http://192.168.1.138:3000/todos',{
  // 		headers: {'Content-Type':'application/json'}
  // 	})
  // 	.then(res=>res.json())
  // 	.then(todos=>this.setState({todos}))
  // }
  handleChange(text){
    this.setState({newTodo:text})
  }
  handleSubmit(){
  	// fetch('http://192.168.1.138:3000/todos',{
  	// 	method:'post',
  	// 	body:JSON.stringify({name:this.state.newTodo}),
  	// 	headers: {'Content-Type':'application/json'}
  	// })
  	//  .then((response) => response.json())
   //    .then((response) => {
        const todos=[this.state.newTodo,...this.state.todos]
    	this.setState({todos,newTodo:''})
      // });
  	// 
  }
  render() {
    return (
      <View style={styles.container}>
      <View style={styles.innerContainer}>
       <TextInput style={styles.input} value={this.state.newTodo} onChangeText={this.handleChange}></TextInput>
       <TouchableOpacity style={styles.button}><Text style={styles.buttonText} onPress={this.handleSubmit}>Submit</Text></TouchableOpacity>
      </View>
      <View style={styles.todos}>
        {this.state.todos.map((todo,index)=>
        	<View style={styles.todoItem} key={index}>
        	<Text style={styles.todoText}>{todo}</Text>
        	</View>
    	)}
      </View>
      </View>
    );
  }
}


const styles = StyleSheet.create({
  container:{
  	flex:1,
  	padding:20
  },
  innerContainer:{
  	flexDirection:'row'
  },
  button:{
  	flex:0.3,
  	borderWidth:1,
  	borderRadius:3,
  	borderColor:"blue",
  	alignItems:'center',
  	justifyContent:'center',
  	height:40,
  },
  buttonText:{
  	fontSize:20
  },
  input:{
  	flex:0.7,
  	fontSize:20
  },
  todos:{
  	marginTop:20
  },
  todoText:{
  	fontSize:20
  },
  todoItem:{
  	margin:5,
	borderBottomWidth:1,
	borderBottomColor:'lightgrey',
  }


  
});