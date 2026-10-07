import { View, StyleSheet, TouchableOpacity, Text, Image } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { sair } from '../services/auth'
//fonte de aplicativo
import { useFonts } from 'expo-font'
import { Manrope_400Regular, Manrope_500Medium, Manrope_600SemiBold, Manrope_700Bold } from '@expo-google-fonts/manrope'
//icones
import FontAwesome6 from '@expo/vector-icons/FontAwesome6'
import FontAwesome5 from '@expo/vector-icons/FontAwesome5'
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons'
import MaterialIcons from '@expo/vector-icons/MaterialIcons'




export default function Home() {
  async function realizarLogout() {
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
  return (
    //View principal
    <View style={styles.screen}>
      {/* Usuário */}
      <View style={styles.containerImage}>
        <Image
          source={require('../assets/cachorro.png')}
          style={styles.image}
        />
        <FontAwesome6 name="pen-to-square" size={24} color="black" />
      </View>
      <View style={styles.container}>
        <Text style={styles.textUser}>Zefir</Text>
        <Text style={styles.textEmail}>zefir.sensor@gmail.com</Text>
      </View>
      {/* Box Informações pessoais*/}
      <View style={styles.container}>
        <View style={styles.boxRooms}>
          <View style={styles.columnsRow}>
            {/* Icone */}
            <View>
              <FontAwesome5 name="user" size={30} color="#af6826" />
            </View>
            {/* Texto */}
            <View>
              <Text style={styles.textTitle}>Informações pessoais</Text>
              <Text style={styles.textEmail}>Nome, e-mail, telefone</Text>
            </View>
          </View>
        </View>
      </View>
      {/* Segurança e login*/}
      <View style={styles.container}>
        <View style={styles.boxRooms}>
          <View style={styles.columnsRow}>
            {/* Icone */}
            <View>
              <MaterialCommunityIcons name="cloud-lock-outline" size={35} color="#af6826" />
            </View>
            {/* Texto */}
            <View>
              <Text style={styles.textTitle}>Segurança e login</Text>
              <Text style={styles.textEmail}>Dispositivos, senha</Text>
            </View>
          </View>
        </View>
      </View>
      {/* Box Carteira*/}
      <View style={styles.container}>
        <View style={styles.boxRooms}>
          <View style={styles.columnsRow}>
            {/* Icone */}
            <View>
              <MaterialIcons name="payment" size={35} color="#af6826" />
            </View>
            {/* Texto */}
            <View>
              <Text style={styles.textTitle}>Carteira</Text>
              <Text style={styles.textEmail}>Transações e pagamento</Text>
            </View>
          </View>
        </View>
      </View>
       <View style={styles.container }>
      <TouchableOpacity 
      onPress={realizarLogout}
      style={{ flexDirection:'row', paddingHorizontal: 70, marginTop: 20, justifyContent:'center', alignItems:'center' }}
      >
        <MaterialCommunityIcons name="location-exit" size={24} color="red" />
        <Text style={styles.logout}>Sair</Text>
      </TouchableOpacity>
      </View>








    </View>
  )
}

const styles = StyleSheet.create({
  //Geral
  screen: {
    flex: 1,
    backgroundColor: '#e6ddc4',
  },
  //alinhamento
  containerImage: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'baseline',
  },
  container: {
    alignItems: 'center',

  },
  //Cabeçalho
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '90%',
    justifyContent: 'center',
    marginTop: 50, 
    paddingHorizontal: 10
  },
  textHeader: {
    fontFamily: 'ManropeBold',
    fontSize: 30,
    letterSpacing: 1,
    lineHeight: 20,
    color: '#0F0F0F',
    marginHorizontal: 90
  },
  imageHeader: {
    width: 50,
    height: 50,
  },
  //Caixas de informações
  boxRooms: {
    backgroundColor: '#dfb38a',
    width: '90%',
    height: 90,
    borderRadius: 30,
    alignItems: 'center',
    paddingLeft: 20,
    paddingRight: 10,
    margin: 10,
    justifyContent: 'center'
  },
  columnsRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    width: '100%',
    paddingRight: 70
  },
  //User
  image: {
    width: 120,
    height: 140,
    borderRadius: 20,
    marginTop: 150, 
  },
  textUser: {
    fontFamily: 'ManropeBold',
    fontSize: 20,
    letterSpacing: 1,
    lineHeight: 20,
    color: '#0F0F0F',
    marginTop: 20, 
  },
  textTitle: {
    fontTitle: 'Manrope',
    fontSize: 20,
    letterSpacing: 1,
    lineHeight: 20,
    color: '#0F0F0F',
  },
  textEmail: {
    fontFamily: 'Manrope',
    fontSize: 17,
    letterSpacing: 1,
    lineHeight: 20,
    color: '#0F0F0F'
  },
  logout:{
    fontFamily:'ManrolpBold',
    fontSize:20, 
    margin:10, 
    color:'red'
  }
})