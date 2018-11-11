import React,{Component} from 'react';
import {Text,StyleSheet,View,Image,ScrollView,BackHandler,Title} from 'react-native';
import {Actions} from 'react-native-router-flux';




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
      	        	<View style={styles.song_lyrics}>
      	        		<Text style={styles.lyrics_text}>

                          {
                            this.props.lyrics

                          }


      	        		</Text>
      	        	</View>
      	        </ScrollView>
      	        </View>
      
      </View>
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
    fontWeight: 'bold' ,
  },
  contentContainer: {
  	flex:1,
    
  },

  title:{
  	flex: 1,
  	flexShrink: 1 ,
  	marginLeft: '5%',
  	color:'white',

  },
  song_container:{
  	flex:1,

  },
  song_title_cont:{
  	flex:1,
  	maxWidth: '100%',
  	maxHeight: '15%',

  },
  song_title_text:{
  	fontSize: 30,
  	color:"green",
  	textAlign: 'center' ,
  	marginTop: '3%',
  	fontWeight: 'normal',  
  },
  song_lyrics:{
  	flex:1,
  	maxWidth: '100%',
  	

  },
  lyrics_text:{
  	color:"blue",
  	fontSize: 15,
  	textAlign:'center',
  	marginTop: '2%',

    }


  });