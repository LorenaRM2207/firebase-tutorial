import {View, Text, TextInput, Button,Image, Alert, TouchableOpacity, StyleSheet} from 'react-native'
import {useState} from 'react'
import { useFonts } from 'expo-font';
import { Manrope_400Regular, Manrope_500Medium, Manrope_600SemiBold, Manrope_700Bold } from '@expo-google-fonts/manrope';
import {entrar} from '../services/auth'

export default function Login({navigation}){
    const [email, setEmail] = useState('')
    const [senha, setSenha] = useState('')

    async function realizarLogin(){
        if(!email || !senha){
            alert('Preencha todos os campos.')
            return
        }

        try {
            await entrar(email, senha)
            navigation.navigate('Principal')
        } catch(error){
            alert('Email ou senha incorretos.')
            console.log(error)
        }
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

    return(
        <View style={styles.screen}>
        <View style={{alignItems: 'center', justifyContent: 'center'}}>
            <Text style={[styles.text, {marginTop:100}]}>Login</Text>
            <Image 
          source={require('../assets/cachorro.png')}
          style={styles.image}
        />
        <Text style={styles.text2}>Entre em nosso app e conheça nosso PetShop</Text>
            
            <TextInput
            style={styles.Information}
                placeholder='email'
                value={email}
                onChangeText={setEmail}
                keyboardType='email-address'
                autoCapitalize='none'
            />
            <TextInput
            style={styles.Information}
                placeholder='senha'
                value={senha}
                onChangeText={setSenha}
                secureTextEntry
            />
            
           <TouchableOpacity
           style={styles.button}
                onPress={realizarLogin}>
                    <Text style={styles.text3}>Acessar conta</Text>
            </TouchableOpacity>
            <Text style={styles.text3} >Ou crie sua conta já</Text>
            <TouchableOpacity
            style={styles.button}
                onPress={()=>navigation.navigate('Cadastro')}>
                    <Text style={styles.text3}>Criar </Text>
            </TouchableOpacity>
            </View>
        
        </View>
    )
}
const styles = StyleSheet.create({
    Information:{
        backgroundColor: 'white', 
        borderRadius: 5,
        margin:10,
        padding: 8,
        width: '90%'
      }, 
      button:{
        backgroundColor: 'lightblue', 
        width: '50%',
        height: 40, 
        padding: 10, 
        margin: 10, 
        alignItems: 'center', 
        justifyContent: 'center', 
        borderRadius: 10
      }, 
      text:{
        fontSize: 25, 
        fontFamily: 'ManropeBold'
      }, 
      text2:{
        fontSize: 20, 
        fontFamily: 'ManropeBold', 
        color: '#d17b2c', 
        textAlign:'center', 
        width: '70%'
      },
      text3:{
        fontSize: 15, 
        fontFamily: 'Manrope',  
        textAlign:'center', 
      },
      screen: {
    flex: 1,
    backgroundColor: '#e6ddc4',
  }, 
  image: {
    width: 120, 
    height: 140, 
    marginTop: 30,
    margin: 10
  },

    
        
    })