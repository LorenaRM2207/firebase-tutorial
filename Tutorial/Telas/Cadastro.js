import {View, Text, TextInput, Button, Alert, StyleSheet, Style, TouchableOpacity} from 'react-native'
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
        <View style={{alignItems: 'center', justifyContent: 'center'}}>
            <Text style={styles.text}>Cadastro</Text>
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
                onPress={()=>navigation.navigate('Cadastro')}>
                    <Text>Já tenho conta</Text>
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