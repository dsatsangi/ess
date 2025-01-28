import React, { useContext } from "react";
import { SafeAreaView, StyleSheet, ScrollView, TouchableOpacity, View } from "react-native";
import { Layout, Text, Icon, Divider } from "@ui-kitten/components";
import { AuthContext } from "../provider/auth";

const QuickLinkItem = ({ icon, title, onPress }) => (
  <TouchableOpacity style={styles.quickLink} onPress={onPress}>
    <Icon pack='eva' name={icon} style={styles.linkIcon} fill="#8F9BB3" />
    <Text category="s1">{title}</Text>
    <Icon pack='eva' name="arrow-ios-forward" style={styles.arrowIcon} fill="#8F9BB3" />
  </TouchableOpacity>
);

export const HomeScreen = () => {
  const { userInfo } = useContext(AuthContext);
  const lastCheckIn = "03:12 pm on 21 Jan";

  const quickLinks = [
    { title: 'Request Attendance', icon: 'person' },
    { title: 'Request Leave', icon: 'calendar' },
    { title: 'Claim an Expense', icon: 'credit-card' },
    { title: 'View Salary Slips', icon: 'file' },
  ];

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <Layout style={styles.header}>
          <Text category="h4" style={styles.greeting}>
            Hey, {userInfo?.name || 'User'} 👋
          </Text>
          <Text category="s1" appearance="hint">
            Last check-in was at {lastCheckIn} · <Text status="info">View List</Text>
          </Text>
          
          <TouchableOpacity style={styles.checkButton}>
            <Icon name="log-out" style={styles.checkIcon} fill="#000" />
            <Text category="s1">Check Out</Text>
          </TouchableOpacity>
        </Layout>

        <Layout style={styles.section}>
          <Text category="h5" style={styles.sectionTitle}>Quick Links</Text>
          {quickLinks.map((link, index) => (
            <React.Fragment key={index}>
              <QuickLinkItem
                icon={link.icon}
                title={link.title}
                onPress={() => console.log(`Pressed ${link.title}`)}
              />
              {index < quickLinks.length - 1 && <Divider />}
            </React.Fragment>
          ))}
        </Layout>

        <View style={styles.tabButtons}>
          <TouchableOpacity style={[styles.tabButton, styles.activeTab]}>
            <Text category="s1">My Requests</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.tabButton}>
            <Text category="s1" appearance="hint">Team Requests</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  header: {
    padding: 20,
    backgroundColor: 'white',
  },
  greeting: {
    marginBottom: 8,
  },
  checkButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
    padding: 15,
    borderRadius: 8,
    marginTop: 15,
  },
  checkIcon: {
    width: 24,
    height: 24,
    marginRight: 10,
  },
  section: {
    marginTop: 20,
    backgroundColor: 'white',
    padding: 20,
  },
  sectionTitle: {
    marginBottom: 15,
  },
  quickLink: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 15,
  },
  linkIcon: {
    width: 24,
    height: 24,
    marginRight: 15,
  },
  arrowIcon: {
    width: 24,
    height: 24,
    marginLeft: 'auto',
  },
  tabButtons: {
    flexDirection: 'row',
    marginTop: 20,
    paddingHorizontal: 20,
  },
  tabButton: {
    flex: 1,
    paddingVertical: 15,
    alignItems: 'center',
  },
  activeTab: {
    borderBottomWidth: 2,
    borderBottomColor: '#000',
  }
});
