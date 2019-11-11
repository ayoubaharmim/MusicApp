import React, {Compomemt} from 'react';
import {
    View,
    Image,
    StyleSheet,
    Dimensions
} from 'react-native';

const Album = ({uri}) => {
    return(
        <View style={styles.container}>
            <Image
                source={{uri}}
                style={styles.album}/>
        </View>
    );
}

const imageWidth = Dimensions.get('window').width - 24;

const styles = StyleSheet.create({
    container: {
        paddingVertical: 24
    },
    album: {
        width: imageWidth,
        height: imageWidth
    }
});

export default Album;
