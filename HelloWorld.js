import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import {Text, View, Image, Dimensions, StatusBar, TouchableOpacity, TouchableHighlight} from 'react-native';
import {styles} from './Styles';

export default class HelloWorld extends React.Component {
    constructor(props){
        super(props);
        this.screenHeight = Dimensions.get("window").height;
        this.screenWidth = Dimensions.get("window").width;
        this.goToHello = this.goToHello.bind(this);
        this.goToWorld = this.goToWorld.bind(this);
        this.state = {
            myViewBackgroundCol: 'red',

        };
        this.myMenuPoints = [ 
            ["Zur Karte", this.goToHello], 
            /*["Hallo", this.goToHello], */
            ["Team", this.goToWorld] 
            /*["Hallo", this.goToHello] */
        ];
    }

    goToHello(){
        const {navigate} = this.props.navigation;
        navigate("Hello");
    }
    goToWorld(){
        const {navigate} = this.props.navigation;
        navigate("World");
    }

    changeMyColor(){
        this.setState({
            myViewBackgroundCol: 'skyblue'
        });
    }

    loadMyMainViewItems(){
        myMainViewItems = this.myMenuPoints.map( (s, i)=>{
            return (
                <TouchableHighlight key={i} style={styles.bottomItem} onPress={s[1]}>
                        <View style={styles.bottomItemInner}>
                            <Text style={styles.headline}> {s[0]} </Text>
                        </View>
                </TouchableHighlight>
            );
        } );
        return myMainViewItems;
    }
    render() {
       
        return (
            /*
            <View style={styles.container}>
            <StatusBar hidden/>
                <TouchableHighlight style={[styles.myViews, {backgroundColor:'skyblue'}]} onPress={this.goToHello}>
                    <Text style={styles.texts}> Hallo </Text>
                </TouchableHighlight>
                <TouchableHighlight style={[styles.myViews, {backgroundColor:'#417aa1'}]} onPress={this.goToWorld}>
                    <Text style={styles.texts}> Welt </Text>
                </TouchableHighlight>
            </View>*/

            <View style={styles.container}>

       
                    <View style={styles.top}>
                        <Image source={require('./images/bgnew.png')} style={styles.profileImage}></Image>
                    </View>
                    

                <View style={styles.center}>
                    <Text style={styles.welcome}>GET ALONG</Text>
                </View>
                

                <View style={styles.bottom}>
                   {this.loadMyMainViewItems()}
                </View>

                
            </View>
        );
    }
}
