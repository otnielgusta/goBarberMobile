import { StatusBar } from "expo-status-bar";
import { Text, View, StyleSheet, FlatList, Image, ScrollView, TouchableOpacity } from "react-native";
import { SafeAreaView } from 'react-native-safe-area-context'
import CardCabeleleiro from "../components/card_cabeleleiro";
import { useContext, useEffect, useState } from 'react'
import UserContext from "../context/context";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { listarCabelereiros } from "../controllers/cabelereiro_controller";

export default function HomePage({ navigation }) {
    const [cabelereiros, setCabelereiros, index, setIndex] = useContext(UserContext);
    const [user, setUser] = useState({});
    const [atualizaPagina, setAtualizaPagina] = useState(false);

    const Buscar = async (chave)=>{
        const valor = await AsyncStorage.getItem(chave);
        var user = JSON.parse(valor);
        setUser(user);
    }    
    const BuscarERetornar = async (chave)=>{
        const valor = await AsyncStorage.getItem(chave);
        var valorJson = JSON.parse(valor);
        return valorJson;
    }    

    Buscar("cliente");
    async function listarCab(){
        const token = await BuscarERetornar('token');
        listarCabelereiros(token, setCabelereiros);

    }

    useEffect(()=>{
        listarCab(user);
    }, [atualizaPagina]);

    return (
        <SafeAreaView
            style={{ flex: 1 }}
        >
            <StatusBar
                backgroundColor="#28262E"
            />
            <View style={styles.container}>
                <View style={styles.header}>
                    <View style={styles.headerLeft}>
                        <Text style={styles.headerBemVindo}>Bem vindo,</Text>
                        <Text style={styles.headerNome}>{user.nome}</Text>
                    </View>
                    <View style={styles.headerRight}>
                        <TouchableOpacity
                            onPress={() => {
                                navigation.navigate("Perfil");
                            }}
                        >
                            <Image
                                style={styles.headerFoto}
                                source={{ uri: user.foto }}
                            />
                        </TouchableOpacity>

                    </View>

                </View>
                <View style={styles.corpo}>
                    <Text style={styles.title}>Cabeleleiros</Text>
                    <View style={styles.corpoCabeleleiros}>
                        <FlatList
                            showsVerticalScrollIndicator={false}
                            style={styles.lista}
                            data={cabelereiros}
                            renderItem={(cabelereiro) => {
                                return <CardCabeleleiro
                                    cabelereiro={cabelereiro.item}
                                    key={cabelereiro.id}
                                    onPress={() => {
                                        setIndex(cabelereiro.index);
                                        navigation.push("Agendamento");

                                    }}
                                />
                            }}
                            keyExtractor={(item) => {
                                item.id
                            }}
                        />

                    </View>

                </View>
            </View>

        </SafeAreaView>

    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#312E38',
        width: '100%',
    },
    header: {
        height: 136,
        backgroundColor: "#28262E",
        display: 'flex',
        paddingLeft: 24,
        paddingRight: 24,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    headerBemVindo: {
        fontFamily: 'RobotoSlab_400Regular',
        fontStyle: 'normal',
        fontWeight: '400',
        fontSize: 20,
        lineHeight: 28,
        color: '#999591',
    },
    headerNome: {
        fontFamily: 'RobotoSlab_500Medium',
        fontStyle: 'normal',
        fontWeight: '500',
        fontSize: 20,
        lineHeight: 28,
        color: '#FF9000',
    },
    headerFoto: {
        width: 56,
        height: 56,
        borderRadius: 100
    },
    corpo: {
        flex: 1,
        paddingTop: 32,
        paddingLeft: 24,
        paddingRight: 24,

    },
    lista: {
        marginBottom: 50
    },
    title: {
        fontFamily: 'RobotoSlab_500Medium',
        fontStyle: 'normal',
        fontWeight: '500',
        fontSize: 25,
        lineHeight: 33,
        color: '#F4EDE8',
        marginBottom: 24
    },
    corpoCabeleleiros: {
        display: 'flex',

    }


});