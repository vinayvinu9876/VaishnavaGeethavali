import React,{Component} from 'react';
import {Text,StyleSheet,View,Image,ScrollView,BackHandler,TouchableNativeFeedback} from 'react-native';
import {Actions} from 'react-native-router-flux';



export default class SongListPunjabi extends Component{

  handle_back_press=()=>
  {
    
    Actions.Lang_Menu();
    return true;
  }
 
  componentDidMount() {
    
    BackHandler.addEventListener('hardwareBackPress',this.handle_back_press);
  }

  componentWillUnmount() {
    BackHandler.removeEventListener('hardwareBackPress',this.handle_back_press);
  }


  render(){

    ListData=song_data.map((a,i)=>{    
              
        return <Item key={i} item={song_data[i].title} nxt={()=>Actions.Song({title:song_data[i].title,lyrics:song_data[i].song})}/>
      
    });


    return(

      <View style={styles.container} >


      <View style={styles.header}>
        <Image style={styles.logo} source={require('./prabhupad1.jpg')} />
        <Text style={styles.menu_text}>Vaishnava Geethavali</Text>

      </View>
      <ScrollView style={styles.contentContainer}>
      
        {ListData}
      </ScrollView>
      </View>
    )
  }
}


class Title extends Component{
  render(){
    return(
      <View style={styles.title_container}>
              <Text style={styles.title_text}>{this.props.title}</Text>
      </View>
    )
  }
}

class Item extends Component{
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


const styles = StyleSheet.create({
  container:{
    flex:1,

  },
  header:{
    flex:1,
    maxHeight: '12%',
    backgroundColor: 'black',
    flexDirection: 'row' , 
  },
  logo:{
    marginTop: '3%',
    marginLeft: '2%',
    borderRadius: 80,
    maxWidth: '15%',
    maxHeight: '75%',

  },
  menu_text:{
    fontSize:20,
    color:'white',
    marginTop: '6%',
    marginLeft: '3%',
    fontWeight: 'bold' ,
  },
  item_container:{
    flex:1,
    backgroundColor: 'white',
    maxHeight: '50%',
    borderColor: 'lightgrey',
    borderBottomWidth: 0.5,
  },
  item_text:{
    fontSize:15,
    margin:'2%',
    marginLeft: '2%',
    fontWeight: 'bold', 
    color:'black',
  },
  title_container:{
    flex:1,
    borderWidth: 0,
    borderLeftWidth:0,
    borderColor: 'grey'
  },
  title_text:{
    fontWeight: 'normal',
    fontSize:20,
    margin: '2%'
  },
  contentContainer: {
  flex:1,
    
  },



});

const song_data=[
{
title:"﻿ ਸ਼੍ਰੀ ਗੋਵਰ੍ਧਨਾਸ਼੍ਠਕਂ",
song:'\n ()\nਕ੍ਰੁਸ਼੍ਣ-ਪ੍ਰਸਾਦੇਨ ਸਮਸ੍ਤ-ਸ਼ੈਲ-\nਸਾਮ੍ਰਾਜ੍ਯਂ ਆਪ੍ਨੋਤਿ ਚ ਵੈਰਿਣੋ ’ਪਿ\nਸ਼ਕ੍ਰਸ੍ਯ ਪ੍ਰਾਪ ਬਲਿਂ ਸ ਸਾਕ੍ਸ਼ਾਦ੍\nਗੋਵਰ੍ਧਨੋ ਮੇ ਦਿਸ਼ਤਾਂ ਅਭੀਸ਼੍ਠਂ\n()\nਸ੍ਵ- ਪ੍ਰੇਸ਼੍ਠ-ਹਸ੍ਤਾਂਬੁਜ-ਸੌਕੁਮਾਰ੍ਯ\nਸੁਖਾਨੁਭੂਤੇਰ੍ ਅਤਿ-ਭੂਮਿ- ਵ੍ਰੁਤ੍ਤੇਃ\nਮਹੇਂਦ੍ਰ-ਵਜ੍ਰਾਹਤਿਮ੍ ਅਪਿ ਅਜਾਨਨ੍\nਗੋਵਰ੍ਧਨੋ ਮੇ ਦਿਸ਼ਤਾਂ ਅਭੀਸ਼੍ਠਂ\n()\nਯਤ੍ਰੈਵ ਕ੍ਰੁਸ਼੍ਣੋ ਵ੍ਰੁਸ਼ਭਾਨੁ-ਪੁਤ੍ਰ੍ਯਾ\nਦਾਨਂ ਗ੍ਰੁਹੀਤੁਂ ਕਲਹਂ ਵਿਤੇਨੇ\nਸ਼੍ਰੁਤੇਃ ਸ੍ਪ੍ਰੁਹਾ ਯਤ੍ਰ ਮਹਤਿ ਅਤਃ ਸ਼੍ਰੀ-\nਗੋਵਰ੍ਧਨੋ ਮੇ ਦਿਸ਼ਤਾਂ ਅਭੀਸ਼੍ਠਂ\n)\nਸ੍ਨਾਤ੍ਵਾ ਸਰਃ ਨ੍ਵਸ਼ੁ ਸਮੀਰ- ਹਸ੍ਤੀ\nਯਤ੍ਰੈਵ ਨੀਪਾਦਿ-ਪਰਾਗ-ਦੂਲਿਃ\nਆਲੋਲਯਨ੍ ਖੇਲਤਿ ਚਾਰੁ ਸ ਸ਼੍ਰੀ\nਗੋਵਰ੍ਧਨੋ ਮੇ ਦਿਸ਼ਤਾਂ ਅਭੀਸ਼੍ਠਂ\n()\nਕਸ੍ਤੂਰ੍ਕਾਭਿਃ ਸ਼ਯਿਤਂ ਕਿਮ੍ ਅਤ੍ਰੇਤਿ\nਊਹਂ ਪ੍ਰਭੋਃ ਸ੍ਵਸ੍ਯ ਮੁਹੁਰ੍ ਵਿਤਨ੍ਵਨ੍\nਨੈਸਰ੍ਗਿਕ-ਸ੍ਵੀਯ-ਸ਼ਿਲਾ-ਸੁਗਂਦੈਰ੍\nਗੋਵਰ੍ਧਨੋ ਮੇ ਦਿਸ਼ਤਾਂ ਅਭੀਸ਼੍ਠਂ\n()\nਵਂਸ਼-ਪ੍ਰਤਿਦ੍ਵਨਿ-ਅਨੁਸਾਰ-ਵਰ੍ਤ੍ਮ\nਦਿਦ੍ਰਕ੍ਸ਼ਵੋ ਯਤ੍ਰ ਹਰਿਂ ਹਰਿਣ੍ਯਃ\nਯਾਂਤ੍ਯੋ ਲਭਂਤੇ ਨ ਹਿ ਵਿਸ੍ਮਿਤਾਃ ਸ\nਗੋਵਰ੍ਧਨੋ ਮੇ ਦਿਸ਼ਤਾਂ ਅਭੀਸ਼੍ਠਂ\n()\nਯਤ੍ਰੈਵ ਗਂਗਾਂ ਅਨੁ ਨਾਵਿ ਰਾਧਾਂ\nਆਰੋਹ੍ਯ ਮਧ੍ਯੇ ਤੁ ਨਿਮਗ੍ਨ-ਨੌਕਃ\nਕ੍ਰੁਸ਼੍ਣੋ ਹਿ ਰਾਧਾਨੁਗਲੋ ਬਭੌ ਸ\nਗੋਵਰ੍ਧਨੋ ਮੇ ਦਿਸ਼ਤਾਂ ਅਭੀਸ਼੍ਠਂ\n()\nਵਿਨਾ ਭਵੇਤ੍ ਕਿਮ੍ ਹਰਿ-ਦਾਸ-ਵਰ੍ਯ\nਪਦਾਸ਼੍ਰਯਂ ਭਕ੍ਤਿਰ੍ ਅਤਃ ਸ਼੍ਰਯਾਮਿ\nਯਂ ਏਵ ਸਪ੍ਰੇਮ ਨਿਜੇਸ਼ਯੋਃ ਸ਼੍ਰੀ-\nਗੋਵਰ੍ਧਨੋ ਮੇ ਦਿਸ਼ਤਾਂ ਅਭੀਸ਼੍ਠਂ\n()\nਏਤਤ੍ ਪਠੇਦ੍ ਯੋ ਹਰਿ-ਦਾਸ-ਵਰ੍ਯ-\nਮਹਾਨੁਭਾਵਾਸ਼੍ਠਕਮ੍ ਆਰ੍ਦ੍ਰ-ਚੇਤਾਃ\nਸ਼੍ਰੀ-ਰਾਧਿਕਾ-ਮਾਧਵਯੋਃ ਪਦਾਬ੍ਜ-\nਦਾਸ੍ਯਂ ਸ ਵਿਂਦੇਦ੍ ਅਚਿਰੇਣ ਸਾਕ੍ਸ਼ਾਤ੍\n    ',
},

{
title:" ਹਰੇ ਕ੍ਰਿਸ਼੍ਣ ਮਹਾ ਮਂਤ੍ਰ",
song:'\nਹਰੇ ਕ੍ਰਿਸ਼੍ਣ ਹਰੇ ਕ੍ਰਿਸ਼੍ਣ\nਕ੍ਰਿਸ਼੍ਣ ਕ੍ਰਿਸ਼੍ਣ ਹਰੇ ਹਰੇ\nਹਰੇ ਰਾਮਾ ਹਰੇ ਰਾਮਾ\nਰਾਮਾ ਰਾਮਾ ਹਰੇ ਹਰੇ\n\n',
},
]