import React, { createContext, useContext, useEffect, useState, useCallback } from 'react'
import { Platform, Alert } from 'react-native'
import * as Notifications from 'expo-notifications'

Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowBanner: true,
    shouldShowList: true,
    shouldPlaySound: false,
    shouldSetBadge: false,
  }),
})

// Os 2 tipos de notificação do app (ajuste nomes, ícones e textos)
export const TIPOS = {
  agendamento: { label: 'Agendamento', titulo: 'Agendamento confirmado', icone: 'calendar-outline' },
  promocao: { label: 'Promoção', titulo: 'Promoção para o seu pet', icone: 'pricetag-outline' },
}

const NotificationContext = createContext(null)

export function NotificationProvider({ children }) {
  const [lista, setLista] = useState([])

  const adicionar = useCallback((item) => {
    setLista((prev) => (prev.some((n) => n.id === item.id) ? prev : [item, ...prev]))
  }, [])

  useEffect(() => {
    if (Platform.OS === 'web') return

    ;(async () => {
      const { status } = await Notifications.requestPermissionsAsync()
      if (status !== 'granted') Alert.alert('Permissão de notificação negada.')

      if (Platform.OS === 'android') {
        await Notifications.setNotificationChannelAsync('default', {
          name: 'default',
          importance: Notifications.AndroidImportance.MAX,
        })
      }
    })()

    // Toda notificação recebida entra na lista
    const sub = Notifications.addNotificationReceivedListener((n) => {
      const c = n.request.content
      adicionar({
        id: n.request.identifier,
        tipo: c.data?.tipo ?? 'agendamento',
        titulo: c.title,
        corpo: c.body,
        data: new Date(),
      })
    })

    return () => sub.remove()
  }, [adicionar])

  // Chame essa função de qualquer tela
  const enviar = async (tipo, corpo) => {
    const titulo = TIPOS[tipo]?.titulo ?? 'Notificação'

    // Na web não existe notificação nativa: só registra na lista para você ver o layout
    if (Platform.OS === 'web') {
      adicionar({ id: String(Date.now()), tipo, titulo, corpo, data: new Date() })
      return
    }

    const { status } = await Notifications.getPermissionsAsync()
    if (status !== 'granted') {
      Alert.alert('Permissão negada.')
      return
    }

    await Notifications.scheduleNotificationAsync({
      content: { title: titulo, body: corpo, data: { tipo } },
      trigger: {
        type: Notifications.SchedulableTriggerInputTypes.TIME_INTERVAL,
        seconds: 1,
      },
    })
  }

  const limpar = () => setLista([])

  return (
    <NotificationContext.Provider value={{ lista, enviar, limpar }}>
      {children}
    </NotificationContext.Provider>
  )
}

export const useNotificacoes = () => useContext(NotificationContext)