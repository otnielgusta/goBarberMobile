import { useState } from "react";
import { Text, View, StyleSheet, TextInput, ToastAndroid, TouchableOpacity, Image, StatusBar, Alert } from "react-native"
import ButtonConfirm from "../components/button_entrar_cadastrar";
import {cadastro} from '../controllers/cliente_controller';

export default function Cadastro({ navigation }) {
    const [nome, setNome] = useState("");
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");
    
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
                <Text style={styles.title}>Crie sua conta</Text>
            </View>
            <View style={styles.inputs}>
                <View style={styles.inputContainer}>
                    <Image
                        style={styles.icon}
                        source={require('../../assets/icons/Nome.png')}
                    />
                    <TextInput
                        style={styles.input}
                        placeholder="Nome"
                        placeholderTextColor='#666360'
                        value={nome}
                        onChangeText={(val)=>{
                            setNome(val);
                        }}

                    />
                </View>

                <View style={{ height: 10 }}>
                </View>

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
                        onChangeText={(val)=>{
                            setEmail(val);
                        }}

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
                        onChangeText={(val)=>{
                            setSenha(val);
                        }}
                    />
                </View>
            </View>
            <ButtonConfirm
                texto="Cadastrar" 
                onPress={async() => {
                    const response = await cadastro(nome, email, senha);
                    console.log(response);
                    if (response.status == 201) {
                        navigation.navigate("ConfirmaCadastro");
                    }else if(response.status == 401){
                        Alert.alert("Erro",response.msg)

                    }else if(response.status == 409){
                        Alert.alert("Erro",response.msg)

                    }
                }} />
            
            <View style={styles.footer}>
                <View style={styles.containerFooter} >
                    <TouchableOpacity
                        style={styles.containerFooter}
                        onPress={() => {
                            navigation.pop();
                        }}
                    >
                        <Image
                            style={styles.criar}
                            source={require('../../assets/icons/Voltar.png')}
                        />
                        <View style={{ width: 20 }}>

                        </View>
                        <Text style={styles.voltar}>
                            Voltar para o login
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
        fontFamily: "RobotoSlab_500Medium",
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
        width: 206,
        height: 120
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
    voltar: {
        fontFamily: 'RobotoSlab_400Regular',
        fontStyle: "normal",
        fontSize: 14,
        lineHeight: 18,
        textAlign: 'center',
        color: "#F4EDE8",
    }
});