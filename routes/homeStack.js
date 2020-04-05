import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';

import Home from '../screens/home';
import GiveHelp from '../screens/giveHelp';
import NeedHelp from '../screens/needHelp';

const screens = {
    'Twoja Pomoc':{
        screen: Home
    },
    'Chce Pomoc':{
        screen: GiveHelp
    },
    'Potrzebuje Pomocy':{
        screen: NeedHelp
    },
}

const HomeStack = createStackNavigator(screens);

export default createAppContainer(HomeStack);