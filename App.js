//import { StatusBar } from 'expo-status-bar';
// import { AppRegistry } from 'react-native';
import { Provider } from 'react-redux';
import configureStore from './src/store';
import RootNavigator from './src/routes/index';
// import { name as appName } from './app.json';
// import { registerRootComponent } from 'expo'

export default function App() {
  return (
    <Provider store={configureStore}>
      <RootNavigator />
    </Provider>
  );
}
