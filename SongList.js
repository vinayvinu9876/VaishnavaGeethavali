import React,{Component} from 'react';
import {Text,StyleSheet,View,Image,ScrollView,BackHandler,TouchableNativeFeedback} from 'react-native';
import {Actions} from 'react-native-router-flux';
import Title from './Title';
import Item from './Item';



export default class SongList extends Component{

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

    ListData=this.props.song_data.map((a,i)=>{    
              
        return <Item key={i} item={this.props.song_data[i].title} nxt={()=>Actions.Song({title:this.props.song_data[i].title,lyrics:this.props.song_data[i].song,isEnglish:false})}/>
      
    });


    return(

      <View style={styles.container} >


      <View style={styles.header}>
        <Image style={styles.logo} source={require('./prabhupad1.jpg')} />
        <Text style={styles.menu_text}>Vaishnava Gitavali</Text>

      </View>
      <ScrollView style={styles.contentContainer}>
      
        {ListData}
      </ScrollView>
      </View>
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
    fontSize:25,
    color:'white',
    marginTop: '6%',
    marginLeft: '3%',
    //fontWeight: 'normal' ,
    fontFamily: 'DonegalOne-Regular',
  },
  contentContainer: {
  flex:1,
    
  },



});