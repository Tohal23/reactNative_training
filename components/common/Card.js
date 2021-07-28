import React from 'react';
import { StyleSheet, View } from 'react-native';

const Card = (props) => {
    return (
        <View style={{ ...styles.cardWrapper, ...props.style }}>{props.children}</View>
    )
}

const styles = StyleSheet.create({
    cardWrapper: {
        shadowColor: 'black',
        shadowRadius: 6,
        shadowOpacity: 0.5,
        shadowOffset: { width: 0, height: 2 },
        elevation: 6,
        backgroundColor: 'white',
        borderRadius: 10
    }
});

export default Card;