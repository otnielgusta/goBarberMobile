import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { useContext, useState } from 'react';
import UserContext from "../context/context";

export default function CardHorario(props) {

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

    if (props.id == selectedHoraDia.id) {
        return (
            <TouchableOpacity
                style={styles.cardSelected}
                onPress={props.onPress}
            >
                <Text style={styles.textoSelected}>{props.texto}</Text>
            </TouchableOpacity>
        );
    }
    else {

        return (
            <TouchableOpacity
                style={styles.card}
                onPress={props.onPress}
            >
                <Text style={styles.texto}>{props.texto}</Text>
            </TouchableOpacity>
        );
    }

}

const styles = StyleSheet.create({
    card: {
        backgroundColor: '#3E3B47',
        borderRadius: 10,
        paddingLeft: 12,
        paddingRight: 12,
        paddingTop: 11,
        paddingBottom: 11,
        marginRight: 8,
    },
    texto: {
        fontFamily: 'RobotoSlab_500Medium',
        fontStyle: 'normal',
        fontSize: 14,
        lineHeight: 18,

        color: '#F4EDE8',
    },
    cardSelected: {
        backgroundColor: '#FF9000',
        borderRadius: 10,
        paddingLeft: 12,
        paddingRight: 12,
        paddingTop: 11,
        paddingBottom: 11,
        marginRight: 8,
    },
    textoSelected: {
        fontFamily: 'RobotoSlab_500Medium',
        fontStyle: 'normal',
        fontSize: 14,
        lineHeight: 18,

        color: '#232129',
    }
})