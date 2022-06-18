import { useEffect, useState } from "react";
import { Text, View, StyleSheet, TextInput, TouchableOpacity, Image, StatusBar } from "react-native"
import ButtonConfirm from "../components/button_entrar_cadastrar";

import AsyncStorage from '@react-native-async-storage/async-storage';
import { login } from "../controllers/cliente_controller";

export default function Login({ navigation }) {

    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");
    
    const Armazenar = (chave, valor) =>{
        AsyncStorage.setItem(chave, valor);
    }

    async function getLogin() {
        const result = await login(email, senha);
        if (result.retorno == true) {
            Armazenar('cliente', JSON.stringify(result.data.user));
            Armazenar('token', JSON.stringify(result.data.token));
            navigation.navigate("HomePage");
        } else {
            alert("Login ou senha incorretos");

        }
    }

    return (
        <View style={styles.container}>
            <StatusBar
                backgroundColor="#312E38"
            />
            <View style={styles.containerLogo}>
                <Image
                    style={styles.logo}
                    source={require('../../assets/icons/Logo.png')}
                />
            </View>

            <View>
                <Text style={styles.title}>Faça seu login</Text>
            </View>
            <View style={styles.inputs}>

                <View style={styles.inputContainer}>
                    <Image
                        style={styles.icon}
                        source={require('../../assets/icons/E-mail.png')}
                    />
                    <TextInput
                        style={styles.input}
                        placeholder="E-mail"
                        placeholderTextColor='#666360'
                        value={email}
                        onChangeText={setEmail}
                    />
                </View>
                <View style={{ height: 10 }}>
                </View>
                <View style={styles.inputContainer}>
                    <Image
                        style={styles.icon}
                        source={require('../../assets/icons/Senha.png')}
                    />
                    <TextInput
                        secureTextEntry={true}
                        placeholder="Senha"
                        placeholderTextColor='#666360'
                        style={styles.input}
                        value={senha}
                        onChangeText={setSenha}
                    />
                </View>
            </View>
            <ButtonConfirm
                texto="Entrar"
                onPress={async () => {
                    await getLogin();
                }}
            />
            <View style={styles.containerEsqueceuSenha}>
                <Text style={styles.esqueceuSenha}
                    onPress={() => alert("apertou")}>
                    Esqueci minha senha
                </Text>
            </View>
            <View style={styles.footer}>
                <View style={styles.containerFooter} >
                    <TouchableOpacity
                        style={styles.containerFooter}
                        onPress={() => {
                            navigation.navigate("Cadastro");
                        }}
                    >
                        <Image
                            style={styles.criar}
                            source={require('../../assets/icons/Criar.png')}
                        />
                        <View style={{ width: 20 }}>

                        </View>
                        <Text style={styles.criarText}>
                            Criar uma conta
                        </Text>
                    </TouchableOpacity>

                </View>
            </View>

        </View>
    );

}

const styles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: '#312E38',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center'
    },
    inputs: {
        display: "flex",
        flexDirection: 'column',
        justifyContent: 'space-between'

    },
    inputContainer: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        height: 70,
        paddingLeft: 18,
        backgroundColor: "#232129",
        borderRadius: 10,
        width: 340,
        height: 56,
    },
    input: {
        marginLeft: 15,
        flex: 1,
        fontFamily: 'RobotoSlab_500Medium',
        color: '#666360',
        fontSize: 16,
        lineHeight: 21,
        color: '#666360'
    },
    title: {
        fontFamily: 'RobotoSlab_500Medium',
        color: "#F4EDE8",
        fontSize: 24,
        lineHeight: 32,
        textAlign: 'center',
        marginBottom: 24

    },
    icon: {
        width: 20,
        height: 18
    },
    containerLogo: {
        alignItems: 'center',
        marginBottom: 64,
    },
    logo: {
        height: 120
    },
    containerEsqueceuSenha: {
        marginTop: 24
    },
    esqueceuSenha: {
        fontFamily: 'RobotoSlab_400Regular',
        fontWeight: '400',
        fontStyle: "normal",
        fontSize: 14,
        lineHeight: 18,
        textAlign: "center",

        color: "#F4EDE8",
    },
    footer: {
        width: '100%',
        height: 60,
        position: 'absolute',
        bottom: 0,

    },
    containerFooter: {
        borderTopWidth: 1,
        borderTopColor: "#232129",
        width: '100%',
        height: '100%',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',

    },
    criar: {
        width: 20,
        height: 20,

    },
    criarText: {
        fontFamily: 'RobotoSlab_400Regular',
        fontStyle: "normal",
        fontSize: 14,
        lineHeight: 18,
        textAlign: 'center',

        color: "#FF9000",
    }
});