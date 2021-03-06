import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import { StatusBar } from "expo-status-bar";
import { SafeAreaView } from "react-native-safe-area-context";
import UserContext from "../context/context";
import { useContext, useEffect, useState } from "react";


export default function AgendamenConcluido({navigation}) {
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

    //<Text style={styles.subtitle}>{dadosAgendados.data} às {dadosAgendados.horario}h com {dadosAgendados.cliente}</Text>
    

    return (
        <SafeAreaView style={styles.container}  >
            <StatusBar
                backgroundColor="#312E38"
            />
            <View style={styles.content}>
                <Image
                    style={styles.check}
                    source={require('../../assets/icons/Vector.png')}
                />
                <Text style={styles.title}>Agendamento</Text>
                <Text style={styles.title}>concluído</Text>
                
                <TouchableOpacity
                    style={styles.botao}
                    onPress={() => {
                        navigation.navigate("HomePage");
                    }}
                ><Text style={styles.textoBotao}>Ok</Text></TouchableOpacity>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#312E38',
        display: 'flex',
        justifyContent: 'center',

    },
    content: {
        paddingLeft: 55,
        paddingRight: 55,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center'
    },
    check: {
        width: 53,
        height: 36,
        marginBottom: 30,
    },
    title: {
        fontFamily: 'RobotoSlab_500Medium',
        fontStyle: 'normal',
        fontSize: 30,
        lineHeight: 40,
        textAlign: 'center',

        color: '#F4EDE8',
    },
    subtitle: {
        marginTop: 16,
        fontFamily: 'RobotoSlab_500Medium',
        fontStyle: 'normal',
        fontSize: 14,
        lineHeight: 24,
        textAlign: 'center',

        color: '#999591',
    },
    botao: {
        display: 'flex',
        justifyContent: 'center',
        marginTop: 40,
        backgroundColor: "#FF9000",
        width: 100,
        height: 50,
        borderRadius: 10
    },
    textoBotao: {
        fontFamily: "RobotoSlab_500Medium",
        fontStyle: "normal",
        fontSize: 16,
        textAlign: "center",
        color: "#312E38"

    },
});