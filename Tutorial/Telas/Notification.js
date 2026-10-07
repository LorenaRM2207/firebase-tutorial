import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native'
import { Ionicons } from '@expo/vector-icons'
import { StatusBar } from 'expo-status-bar'
import { useFonts } from 'expo-font'
import {
  Manrope_400Regular,
  Manrope_500Medium,
  Manrope_600SemiBold,
  Manrope_700Bold,
} from '@expo-google-fonts/manrope'
import { useNotificacoes, TIPOS } from '../services/NotificationContext'

export default function Notification() {
  const { lista, limpar } = useNotificacoes()

  const [fontsLoaded] = useFonts({
    Manrope: Manrope_400Regular,
    ManropeMedium: Manrope_500Medium,
    ManropeSemiBold: Manrope_600SemiBold,
    ManropeBold: Manrope_700Bold,
  })

  if (!fontsLoaded) return null

  const formatarHora = (d) =>
    d.toLocaleString('pt-BR', { day: '2-digit', month: '2-digit', hour: '2-digit', minute: '2-digit' })

  const renderItem = ({ item }) => (
    <View style={styles.card}>
      <View style={styles.iconeBox}>
        <Ionicons name={TIPOS[item.tipo]?.icone ?? 'notifications-outline'} size={24} color="#c07a2b" />
      </View>
      <View style={styles.textos}>
        <Text style={styles.tipo}>{TIPOS[item.tipo]?.label ?? 'Notificação'}</Text>
        <Text style={styles.titulo}>{item.titulo}</Text>
        <Text style={styles.corpo}>{item.corpo}</Text>
      </View>
      <Text style={styles.hora}>{formatarHora(item.data)}</Text>
    </View>
  )

  return (
    <View style={styles.screen}>
      <StatusBar style="auto" />

      <View style={styles.header}>
        <Text style={styles.headerTitulo}>Notificações</Text>
        {lista.length > 0 && (
          <TouchableOpacity onPress={limpar}>
            <Text style={styles.limpar}>Limpar</Text>
          </TouchableOpacity>
        )}
      </View>

      <FlatList
        data={lista}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        contentContainerStyle={styles.listaConteudo}
        ListEmptyComponent={
          <View style={styles.vazio}>
            <Ionicons name="notifications-off-outline" size={48} color="#c07a2b" />
            <Text style={styles.vazioTexto}>Nenhuma notificação por enquanto</Text>
          </View>
        }
      />
    </View>
  )
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: '#e6ddc4',
    paddingTop: 50,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    marginBottom: 16,
  },
  headerTitulo: {
    fontFamily: 'ManropeBold',
    fontSize: 22,
    color: '#3a2a17',
  },
  limpar: {
    fontFamily: 'ManropeSemiBold',
    fontSize: 14,
    color: '#c07a2b',
  },
  listaConteudo: {
    paddingHorizontal: 16,
    paddingBottom: 120, 
    gap: 12,
  },
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#e2b68c',
    borderRadius: 20,
    padding: 16,
    gap: 12,
  },
  iconeBox: {
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: '#f0d9bf',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textos: {
    flex: 1,
  },
  tipo: {
    fontFamily: 'ManropeSemiBold',
    fontSize: 11,
    color: '#8a5517',
    textTransform: 'uppercase',
  },
  titulo: {
    fontFamily: 'ManropeBold',
    fontSize: 15,
    color: '#3a2a17',
    marginTop: 2,
  },
  corpo: {
    fontFamily: 'Manrope',
    fontSize: 13,
    color: '#4d3a24',
    marginTop: 2,
  },
  hora: {
    fontFamily: 'ManropeMedium',
    fontSize: 11,
    color: '#6b5336',
    alignSelf: 'flex-start',
  },
  vazio: {
    alignItems: 'center',
    marginTop: 80,
    gap: 12,
  },
  vazioTexto: {
    fontFamily: 'ManropeMedium',
    fontSize: 14,
    color: '#6b5336',
  },
})