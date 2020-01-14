import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from "react-navigation";
import Datafetching from './screen/home';


const navigator = createStackNavigator({
  Home: { screen: Datafetching }
});

const App = createAppContainer(navigator);

export default App;


