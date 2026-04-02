import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

import { theme } from '../../styles/global.css';

export default function TaskCard({item, onDelete, onEdit}) {
    const priorityColor = theme.colors.priority[item.priority] || theme.colors.textSub;
    return (
        <View style={[StyleSheet.card, {borderLeftColor: priorityColor}]}>
            <View style={{flex: 1}}>
                <Text>{item.title}</Text>
            </View>
        </View>    
    );
}