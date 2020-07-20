import React,{Component} from 'react';
import {View} from 'react-native';
import SongList from './SongList';



export default class SongListKrygz extends Component{

  

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
title:"﻿ Харе Кришна Маха Мантра",
song:'\nHare Kṛṣṇa Mahā-mantra (in Kyrgyz)\nХаре Кришна Харе Кришн\nКришна Кришна Харе Харе\nХаре Рама Харе Рама\nРама Рама Харе Харе',
},

]