import React,{Component} from 'react';
import {View} from 'react-native';
import SongList from './SongList';



export default class SongListHebrew extends Component{

  

  render(){

    

    return(

      <View style={{flex:1,}}>
         <SongList song_data={song_data} />

      </View>
    )
  }
}


const song_data=[


{
title:" Hare Krishna Maha Mantra (in Hebrew)",
song:'\n\xa0 מַהָא-מנטרה הַרֵא קְרִישְנַה\nהַרֵא קְרִישְנַה הַרֵא קְרִישְנַה קְרִישְנַה קְרִישְנַה הַרֵא הַרֵא /\nהַרֵא רָאמַה הַרֵא רָאמַה רָאמַה רָאמַה הַרֵא הַרֵא //\n',
},

]