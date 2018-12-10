import React,{Component} from 'react';
import {View} from 'react-native';
import SongList from './SongList';



export default class SongListKorean extends Component{

  

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
title:"﻿Hare Krishna Maha Mantra (in Korean)",
song:'\n하레 크리슈나 마하 만트라\n하레 크리슈나 하레 크리슈나\n크리슈나 크리슈나 하레 하레\n하레 라마 하레 라마\n라마 라마 하레 하레',
},

]