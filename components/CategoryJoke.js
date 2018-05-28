import React, { Component } from 'react';
import { View, Text,Button, Image, Picker, FlatList, StyleSheet } from 'react-native';
import { connect } from 'react-redux';

import { getCategoryJoke } from './../reducers/reducer';
import styles from './../styles/styles';

class CategoryJoke extends Component {
    temp = {};
    componentWillReceiveProps(nextProps) {
        if (nextProps.category !== this.props.category && nextProps.category !== '') {
            this.props.getCategoryJoke(nextProps.category);
        }
      }
  render() {
    const { categoryJoke } =  this.props;
    if(categoryJoke){
        return (
            <View style={styles.card}>
                <Image
                    style={styles.image}
                    source={{uri: categoryJoke.icon_url}}
                />
                <Text style={styles.text}> {categoryJoke.value} </Text>
                <Text style={styles.url}> {categoryJoke.url} </Text>
                <Button
                    onPress={()=>{this.props.getCategoryJoke(this.props.category)}}
                    title="Refresh Joke"
                    color="#841584"
                />
            </View>
        );
    } else {
        return (
            <View style={styles.card}>
                <Text style={styles.text}> No Category Joke</Text>
            </View>
        );
    }
  }
}

const mapStateToProps = state => {
  let storedCategoryJoke = state.categoryJoke;
  return {
    categoryJoke: storedCategoryJoke
  };
};

const mapDispatchToProps = {
  getCategoryJoke
};

export default connect(mapStateToProps, mapDispatchToProps)(CategoryJoke);