import React,{Component} from 'react';
import {Text,StyleSheet,View,Image,ScrollView,BackHandler,TouchableNativeFeedback} from 'react-native';
import {Actions} from 'react-native-router-flux';



export default class SongListSinhala extends Component{

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
title:"﻿ශ්‍රී තුලසී ප්‍රණාම​",
song:'\nවෘංදායෛ තුලසී දෙව්\u200dයෛ ප\u200d්\u200dරියායෛ කෙශවස්\u200dය ච\nවිෂ්ණු භක්ති ප්\u200dරදෙ දෙවි සත්\u200dයවත්\u200dයෛ නමො නමඃ\n    ',
},

{
title:" ශ්‍රී වෛෂ්ණව ප්‍රණාම",
song:'\nවාඦ්ඡා කල්ප තරූභ්\u200dයශ්චා කෘපා සිධුභ්\u200dය ඒව ච\nපතිතානාං පාවනේභ්\u200dයො වෛෂ්ණවෙභ්\u200dයො නමො නමඃ\n    ',
},

{
title:" ශ්‍රී රාධා ප්‍රණාම",
song:'\nතප්ත කාංචන ගෞරාංගී රාධේ ව්\u200dරින්දාවනේශ්වරී\nවෘෂභානු සුතෙ දේවී ප්\u200dරණමාමි හරි ප්\u200dරියෙ\n    ',
},

{
title:" ශ්‍රී ක්‍රිෂ්ණ ප්‍රණාම",
song:'\nහෙ ක්\u200dරිෂ්ණ\xa0 කරුණා සිංධො දීන බංඪො\xa0ජගත්පතෙ\nගෝපේශ ගෝපිකා කාංත රාධා කාංත නමෝಽස්තුතෙ\n    ',
},

{
title:" ශ්‍රී ගෞරංග ප්‍රණාම",
song:'\nනමෝ මහා වදාන\u200d්\u200dයාය ක්\u200dරිෂ්ණ ප්\u200dරේම ප්\u200dරදායතෙ\nක්\u200dරිෂ්ණාය ක්\u200dරිෂ්ණ චෛතන්\u200dය නාම්නෙ ගෞර ත්විෂෙ නමඃ\n\n\n    ',
},

{
title:" ජය රාධා මාධව ",
song:'\n(ජය) රාධා මාධව (ජය) කුඦ\xa0බිහාරී\n(ජය) ගොපී ජන වල්ලභ (ජය)\xa0ගිරි\xa0වර ධාරී\n(ජය) යශොදා නංදන (ජය)\xa0බ්\u200dරජ ජන රඦන\n(ජය) යාමුන තීර වන චාරී\n    ',
},

{
title:" ශ්‍රීල ප්‍රභූපාද ප්‍රණති",
song:'\nනම ඕම් විෂ්ණු පාදාය ක්\u200dරිෂ්ණ ප්\u200dරෙස්ඨාය භූතලේ\nශ්\u200dරීමතේ භක්තිවේදාංත ස්වාමින් ඉති නාමිනේ\nනමස්තෙ සාරස්වතේ දේවේ ගෞර වාණී ප්\u200dරචාරිණේ\nනිර්විශේෂ ශූන්\u200dයවාදි පාශ්චාත්\u200dය දේශ තාරිණේ\n    ',
},

{
title:" පංච තත්ව මංත්‍ර",
song:'\n(ජය) ශ්\u200dරී ක්\u200dරිෂ්ණ චෛතන්ය ප්\u200dරභූ නිත\u200d්\u200dයානංද\nශ්\u200dරී අද්වෛත ගදාධර ශ්\u200dරීවාසාදි ගෞර භක්ත වෘන්ද\n    ',
},

{
title:" හරේ ක්‍රිෂ්ණ මහා මංත්‍ර",
song:'\nහරේ ක්\u200dරිෂ්ණ හරේ ක්\u200dරිෂ්ණ\nක්\u200dරිෂ්ණ ක්\u200dරිෂ්ණ හරේ හරේ\nහරේ රාම හරේ රාම\nරාම රාම හරේ හරේ\n\n',
},
]