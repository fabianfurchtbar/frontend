import React from 'react';
import {Text, View, Dimensions, StatusBar, TouchableOpacity, Image, ScrollView} from 'react-native';
import {styles} from './Styles';

export default class World extends React.Component {
    constructor(){
        super();
        this.screenHeight = Dimensions.get("window").height;
        this.screenWidth = Dimensions.get("window").width;
        this.goToMainView = this.goToMainView.bind(this);
    }

    goToMainView(){
        const {navigate} = this.props.navigation;
        navigate("Home");
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
            <View style={{backgroundColor:'#0a558c', flex:1}}>
                <View style={styles.worldMainContainer}>
                    <View style={{ backgroundColor: '#32b4c8', }}>
                        <TouchableOpacity onPress={this.goToMainView}>
                            <Image style={styles.backButton} source={require('./icons/back-arrow.png')}/>
                        </TouchableOpacity>
                    </View>

                    <ScrollView style={styles.teamCenter}>
                        <View style={styles.teamMember}>
                            <Image source={require('./images/team/fabian.jpg')} style={styles.teamImage}></Image>
                            <Text style={styles.name}>Fabian Furchtbar</Text>
                            <Text style={styles.description}>Frontend Developer</Text>
                        </View>

                        <View style={styles.teamMember}>
                            <Image source={require('./images/team/fabian.jpg')} style={styles.teamImage}></Image>
                            <Text style={styles.name}>Felix Ohlsen</Text>
                            <Text style={styles.description}>Frontend Developer</Text>
                        </View>

                        <View style={styles.teamMember}>
                            <Image source={require('./images/team/fabian.jpg')} style={styles.teamImage}></Image>
                            <Text style={styles.name}>Michelle Rötter</Text>
                            <Text style={styles.description}>Design</Text>
                        </View>

                        <View style={styles.teamMember}>
                            <Image source={require('./images/team/fabian.jpg')} style={styles.teamImage}></Image>
                            <Text style={styles.name}>Sercan Savran</Text>
                            <Text style={styles.description}>Backend Developer</Text>
                        </View>

                        <View style={styles.teamMember}>
                            <Image source={require('./images/team/fabian.jpg')} style={styles.teamImage}></Image>
                            <Text style={styles.name}>Yuhei Yasutake</Text>
                            <Text style={styles.description}>Backend Developer</Text>
                        </View>

                        <View style={{ height: 100, marginTop: 10 }}>
                        </View>
                    </ScrollView>
                    
                </View>
            </View>

        );
    }
}
