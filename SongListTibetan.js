import React,{Component} from 'react';
import {View} from 'react-native';
import SongList from './SongList';



export default class SongListTibetan extends Component{

  

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
title:"﻿ྲིིིི པཾཅ ཏཏྟྭ མཾཏྲ",
song:'\n(ཇཡ) ཤྲིིིི ཀྲིཥཎ\xa0ཅཻཏནྱ\xa0པྲབུ\xa0ནིཏྱཱནདྣ\nཤྲིིིི ཨདྭཻཏ གདཱདར ཤྲིིིིཝཱསཱདི\xa0གཽར བཀྟ ཝྲིནྡ\n    ',
},

{
title:" ཧརེ ཀྲིཥཎ མཧཱ མཾཏྲ",
song:'\nཧརེ ཀྲིཥཎ\xa0ཧརེ ཀྲིཥཎ\xa0ཀྲིཥཎ ཀྲིཥཎ\xa0ཧརེ ཧརེ।\nཧརེ རཱམ\xa0ཧརེ རཱམ\xa0རཱམ རཱམ\xa0ཧརེ ཧརེ।।\n\n',
},
]