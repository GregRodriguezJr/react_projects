import { StyleSheet, Text } from "react-native";
import Colors from "../../constants/Colors";
const Title = (props) => {
    return <Text style={styles.title}>{props.title}</Text>;
};

const styles = StyleSheet.create({
    title: {
        fontSize: 18,
        fontWeight: "bold",
        color: "white",
        textAlign: "center",
        borderWidth: 2,
        borderColor: "white",
        padding: 12,
    },
});

export default Title;
