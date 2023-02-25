import { View, Text } from "react-native";

const PrimaryBtn = (props) => {
  return (
    <View>
        <Text>{props.children}</Text>
    </View>
  )
}

export default PrimaryBtn;