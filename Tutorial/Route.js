import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { NotificationProvider } from './services/NotificationContext'

import Login from './Telas/Login'
import Cadastro from './Telas/Cadastro'
import Home from './Telas/Home'
import Perfil from './Telas/Perfil'
import Notification from './Telas/Notification'

import Ionicons from '@expo/vector-icons/Ionicons'
import FontAwesome5 from '@expo/vector-icons/FontAwesome5'

const Stack = createNativeStackNavigator()
const MyTabs = createBottomTabNavigator()

function BottomTabs(){
  return(
    //Rodapé - icones e nome
    <MyTabs.Navigator
      screenOptions={{
        tabBarActiveTintColor: '#d17b2c',
        tabBarInactiveTintColor: '#A4B5C4',
        tabBarShowLabel: false,
        tabBarStyle: {
          backgroundColor: '#ffffff',
          position: 'absolute',
          margin: 30,
          height: 70,
          borderRadius: 45,
          borderTopWidth: 0,
          elevation: 10,
          shadowColor: '#000',
          shadowOnset: { width: 0, height: 10 },
          shadowOpacity: 0.3,
          shadowRadius: 10,
        },
        tabBarIconStyle: {
          alignItems: 'center',
          justifyContent: 'center',
          width: '100%',
          height: '100%',
        },
      }}
    >
      <MyTabs.Screen
        name = 'Home'
        component={Home}
        options={{
        headerShown: false,
        tabBarIcon: ({ color}) =>
          (<Ionicons name="home-sharp" size={30} color={color} />)
        }}
      />
      <MyTabs.Screen
        name = 'Notification'
        component={Notification}
        options={{
        headerShown: false,
        tabBarIcon: ({ color }) =>
          (<Ionicons name="notifications" size={35} color={color} />)
        }}
      />
      <MyTabs.Screen
        name = 'Perfil'
        component={Perfil}
        options={{
        headerShown: false,
        tabBarIcon: ({ color}) =>
          (<FontAwesome5 name="user-alt" size={30} color={color} />)
        }}
      />
    </MyTabs.Navigator>
  )
}

export default function App(){
  return(
    <NotificationProvider>
      <Stack.Navigator>
        <Stack.Screen
          name='Login'
          component={Login}
          options={{
  headerShown: false
}}
        />
        <Stack.Screen
          name='Cadastro'
          component={Cadastro}
          options={{
  headerShown: false
}}
        />
        <Stack.Screen
        name="Principal"
        component={BottomTabs}
        options={{
  headerShown: false
}}
      />
      </Stack.Navigator>
      </NotificationProvider>
   
  )
}