import {View, Text, TouchableOpacity, StyleSheet} from 'react-native'
import { useNavigation } from '@react-navigation/native'
import {sair} from '../services/auth'


import { useFonts } from 'expo-font';
import { Manrope_400Regular, Manrope_500Medium, Manrope_600SemiBold, Manrope_700Bold } from '@expo-google-fonts/manrope';
//icones



export default function Perfil(){
    async function realizarLogout(){
        await sair();
        navigation.navigate('Login')
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
        <View style={styles.screen}>
                    <View style={styles.container}>
            <Text>Seja bem-vindo(a)</Text>
        </View>
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