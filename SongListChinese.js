import React,{Component} from 'react';
import {Text,StyleSheet,View,Image,ScrollView,BackHandler,TouchableNativeFeedback} from 'react-native';
import {Actions} from 'react-native-router-flux';



export default class SongListChinese extends Component{

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
title:"﻿Hare Kṛṣṇa Mahā-mantra (in Chinese)",
song:'\n 哈瑞 奎师那 玛哈 曼特羅\n哈瑞 奎师那 哈瑞 奎师那 奎师那 奎师那 哈瑞 哈瑞\n哈瑞 茹阿玛 哈瑞 茹阿玛 茹阿玛 茹阿玛 哈瑞哈瑞\n\n\n    ',
},

{
title:" Sri Pancha Tattva Mantra (in Chinese)",
song:'\n佳呀 施瑞 奎师那 采坦亚 普茹阿布 尼提安南达\n施瑞 阿对塔 嘎达达尔 施瑞瓦萨迪 勾茹阿 巴克塔 温达\n\n\n    ',
},

{
title:" Srila Prabhupada Pranati (in Chinese)",
song:'\n\xa0那玛 唵 维施努 帕达亚 奎师那 普瑞斯塔亚 布它类\n施瑞玛提\xa0(巴克蒂维丹塔 斯瓦民)\xa0依提 那米内\n拿玛斯胎 萨茹阿斯瓦蒂 得伟 勾茹阿 瓦尼 普茹阿查瑞内\n尼尔维谁沙 顺亚瓦蒂 帕施查蒂亚 得沙 塔瑞内\n\n',
},
]