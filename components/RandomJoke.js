import React, { Component } from 'react';
import { View, Text, Image, Picker, Button, FlatList, StyleSheet } from 'react-native';
import { connect } from 'react-redux';

import { getRandomJoke } from './../reducers/reducer';
import styles from './../styles/styles';

class RandomJoke extends Component {
    static navigationOptions = {
      title: 'Random',
    };
    componentDidMount() {
        this.props.getRandomJoke();
    }
    getRandom(){
     this.props.getRandomJoke();
    }
    // componentDidUpdate(prevProps, prevState) {
    //     // Are we adding new items to the list?
    //     // Capture the scroll position so we can adjust scroll later.
    //     console.log('updating');
    //     this.props.getRandomJoke();
    //   }
  render() {
    const { randomJoke } =  this.props;
    if(randomJoke){
        return (
            <View style={styles.container}>
                <View style={styles.card}>
                    <Image
                        style={styles.image}
                        source={{uri: randomJoke.icon_url}}
                    />
                    <Text style={styles.text}> {randomJoke.value} </Text>
                    <Text style={styles.url}> {randomJoke.url} </Text>
                    <Button
                        onPress={()=>{this.props.getRandomJoke()}}
                        title="Refresh Joke"
                        color="#841584"
                    />
                </View>
            </View>
        );
    } else {
        return (
            <View style={styles.container}>
                <Text> No Category Joke</Text>
            </View>
        );
    }
  }
}

const mapStateToProps = state => {
  let storedRandomJoke = state.randomJoke;
  return {
    randomJoke: storedRandomJoke
  };
};

const mapDispatchToProps = {
    getRandomJoke
};

export default connect(mapStateToProps, mapDispatchToProps)(RandomJoke);