import { View, Text, StyleSheet, Image, FlatList, ScrollView } from "react-native";
import { useContext } from 'react';
import CardHorario from "../components/card_horario";
import UserContext from "../context/context";


export default function HorariosComponent(props) {
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

    /*
    <CardHorario
                            onPress={(e) => {
                                e.preventDefault();
                                setSelectedIndex(props.indexHoraDia);
                                setSelectedHoraDia(horario.item)
                            }}
                            indexHoraDia={props.indexHoraDia}
                            texto={horario.item}
                        />
                        */

    if (props.horarios.length > 0) {
        return (
            <View style={styles.containerHorario}>
                <FlatList
                    showsHorizontalScrollIndicator={false}
                    horizontal
                    data={props.horarios}
                    renderItem={(horario) => {
                        return <CardHorario
                            onPress={(e) => {
                                e.preventDefault();
                                setSelectedHoraDia(horario.item)
                            }}
                            id={horario.item.id}
                            texto={horario.item.horario}
                        />
    
                    }}
                    keyExtractor={(item) => {
                        item.id
                    }}
                />
            </View>
        );
    }else{
        return(
            <View style={styles.containerHorario}>
                <Text style={styles.texto}>Sem horários disponíveis</Text>
            </View>
        );
    }               
    
    

}

const styles = StyleSheet.create({

    containerHorario:{
        marginBottom: 24
    },
    horaDia: {
        fontFamily: 'RobotoSlab_500Medium',
        fontStyle: 'normal',
        fontSize: 14,
        lineHeight: 18,

        color: '#999591',
        marginBottom: 12,
    },
    texto:{
        color: "#999591",
        marginLeft:10,
        fontFamily: 'RobotoSlab_400Regular',
        fontSize: 12,

    },
    semHorario: {
        fontFamily: 'RobotoSlab_500Medium',
        fontStyle: 'normal',
        fontSize: 14,
        lineHeight: 18,

        color: '#F4EDE8',
        marginBottom: 12,
    }
})