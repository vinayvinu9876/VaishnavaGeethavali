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
				<Image source={require('./prabhupad1.jpg')} style={styles.logo}/>
				<Text style={styles.name}>Vaishnava Gitavali</Text>
			</View>
		)
	}
}




const styles=StyleSheet.create({
	container:{
		flex:1,
		alignItems: 'center',

	},
	logo:{
		alignSelf:  'center',
		borderRadius: 200, 
		maxWidth: '100%',
		marginTop: '40%',
	},
	name:{
		marginTop: '10%',
		fontWeight: 'bold',
		fontSize: 30, 
	}
});