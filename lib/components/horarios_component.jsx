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
    if (props.horarios.length == 0) {
        return (
            <View>

                <Text style={styles.horaDia}>{props.title}</Text>
                <Text style={styles.semHorario}>Sem horários disponíveis</Text>
            </View>
        );
    }
    else {

        return (
            <View>

                <Text style={styles.horaDia}>{props.title}</Text>
                <FlatList
                    showsHorizontalScrollIndicator={false}
                    horizontal
                    data={props.horarios}
                    renderItem={(horario) => {
                        return <CardHorario
                            onPress={(e) => {
                                e.preventDefault();
                                setSelectedIndex(props.indexHoraDia);
                                setSelectedHoraDia(horario.item)
                            }}
                            indexHoraDia={props.indexHoraDia}
                            texto={horario.item}
                        />

                    }}
                    keyExtractor={(item) => {
                        item.index
                    }}
                />
            </View>
        );
    }

}

const styles = StyleSheet.create({

    horaDia: {
        fontFamily: 'RobotoSlab_500Medium',
        fontStyle: 'normal',
        fontSize: 14,
        lineHeight: 18,

        color: '#999591',
        marginBottom: 12,
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