import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";

export default function ConfirmaCadastro({navigation}) {
    
    return (
        <View style={styles.container}>
            <Image
                style={styles.icon}
                source={require('../../assets/icons/Vector.png')}
            />
            <View style={{ height: 47 }}>
            </View>
            <Text style={styles.title}>Cadastramento</Text>
            <Text style={styles.title}>Concluído</Text>
            <View style={{ height: 16 }}>
            </View>
            <Text style={styles.subTitle}>Agora é só fazer seu login</Text>
            <TouchableOpacity 
                style={styles.botao}
                onPress={() => {
                    navigation.navigate("Login");
                }}
            ><Text style={styles.textoBotao}>Ok</Text></TouchableOpacity>
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
    icon:{
        width:53,
        height:36
    },
    title:{
        fontFamily: "RobotoSlab_500Medium",
        color: "#F4EDE8",
        fontSize: 30,
        lineHeight: 39,
        textAlign: 'center',
    },
    subTitle:{
        fontFamily: "RobotoSlab_500Medium",
        color: "#999591",
        fontStyle:'normal',
        fontSize: 14,
        textAlign: 'center',
        lineHeight:24
    },
    botao: {
        display: 'flex',
        justifyContent: 'center',
        marginTop: 40,
        backgroundColor: "#FF9000",
        width: 100,
        height: 50,
        borderRadius: 10
    },
    textoBotao: {
        fontFamily: "RobotoSlab_500Medium",
        fontStyle: "normal",
        fontSize: 16,
        textAlign: "center",
        color: "#312E38"

    },
});