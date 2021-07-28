import React from 'react';
import { TextInput } from 'react-native';

const Input = (props) => {
    return <TextInput {...props} style={{...styles.input, ...props.style}} />
}

const styles = {
    input: {
        height: 30,
        borderBottomColor: 'grey',
        borderBottomWidth: 1,
        marginVertical: 10
    },
}

export default Input;