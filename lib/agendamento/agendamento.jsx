import { View, Text, StyleSheet, Image, FlatList, TouchableOpacity, ScrollView } from "react-native";
import { SafeAreaView } from 'react-native-safe-area-context'
import CardAgendamentoCabelereiro from "../components/card_agendamento_cabelereiro";
import UserContext from "../context/context";
import { useContext, useEffect, useState } from 'react';
import DatePicker from 'react-native-modern-datepicker';
import HorariosComponent from "../components/horarios_component";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { listarHorario } from "../controllers/cabelereiro_controller";


export default function Agendamento({ navigation }) {
    const [
        cabelereiros,
        setCabelereiros,
        index,
        setIndex,
        horarios,
        setHorarios,
        selectedHoraDia,
        setSelectedHoraDia,
        selectedIndex,
        setSelectedIndex
    ] = useContext(UserContext);

    const [loading, setLoading] = useState(true);
    const [horariosDisponiveis, setHorariosDisponiveis] = useState([]);
    const [user, setUser] = useState({});
    const [manha, setManha] = useState([]);
    const [tarde, setTarde] = useState([]);
    const [noite, setNoite] = useState([]);
    const [teste, setTeste] = useState(0);
    const [token, setToken] = useState("");


    const BuscarERetornar = (chave) => {
        AsyncStorage.getItem(chave)
        .then((valor)=>{
            var valorJson = JSON.parse(valor);
            setToken(valorJson);
        })
        
    }

    const listarHor = async () => {
        setLoading(true);
        console.log("Alterado no inicio")
        const response = await listarHorario(token, cabelereiros[index].id, setHorariosDisponiveis);
        if (response.retorno == true) {
            var manhaa;
            var tardee;
            var noitee;
            if (manha.length == 0) {
                manhaa = horariosDisponiveis.filter(function (val) {
                    return val.parte == "manha"
                });
                setManha(manhaa);
            }
            if (tarde.length == 0) {
                tardee = horariosDisponiveis.filter(function (val) {
                    return val.parte == "tarde"
                });
            setTarde(tardee);

            }
            if (noite.length == 0) {
                noitee = horariosDisponiveis.filter(function (val) {
                    return val.parte == "noite"
                });
            setNoite(noitee);

            }

          
            setLoading(false);
        } else {
            console.log(response.status);
        }
        console.log(response);
        console.log(horariosDisponiveis);
        console.log("Alterado no fim")

        

    }

    useEffect(() => {
        if(token == ""){

            BuscarERetornar("token")
        }
        listarHor();
    }, [token,manha, tarde, noite]);

    return (
        <SafeAreaView style={styles.container}>

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

                <Text style={styles.title}>Agendamento</Text>
                <TouchableOpacity
                    onPress={() => {
                        navigation.navigate("Perfil");
                    }}
                >
                    <Image
                        style={styles.foto}
                        source={{ uri: user.foto }}
                    />
                </TouchableOpacity>

            </View>
            <ScrollView>

                <View style={styles.cabelereiro}>
                    <FlatList
                        initialScrollIndex={index}
                        showsHorizontalScrollIndicator={false}
                        contentContainerStyle={styles.listaCabelereiros}
                        horizontal
                        data={cabelereiros}
                        renderItem={(cabeleleiro) => {
                            return <CardAgendamentoCabelereiro
                                cabelereiro={cabeleleiro.item}
                                key={cabeleleiro.index}
                                onPress={() => {
                                    setIndex(cabeleleiro.index)

                                }}
                                index={cabeleleiro.index}
                            />
                        }}
                        keyExtractor={(item) => {
                            item.index
                        }}
                    />
                </View>

                <View style={styles.corpoAgendamento}>

                    <View style={styles.divData}>
                        <Text style={styles.escolhaData}>Escolha a data</Text>
                        <DatePicker
                            options={{

                                backgroundColor: '#28262E',
                                textHeaderColor: '#F4EDE8',
                                textDefaultColor: '#666360',
                                selectedTextColor: '#fff',
                                defaultFont: 'RobotoSlab_500Medium',
                                mainColor: '#999591',
                                textSecondaryColor: '#666360',
                                borderColor: 'rgba(122, 146, 165, 0.1)',

                            }}

                            current="2020-07-13"
                            selected="2020-07-23"
                            mode="calendar"
                            minuteInterval={30}
                            style={{
                                borderRadius: 10,
                            }}
                        />
                    </View>
                    <View style={styles.divHorario}>
                        <Text style={styles.escolhaHorario}>Escolha o horário</Text>
                        <View style={styles.horarios}>
                            <Text>Manhã</Text>
                            {
                                manha.length > 0 ? <HorariosComponent horarios={manha} /> : <View><Text>Ainda nao </Text></View>
                            }
                            <Text>Tarde</Text>
                            {
                                tarde.length > 0? <HorariosComponent horarios={tarde} /> : <View><Text>Ainda nao </Text></View>
                            }
                            <Text>Noite</Text>
                            {
                                noite.length > 0 ? <HorariosComponent horarios={noite} /> : <View><Text>Ainda nao </Text></View>
                            }
                        </View>
                    </View>
                    <View>
                        <TouchableOpacity
                            style={styles.botao}
                            onPress={() => {
                                navigation.navigate("AgendamentoConcluido");

                            }}
                        ><Text style={styles.textoBotao}>Agendar</Text></TouchableOpacity>
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
        backgroundColor: '#28262E'


    },
    voltar: {
        width: 32,
        height: 32
    },
    foto: {
        width: 56,
        height: 56,
        borderRadius: 100
    },
    title: {
        fontFamily: 'RobotoSlab_500Medium',
        fontStyle: 'normal',
        fontSize: 20,
        lineHeight: 28,
        color: '#F4EDE8',
    },
    cabelereiro: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: 120
    },
    listaCabelereiros: {
        paddingLeft: 24,
        paddingRight: 8,
        flexGrow: 1,
        alignItems: 'center',

    },
    corpoAgendamento: {
        paddingLeft: 13,
        paddingRight: 13,
    },
    escolhaData: {
        fontFamily: 'RobotoSlab_500Medium',
        fontStyle: 'normal',
        fontSize: 25,
        lineHeight: 33,
        color: '#F4EDE8',
        marginBottom: 24,
        marginLeft: 13
    },
    escolhaHorario: {
        fontFamily: 'RobotoSlab_500Medium',
        fontStyle: 'normal',
        fontSize: 25,
        lineHeight: 33,
        color: '#F4EDE8',
        marginBottom: 24,
    },
    divHorario: {
        marginTop: 40,
        marginLeft: 13,
        marginBottom: 40

    },
    horaDia: {
        fontFamily: 'RobotoSlab_500Medium',
        fontStyle: 'normal',
        fontSize: 14,
        lineHeight: 18,

        color: '#999591',
        marginBottom: 12,
    },
    botao: {
        display: 'flex',
        justifyContent: 'center',
        backgroundColor: "#FF9000",
        marginLeft: 13,
        marginRight: 13,
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