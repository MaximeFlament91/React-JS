import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

// COMPOSANTS
import Articles from './screens/articles/getArticles';
import PostArticles from './screens/articles/postArticles';
import DetailArticle from './screens/articles/detailArticle';

export default function App() {
  return (
    <View style={styles.container}>
      <Articles/>
      <StatusBar style="auto" />
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
