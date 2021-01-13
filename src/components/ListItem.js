import React from 'react'
import { StyleSheet, Image, View, Text } from 'react-native'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

const ListItem = ({result}) => {
   
    const imageURL = result.volumeInfo.imageLinks

    return (
        <View style={styles.imageContainer}>
        {
            imageURL ?
                <Image style={styles.image} source={{uri: result.volumeInfo.imageLinks.smallThumbnail}} />
            :
                <Image source={require('../../assets/img/no-boo-cover.jpg')} style={styles.image} />
        }
            <Text style={styles.titleStyle}>{result.volumeInfo.title}</Text>
        </View>
    )
}

export default ListItem

const styles = StyleSheet.create({
    imageContainer: {
        flex: 1,
        width: wp(48),
        margin: hp(0.5),
        backgroundColor: '#151B35',
        padding: hp(2),
        borderRadius: hp(3),
        elevation: 5
    },
    image: {
        width: wp(40),
        height: wp(40) * 1.3,
        
    },
    titleStyle: {
        color: '#FFF',
        fontFamily: 'Dosis-Regular',
        fontSize: hp(2),
        marginTop: hp(1)
    }
})
