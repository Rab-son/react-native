import { View } from 'react-native';
import AppButton from './app/components/AppButton';
import ViewImageScreen from './app/screens/ViewImageScreen';
import WelcomeScreen from './app/screens/WelcomeScreen';


export default function App() {
  return <View
    style={{
      backgroundColor: "#f8f4f4",
      padding: 20,
      paddingTop: 100
    }}
  >
    <Card
      tittle="Red Jacket For Sale"
      subTitle="$100"
      image="./app/assets/jacket.jpg"
    />
  </View>;
}


