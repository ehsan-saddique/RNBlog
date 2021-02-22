import { createAppContainer } from 'react-navigation';
import React from "react"
import { createStackNavigator } from 'react-navigation-stack';
import IndexScreen from './src/screens/IndexScreen';
import { Provider } from "./src/context/BlogContext";

const navigator = createStackNavigator({
  Index: IndexScreen
},
  {
    initialRouteName: 'Index',
    defaultNavigationOptions: {
      title: 'Blogs',
      cardStyle: { backgroundColor: '#FFFFFF' }
    }
  }
)

const App = createAppContainer(navigator)

export default () => {
  return <Provider>
    <App />
  </Provider>
}