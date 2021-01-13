import React from 'react'
import { StyleSheet, View } from 'react-native'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

const CardSection = props => {
    return (
        <View style={styles.container}>
            {props.children}
        </View>
    )
}

export default CardSection

const styles = StyleSheet.create({
    container: {
        flex: 5,
        backgroundColor: '#292F53',
        paddingVertical: hp(3),
        borderTopStartRadius: hp(5),
        borderTopEndRadius: hp(5),
    }
})
