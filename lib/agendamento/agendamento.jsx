import { View, Text, StyleSheet, Image, FlatList, TouchableOpacity, ScrollView } from "react-native";
import { SafeAreaView } from 'react-native-safe-area-context'
import CardAgendamentoCabelereiro from "../components/card_agendamento_cabelereiro";
import UserContext from "../context/context";
import { useContext, useEffect, useState } from 'react';
import DatePicker from 'react-native-modern-datepicker';
import HorariosComponent from "../components/horarios_component";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { listarHorario } from "../controllers/cabelereiro_controller";
import { marcarConsulta } from "../controllers/horario_controller";


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
        setSelectedIndex,
        dadosAgendados,
        setDadosAgendados
    ] = useContext(UserContext);

    const [loading, setLoading] = useState(true);
    const [horariosDisponiveis, setHorariosDisponiveis] = useState([]);
    const [user, setUser] = useState({});
    const [manha, setManha] = useState([]);
    const [tarde, setTarde] = useState([]);
    const [noite, setNoite] = useState([]);
    const [token, setToken] = useState("");
    const [data, setData] = useState(new Date().toISOString().slice(0, 10));

    const BuscarERetornar = () => {
        AsyncStorage.getItem("token")
            .then((valor) => {
                var valorJson = JSON.parse(valor);
                setToken(valorJson);
            })

        AsyncStorage.getItem("cliente")
            .then((valor) => {
                var user = JSON.parse(valor);
                setUser(user);

            })

    }

    const listarHor = async () => {
        setLoading(true);
        console.log("Alterado no inicio")
        const response = await listarHorario(token, cabelereiros[index].id, setHorariosDisponiveis, data);
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


        } else {
            console.log(response.status);
        }
        console.log(response);
        console.log(horariosDisponiveis);
        console.log("Alterado no fim")

        setLoading(false);


    }

    useEffect(() => {

        if (token == "" || user == {}) {

            BuscarERetornar()
        }
        listarHor();
    }, [token, manha]);

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
                                    setManha([]);
                                    setTarde([])
                                    setNoite([]);
                                    listarHor();
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
                            onDateChange={(date) => {
                                console.log(date);
                                const tt = new Date(date)
                                setData(tt.toISOString().slice(0, 10));
                                setManha([]);
                                setTarde([])
                                setNoite([]);
                                listarHor();
                                console.log(data);
                            }}
                            selected={data}
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
                            <Text style={styles.titleHorario}>Manhã</Text>
                            {
                                loading == false ? <HorariosComponent horarios={manha} /> : <View style={{ marginBottom: 12, }}><Text>Ainda nao </Text></View>
                            }
                            <Text style={styles.titleHorario}>Tarde</Text>
                            {
                                loading == false ? <HorariosComponent horarios={tarde} /> : <View style={{ marginBottom: 12, }}><Text>Ainda nao </Text></View>
                            }
                            <Text style={styles.titleHorario}>Noite</Text>
                            {
                                loading == false ? <HorariosComponent horarios={noite} /> : <View style={{ marginBottom: 12, }}><Text>Ainda nao </Text></View>
                            }
                        </View>
                    </View>
                    <View>
                        <TouchableOpacity
                            style={styles.botao}
                            onPress={async () => {
                                setDadosAgendados({
                                    horario: selectedHoraDia.horario,
                                    data: data,
                                    cliente: user.nome
                                })
                                const response = await marcarConsulta(token, selectedHoraDia.id, cabelereiros[index].id, data);
                                if (response == 201) {
                                    navigation.navigate("AgendamentoConcluido");
                                }
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
    titleHorario: {
        color: "#999591",
        marginBottom: 12,
        fontFamily: 'RobotoSlab_500Medium',
        fontStyle: 'normal',
        fontSize: 14,
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