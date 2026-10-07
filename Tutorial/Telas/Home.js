import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { auth } from '../configuration/firebase'

import { useFonts } from 'expo-font';
import { Manrope_400Regular, Manrope_500Medium, Manrope_600SemiBold, Manrope_700Bold } from '@expo-google-fonts/manrope';
//icones
import Feather from '@expo/vector-icons/Feather'
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons'
import Entypo from '@expo/vector-icons/Entypo'
import AntDesign from '@expo/vector-icons/AntDesign'
import Fontisto from '@expo/vector-icons/Fontisto'



export default function Home() {
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
  return (
    <View style={styles.screen}>
      

      <View style={[styles.container, { marginTop: 30 }]}>
        <Image
          source={require('../assets/cachorro2.png')}
          style={styles.image3}
        />
        <Text style={styles.title}>Seja bem-vindo(a) {auth.currentUser?.email}</Text>
      </View>
      <View style={styles.container}>
        <Image
          source={require('../assets/petshop.jpg')}
          style={styles.image}
        />
      </View>
      <View style={styles.container}>
        <Text style={styles.text}>Conheça nossas unidades e venha comprar conosco as melhores rações e brinquedos para seus pets.
          Gostariamos que se sintam a vontade dentro de nossas lojas e aproveitem os melhores preços da região
        </Text>
      </View>
      {/* Local 1*/}
      <View style={styles.container}>
        <View style={styles.boxAdress}>
          <View style={styles.columnsRow}>
            {/* Icone */}
            <View style={{ paddingRight: 5, paddingLeft: 3 }}>
              <Image
                source={require('../assets/petshop2.jpg')}
                style={styles.image2}
              />
            </View>
            {/* Texto */}
            <View>
              <Text style={styles.text}> Endereço:</Text>
              <Text style={styles.text}>R. Passos Ourique, 107</Text>
            </View>
          </View>
        </View>
      </View>
      {/* Opções 1-2 */}
       <View style={[styles.container, {flexDirection:'row'}]}>
        <View style={styles.box}>
          <View style={[styles.columnsRow,{justifyContent:'center'}]}>
            {/* Icone */}
            <View style={{ paddingRight: 5, paddingLeft: 3 }}>
              <MaterialCommunityIcons name="shower" size={24} color='#136a80' />
            </View>
            {/* Texto */}
            <View>
              <Text style={styles.title2}> Banho</Text>
            </View>
          </View>
        </View>
        <View style={styles.box}>
          <View style={[styles.columnsRow,{justifyContent:'center'}]}>
            {/* Icone */}
            <View style={{ paddingRight: 2, paddingLeft: 2 }}>
              <Entypo name="scissors" size={24} color='#136a80' />
            </View>
            {/* Texto */}
            <View>
              <Text style={styles.title2}> Tosa</Text>
            </View>
          </View>
        </View>
      </View>
       {/* Opções 3-4 */}
      <View style={[styles.container, {flexDirection:'row'}]}>
        <View style={styles.box}>
          <View style={[styles.columnsRow,{justifyContent:'center'}]}>
            {/* Icone */}
            <View style={{ paddingRight: 5, paddingLeft: 3 }}>
              <AntDesign name="clock-circle" size={24} color='#136a80' />
            </View>
            {/* Texto */}
            <View>
              <Text style={styles.title2}>Agendamneto</Text>
            </View>
          </View>
        </View>
        <View style={styles.box}>
          <View style={[styles.columnsRow,{justifyContent:'center'}]}>
            {/* Icone */}
            <View style={{ paddingRight: 2, paddingLeft: 2 }}>
              <Fontisto name="shopping-bag-1" size={24} color='#136a80' />
            </View>
            {/* Texto */}
            <View>
              <Text style={styles.title2}> Compre</Text>
            </View>
          </View>
        </View>
      </View>
      

    </View>
  )
}
const styles = StyleSheet.create({
  text: {
    fontFamily: 'Manrope',
    textAlign: 'justify',
    width: '90%',
    lineHeight: 20
  },
  screen: {
    flex: 1,
    backgroundColor: '#e6ddc4',
  },
  container: {
    alignItems: 'center',
    justifyContent: 'center'
  },
  title: {
    fontSize: 20,
    fontFamily: 'ManropeBold',
    color: '#d17b2c',
    textAlign: 'center',
    width: '90%'
  },
  title2: {
    fontSize: 20,
    fontFamily: 'ManropeBold',
    color: '#136a80',
    textAlign: 'center',
  },
  image: {
    width: '90%',
    height: 260,
    borderRadius: 20,
    margin: 10
  },
  image2: {
    width: 90,
    height: 60,
    borderRadius: 10,
    margin: 10
  },
  image3: {
    width: 170,
    height: 90,
    margin: 10
  },
  columnsRow: {
    flexDirection: 'row',
    width: '100%',
    alignItems: 'center', 
  },
  boxAdress: {
    backgroundColor: '#dfb38a',
    width: '90%',
    height: 80,
    borderRadius: 15,
    alignItems: 'center',
    margin: 10,
    justifyContent: 'center',

  },
  box: {
    backgroundColor: '#1ea2b98e',
    width: '42%',
    height: 80,
    borderRadius: 15,
    alignItems: 'center',
    margin: 10,
    justifyContent: 'center',

  },
})