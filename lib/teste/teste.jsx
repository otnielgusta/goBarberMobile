import { Text, View, StyleSheet, TextInput, TouchableOpacity, Image } from "react-native"

export default function Teste() {
    
    return (
        <View style={styles.cont}>
            <Text style={styles.tess}>asdfsdfdfsd</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    cont: {
        width: '100%',
        height: '100%',
        backgroundColor: '#312E38',
        alignItems: 'center',
        justifyContent: 'center'
    },
    tess: {
        fontFamily: 'RobotoSlab_500Medium',
        color: "#F4EDE8",
        fontSize: 24,
        lineHeight: 32,
        textAlign: 'center',
        marginBottom: 24
    }
});