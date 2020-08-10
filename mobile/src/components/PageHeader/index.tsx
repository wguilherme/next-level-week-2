import React from 'react';
import { View, Image, Text } from 'react-native';
import { BorderlessButton } from 'react-native-gesture-handler';

//assets
import backIcon from '../../assets/images/icons/back.png'
import logoImg from '../../assets/images/logo.png'

import styles from './style'


function PageHeader() {

   function handleGoBack() {

   }
   return (
      <View style={styles.container}>
         <View style={styles.topBar}>
            <BorderlessButton >
               <Image source={backIcon} resizeMode="contain" />

            </BorderlessButton>

            <Image source={logoImg} resizeMode="contain" />

         </View>

         <Text style={styles.title}>Proffys disponíveis</Text>

      </View>
   )
}

export default PageHeader;