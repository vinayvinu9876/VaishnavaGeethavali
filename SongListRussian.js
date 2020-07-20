import React,{Component} from 'react';
import {View} from 'react-native';
import SongList from './SongList';



export default class SongListRussian extends Component{

  

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
title:"﻿Шрила Прабхупада пранати",
song:'\n\nнама ом вишну-падайа кришна-прештхайа бху-тале\nшримате бхактиведанта-свамин ити намине\nнамас те сарасвате деве гаура-вани-прачарине\nнирвишеша-шунйавади-пашчатйа-деша-тарине\n    ',
},

{
title:" Панча-таттва мантра",
song:'\n(Джая) Шри-Кришна-Чайтанья, Прабху-Нитьянанда,\nШри-Адвайта, Гададхара, Шривасади, Гаура-Бхакта-Вринда\n\n',
},
]