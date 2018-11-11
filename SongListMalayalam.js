import React,{Component} from 'react';
import {Text,StyleSheet,View,Image,ScrollView,BackHandler,TouchableNativeFeedback} from 'react-native';
import {Actions} from 'react-native-router-flux';



export default class SongListMalayalam extends Component{

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
title:"﻿ ശ്രീ ദാമോദരാഷ്ടക",
song:'\nനമാമീശ്വരം സച്ചിദാനന്ദരൂപം\nലസത്-കുംഡലം ഗോകുലേ ഭ്രജമാനം\nയശോദാഭിയോലൂഖലാത് ധാവമാനം\nപരാമൃഷ്ഠം അത്യംതതോ ദ്രുത്യ ഗോപ്യാ\nരുദംതം മുഹുർ നേത്ര-യുഗ്മം മൃജംതം\nകരാംഭോജ-യുഗ്മേന സാതംക-നേത്രം\nമുഹുഃ ശ്വാസ-കംപ-ത്രിരേഖാങ്കകണ്ഠ-\nസ്ഥിത-ഗ്രൈവം ദാമോദരം ഭക്തിബദ്ധം\nഇതീദൃക് സ്വലീലാഭീരാനന്ദ-കുംഡേ\nസ്വഘോഷം നിമജ്ജന്തം ആഖ്യാപയന്തം\nതദീയേഷിത-ജ്ഞേഷു ഭക്തൈര്ജിതത്വം\nപുനഃ പ്രേമതസ്തം ശതാവൃത്തി വന്ദേ\nവരം ദേവ മോക്ഷം ന മോക്ഷാവധിം വാ\nന ചാന്യം വൃണേ ഹം വരേശാദപീഹ\nഇദം തേ വപുർനാഥ ഗോപാല-ബാലം\nസദാ മേ മനസ്യാ വിരാസ്താം കിമന്യൈഃ\nഇദം തേ മുഖാംഭോജം അത്യന്ത-നീലൈഃ\nവൃതം കുന്തലൈഃ സ്നിഗ്ധ-രക്തൈശ്ച ഗോപ്യാ\nമുഹുശ്ചുംബിതം ബിംബ രക്താധരം മേ\nമനസ്യാവിരാസ്താം അലം ലക്ഷ-ലാഭൈഃ\nനമോ ദേവ ദാമോദരാനന്ത വിഷ്ണോ\nപ്രസീദ പ്രഭോ ദുഃഖ-ജലാബ്ധി-മഗ്നം\nകൃപാ-ദൃഷ്ടി-വൃഷ്ട്യാതിദീനം ബതാനു-\nഗൃഹാണേശ-മാം അജ്ഞം ഏദ്യക്ഷിദൃശ്യഃ\nകുവെരാത്മ ജൌ ബദ്ധ- മൂര്\u200dത്യൈവ യദ്വത്\nത്വയാ മോചിതൌ ഭക്തി-ഭാജൌ കൃതൌ ച\nതഥാ പ്രേമ-ഭക്തിം സ്വകാം മേ പ്രയച്ഛ\nന മോക്ഷേ ഗ്രഹോ മേऽസ്തി ദാമോദരേഹ\nനമസ്തേസ്തു ധാമ്നേ സ്പുരദ്ദീപ്തി-ധാമ്നേ\nത്വദീയോധരായാഥ വിശ്വസ്യ ധാമ്നേ\nനമോ രാധികായൈ ത്വദീയ പ്രിയായൈ\nനമോऽനന്ത ലീലായ ദേവായ തുഭ്യം\n    ',
},

{
title:" ശ്രീല ഭക്തിവിനോദ പ്രണതി",
song:'\nനമോ ഭക്തിവിനോദായ സച്ചിദാനന്ദ നാമിനേ\nഗൗര ശക്തി സ്വരൂപായ രൂപാനുഗവരായ തേ\n    ',
},

{
title:" ശ്രീ ഗുരു പ്രണാമ",
song:'\nഓം\xa0അജ്ഞാന തിമിരാന്ധസ്യ ജ്ഞാനാന്ജന ശലാകയാ\nചക്ഷുരുന്മീലിതം യേന തസ്മൈ ശ്രീ ഗുരവെ നമ:\n    ',
},

{
title:" ശ്രീ തുളസി പ്രണാമ",
song:'\nവൃന്ദായൈ തുളസി ദേവ്യൈ പ്രിയായൈ കേശവസ്യ ച\nകൃഷ്ണ ഭക്തി പ്രദേ ദേവീ സതൃവതൈൃ നമോ നമ:\n    ',
},

{
title:" ശ്രീ നൃസിംഹ പ്രണാമ",
song:'\nനമസ്തേ നരസിംഹായ\nപ്രഹ്ലാദാഹ്ലാദ ദായിനേ\nഹിരണൃകശിപോർവക്ഷ:\nശിലാടംകനഖാലയേ\nഇതൊ നൃസിംഹ പരതൊ നൃസിംഹ\nയതൊ യതൊ യാമി തതൊ നൃസിംഹ\nബാഹിര് നൃസിംഹ ഹൃദയെ നൃസിംഹ\nനൃസിംഹം ആദിം ശരണം പ്രപദ്യെ\n\n    ',
},

{
title:" ശ്രീ നൃസിംഹ പ്രാർഥന",
song:'\nതവ കര കമല വരെ നഖം അദ്ഭുത ശൃംഗം\nദലിത ഹിരണ്യകശിപു തനു ഭൃംഗം\nകേശവ ധൃത നരഹരി—രൂപ ജയ ജഗദീശ ഹരേ\n    ',
},

{
title:" ശ്രീ ഗൗരാംഗ പ്രണാമ",
song:'\nനമോ മഹാ വദാന്യായ കൃഷ്ണ പ്രേമ പ്രദായതെ\nകൃഷ്ണായ കൃഷ്ണ ചൈതന്യ നാമ്നെ ഗൗര ത്വിഷെ നമഃ\n    ',
},

{
title:" ശ്രീ ഗുരു വന്ദന",
song:'\n(ശ്രീല നരോത്തമദാസ ഠാക്കൂർ)\nശ്രീ—ഗുരു—ചരണ—പദ്മ, കേവല—ഭക്തി—സദ്മ,\nബന്ദോ മുയീ സാവധാന മാതേ\nജാഹാര പ്രസാദേ ഭായ് , ഏ ഭാവ തൊരിയ ജായ് ,\nകൃഷ്ണ-പ്രാപ്തി ഹോയ് ജാഹാ ഹോയ് തേ\nഗുരു-മുഖ-പദ്മ-വാക്യ, ചിത്തേതേ കൊരിയാ ഐക്യ,\nആർ നാ കൊരിഹോ മനേ ആശാ\nശ്രീ ഗുരു ചരണേ രതി, ഏയ് സേ ഉത്തമ ഗതി,\nജെ പ്രസാദേ പൂരേ സർവ ആശാ…\nചക്ഷുദാൻ ദിലൊ ജയ് , ജന്മേ ജന്മേ പ്രഭു സേയ്,\nദിവ്യ—ജ്ഞാൻ ഹൃദേ പ്രകാശിതോ,\nപ്രേമ-ഭക്തീ ജഹാ ഹോയ്തെ , അവിദ്യ വിനാശാ ജാതേ,\nവേദേ ഗായ് ജാഹാര ചരിതോ\nശ്രീഗുരു കരുണ- സിന്ധു,\nഅധമ ജനാര ബന്ധൂ,\nലോകനാഥ് ലോകേര ജീവന\nഹാ ഹാ പ്രഭു കോരോ ദോയ, ദേഹോ മോരേ പദ ഛായ, എബേ ജശ് ഘുഷുക് ത്രിഭുവന…\n    ',
},

{
title:"ജയ രാധ മാധവ",
song:'\n(ജയ) രാധ മാധവ (ജയ) കുഞ്ജ ബിഹാരി\n(ജയ) ഗോപിജന വല്ലഭ (ജയ) ഗിരിവര ധാരി\n(ജയ) ജശോധ നന്ദന (ജയ) ബ്രജ ജന രഞ്ജന\n(ജയ) ജമുന തീര വനചാരി\n    ',
},

{
title:" ശ്രീല പ്രഭുപാദ പ്രണതി",
song:'\nനമ ഓം വിഷ്ണുപാദായ കൃഷ്ണപ്രേഷ്ഠായ ഭൂതലേ\nശ്രീമതേ ഭക്തിവേദാന്തസ്വാമിൻ ഇതി നാമിനേ\nനമസ്തേ സാരസ്വതേ ദേവെ ഗൌരവാണീ പ്രചാരിണേ\nനിർവിശേഷ ശൂന്യവാദി പാശ്ചാത്യദേശ താരിണേ\n    ',
},

{
title:" ശ്രീ പംച തത്ത്വ മംത്ര",
song:'\n(ജയ) ശ്രീ കൃഷ്ണ ചൈതന്യ\nപ്രഭു നിത്യാനന്ദ\xa0\nശ്രീ അദ്വൈത ഗദാധര\xa0\nശ്രീവാസാദി ഗൌര ഭക്ത വൃന്ദ\n\n\n    ',
},

{
title:" ഹരേ കൃഷ്ണ മഹാ മംത്റ",
song:'\nഹരേ കൃഷ്ണ ഹരേ കൃഷ്ണ\nകൃഷ്ണ കൃഷ്ണ ഹരേ ഹരേ\nഹരേ രാമ ഹരേ രാമ\nരാമ രാമ ഹരേ ഹരേ\n\n',
},
]