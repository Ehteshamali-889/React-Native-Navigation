import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const HomeScreen=({navigation})=>{
  return(
    <View style={{flex:1,alignItems:'center',justifyContent:"center"}}>
      <Text>Home Screen</Text>
      <Button title="Go To Details Screen"
      onPress={()=> navigation.navigate("Details")} />
    </View>
  )
}
const DetailsScreen=({navigation})=>{
  return(
    <View style={{flex:1,alignItems:'center',justifyContent:"center"}}>
      <Text>Details Screen</Text>
      <Button title="Go To Details Screen...again"
      onPress={()=> navigation.navigate("Details")} />
      <Button title="Go To Home"
      onPress={()=> navigation.navigate("Home")} />
      <Button title="Go Back"
      onPress={()=> navigation.goBack()} />
      <Button title="Go to the First Screen"
      onPress={()=> navigation.popToTop()} />
    </View>
  )
}
const Stack = createNativeStackNavigator();
const App=()=> {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={
        {
          headerStyle:{
            backgroundColor:'#009387'
          },
          headerTintColor:'#fff',
          headerTitleStyle:{
            fontWeight:'bold'
          }
        }
      }>
          <Stack.Screen name="Home" component={HomeScreen} 
          options={{
            title:"Overview"
          }}
          />
          <Stack.Screen name="Details" component={DetailsScreen} />
      </Stack.Navigator>
  </NavigationContainer>
  );
}
export default App;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
