import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import Icon  from 'react-native-vector-icons/Feather';

const Header = () => {
    const navigation = useNavigation();

    return (
        <View style={styles.header}>
                <View style={{flex:1}}>
                    <View>
                        <Text style={{fontFamily: 'Pacifico-Regular', fontSize: hp(4.5), color: '#FFF'}}>Book</Text>
                        <Text style={{fontFamily: 'Pacifico-Regular', fontSize: hp(2.5), color: '#FFF'}}>Store</Text>
                    </View>                    
                </View>
                
                <View style={styles.searchStyle}>
                    <TouchableOpacity style={{flexDirection: 'row'}} onPress={() => navigation.navigate('Search')}>
                        <View>
                            <Icon name="search" size={18} style={{color: '#FFF'}} />
                        </View>
                        <View>
                            <Text style={{color: '#FFF', marginLeft: hp(0.8)}}>Search</Text>
                        </View>
                    </TouchableOpacity>
                </View>
        </View>
    )
}

export default Header

const styles = StyleSheet.create({
    header: {
        flex: 1,
        padding: hp(5)
    },
    searchStyle: {
        flexDirection: 'row',
        alignSelf: 'flex-end',
        borderWidth: 1,
        borderColor: '#292F53',
        backgroundColor: '#292F53',
        padding: hp(1),
        borderRadius: hp(3)
    }
})
