import { StatusBar } from 'expo-status-bar';
import { View, Image } from 'react-native';
import { styles } from './styles';

export function Home() {
  return (
    <View style={styles.container}>
      <Image source={require("@/assets/logo.png")} style={styles.logo} />
      <StatusBar style="auto" />
    </View>
  );
}


