import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { sair } from '../services/auth'
import { auth } from '../configuration/firebase'

import { useFonts } from 'expo-font';
import { Manrope_400Regular, Manrope_500Medium, Manrope_600SemiBold, Manrope_700Bold } from '@expo-google-fonts/manrope';
//icones
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import EvilIcons from '@expo/vector-icons/EvilIcons';
import Entypo from '@expo/vector-icons/Entypo';
import Feather from '@expo/vector-icons/Feather';



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
        <View style={styles.screen}>
            <View style={[styles.container, { marginTop: 50 }]}>
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
            {/* Telefone*/}
            <View style={styles.container}>
                <View style={styles.boxAdress}>
                    <View style={styles.columnsRow}>
                        {/* Icone */}
                        <View style={{ paddingRight: 23, paddingLeft: 10 }}>
                            <Image
                                source={require('../assets/petshop2.jpg')}
                                style={styles.image2}
                            />
                        </View>
                        {/* Texto */}
                        <View>
                            <Text style={styles.textInformation}> Telefone de recuperação</Text>
                            <Text style={styles.textInformation2}>(11) 91234-5678</Text>
                        </View>
                    </View>
                </View>
            </View>
            <TouchableOpacity
                onPress={realizarLogout}
            >
                <Text>Sair</Text>
            </TouchableOpacity>

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
        width: '70%'
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
    columnsRow: {
        flexDirection: 'row',
        width: '100%',
        alignItems: 'center'
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
})