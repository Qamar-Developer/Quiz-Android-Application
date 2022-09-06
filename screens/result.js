import React from 'react';
import { Image,View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const result = ({navigation}) => {
  return (
    <View>
      <View>
        <Text>Result</Text>
      </View>
      <View style={styles.bannerContainer}>
      <Image source = {{uri: 'https://cdn-icons-png.flaticon.com/512/2641/2641457.png'}}
        style = {styles.banner}
        resizeMode='contain'
        />
      </View>
      <View>
        <TouchableOpacity onPress={()=>navigation.navigate("Home")}>
          <Text>Home</Text>
        </TouchableOpacity>
      </View>
     </View>
  );
}
export default result
const styles = StyleSheet.create({
  banner:{
    height: 300,
    width: 300,
  },
  bannerContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  container:{
    paddingTop: 30,
    paddingHorizontal: 20,
    height:'100%',
  }
});
