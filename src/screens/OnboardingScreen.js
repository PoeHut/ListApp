import React from 'react'
import Onboarding from 'react-native-onboarding-swiper';
import { StyleSheet, Image } from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

const OnboardingScreen = ({navigation}) => {

    const completeOnboarding = () => {
        AsyncStorage.setItem('DoneOnboarding', "true")
        navigation.replace("Main")
    }

    return (
        <Onboarding
            onSkip = {completeOnboarding}
            onDone = {completeOnboarding}
            pages={[
               {
                    backgroundColor: '#F4F6F6',                   
                    image: <Image source={require('../../assets/img/easy-to-use.png')} style={styles.imageStyle} />,
                    title: 'Easy To Use',
                    subtitle: 'Done with React Native Onboarding Swiper',
                },
                {
                    backgroundColor: '#fff',
                    image: <Image source={require('../../assets/img/enjoy.jpg')} style={styles.imageStyle} />,
                    title: 'Enjoy',
                    subtitle: 'Done with React Native Onboarding Swiper',
                },
                {
                    backgroundColor: '#fff',
                    image: <Image source={require('../../assets/img/no_ads.png')} style={styles.imageStyle} />,
                    title: 'AD Free',
                    subtitle: 'Done with React Native Onboarding Swiper',
                },
            ]}
        />
    )
}

export default OnboardingScreen

const styles = StyleSheet.create({
    imageStyle: {
        width: wp(100),
        height: wp(100)
    }
})
