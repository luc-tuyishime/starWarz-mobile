import React, { useState, useEffect } from 'react';
import { Text, View, FlatList, Image } from 'react-native';
import axios from 'axios';
import API_URL from '../configClient';

import { styles } from '../styles/list';


export default Datafetching = () => {
    const [characters, setCharacters] = useState();

    const fetchData = async () => {
        try {
            const { data } = await axios.get(API_URL);
            let result = await data;
            return result.data ? setCharacters([...result.data]) : [];
        } catch (e) {
            console.log(e);
        }
    }
    console.log('yolo', characters);

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <View>
            <FlatList data={characters}
                renderItem={({ item }) => (
                    <View style={styles.container}>
                        <View style={styles.item1}>
                            <Image
                                style={styles.image}
                                source={{
                                    uri: item.image
                                }}
                            />
                        </View>
                    </View>
                )}
                keyExtractor={(item, index) => `${item}-${index}`}
            />
        </View>
    );
}

// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         backgroundColor: '#fff',
//         alignItems: 'center',
//         justifyContent: 'center',
//     },
// });


