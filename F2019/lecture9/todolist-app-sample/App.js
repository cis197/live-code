import React from 'react';
import { StyleSheet, Text, View, FlatList, TextInput, Button } from 'react-native';

export default class App extends React.Component {
  constructor(props){
    super(props)

    this.state = {
      todoItems: ['brocolli', 'milk'],
      text: ''
    }

    setInterval(() => {
      fetch('http://localhost:3000/api/todos')
      .then(resp => resp.json())
      .then(items => {
        this.setState({todoItems: items.map(i => ({key: i}))})
      })
    }, 1000)
    
    this.onAddTodo = this.onAddTodo.bind(this)
  }
  onAddTodo(){
    fetch("http://localhost:3000/api/todo", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({todo: this.state.text})
    })
    .then(() => {
      console.log('success')
      this.setState({text: ''})
    })
  }
  render(){
    return (
      <>
      <View style={styles.container}>
        <Text>Grocery List!</Text>
      </View>
      <View style={styles.container}>
        <FlatList
          data={this.state.todoItems}
          renderItem={({item}) => <Text>{item.key}</Text>}
        />
      </View>
      <View style={styles.container}>
        <TextInput
            style={{ height: 40, borderColor: 'gray', borderWidth: 1, width: 200 }}
            onChangeText={text => this.setState({ text })}
            value={this.state.text}
          />
        <Button
          onPress={this.onAddTodo}
          title="Add todo"
          color="#841584"
        />
      </View>
      </>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
