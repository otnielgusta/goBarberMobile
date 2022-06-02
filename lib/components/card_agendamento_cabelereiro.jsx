import { Text, View, StyleSheet, Image, TouchableOpacity } from "react-native"
import Cabelereiros from "../context/Cabelereiros";
import {useContext} from 'react'
import UserContext from "../context/context";


export default function CardAgendamentoCabelereiro(props) {
    const [cabelereiros, setCabelereiros, index, setIndex] = useContext(UserContext);    


    return (
        <TouchableOpacity
            onPress={props.onPress}
        >
            <View
                style={props.index == index ? styles.cardCabeleleiroSelected : styles.cardCabeleleiro}

            >
                <Image
                    style={styles.cardCabeleleiroFoto}
                    source={{ uri: props.cabelereiro.foto }}

                />
                <Text style={props.index == index ? styles.nomeSelected : styles.nome}>{props.cabelereiro.nome}</Text>
            </View>
        </TouchableOpacity>

    );
}

const styles = StyleSheet.create({

    cardCabeleleiroSelected:{
        width: 175,
        height: 48,
        display: 'flex',
        flexDirection: 'row',
        backgroundColor: '#FF9000',
        borderRadius: 10,
        justifyContent: 'flex-start',
        alignItems: 'center',
        paddingLeft: 16,
        marginRight:16,
        
    },

    cardCabeleleiro: {
        width: 175,
        height: 48,
        display: 'flex',
        flexDirection: 'row',
        backgroundColor: '#3E3B47',
        borderRadius: 10,
        justifyContent: 'flex-start',
        alignItems: 'center',
        paddingLeft: 16,
        marginRight:16,

    },
    cardCabeleleiroFoto: {
        width: 32,
        height: 32,
        borderRadius: 100

    },
    nome: {
        marginLeft:8,
        fontFamily: 'RobotoSlab_500Medium',
        fontStyle: 'normal',
        fontSize: 14,
        lineHeight: 18,
        color :'#F4EDE8'
    },

    nomeSelected: {
        marginLeft:8,
        fontFamily: 'RobotoSlab_500Medium',
        fontStyle: 'normal',
        fontSize: 14,
        lineHeight: 18,
        color: '#232129'

    }

    

})