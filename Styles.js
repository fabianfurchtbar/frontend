import React from 'react';
import { StyleSheet, Dimensions} from 'react-native';



let screenWidth = Dimensions.get("window").width;
let screenHeight = Dimensions.get("window").height;
export const styles = StyleSheet.create({

    container: {
        flex: 1,
    },
    top: {
        height: '30%',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#0a558c',
    },
    

    profileImage: {
        width: 140,
        height: 140,
    },

    teamCenter: {
        height: 'auto',
        alignSelf: 'stretch',
        width: undefined,
    },
    backButton: {
        width: 90,
        height: 90,
        padding: 10,
    },

    teamImage: {
        borderRadius: 75,
        borderWidth: 2,
        borderColor: 'white',
        width: 150,
        height: 150,
        marginBottom: 10,
    },

    teamMember: {
        alignItems: 'center',
        justifyContent: 'center',
        height: 'auto',
        width: '100%',
        borderBottomColor: 'white',
        borderBottomWidth: 2,
        marginBottom: 35,
    },

    name: {
        color: 'white',
        fontSize: 25,
        fontWeight: '500',
        textAlign: 'center',
        width: '100%',
    },

    description: {
        color: 'white',
        fontSize: 15,
        textAlign: 'center',
        padding: 10,
        width: '100%',
        backgroundColor: '#32b4c8',
    },

    center: {
        height: 'auto',
        backgroundColor: '#32b4c8',
        alignSelf: 'stretch',
        width: undefined,
    },
    bottom: {
        height: '69%',
        flexDirection: 'row',
        flexWrap: 'wrap',
        padding: 5,
    },
    bottomItem: {
        width: '100%',
        height: '48%',
        padding: 5,
    },

    welcome: {
        color: 'white',
        fontWeight: '400',
        fontSize: 30,
        textAlign: 'center',
    },

    headline: {
        color: 'white',
        fontWeight: '300',
        fontSize: 25,
        textAlign: 'center',
        borderWidth: 2,
        borderColor: 'white',
        padding: 5,
    },

    
    bottomItemInner: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#32b4c8',
        borderWidth: 1,
        borderColor: '#0a558c',
    },
    texts: {
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center'
    }

});
