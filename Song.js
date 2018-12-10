import React,{Component} from 'react';
import {Text,StyleSheet,View,Image,ScrollView,BackHandler,Title} from 'react-native';
import {Actions} from 'react-native-router-flux';
import PinchZoomView from 'react-native-pinch-zoom-view';




export default class Song extends Component{
  


   handle_back_press=()=>
        {
          Actions.pop();
          return true;
       }
 
        componentDidMount() {
          console.log(this.props.title);
           BackHandler.addEventListener('hardwareBackPress',this.handle_back_press);
        }

        componentWillUnmount() {
  BackHandler.removeEventListener('hardwareBackPress', this.handle_back_press);
}



  render(){

    if(this.props.isEnglish){

     formatted_song=this.props.lyrics.map((a,i)=>{  

        console.log(a);
        console.log(i);  
     
        return <Para key={i} para={a} />
      
    });
   }


    return(
    <View style={styles.container} >


          <View style={styles.header}>
            <Image style={styles.logo} source={require('./prabhupad1.jpg')} />
            <View style={{flexDirection: 'column'}}>
              <Text style={styles.menu_text}>Vaishnava Geethavali</Text>
              <Text style={styles.title} ellipsizeMode='tail' numberOfLines={1}>{this.props.title}</Text>
            </View>
          </View>
        

        
                <View style={styles.song_container}>
                  <View style={styles.song_title_cont}>
                    <Text style={styles.song_title_text}>{this.props.title}</Text>
                  </View>

                <ScrollView style={styles.contentContainer}>
                   
                    <View style={[styles.song_lyrics,]}>
                    
                        
                          {
                            this.props.isEnglish 
                            &&
                            formatted_song

                          }
                          {

                            !this.props.isEnglish
                            &&
                            <Para para={this.props.lyrics} />
                          }
                                                  
                    
                    </View>
                  
                </ScrollView>
                
                </View>
      
      </View>
    )
  }
}

class Para extends Component{
  render(){
    return(
      <View>
        
            <Text style={styles.lyrics_text}>{this.props.para}</Text>
        
          <View style={{flex:1,height: '50%',width: '100%'}} />
        
      </View>
      )
  }
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor: 'white'
  },
  header:{
    flex:1,
    maxHeight: '12%',
    backgroundColor: 'black',
    flexDirection: 'row' , 
  },
  logo:{
    marginTop: '2%',
    marginLeft: '2%',
    borderRadius: 80,
    maxWidth: '15%',
    maxHeight: '80%',

  },
  menu_text:{
    fontSize:20,
    color:'white',
    marginTop: '3%',
    marginLeft: '5%',
    fontWeight: 'normal' ,
    fontFamily: 'DonegalOne-Regular',
  },
  contentContainer: {
    flex:1,
    
  },

  title:{
    flex: 1,
    flexGrow: 1 ,
    marginLeft: '5%',
    marginTop: '3%',
    color:'white',
    fontFamily: 'DonegalOne-Regular',
  },
  song_container:{
    flex:1,

  },
  song_title_cont:{
    flex:1,
    maxWidth: '100%',
    maxHeight: '20%'

  },
  song_title_text:{
    fontSize: 30,
    color:"green",
    textAlign: 'center' ,
    marginTop: '3%',
    fontWeight: 'normal', 
    fontFamily: 'DonegalOne-Regular', 
  },
  song_lyrics:{
    flex:2,
    maxWidth: '100%',
    justifyContent: 'space-between', 
    

  },
  lyrics_text:{
    color:"blue",
    flex:1,
    textAlign:'center',
    marginTop: '2%',
    fontSize: 17,
    lineHeight: 30,
    fontFamily: 'DonegalOne-Regular',


    }


  });