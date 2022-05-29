import { StyleSheet, View, TouchableOpacity, Text } from "react-native";

export default function ButtonConfirm(props) {
  
    return (
        <View>
            <TouchableOpacity 
                style={styles.botao}
                onPress={props.onPress}
            ><Text style={styles.textoBotao}>{props.texto}</Text></TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    botao: {
        display: 'flex',
        justifyContent: 'center',
        marginTop: 24,
        backgroundColor: "#FF9000",
        width: 340,
        height: 56,
        borderRadius: 10
    },
    textoBotao: {
        fontFamily:'RobotoSlab_500Medium',
        fontStyle: "normal",
        fontSize: 16,
        lineHeight: 21,
        textAlign: "center",
        color: "#312E38"

    },
})