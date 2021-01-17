import React, {useEffect}  from 'react'
import { Image, ScrollView, StyleSheet, Text, View } from 'react-native'
import { useSelector, useDispatch }  from 'react-redux'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import {fetchBookByID}  from '../actions'
import {Card, CardSection, Spinner}  from '../common'
import Icon from 'react-native-vector-icons/Feather';
import MIcon from 'react-native-vector-icons/MaterialIcons'

const DetailScreen = ({route}) => {
    
    const dispatch = useDispatch()
    const {book, loading, error} = useSelector(state => state.bookData)
    const {id} = route.params
    //console.log("loading- " +loading +", Book -" + book + ", Error - " + error)
    
    useEffect(() => {
        dispatch(fetchBookByID(id))
    }, [])

    //remove html tag from response data
    const getDescription = () => {
        const regex = /(<([^>]+)>)/ig;
        return book.volumeInfo.description.replace(regex, '');
    }

    //when there is no data in reducer
    if(loading || !book) {
        return (
            <View style={styles.loadingContainer}>    
                <Spinner />
            </View>
        )
    }
    
    return (
        <Card>
           <View style={styles.imageContainer}>
            {
            book.volumeInfo.imageLinks ?
                <Image style={styles.image} source={{uri: book.volumeInfo.imageLinks.smallThumbnail}} />
            :
                <Image source={require('../../assets/img/no-boo-cover.jpg')} style={styles.image} />
            }

                <Text style={styles.titleStyle}>{book.volumeInfo.title}</Text>
                
                <View style={{flexDirection: 'row'}}>
                    {
                        book.volumeInfo.authors.map((author, i) => {
                            return (                           
                                <Text key={i} style={styles.txtStyle}>{author} </Text>
                            )
                        })
                    }
                </View>                
            </View>
            
            <CardSection>
                <ScrollView>
                    <View style={styles.bodyContainer}>
                        <View style={styles.boxStyle}>
                            <Text style={styles.boxTxt}>
                                <Icon name="book" size={20} />&nbsp;{book.volumeInfo.pageCount} pages
                            </Text>
                            <Text style={styles.boxTxt}>
                                <MIcon name="language" size={20} />&nbsp;{book.volumeInfo.language} language
                            </Text>
                        </View>

                        <View>
                            <Text style={styles.titleStyle}>Description</Text>               
                            <Text style={styles.boxTxt}>Pages: {getDescription()}</Text>                           
                        </View>
                    </View>
                </ScrollView>
            </CardSection>
        </Card>
    )
}

export default DetailScreen

const styles = StyleSheet.create({
    loadingContainer: {
        flex: 1,
        justifyContent: 'center',
    },
    imageContainer: {
        marginVertical: hp(5),
        alignItems: 'center',
    },
    bodyContainer: {
        padding: hp(2)
    },
    image: {
        width: wp(38),
        height: wp(38) * 1.3,
        borderRadius: hp(0.3),
        // elevation: 20
    },
    titleStyle: {
        fontFamily: 'Dosis-Bold',
        fontSize: hp(2.5),
        color: '#FFF',
        marginTop: hp(1.5)
    },
    txtStyle: {
        fontFamily: 'Dosis-Regular',
        fontSize: hp(1.5),
        color: '#FFF',
    },
    boxTxt: {
        fontFamily: 'Dosis-Regular',
        fontSize: hp(2),
        marginRight: hp(5),
        color: '#FFF'
    },
    // boxStyle: {
    //     flexDirection: 'row',
    //     marginTop: hp(2),
    // }
})
