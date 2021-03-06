import { NavigationContainer, StackActions } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack'
import { StyleSheet, Text, View, StatusBar } from 'react-native';
import Cadastro from './lib/cadastro/cadastro';
import ConfirmaCadastro from './lib/cad_concluido/cad_concluido';
import HomePage from './lib/home/home_page';
import Login from './lib/login/login';
import SplashPage from './lib/splash/splash_page';
import { RobotoSlab_400Regular, RobotoSlab_500Medium, RobotoSlab_600SemiBold, RobotoSlab_700Bold } from "@expo-google-fonts/roboto-slab";
import { useFonts } from 'expo-font';
import Teste from './lib/teste/teste';
import Agendamento from './lib/agendamento/agendamento';
import UserContext from './lib/context/context';
import { useState } from 'react'
import AgendamenConcluido from './lib/AgendamentoConcluido/agendamento_concluído';
import Perfil from './lib/perfil/perfil';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Stack = createStackNavigator();

export default function App() {
  const foto = 'https://lh3.googleusercontent.com/bFytQbnUQXsph4pscbna6XyONqWofZc-uOPynCfgo6rbHrS815BxVMqPEHejHohA4-cMi8fI11mDwUJbhNQx=w2390-h955'

  const [cabelereiros, setCabelereiros] = useState([]);
  const [index, setIndex] = useState(0);
  const [horarios, setHorarios] = useState({
    manha: ['09:00', '11:30', '12:00'],
    tarde: ['12:00', '13:30', '14:00', '15:00', '17:30'],
    noite: ['19:00', '19:30'],
})

  const [selectedHoraDia, setSelectedHoraDia] = useState({});
  const [selectedIndex, setSelectedIndex] = useState();
  const [dadosAgendados, setDadosAgendados] = useState({});
  const [asyncStorage, setAsyncStorage] = useState(AsyncStorage);

  const [fontsLoaded] = useFonts({
    RobotoSlab_400Regular,
    RobotoSlab_500Medium,
    RobotoSlab_600SemiBold,
    RobotoSlab_700Bold
  });
  if (!fontsLoaded) {
    return null
  }
  return (
    <UserContext.Provider value={[cabelereiros, setCabelereiros, index, setIndex, horarios, setHorarios, selectedHoraDia, setSelectedHoraDia, selectedIndex, setSelectedIndex, asyncStorage, setAsyncStorage, dadosAgendados, setDadosAgendados]}>

      <NavigationContainer>
        <Stack.Navigator
          initialRouteName='Splash'
          screenOptions={{ headerShown: false }}
        >
          <Stack.Screen
            name='Splash'
            component={SplashPage}
            options={{
              asyncStorage: AsyncStorage
            }}

          />
          <Stack.Screen
            name='Teste'
            component={Teste}
            options={{
              asyncStorage: AsyncStorage
            }}

          />
          <Stack.Screen
            name='Login'
            component={Login}
            options={{
              asyncStorage: AsyncStorage
            }}

          />
          <Stack.Screen
            name='Cadastro'
            component={Cadastro}
            options={{
              asyncStorage: AsyncStorage
            }}
          />
          <Stack.Screen
            name='ConfirmaCadastro'
            component={ConfirmaCadastro}
            options={{
              asyncStorage: AsyncStorage
            }}
          />
          <Stack.Screen
            name='HomePage'
            component={HomePage}
            options={{
              asyncStorage: AsyncStorage
            }}

          />
          <Stack.Screen
            name='Agendamento'
            component={Agendamento}
            options={{
              asyncStorage: AsyncStorage
            }}

          />
          <Stack.Screen
            name='AgendamentoConcluido'
            component={AgendamenConcluido}
            options={{
              asyncStorage: AsyncStorage
            }}

          />
          <Stack.Screen
            name='Perfil'
            component={Perfil}
            options={{
              asyncStorage: AsyncStorage
            }}

          />
        </Stack.Navigator>
      </NavigationContainer>
    </UserContext.Provider>

  );
}
//<View style={styles.container}>
//<Login />
//</View>
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#312E38',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
