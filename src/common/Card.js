import React from 'react'
import { StyleSheet, View } from 'react-native'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

const Card = props => {
    return (
        <View style={styles.container}>
            {props.children}
        </View>
    )
}

export default Card

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#151B35',
    }
})
