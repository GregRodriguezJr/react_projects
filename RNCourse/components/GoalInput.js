import { StyleSheet, View, Button, TextInput, Modal } from 'react-native';
import { useState } from 'react';

function GoalInput(props) {
    const [enteredGoalText, setEnteredGoalText] = useState('');

    const goalInputHandler = (enteredText) => {
        setEnteredGoalText(enteredText);
    }

    const addGoalHandler = () => {
        props.onAddGoal(enteredGoalText);
        setEnteredGoalText('');
    }

  return (
    <Modal visible={props.visible} animationType='slide'>
        <View style={styles.inputContainer}>
            <TextInput 
                onChangeText={goalInputHandler} 
                style={styles.textInput} 
                placeholder='Your course goal'
                value={enteredGoalText}
            />
            <View style={styles.buttonContainer}>
                <View style={styles.button}>
                    <Button onPress={addGoalHandler} title="Add Goal" />
                </View>
                <View style={styles.button}>
                    <Button title='Cancel' onPress={props.onCancel}/>
                </View>
            </View>
        </View>
    </Modal>
  )
}

const styles = StyleSheet.create({
    inputContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 24,
        borderBottomWidth: 1,
        borderBottomColor: 'grey',
        padding: 16
      },
      textInput: {
        borderWidth: 1,
        borderColor: '#cccccc',
        width: '90%',
        padding: 8
      },
      buttonContainer: {
        marginTop: 16,
        flexDirection: 'row',
      },
      button: {
        width: '30%',
        marginHorizontal: 8
      }
});

export default GoalInput