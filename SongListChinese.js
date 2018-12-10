import React,{Component} from 'react';
import {View} from 'react-native';
import SongList from './SongList';



export default class SongListChinese extends Component{

  

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