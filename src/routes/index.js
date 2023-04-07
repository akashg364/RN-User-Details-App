import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Users from '../screens/Users'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import { themeColor } from '../css/Theme';

const Tab = createBottomTabNavigator();

export default function RootNavigator() {
    return (
        <NavigationContainer>
            <Tab.Navigator>
                <Tab.Screen name="User Listing" component={Users}
                    options={{
                        tabBarLabel: 'Home',
                        tabBarIcon: ({ color, size }) => (
                            <MaterialCommunityIcons name="home" color={color} size={size} />
                        ),
                        headerStyle: {
                            backgroundColor: themeColor.primary
                        },
                        headerTitleAlign: 'center',
                        headerTintColor: themeColor.light,
                        headerTitleStyle: {
                            fontWeight: 'bold'
                        },
                    }}
                />
            </Tab.Navigator>
        </NavigationContainer>
    );
}