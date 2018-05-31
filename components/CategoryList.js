import React, { Component } from 'react';
import { View, Text, Picker, FlatList, StyleSheet } from 'react-native';
import { Button } from 'react-native-elements';
import { connect } from 'react-redux';
import RNPickerSelect from 'react-native-picker-select';
import { Dropdown } from 'react-native-material-dropdown';

import { listCategory, getList } from './../reducers/reducer';
import CategoryJoke from './CategoryJoke';
import styles from './../styles/styles';
class CategoryList extends Component {
  static navigationOptions = {
    title: 'Home',
  };
  state = { category : '',
  favColor: undefined,
  items: [
      {
          label: 'Red',
          value: 'red',
      },
      {
          label: 'Orange',
          value: 'orange',
      },
      {
          label: 'Blue',
          value: 'blue',
      },
  ]}
  data = [];
  inputRefs = {};

  componentWillMount() {
    this.props.listCategory();
  }
  updateCategory = (category) => {
    this.setState({ category });
  }
  onChangeText(text) {
    console.log(text);
  }
  render() {
    const { categories } = this.props;
    categories.forEach(element => {
      this.data.push({value: element});
    });
    if (categories && categories.length>0){
        return (
            <View style={styles.container}>
                <View>
                  <Dropdown
                    baseColor='#FFFFFF'
                    itemColor='#FF5733'
                    selectedItemColor='#FFC300'
                    containerStyle={styles.items}
                    itemTextStyle={styles.item}
                    onChangeText={this.updateCategory}
                    label='Select Category'
                    data={this.data}
                  />
                </View>
                <CategoryJoke category={this.state.category}/>
                <Button
                  title="Random Joke"
                  onPress={() => {
                    /* 1. Navigate to the Details route with params */
                    this.props.navigation.navigate('Random');
                  }}
                  titleStyle={{ fontWeight: "700" }}
                  buttonStyle={styles.random}
                />
          </View>
        );
    } else {
        return (
            <View style={styles.container}>
                <Text> No Categories</Text>
          </View>
        );
    }
  }
}

const mapStateToProps = state => {
    let storedRepositories;
    if (state.categories && state.categories.length >0){
         storedRepositories = state.categories.map(repo => (repo));
    } else {
        storedRepositories = [];
    }
  return {
    categories: storedRepositories
  };
};

const mapDispatchToProps = {
    listCategory,
    getList
};
export default connect(mapStateToProps, mapDispatchToProps)(CategoryList);