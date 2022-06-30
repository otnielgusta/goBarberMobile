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

    return (
        <View>
            <FlatList
                showsHorizontalScrollIndicator={false}
                horizontal
                data={props.horarios}
                renderItem={(horario) => {
                    return <CardHorario
                        onPress={(e) => {
                            e.preventDefault();
                            setSelectedHoraDia(horario.item.id)
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