import {View, Text, TextInput, Button, Alert, TouchableOpacity, StyleSheet} from 'react-native'
import {useState} from 'react'

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
            navigation.navigate('Home')
        } catch(error){
            alert('Email ou senha incorretos.')
            console.log(error)
        }
    }

    return(
        <View style={{alignItems: 'center', justifyContent: 'center'}}>
            <Text style={styles.text}>Login</Text>
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
                    <Text>Acessar conta</Text>
            </TouchableOpacity>
            <TouchableOpacity
            style={styles.button}
                onPress={()=>navigation.navigate('Cadastro')}>
                    <Text>Criar conta</Text>
            </TouchableOpacity>
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
        justifyContent: 'center'
      }, 
      text:{
        fontSize: 20, 
        fontWeight: 'bold'
      }
        
    })