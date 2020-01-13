import React, { useState, useEffect } from 'react';
import { Text, View } from 'react-native';
import axios from 'axios';
import API_URL from '../configClient';

console.log(API_URL);

export default Datafetching = () => {
    const [characters, setCharacters] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await axios.get(API_URL);
                setCharacters(data);
            } catch (e) {
                console.log(e);
            }
        }
        fetchData();
    }, [])

    return (
        <View>
            <Text>here we are...</Text>
        </View>
    );
}


