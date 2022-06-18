import { StatusBar } from "expo-status-bar";
import { Text, View, StyleSheet, FlatList, Image, ScrollView, TouchableOpacity, TextInput } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import EspacadorVertical from "../components/espacador_vertical";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useEffect, useState } from "react";

export default function Perfil({ navigation }) {
    const [user, setUser] = useState({});
    const [atualizar, setAtualizar] = useState(false);
    const [nome, setNome] = useState({});
    const [email, setEmail] = useState({});

    const Buscar = async (chave)=>{
        const valor = await AsyncStorage.getItem(chave);
        let usuario = JSON.parse(valor);
        setUser(usuario);
        setNome(usuario.nome);
        setEmail(usuario.email);
        console.log(usuario);
    }    
    useEffect(()=>{
        Buscar('cliente');
    },[atualizar])
    return (
        <SafeAreaView style={styles.container}>
            <StatusBar
                backgroundColor="#312E38"
            />
            <View style={styles.header}>
                <TouchableOpacity
                    onPress={() => {
                        navigation.pop();
                    }}
                >
                    <Image

                        style={styles.voltar}
                        source={require('../../assets/icons/VoltarPop.png')}
                    />
                </TouchableOpacity>
                <Text style={styles.title}>Meu Perfil</Text>
                <TouchableOpacity
                    onPress={() => {
                        navigation.navigate("Login");
                    }}
                >
                    <Image
                        style={styles.sair}
                        source={require('../../assets/icons/Sair.png')}
                    />
                </TouchableOpacity>

            </View>
            <ScrollView>
                <View style={styles.corpo}>
                    <View style={styles.fotoESelecionar}>
                        <Image
                            style={styles.foto}
                            source={{ uri: user.foto }}
                        />
                        <TouchableOpacity>

                            <View style={styles.viewCamera}>
                                <Image
                                    style={styles.camera}
                                    source={require('../../assets/icons/Camera.png')}
                                />
                            </View>
                        </TouchableOpacity>


                    </View>
                    <View style={styles.form}>
                        <View style={styles.nomeEmailInput}>
                            <View style={styles.inputContainer}>

                                <Image
                                    style={styles.icon}
                                    source={require('../../assets/icons/Nome.png')}
                                />
                                <TextInput
                                    placeholder="Nome"
                                    placeholderTextColor='#666360'
                                    value={nome}
                                    onChangeText={setNome}
                                    style={styles.input}
                                />
                            </View>
                            <EspacadorVertical altura={8} />
                            <View style={styles.inputContainer}>
                                <Image
                                    style={styles.icon}
                                    source={require('../../assets/icons/E-mail.png')}
                                />
                                <TextInput
                                    placeholder="Email"
                                    placeholderTextColor='#666360'
                                    value={email}
                                    onChangeText={setEmail}
                                    style={styles.input}
                                />
                            </View>
                        </View>

                        <View style={styles.inputContainer}>
                            <Image
                                style={styles.icon}
                                source={require('../../assets/icons/Senha.png')}
                            />
                            <TextInput
                                secureTextEntry={true}
                                placeholder="Senha atual"
                                placeholderTextColor='#666360'

                                style={styles.input}
                            />
                        </View>
                        <EspacadorVertical altura={8} />

                        <View style={styles.inputContainer}>
                            <Image
                                style={styles.icon}
                                source={require('../../assets/icons/Senha.png')}
                            />
                            <TextInput
                                secureTextEntry={true}
                                placeholder="Nova senha"
                                placeholderTextColor='#666360'

                                style={styles.input}
                            />
                        </View>
                        <EspacadorVertical altura={8} />

                        <View style={styles.inputContainer}>
                            <Image
                                style={styles.icon}
                                source={require('../../assets/icons/Senha.png')}
                            />
                            <TextInput
                                secureTextEntry={true}
                                placeholder="Confirmar senha"
                                placeholderTextColor='#666360'

                                style={styles.input}
                            />
                        </View>
                        <TouchableOpacity
                            style={styles.botao}
                            onPress={() => {
                                navigation.pop();

                            }}
                        ><Text style={styles.textoBotao}>Confirmar mudanças</Text></TouchableOpacity>
                    </View>
                </View>
            </ScrollView>


        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#312E38'
    },
    header: {
        width: '100%',
        height: 100,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingLeft: 24,
        paddingRight: 24,
    },
    voltar: {
        width: 32,
        height: 32
    },
    sair: {
        width: 24,
        height: 24,
    },
    corpo: {
        flex: 1,
        alignItems: 'center'
    },
    fotoESelecionar: {
        display: 'flex',
        justifyContent: 'center'
    },
    foto: {
        width: 186,
        height: 186,
        borderRadius: 100
    },
    viewCamera: {
        padding: 16,
        backgroundColor: '#FF9000',
        borderRadius: 100,
        position: 'absolute',
        right: 0,
        bottom: 0,

    },
    camera: {
        width: 20,
        height: 20
    },
    title: {
        fontFamily: 'RobotoSlab_500Medium',
        fontStyle: 'normal',
        fontSize: 20,
        lineHeight: 28,
        color: '#F4EDE8',
    },
    form: {
        marginTop: 32,
    },
    nomeEmailInput: {
        marginBottom: 32
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
        fontFamily: 'RobotoSlab_400Regular',
        color: '#666360',
        fontSize: 16,
        lineHeight: 21,
        color: '#F4EDE8'
    },
    icon: {
        width: 20,
        height: 18
    },
    botao: {
        display: 'flex',
        justifyContent: 'center',
        backgroundColor: "#FF9000",
        marginTop: 72,
        marginBottom: 40,
        height: 56,
        borderRadius: 10
    },
    textoBotao: {
        fontFamily: 'RobotoSlab_500Medium',
        fontStyle: "normal",
        fontSize: 16,
        lineHeight: 21,
        textAlign: "center",
        color: "#312E38"

    },
})