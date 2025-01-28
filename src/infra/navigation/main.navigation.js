import React, { useContext } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { HomeScreen } from "../../screens/home.screen";
import { DetailsScreen } from "../../screens/details.screen";
import { BottomNavigation, BottomNavigationTab, Icon } from "@ui-kitten/components";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { AuthNavigator } from "./auth.navigator";
import { AuthContext } from "../../provider/auth";
import { TodoScreen } from "../../screens/todo.screen";

const { Navigator, Screen } = createBottomTabNavigator();

const HomeIcon = (props) => <Icon {...props} name='home-outline'/>;
const PersonIcon = (props) => <Icon {...props} name='person-outline'/>;
const CalendarIcon = (props) => <Icon {...props} name='calendar-outline'/>;
const CreditCardIcon = (props) => <Icon {...props} name='credit-card-outline'/>;
const BankIcon = (props) => <Icon {...props} name='file-text-outline'/>;

const BottomTabBar = ({ navigation, state }) => (
  <BottomNavigation
    selectedIndex={state.index}
    onSelect={(index) => navigation.navigate(state.routeNames[index])}
  >
    <BottomNavigationTab title="Home" icon={HomeIcon}/>
    <BottomNavigationTab title="Attendance" icon={PersonIcon}/>
    <BottomNavigationTab title="Leaves" icon={CalendarIcon}/>
    <BottomNavigationTab title="Expenses" icon={CreditCardIcon}/>
    <BottomNavigationTab title="Salary" icon={BankIcon}/>
  </BottomNavigation>
);

const TabNavigator = () => (
  <Navigator tabBar={(props) => <BottomTabBar {...props} />}>
    <Screen name="Home" component={HomeScreen} />
    <Screen name="Attendance" component={TodoScreen} />
    <Screen name="Leaves" component={DetailsScreen} />
    <Screen name="Expenses" component={TodoScreen} />
    <Screen name="Salary" component={DetailsScreen} />
  </Navigator>
);

export const AppNavigator = () => {
  const { isAuthenticated } = useContext(AuthContext);

  return (
    <NavigationContainer>
      {isAuthenticated ? <TabNavigator /> : <AuthNavigator />}
    </NavigationContainer>
  );
};
