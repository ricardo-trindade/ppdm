import { StyleSheet } from "react-native";
import { theme } from '../../styles/global';

export const styles = StyleSheet.create({
    card: {
        backgroundColor: '#fff',
        padding: 15,
        borderRadius: 15,
        marginBottom: 10,
        flexDirection: 'row',
        borderLeftWidth: 6,
        elevation: 2
    },
    title: {
        fontSize: 17,
        fontWeight: 'bold',
        color: theme.colors.textMain
    },
    desc: {
        fontSize: 14,
        fontWeight: 'bold',
        color: theme.colors.textSub,
    },
    badge: {

    },
    date: {

    },
    actions: {

    },
    icon: {

    }
});

