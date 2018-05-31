import { StyleSheet } from 'react-native';
import { Dimensions } from 'react-native';
export default styles = StyleSheet.create({
    container: {
      // backgroundColor: '#841584',
        flex: 1, 
        marginTop: 20,
        // justifyContent: 'center',
         alignItems: 'center'
      },
      main_container: {
        // width: Dimensions.get('window').width,
        // height: Dimensions.get('window').height,
        // backgroundColor: '#841584',
          flex: 1, 
          justifyContent: 'center',
           alignItems: 'center'
        },
      url: {
        justifyContent: 'center',
        alignItems: 'center',
        color: 'blue',
        // fontStyle:''
      },
      text: {
        color: 'black',
        fontWeight: 'bold',
        fontSize: 18,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10
      },
      card: {
        borderWidth: 10,
        borderRadius: 5,
        borderColor: '#841584',
        width: Dimensions.get('window').width - 50,
        height: 'auto',
        padding: 10
      },
      items: {
        width: Dimensions.get('window').width - 50,
        height: 60,
        borderWidth: 0,
        marginBottom: 20,
        borderRadius: 5,
        // textColor: '#ffffff',
        // color:"#841584",
        backgroundColor: '#841584'
      },
      item: {
        color:'#ffffff',
        fontSize: 12,
        fontWeight: 'bold',
        textAlign: 'center',
        // backgroundColor: '#581845',
        // backgroundColor: '#841584'
      },
      random:{
          marginTop: 20,
          backgroundColor: "#841584",
          borderColor: "transparent",
          borderWidth: 2,
          borderRadius: 5,
      },
  image:{width: 50, height: 50}
});
// let styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: "center",
//     alignItems: "center"
//   },
//   panel: {
//     backgroundColor: "#581845",
//     color: "#FF5733",
//     width: "95%"
//   },
//   url: {
//     justifyContent: "center",
//     alignItems: "center",
//     color: "#FFC300"
//     // fontStyle:''
//   },
//   text: {
//     color: "black",
//     fontWeight: "bold",
//     fontSize: 18,
//     // justifyContent: 'center',
//     // alignItems: 'center',
//     padding: 10
//   },
//   card: {
//     borderWidth: 10,
//     borderRadius: 5,
//     borderColor: "#841584",
//     width: "98%",
//     height: "auto",
//     padding: 10
//   },
//   items: {
//     backgroundColor: "#FFC300",
//     width: "98%",
//     color: "#900C3F"
//   },
//   item: {
//     color: "#ffffff",
//     fontSize: 12,
//     width: "90%",
//     fontFamily: "sans-serif-light",
//     textAlign: "center",
//     backgroundColor: "transparent"
//     // backgroundColor: '#841584'
//   },
//   image: {
//     width: 100,
//     height: 100
//   },
//   content: {
//     backgroundColor: "#841584"
//   }
// });
