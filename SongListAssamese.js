import React,{Component} from 'react';
import {Text,StyleSheet,View,Image,ScrollView,BackHandler,TouchableNativeFeedback} from 'react-native';
import {Actions} from 'react-native-router-flux';



export default class SongListAssamese extends Component{

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
title:"﻿শ্রীল প্রভুপাদ প্রণতি",
song:'\n\nনম ওঁ ৱিষ্ণু-পাদায় কৃষ্ণ-প্রেষ্ঠায় ভূতলে।\nশ্রীমতে ভক্তিৱেদান্ত-স্ৱামিন্ ইতি নামিনে ॥\nনমস্তে সাৰস্বতে দেৱে গৌৰ-ৱাণী প্রচাৰিণে।\nনিৰ্ৱিশেষ-শূণ্যৱাদী পাশ্চাত্য-দেশ তাৰিণে ॥\n    ',
},

{
title:" শ্ৰী গৌৰাঙ্গ প্ৰণাম",
song:'\nনমো মহা ৱদান্যায় কৃষ্ণ-প্রেম-প্রদায় তে ।\nকৃষ্ণায় কৃষ্ণ-চৈতন্য-নাম্নে গৌৰ-ত্বিষে নমঃ ।।\n    ',
},

{
title:" শ্রী তুলসী প্রণাম",
song:'\nবৃণ্দায় তুলসী দেৱ্যায় প্ৰিয়ায় কেশৱস্য চ ।\nবিষ্ণু-ভক্তি প্রদে দেবি সত্যৱত্যৈ নমো নমঃ॥\n    ',
},

{
title:" জয় ৰাধা মাধৱ",
song:'\n(জয়) ৰাধা মাধৱ (জয়) কুঞ্জ বিহাৰি\n(জয়) গোপী জন ৱল্লভ (জয়) গিৰি ৱৰ ধাৰী\n(জয়) যশোদ নংদন (জয়) ৱ্ৰজ জন ৰংজন\n(জয়) যমুনা তীৰ ৱন চাৰি\n\n\n\n    ',
},

{
title:" শ্রী পঞ্চ তত্ত্ব মন্ত্র",
song:'\n(জয়) শ্রীকৃষ্ণ চৈতন্য প্রভু নিত্যানন্দ\nশ্রীঅদ্বৈত গদাধৰ শ্রীৱাসাদি গৌৰ ভক্তৱৃন্দ\n    ',
},

{
title:" হৰে কৃষ্ণ মহা মন্ত্ৰ",
song:'\nহৰে কৃষ্ণ হৰে কৃষ্ণ\nকৃষ্ণ কৃষ্ণ\xa0 হৰে হৰে\nহৰে ৰাম\xa0হৰে\xa0ৰাম\nৰাম\xa0ৰাম হৰে\xa0হৰে\n\n\n\n\n',
},
]