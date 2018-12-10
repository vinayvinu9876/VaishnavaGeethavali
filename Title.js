import React,{Component} from 'react';
import {View,Text,StyleSheet} from 'react-native';


export default class Title extends Component{
  render(){
    return(
      <View style={styles.title_container}>
              <Text style={styles.title_text}>{this.props.title}</Text>
      </View>
    )
  }
}


const styles=StyleSheet.create({
  title_container:{
    flex:1,
    borderWidth: 0,
    borderLeftWidth:0,
    borderColor: 'grey'
  },
  title_text:{
    fontWeight: 'normal',
    fontSize:20,
    fontFamily: 'DonegalOne-Regular',
    margin: '2%'
  },
});