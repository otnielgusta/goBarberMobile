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
const Stack = createStackNavigator();

export default function App() {
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
        </Stack.Navigator>
      </NavigationContainer>
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
