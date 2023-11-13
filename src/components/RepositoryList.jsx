import React from "react";
import { Text, View } from 'react-native';
import repositories from './data/repositories.js';

const RepositoryList = () => {
    return ( 
    <View>
    {repositories.map(repo => (
        <View key={repo.id}>
            <Text>{repo. id}</Text>
        </View>

    )) }
    
    </View>
 ) 
        }

        export default RepositoryList