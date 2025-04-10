import { useLocalSearchParams } from 'expo-router';
import { View, Text } from 'react-native';

import LoginScreen from './admin';

export default function RolePage() {
  const { id } = useLocalSearchParams();

  if (id === 'admin') return <LoginScreen />;
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text style={{ fontSize: 24 }}>404 - Role Not Found</Text>
    </View>
  );
}