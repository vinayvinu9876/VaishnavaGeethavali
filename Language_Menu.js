import React,{Component} from 'react';
import {Alert,View,TouchableNativeFeedback,Text,StyleSheet,Image,BackHandler} from 'react-native';
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
						<LangMenu name={"English"} handlePress={()=>Actions.SongListEnglish()} /> 
						<LangMenu name={"हिंदी"} handlePress={()=>Actions.SongListHindi()} />	
						<LangMenu name={"മലയാളം"} handlePress={()=>Actions.SongListMalayalam()} />						
					</View>

					<View style={styles.menu_row}>
						<LangMenu name={"অসমীয়া"} handlePress={()=>Actions.SongListAssamese()} />
						<LangMenu name={"ಕನ್ನಡ"} handlePress={()=>Actions.SongListKannada()} />
						<LangMenu name={"తెలుగు"} handlePress={()=>Actions.SongListTelugu()} />
					</View>

					<View style={styles.menu_row}>
						<LangMenu name={"ગુજરાતી"} handlePress={()=>Actions.SongListGujarathi()} />
						<LangMenu name={"සිංහල"} handlePress={()=>Actions.SongListSinhala()} />	
						<LangMenu name={"中文"} handlePress={()=>Actions.SongListChinese()} />
					</View>


					<View style={styles.menu_row}>
						<LangMenu name={"日本人"} handlePress={()=>Actions.SongListJapanese()} />
						<LangMenu name={"বাঙালি"} handlePress={()=>Actions.SongListBengali()} />
						<LangMenu name={"한국어"}  handlePress={()=>Actions.SongListKorean()}/> 						
					</View>

					<View style={styles.menu_row}>
						<LangMenu name={"Ελληνικά"} handlePress={()=>Actions.SongListGreek()} />
						<LangMenu name={"ਪੰਜਾਬੀ"} handlePress={()=>Actions.SongListPunjabi()} />
						<LangMenu name={"Кыргызча"} handlePress={()=>Actions.SongListKrygz()} />
					</View>

					<View style={styles.menu_row}>
						<LangMenu name={"русский"} handlePress={()=>Actions.SongListRussian()} />
						<LangMenu name={"ไทย"} handlePress={()=>Actions.SongListThai()} />					
						<LangMenu name={"தமிழ்"} handlePress={()=>Actions.SongListTamil()} />					
					</View>				
										
					
					<View style={styles.menu_row}>
						<LangMenu name={"עברית"} handlePress={()=>Actions.SongListHebrew()} />
						<LangMenu name={" བོད་པ་"} handlePress={()=>Actions.SongListTibetan()} />
						<LangMenu name={"ଓଡ଼ିଆ "} handlePress={()=>Actions.SongListOdiya()} />
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
		fontWeight: 'bold',
		fontSize: 25,
		alignSelf: 'center',
		marginLeft: '2%',
		color:'rgb(255, 124, 0)',

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
		margin:"20%",
		
		textAlign: 'center', 
		color:'rgb(255, 103, 0)',
		fontSize: 15,


	},
	bg_safforon:{
		backgroundColor: '#ffb366',
	},	
	bg_blue:{
		backgroundColor: '#4dffff',
	}
})