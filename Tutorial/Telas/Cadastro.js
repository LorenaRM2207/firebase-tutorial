import {View, Text, TextInput, Image, Button, Alert, StyleSheet, Style, TouchableOpacity} from 'react-native'
import {useState} from 'react'

import { cadastrar } from '../services/auth'

export default function Cadastro({navigation}){
    const [email,setEmail] = useState('')
    const [senha, setSenha] = useState('')

    async function realizarCadastro(){
        if(!email || !senha){
            alert('Preencha todos os campos.')
            return
        }

        try {
            await cadastrar(email, senha)
            alert('Usuário cadastrado!')
            navigation.navigate('Login')
        } catch(error){
            alert('Não foi possível cadastrar o usuário.')
            console.log(error)
        }
    }

    return(
        
        <View style={styles.screen}>
                     <View style={{alignItems: 'center', justifyContent: 'center'}}>
                    <Text style={[styles.text, {marginTop:100}]}>Cadastro </Text>
                    <Image 
                  source={require('../assets/gato.png')}
                  style={styles.image}
                />
                <Text style={styles.text2}>Crie sua conta e participe da nossa comunidade!</Text>
         
            
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
                onPress={realizarCadastro}>
                    <Text>Cadastrar</Text>
            </TouchableOpacity>
            <TouchableOpacity
            style={styles.button}
                onPress={()=>navigation.navigate('Login')}>
                    <Text>Já tenho conta</Text>
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
      screen: {
    flex: 1,
    backgroundColor: '#e6ddc4',
  }, 
  image: {
    width: 130, 
    height: 160, 
    marginTop: 30,
    margin: 10
  },

})