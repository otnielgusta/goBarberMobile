import { View, Text, StyleSheet, Image, FlatList, useState } from "react-native";
import { SafeAreaView } from 'react-native-safe-area-context'
import CardAgendamentoCabelereiro from "../components/card_agendamento_cabelereiro";
import Cabelereiros from "../context/Cabelereiros";

export default function Agendamento(props) {
    return (
        <SafeAreaView style={styles.container}>
            {
                console.log(Cabelereiros.index)
            }
            <View style={styles.header}>
                <Image
                    style={styles.voltar}
                    source={require('../../assets/icons/VoltarPop.png')}
                />
                <Text style={styles.title}>Agendamento</Text>
                <Image
                    style={styles.foto}
                    source={{uri:'https://media-exp1.licdn.com/dms/image/C4E03AQFv9ByFE0FC0Q/profile-displayphoto-shrink_800_800/0/1651614551521?e=1659571200&v=beta&t=v84ILPeEG4pVKgsFI9hCrHmWfEefB8X4n-IG1izsnPQ'}}
                />

            </View>
            <View style={styles.cabelereiro}>
                <FlatList
                    initialScrollIndex={Cabelereiros.index}
                    showsHorizontalScrollIndicator={false}
                    contentContainerStyle={styles.listaCabelereiros}
                    horizontal
                    data={Cabelereiros.cabelereiros}
                    renderItem={(cabeleleiro) => {
                        return <CardAgendamentoCabelereiro
                            cabelereiro={cabeleleiro.item}
                            key={cabeleleiro.index}
                            onPress={() => {
                                Cabelereiros.setIndex(cabeleleiro.index)

                            }}
                            index={cabeleleiro.index}
                        />
                    }}
                    keyExtractor={(item) => {
                        item.index
                    }}
                />
            </View>
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
    cabelereiro:{
        display:'flex',
        alignItems:'center',
        justifyContent:'center',
        height: 120
    },
    listaCabelereiros:{
        paddingLeft:24,
        paddingRight:8,
        flexGrow:1,
        alignItems:'center',
        
    }
})