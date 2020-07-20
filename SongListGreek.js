import React,{Component} from 'react';
import {View} from 'react-native';
import SongList from './SongList';



export default class SongListGreek extends Component{

  

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
title:"Hare Krishna Maha Mantra (in Greek)",
song:'\nΧάρε Κρίσνα Μαχά Μάντρα\nΧάρε Κρίσνα Χάρε Κρίσνα\nΚρίσνα Κρίσνα Χάρε Χάρε\nΧάρε Ράμα Χάρε Ράμα\nΡάμα Ράμα, Χάρε Χάρε',
},

]