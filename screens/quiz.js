import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { color } from 'react-native-elements/dist/helpers';

const quiz = ({navigation, name, questions, score, setScore, setQuestions}) => {
  const [options, setOptions] = useState();
  const [currQues, setCurrQues] = useState(0);

  useEffect(() => {
    setOptions(questions &&handleShuffle([
          questions[currQues]?.correct_answer,
          ...questions[currQues]?.incorrect_answers,
        ])
    );
  }, [currQues, questions]);

  console.log(questions);

  const handleShuffle = (options) => {
    return options.sort(() => Math.random() - 0.5);
  };

  return (
    <View style={styles.container}>
      <View style = {styles.top}> 
        <Text style={styles.question}>Imagine this is a really cool question</Text>
      </View>
      <View style = {styles.options}>
        <TouchableOpacity style={styles.optionButton}>
        <Text style={styles.option}>Cool Option 1</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.optionButton}>
        <Text style={styles.option}>Cool Option 1</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.optionButton}>
        <Text style={styles.option}>Cool Option 1</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.optionButton}>
        <Text style={styles.option}>Cool Option 1</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.bottom}>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>SKIP</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>NEXT</Text >
        </TouchableOpacity>
        <TouchableOpacity onPress={()=>navigation.navigate("Result")} style={styles.button}>
          <Text style={styles.buttonText}>
            End
          </Text>
        </TouchableOpacity>
      </View>
     </View>
  );
}
export default quiz
const styles = StyleSheet.create({
  container:{
    paddingTop: 30,
  paddingHorizontal: 20,
  height:'100%',

  },
  top:{
    marginVertical: 16,
  },
  options:{
    marginVertical: 16,
    flex:1,
  },
  bottom:{
    marginBottom: 12,
    paddingVertical: 16,
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  button:{
   
    backgroundColor: '#1A759F',
    padding: 12,
    paddingHorizontal: 16,
    borderRadius: 16,
    alignItems: 'center',
    marginBottom: 30,
  },
  buttonText:{
    fontSize: 18,
    fontWeight: '600',
    color: 'white',
  },
  question:{
    fontSize: 28,
  },
  option:{
    fontSize: 18,
    fontWeight: '500',
    color: 'white',
  },
  optionButton:{
    paddingVertical: 8,
    marginVertical: 4,
    backgroundColor: '#34A0A4',
    paddingHorizontal: 8,
    borderRadius: 12,
  },
});
