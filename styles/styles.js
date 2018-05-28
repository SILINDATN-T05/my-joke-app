import { StyleSheet } from 'react-native';

export default styles = StyleSheet.create({
    container: {
        flex: 2, justifyContent: 'center', alignItems: 'center'
      },
      url: {
        justifyContent: 'center',
        alignItems: 'center',
        color: 'blue',
        width: 380,
        // fontStyle:''
      },
      text: {
        color: 'black',
        fontWeight: 'bold',
        fontSize: 18,
        width: 380,
        // justifyContent: 'center',
        // alignItems: 'center',
        padding: 10
      },
      card: {
        borderWidth: 10,
        borderRadius: 5,
        borderColor: '#841584',
        width: 400,
        height: 'auto',
        padding: 10
      },
      items: {
        padding: 16,
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
        width:300,
        color:"#841584"
      },
      item: {
        color:'#ffffff',
        fontSize: 12,
        width:150,
        fontFamily: 'sans-serif-light',
        textAlign: 'center',
        backgroundColor: 'transparent',
        // backgroundColor: '#841584'
      },
  image:{width: 50, height: 50}
});