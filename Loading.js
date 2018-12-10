import React,{Component} from 'react';
import TimerMixin from 'react-timer-mixin';
import {Image,Text,View,StyleSheet,Alert} from 'react-native';
import {Actions} from 'react-native-router-flux';

export default class Loading extends Component{
	componentDidMount=()=> {
		console.log("Component DId MOUNT");
    	setTimeout(() => {
      		console.log('I do not leak!');
      		Actions.Lang_Menu();
    	}, 2000);
  }
	render(){
		return(
			<View style={styles.container}>
				<Image source={require('./prabhupad2v1.png')} style={styles.logo}/>
				<Text style={styles.name}>Vaishnava Gitavali</Text>
			</View>
		)
	}
}




const styles=StyleSheet.create({
	container:{
		flex:1,
		alignItems: 'center',
		backgroundColor: 'white',
	},
	logo:{
		alignSelf:  'center',
		borderRadius: 300, 
		maxWidth: '100%',
		maxHeight: '60%',
		marginTop: '20%',
	},
	name:{
		flex:1,
		marginTop: '30%',
		fontWeight: 'normal',
		fontFamily: 'DonegalOne-Regular',
		fontSize: 30,
		color:'rgb(255, 103, 0)',
		alignSelf:  'center',
		textAlign: 'center',  

	}
});