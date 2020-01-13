import React, { useState, useEffect } from 'react';
import { Text, View } from 'react-native';
import axios from 'axios';
import URL from '../configClient';



export default Datafetching = () => {
    const [characters, setCharacters] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await axios.get(URL);
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


