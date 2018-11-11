import React,{Component} from 'react';
import {Text,StyleSheet,View,Image,ScrollView,BackHandler,TouchableNativeFeedback} from 'react-native';
import {Actions} from 'react-native-router-flux';



export default class SongListJapanese extends Component{

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
title:"﻿スリ・ガウラーンガ・プラナーマ",
song:'\nナモ・マハ・ヴァダニヤヤ・クリシュナ・プレマ・プラダヤテ\nクリシュナヤ・クリシュナ・チャイタンヤ・ナアミネ・ガウラ・タヰシェ・ナマハ\n    ',
},

{
title:" スリラ・ プラブー パーダ・プラナティ",
song:'\nナマ・オーム・ヴィシュヌ・パアダアヤ・クリシュナ・プレシュタヤ・ブータレ\nスリマテ・バクティヴェダンタ・スワミン・ィティ・ナアミネ\nナマステ・サアラスワテ・デウェ・ガウラ・ヴァニ・プラチャアリネ\nニルヴィシェシャ・集ニヤヴァーディ・パアスチャティヤ・デシャ・タアリネ\n    ',
},

{
title:" ジャヤ・ラーダ・ マアダワ",
song:'\n (ジャヤ) ラーダ・\xa0マアダワ\n(ジャヤ) クン ジャ\xa0',
},

{
title:" ヴィハリ",
song:'\n(ジャヤ) ゴーピー・ジャナ・ワラバ\n(ジャヤ) ギリ・ワラ・ダーリー\n(ジャヤ) ヤショダ・\xa0ナンダナ\n(ジャヤ) ブラジャー・ジャナ・ランジャナ\n(ジャヤ) ヤムナー\xa0・ティーラ・ワナ\xa0・\xa0チャリ\n    ',
},

{
title:" スリ・パンチャ・タタワ・マントラ",
song:'\n（ジャヤ）スリ・クリシュナ・チャイタニア・プラブー・ニティアナンダ\nスリ・アドワイタ・ガダダラ・\nスリ・ヴァーサディ・ガウラ・バクタ・ヴィリンダ\n    ',
},

{
title:" ハレー・クリシュナ ー・マハ ー・マントラ",
song:'\nハレー・クリシュナ・\nハレー・クリシュナ・\nクリシュナ・クリシュナ・\nハレー・ハレー・\nハレー・ラーマ・\nハレー・ラーマ・\nラーマ・ラーマ・\nハレー・ハレー・\n\n',
},
]