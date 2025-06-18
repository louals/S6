import { sayHello } from 'api';
import { Text, View } from 'react-native';

export default function App() {
  console.log(sayHello());

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>{sayHello()}</Text>
    </View>
  );
}