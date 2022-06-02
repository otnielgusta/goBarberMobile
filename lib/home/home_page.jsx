import { StatusBar } from "expo-status-bar";
import { Text, View, StyleSheet, FlatList, Image, ScrollView } from "react-native";
import { SafeAreaView } from 'react-native-safe-area-context'
import CardCabeleleiro from "../components/card_cabeleleiro";
import {useContext} from 'react'
import UserContext from "../context/context";

export default function HomePage({navigation}) {
    const [cabelereiros, setCabelereiros,index, setIndex] = useContext(UserContext);    
    
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
                        <Text style={styles.headerNome}>Tiago Luchtenberg</Text>
                    </View>
                    <View style={styles.headerRight}>
                        <Image
                            style={styles.headerFoto}
                            source={{uri:"https://media-exp1.licdn.com/dms/image/C4E03AQFv9ByFE0FC0Q/profile-displayphoto-shrink_800_800/0/1651614551521?e=1659571200&v=beta&t=v84ILPeEG4pVKgsFI9hCrHmWfEefB8X4n-IG1izsnPQ"}}
                        />
                    </View>

                </View>
                <View style={styles.corpo}>
                    <Text style={styles.title}>Cabeleleiros</Text>
                    <View style={styles.corpoCabeleleiros}>
                        <FlatList
                            
                            style={styles.lista}
                            data={cabelereiros}
                            renderItem={(cabelereiro) => {
                                console.log(cabelereiro)
                                return <CardCabeleleiro 
                                            cabelereiro={cabelereiro.item} 
                                            key={cabelereiro.id} 
                                            onPress={()=>{
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