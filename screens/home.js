import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Image ,View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Button } from 'react-native-elements/dist/buttons/Button';
import Title from '../components/title'

const home = ({navigation}) => {
  
  return (
    <View style={styles.container}>
      <Title/>
      <View style={styles.bannerContainer}>
        <Image source = {{uri: 'https://cdn-icons-png.flaticon.com/512/2641/2641457.png'}}
        style = {styles.banner}
        resizeMode='contain'
        />
      </View>
      
      <TouchableOpacity  onPress={() => navigation.navigate('Quiz')}
        title="Go to quiz"  style={styles.button}>
       
        <Text style={styles.buttonText}>Start</Text>
      </TouchableOpacity>
     </View>
  );
}
export default home
const styles = StyleSheet.create({
banner:{
  height: 300,
  width: 300,
},
bannerContainer: {
  justifyContent: 'center',
  alignItems: 'center',
  flex:1,
},
container:{
  paddingTop: 30,
  paddingHorizontal: 20,
  height:'100%',
},
button:{
  width: '100%',
  backgroundColor: '#1A759F',
  padding: 16,
  borderRadius: 16,
  alignItems: 'center',
  marginBottom: 30,
},
buttonText:{
  fontSize: 24,
  fontWeight: '600',
  color: 'white',
},
});
