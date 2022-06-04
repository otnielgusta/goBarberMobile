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


const Stack = createStackNavigator();

export default function App() {
  const foto = 'https://lh3.googleusercontent.com/bFytQbnUQXsph4pscbna6XyONqWofZc-uOPynCfgo6rbHrS815BxVMqPEHejHohA4-cMi8fI11mDwUJbhNQx=w2390-h955'

  const [cabelereiros, setCabelereiros] = useState([{
    id: 1,
    nome: "Otniel Silva",
    foto: foto,
    datas: "Segunda à Sexta",
    horarios: "8h às 18:h"
  }, {
    id: 2,
    nome: "Otniel Silva",
    foto: foto,
    datas: "Segunda à Sexta",
    horarios: "8h às 18:h"
  }, {
    id: 3,
    nome: "Otniel Silva",
    foto: foto,
    datas: "Segunda à Sexta",
    horarios: "8h às 18:h"
  },
  {
    id: 4,
    nome: "Otniel Silva",
    foto: foto,
    datas: "Segunda à Sexta",
    horarios: "8h às 18:h"
  }, {
    id: 5,
    nome: "Otniel Silva",
    foto: foto,
    datas: "Segunda à Sexta",
    horarios: "8h às 18:h"
  }, {
    id: 6,
    nome: "Otniel Silva",
    foto: foto,
    datas: "Segunda à Sexta",
    horarios: "8h às 18:h"
  },
  {
    id: 7,
    nome: "Otniel Silva",
    foto: foto,
    datas: "Segunda à Sexta",
    horarios: "8h às 18:h"
  }, {
    id: 8,
    nome: "Otniel Silva",
    foto: foto,
    datas: "Segunda à Sexta",
    horarios: "8h às 18:h"
  }, {
    id: 9,
    nome: "Otniel Silva",
    foto: foto,
    datas: "Segunda à Sexta",
    horarios: "8h às 18:h"
  },
  ]);

  const [index, setIndex] = useState(0);
  const [horarios, setHorarios] = useState({
    manha: ['09:00', '11:30', '12:00'],
    tarde: ['12:00', '13:30', '14:00', '15:00', '17:30'],
    noite: ['19:00', '19:30'],
})

  const [selectedHoraDia, setSelectedHoraDia] = useState(0);
  const [selectedIndex, setSelectedIndex] = useState();

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
    <UserContext.Provider value={[cabelereiros, setCabelereiros, index, setIndex, horarios, setHorarios, selectedHoraDia, setSelectedHoraDia, selectedIndex, setSelectedIndex]}>

      <NavigationContainer>
        <Stack.Navigator
          initialRouteName='Splash'
          screenOptions={{ headerShown: false }}
        >
          <Stack.Screen
            name='Splash'
            component={SplashPage}

          />
          <Stack.Screen
            name='Teste'
            component={Teste}

          />
          <Stack.Screen
            name='Login'
            component={Login}

          />
          <Stack.Screen
            name='Cadastro'
            component={Cadastro}
          />
          <Stack.Screen
            name='ConfirmaCadastro'
            component={ConfirmaCadastro}
          />
          <Stack.Screen
            name='HomePage'
            component={HomePage}

          />
          <Stack.Screen
            name='Agendamento'
            component={Agendamento}

          />
          <Stack.Screen
            name='AgendamentoConcluido'
            component={AgendamenConcluido}

          />
          <Stack.Screen
            name='Perfil'
            component={Perfil}

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
