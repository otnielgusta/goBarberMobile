import { Text, View, StyleSheet, TextInput, TouchableOpacity, Image, StatusBar } from "react-native"
import { useEffect } from 'react';
import Cabelereiros, {} from '../context/Cabelereiros'
export default function SplashPage({ navigation }) {
    const foto = 'https://media-exp1.licdn.com/dms/image/C4E03AQFv9ByFE0FC0Q/profile-displayphoto-shrink_800_800/0/1651614551521?e=1659571200&v=beta&t=v84ILPeEG4pVKgsFI9hCrHmWfEefB8X4n-IG1izsnPQ'

    const cabeleleiros = [
        {
            id: 1,
            nome: "Otniel Silva",
            foto:foto,
            datas: "Segunda à Sexta",
            horarios: "8h às 18:h"
        }, {
            id: 2,
            nome: "Otniel Silva",
            foto: foto,
            datas: "Segunda à Sexta",
            horarios: "8h às 18:h"
        }, {
            id: 3,
            nome: "Otniel Silva",
            foto: foto,
            datas: "Segunda à Sexta",
            horarios: "8h às 18:h"
        },
        {
            id: 4,
            nome: "Otniel Silva",
            foto: foto,
            datas: "Segunda à Sexta",
            horarios: "8h às 18:h"
        }, {
            id: 5,
            nome: "Otniel Silva",
            foto: foto,
            datas: "Segunda à Sexta",
            horarios: "8h às 18:h"
        }, {
            id: 6,
            nome: "Otniel Silva",
            foto: foto,
            datas: "Segunda à Sexta",
            horarios: "8h às 18:h"
        },
        {
            id: 7,
            nome: "Otniel Silva",
            foto: foto,
            datas: "Segunda à Sexta",
            horarios: "8h às 18:h"
        }, {
            id: 8,
            nome: "Otniel Silva",
            foto: foto,
            datas: "Segunda à Sexta",
            horarios: "8h às 18:h"
        }, {
            id: 9,
            nome: "Otniel Silva",
            foto: foto,
            datas: "Segunda à Sexta",
            horarios: "8h às 18:h"
        },
    ]

    useEffect(() => {
        setTimeout(() => {
            navigation.navigate("Login");
        }, 5000)
    });

    return (
        
        <View style={styles.container}>
            {
                Cabelereiros.setCabelereiro(cabeleleiros)
            }
            {
                console.log(Cabelereiros.cabelereiros)
            }
            <StatusBar
                backgroundColor="#312E38"
            />
            <View style={styles.containerLogo}>
                <Image
                    style={styles.logo}
                    source={require('../../assets/icons/Logo.png')}
                />
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
    containerLogo: {
        alignItems: 'center',
        marginBottom: 64,
    },
    logo: {
        height: 120
    },
});