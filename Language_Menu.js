import React,{Component} from 'react';
import {Alert,View,Text,StyleSheet,Image,BackHandler} from 'react-native';
import {TouchableNativeFeedback,} from 'react-native';
import {Actions} from 'react-native-router-flux';

export default class Language_Menu extends Component{

handleBackButton = () => {
 Alert.alert(
     'Exit App',
     'Exiting the application?', [{
         text: 'Cancel',
         onPress: this.canceled,
         style: 'cancel'
     }, {
         text: 'OK',
         onPress: this.exit_app
     }, ], {
         cancelable: false
     }
  )
  return true;
} 

canceled=()=>{
	console.log('Cancel Pressed');
}

exit_app=()=>{
	BackHandler.exitApp();
}

componentDidMount() {
  BackHandler.addEventListener('hardwareBackPress', this.handleBackButton);
}

componentWillUnmount() {
  BackHandler.removeEventListener('hardwareBackPress', this.handleBackButton);
}

	render(){
		return(
			<View style={styles.container}>
				<View style={styles.header}>
					<Image source={require('./prabhupad1.jpg')} style={styles.logo}/>
					<Text style={styles.heading}>Vaishnava Gitavali</Text>
				</View>
				
				<View style={styles.menu}>

					<View style={styles.menu_row}>
						<LangMenu name={"English"} english_verse="(English)" handlePress={()=>Actions.SongListEnglish()} /> 
						<LangMenu name={"हिंदी"} english_verse="(Hindi)" handlePress={()=>Actions.SongListHindi()} />	
						<LangMenu name={"മലയാളം"} english_verse="(Malayalam)" handlePress={()=>Actions.SongListMalayalam()} />						
					</View>

					<View style={styles.menu_row}>
						<LangMenu name={"অসমীয়া"} english_verse="(Assamese)" handlePress={()=>Actions.SongListAssamese()} />
						<LangMenu name={"ಕನ್ನಡ"} english_verse="(Kannada)" handlePress={()=>Actions.SongListKannada()} />
						<LangMenu name={"తెలుగు"} english_verse="(Telugu)" handlePress={()=>Actions.SongListTelugu()} />
					</View>

					<View style={styles.menu_row}>
						<LangMenu name={"ગુજરાતી"} english_verse="(Gujarathi)" handlePress={()=>Actions.SongListGujarathi()} />
						<LangMenu name={"සිංහල"} english_verse="(Sinhala)" handlePress={()=>Actions.SongListSinhala()} />	
						<LangMenu name={"中文"} english_verse="(Chinese)" handlePress={()=>Actions.SongListChinese()} />
					</View>


					<View style={styles.menu_row}>
						<LangMenu name={"日本人"} english_verse="(Japanese)" handlePress={()=>Actions.SongListJapanese()} />
						<LangMenu name={"বাঙালি"} english_verse="(Bengali)" handlePress={()=>Actions.SongListBengali()} />
						<LangMenu name={"한국어"}  english_verse="(Korean)" handlePress={()=>Actions.SongListKorean()}/> 						
					</View>

					<View style={styles.menu_row}>
						<LangMenu name={"Ελληνικά"} english_verse="(Greek)" handlePress={()=>Actions.SongListGreek()} />
						<LangMenu name={"ਪੰਜਾਬੀ"} english_verse="(Punjabi)" handlePress={()=>Actions.SongListPunjabi()} />
						<LangMenu name={"Кыргызча"} english_verse="(krygz)" handlePress={()=>Actions.SongListKrygz()} />
					</View>

					<View style={styles.menu_row}>
						<LangMenu name={"русский"} english_verse="(Russian)" handlePress={()=>Actions.SongListRussian()} />
						<LangMenu name={"ไทย"} english_verse="(Thai)" handlePress={()=>Actions.SongListThai()} />					
						<LangMenu name={"தமிழ்"} english_verse="(Tamil)" handlePress={()=>Actions.SongListTamil()} />					
					</View>				
										
					
					<View style={styles.menu_row}>
						<LangMenu name={"עברית"} english_verse="(Hebrew)" handlePress={()=>Actions.SongListHebrew()} />
						<LangMenu name={" བོད་པ་"} english_verse="(Tibetan)" handlePress={()=>Actions.SongListTibetan()} />
						<LangMenu name={"ଓଡ଼ିଆ"} english_verse="(Odiya)" handlePress={()=>Actions.SongListOdiya()} />
					</View>
					
				</View>


				
			</View>
		)
	}
}


class LangMenu extends Component{
	render(){
		return(

			
				<View style={styles.menu_row}>
					<TouchableNativeFeedback onPress={this.props.handlePress}>
						<View style={styles.menu_item}>
							<Text style={styles.menu_text}>{this.props.name}</Text>
							<Text style={styles.english_vers}>{this.props.english_verse}</Text>
						</View>
					</TouchableNativeFeedback>
				</View>
			

		)
	}
}

const styles=StyleSheet.create({
	container:{
		flex:1,
		backgroundColor: 'white',
		

	},
	contentContainer: {
	flex:1,
    
  },
	header:{
		flex:1,
		flexDirection: 'row' , 
		maxHeight: '17%',
		maxWidth: '100%',
		borderBottomWidth: 0.5,
		borderColor: 'lightgrey',
		
		

	},
	heading:{
		fontWeight: 'normal',
		fontSize: 25,
		alignSelf: 'center',
		marginLeft: '2%',
		color:'rgb(255, 124, 0)',
		fontFamily: 'DonegalOne-Regular',

	},
	
	logo:{
		maxHeight: '90%',
		maxWidth: '20%',
		borderRadius: 200,
		marginLeft: '5%',
		
	},

	menu:{
		flex:1,
		

	},
	menu_row:{
		flex:1,
		flexDirection: 'row',
		height: '100%',
		

	},
	menu_item:{
		flex:1,
		borderLeftWidth: 0.5,
		borderBottomWidth: 0.5,
		borderColor: 'lightgrey',
		maxWidth: '100%',
		maxHeight: '100%',
	},
	menu_text:{
		margin:"7%",		
		textAlign: 'center', 
		color:'rgb(255, 103, 0)',
		fontSize: 15,
		fontFamily: 'DonegalOne-Regular',


	},
	english_vers:{
		fontSize:12,
		color:'lightgrey',
		textAlign:'center',
		fontFamily: 'DonegalOne-Regular', 
	},
	bg_safforon:{
		backgroundColor: '#ffb366',
	},	
	bg_blue:{
		backgroundColor: '#4dffff',
	}
})