import React,{Component} from 'react';
import {View} from 'react-native';
import SongList from './SongList';



export default class SongListThai extends Component{

  

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
title:"﻿ ฮาเร คริชณะ มหา มนต์",
song:'\nฮาเร คริชณะ ฮาเร คริชณะ\nคริชณะ คริชณะ ฮาเร ฮาเร\nฮาเร รามะ ฮาเร รามะ\nรามะ รามะ ฮาเร ฮาเร\n\n',
},
]