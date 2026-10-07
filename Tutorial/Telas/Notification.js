import {View, Text, TouchableOpacity, StyleSheet, Button, Platform, Alert} from 'react-native'
import { useNavigation } from '@react-navigation/native'
import {StatusBar} from 'expo-status-bar'
import * as Notifications from 'expo-notifications'
import {useEffect} from 'react'

import { useFonts } from 'expo-font'
import { Manrope_400Regular, Manrope_500Medium, Manrope_600SemiBold, Manrope_700Bold } from '@expo-google-fonts/manrope';
//icones


Notifications.setNotificationHandler({
  handleNotification: async ()=>({
    shouldShowBanner: true,
    //puxa em cima da tela a notificação 
    shouldPlaySound:false,
    //sonzinho
    shouldSetBadge:false
    //bolinha em volta do aplicativo 
  })
})
export default function Notification(){
useEffect(()=>{
  if (Platform.OS === 'web') return
    (async ()=>{
      //requisição de permição
      const {status} = await Notifications.requestPermissionsAsync()
      if(status !== 'granted'){
        //!= diferente !== caso seja outro tipo 
        Alert.alert('Permição negada.')
      }
    })()
  },[])

  const triggerNotification = async ()=>{
     if (Platform.OS === 'web') {
    Alert.alert('Notificações locais não funcionam na web. Teste no celular.')
    return
  }
    
    const {status} = await Notifications.getPermissionsAsync()
    if (status !== 'granted'){
      Alert.alert('Permissão negada.')
      return
    }
    await Notifications.scheduleNotificationAsync({
        //conteudo da notificação      
        content:{
          title:'Hello World',
          body:'Sou uma excelente programadora'
        },
        //gatilho para a notificação 
        trigger: {
          type: Notifications.SchedulableTriggerInputTypes.TIME_INTERVAL, seconds: 2
        }
    })

  }


    const [fontsLoaded] = useFonts({
    Manrope: Manrope_400Regular,
    ManropeMedium: Manrope_500Medium,
    ManropeSemiBold: Manrope_600SemiBold,
    ManropeBold: Manrope_700Bold,
  })

  if (!fontsLoaded) {
    return null
  }
  const navigation = useNavigation()
    return(
        <View style={styles.container}>
        <Text>Exemplo de App com notificação </Text>
        <StatusBar style='auto'/>
        <Button
          title='Aperte aqui'
          onPress={triggerNotification}
        />
      </View>
    )
}
const styles = StyleSheet.create({
    text1:{
        fontFamily: 'Manrope'
    },
    screen: {
    flex: 1,
    backgroundColor: '#e6ddc4',
  },
  container:{
    alignItems: 'center', 
    justifyContent: 'center'
  }
})