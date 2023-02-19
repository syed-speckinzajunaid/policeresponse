import {View, Text, TouchableOpacity,Button} from 'react-native';
import styles from '../styling';



function App() {
  
  return (
  <View>

<Text>  Police typically are responsible for maintaining public order and safety, enforcing the law, and preventing, detecting, and investigating criminal activities. These functions are known as policing. Police are often also entrusted with various licensing and regulatory activities. </Text>
    <Button
    title="Go to ambulance services"
    onPress={() => navigation.navigate('ambulance')}
  />
</View>
  );
};


export default App;
