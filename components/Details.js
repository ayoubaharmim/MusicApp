import React, {Component} from 'react';
import {
    View,
    StyleSheet,
    Dimensions,
    TouchableOpacity,
    Text,
    Image
} from 'react-native';

const Details = ({
    album,
    title,
    add,
    more
}) => {
    return(
        <View style={styles.container}>
            <TouchableOpacity onPress={add}>
                <Image
                    source={{uri: 'add'}}
                    style={styles.icon}/>
            </TouchableOpacity>
            <View style={styles.textContainer}>
                <Text style={styles.text}>{title}</Text>
                <Text style={styles.textAlbum}>{album}</Text>
            </View>
            <TouchableOpacity onPress={more}>
                <Image
                    source={{uri: 'more'}}
                    style={styles.icon}/>
            </TouchableOpacity>
        </View>
    );
};

const imageDim = 35;

const styles = StyleSheet.create({
    container: {
        width: Dimensions.get('window').width,
        height: 30,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 25
    },
    icon: {
        width: imageDim,
        height: imageDim
    },
    text: {
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold'
    },
    textAlbum: {
        color: 'white',
        fontSize: 16
    },
    textContainer: {
        alignItems: 'center'
    }
});

export default Details;
