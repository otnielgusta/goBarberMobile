import { Text, View, StyleSheet, TextInput, TouchableOpacity, Image } from "react-native"
import { useEffect } from 'react';
export default function SplashPage({ navigation }) {

    useEffect(() => {
        setTimeout(() => {
            navigation.navigate("Login");
        }, 5000)
    });
    
    return (
        <View style={styles.container}>
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