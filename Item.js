import React,{Component} from 'react';
import {View,Text,StyleSheet,TouchableNativeFeedback} from 'react-native';


export default class Item extends Component{
  render(){
    return(
      <TouchableNativeFeedback onPress={this.props.nxt} background={TouchableNativeFeedback.SelectableBackground()}>
        <View style={styles.item_container}>
            <Text style={styles.item_text}>{this.props.item}</Text>
        </View>
      </TouchableNativeFeedback>
      )
  }
}



const styles=StyleSheet.create({
   item_container:{
    flex:1,
    backgroundColor: 'white',
    maxHeight: '100%',
    borderColor: 'lightgrey',
    borderBottomWidth: 0.5,
  },
  item_text:{
    fontSize:15,
    margin:'2%',
    marginLeft: '2%',
    fontWeight: 'normal', 
    color:'black',
    fontFamily: 'DonegalOne-Regular',
  },
  
})
