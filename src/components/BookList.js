import React from 'react'
import { StyleSheet, View, Text, FlatList, TouchableOpacity } from 'react-native'
import { useSelector }  from 'react-redux'
import { useNavigation } from '@react-navigation/native'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import ListItem from './ListItem'
import {Spinner}  from '../common'

const BookList = () => {

    const {booklist, loading, error} = useSelector(state => state.bookData)
    const navigation = useNavigation();
    //console.log("loading- " +loading +", Book -" + booklist + ", Error - " + error)

    //if there is no data in reducer
    if(loading || !booklist) {
        return (
            <View style={styles.loadingContainer}>    
                <Spinner />
            </View>
        )
    }
    
    const renderItem = ({item}) => (
        <TouchableOpacity onPress={() => navigation.navigate('Detail', {id: item.id})}>
            <ListItem result={item} />
        </TouchableOpacity>
    )

    return (
        <View  style={styles.container}>
            <Text style={styles.titleStyle}>Book List</Text>
           <FlatList
                data={booklist}
                keyExtractor= {book => book.id}
                renderItem={renderItem}
                numColumns={2}
            />
        </View >
    )
}

export default BookList

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    loadingContainer: {
        flex: 1,
        justifyContent: 'center',
    },
    titleStyle: {
        fontSize: hp(3.5),
        alignSelf: 'flex-start',
        marginLeft: hp(1),
        fontFamily: 'Dosis-Medium',
        color: '#FFF'
    }
})
