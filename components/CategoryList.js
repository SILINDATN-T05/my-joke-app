import React, { Component } from 'react';
import { View, Text, Picker, FlatList, StyleSheet } from 'react-native';
import { connect } from 'react-redux';

import { listCategory, getList } from './../reducers/reducer';
import CategoryJoke from './CategoryJoke';
import styles from './../styles/styles';
class CategoryList extends Component {
  state = { category : ''}
  componentWillMount() {
    this.props.listCategory();
  }
  updateCategory = (category) => {
    this.setState({ category });
  }
  render() {
    const { categories } = this.props;
    if (categories && categories.length>0){
        return (
            <View style={styles.container}>
                <View>
                  <Picker style={styles.items}
                      itemStyle={styles.item}
                      selectedValue={this.state.category}
                      onValueChange={(category, itemIndex) => this.updateCategory(category)} >
                      { categories.map((item)=>(
                      <Picker.Item label={item} value={item} key={item}/>)
                      )}
                  </Picker>
                </View>
                <CategoryJoke category={this.state.category}/>
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