import React, {Component} from 'react';
import {
    View,
    StyleSheet,
    Text,
    Dimensions,
    Image,
    TouchableOpacity
} from 'react-native';

const Header = ({onMenuPress, onDownPress, message}) => {
    return(
        <View style={styles.container}>
            <TouchableOpacity
                onPress={onDownPress}>
                <Image
                    source={{uri: 'expand'}}
                    style={styles.icons} />
            </TouchableOpacity>
            <Text style={styles.title}>{message}</Text>
            <TouchableOpacity
                onPress={onMenuPress}>
                <Image
                    source={{uri: 'menu'}}
                    style={styles.icons} />
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'black',
        height: 30,
        width: Dimensions.get('window').width,
        justifyContent: 'space-between',
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 10
    },
    title: {
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold'
    },
    icons: {
        width: 40,
        height: 40
    }
});

export default Header;
