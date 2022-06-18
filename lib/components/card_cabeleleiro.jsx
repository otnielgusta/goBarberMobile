import { Text, View, StyleSheet, Image, TouchableOpacity } from "react-native"

export default function CardCabeleleiro(props) {
    return (
        <TouchableOpacity
            onPress={props.onPress}
        >

            <View
                style={styles.cardCabeleleiro}

            >
                <Image
                    style={styles.cardCabeleleiroFoto}
                    source={{uri:props.cabelereiro.foto}}
                />
                <View style={styles.cardInfos}>
                    <Text style={styles.cardNome}>{props.cabelereiro.nome}</Text>
                    <View style={styles.cardDataHora}>

                        <View style={styles.cardInfosDataHorario}>
                            <Image
                                style={styles.imageDados}
                                source={require('../../assets/icons/Calendario.png')}
                            />
                            <View style={{ width: 12 }}></View>
                            <Text style={styles.textHorarioData}>{props.cabelereiro.dias}</Text>
                        </View>

                        <View style={{ height: 6 }}></View>

                        <View style={styles.cardInfosDataHorario}>
                            <Image
                                style={styles.imageDados}
                                source={require('../../assets/icons/Horario.png')}
                            />
                            <View style={{ width: 12 }}></View>
                            <Text style={styles.textHorarioData}>{props.cabelereiro.horario}</Text>
                        </View>
                    </View>

                </View>
            </View>
        </TouchableOpacity>

    );
}

const styles = StyleSheet.create({
    cardCabeleleiro: {
        width: '100%',
        height: 112,
        display: 'flex',
        flexDirection: 'row',
        backgroundColor: '#3E3B47',
        borderRadius: 10,
        justifyContent: 'flex-start',
        alignItems: 'center',
        paddingLeft: 16,
        marginBottom: 16,
    },
    cardCabeleleiroFoto: {
        width: 72,
        height: 72,
        borderRadius: 100

    },
    cardInfos: {
        marginLeft: 20,

    },

    cardNome: {
        color: '#F4EDE8',
        fontFamily: 'RobotoSlab_500Medium',
        fontStyle: 'normal',
        fontSize: 18,
        lineHeight: 24,
    },
    cardDataHora: {
        marginTop: 12
    },
    cardInfosDataHorario: {
        display: 'flex',
        flexDirection: 'row'
    },
    imageDados: {
        width: 14,
        height: 14,
    },
    textHorarioData: {
        fontFamily: 'RobotoSlab_400Regular',
        fontStyle: 'normal',
        fontSize: 12,
        lineHeight: 16,
        color: '#999591'
    }
})