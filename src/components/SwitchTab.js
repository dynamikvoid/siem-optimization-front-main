import React, { useState, useEffect } from 'react';
import {StyleSheet, View, Image, Text, Dimensions, ImageBackground, Button} from 'react-native';
import ScatterChartGraph from './ScatterPlot';
import StackedAreaChart from './StackedAreaChart';

const RM = () => {

    const [selectedTab, setSelectedTab] = useState('');

    const SelectedTab = () => {
        switch(selectedTab){
            case 'A':
                return <ScatterChartGraph />
            case 'B':
                return <StackedAreaChart />
            default:
                return <StackedAreaChart />
        }
    }

    return(
        <View>
            <View style={{minWidth:70, maxWidth:100, marginTop:-75, position:'absolute', alignSelf:'flex-end'}}>
                <Button onPress={() => setSelectedTab('A')} color='#652ca8' title='A' />
                <Button onPress={() => setSelectedTab('B')} color='#d1a8ff' title='B' />
                
            </View>
            {SelectedTab()}
        </View>
    )  
}

export default RM