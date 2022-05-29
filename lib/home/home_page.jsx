import { SafeAreaView, Text, View, StyleSheet, FlatList, Image } from "react-native";
import CardCabeleleiro from "../components/card_cabeleleiro";

export default function HomePage() {


    const cabeleleiros = [
        {
            id: 1,
            nome: "Otniel Silva",
            foto: "Foto",
            datas: "Segunda à Sexta",
            horarios: "8h às 18:h"
        }, {
            id: 2,
            nome: "Otniel Silva",
            foto: "Foto",
            datas: "Segunda à Sexta",
            horarios: "8h às 18:h"
        }, {
            id: 3,
            nome: "Otniel Silva",
            foto: "Foto",
            datas: "Segunda à Sexta",
            horarios: "8h às 18:h"
        },
        {
            id: 4,
            nome: "Otniel Silva",
            foto: "Foto",
            datas: "Segunda à Sexta",
            horarios: "8h às 18:h"
        }, {
            id: 5,
            nome: "Otniel Silva",
            foto: "Foto",
            datas: "Segunda à Sexta",
            horarios: "8h às 18:h"
        }, {
            id: 6,
            nome: "Otniel Silva",
            foto: "Foto",
            datas: "Segunda à Sexta",
            horarios: "8h às 18:h"
        },
        {
            id: 7,
            nome: "Otniel Silva",
            foto: "Foto",
            datas: "Segunda à Sexta",
            horarios: "8h às 18:h"
        }, {
            id: 8,
            nome: "Otniel Silva",
            foto: "Foto",
            datas: "Segunda à Sexta",
            horarios: "8h às 18:h"
        }, {
            id: 9,
            nome: "Otniel Silva",
            foto: "Foto",
            datas: "Segunda à Sexta",
            horarios: "8h às 18:h"
        },
    ]
    return (

        <View style={styles.container}>
            <View style={styles.header}>
                <View style={styles.headerLeft}>
                    <Text style={styles.headerBemVindo}>Bem vindo,</Text>
                    <Text style={styles.headerNome}>Tiago Luchtenberg</Text>
                </View>
                <View style={styles.headerRight}>
                    <Image
                        style={styles.headerFoto}
                        source={require('../../assets/icons/Foto.jpg')}
                    />
                </View>

            </View>
            <View style={styles.corpo}>
                <Text style={styles.title}>Cabeleleiros</Text>
                <View style={styles.corpoCabeleleiros}>
                    <FlatList
                        style={styles.lista}
                        data={cabeleleiros}
                        renderItem={(cabeleleiro) => {
                            console.log(cabeleleiro)
                            return <CardCabeleleiro cabeleleiro={cabeleleiro.item} key={cabeleleiro.id} />
                        }}
                        keyExtractor={(item) => {
                            item.id
                        }}
                    />

                </View>

            </View>
        </View>

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
    lista:{
        marginBottom:50
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