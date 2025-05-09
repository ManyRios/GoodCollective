import { StyleSheet, Text, View, Image } from 'react-native';
import Layout from '../components/Layout/Layout';
import { InterSemiBold, InterSmall } from '../utils/webFonts';
import ActivityLog from '../components/ActivityLog';
import { Colors } from '../utils/colors';
import ProfileView from '../components/ProfileView';
import { LightningIcon } from '../assets';

function ActivityLogPage() {
  return (
    <Layout>
      <View style={styles.body}>
        <View style={[styles.container, styles.elevation]}>
          <View>
            <ProfileView
              firstName={'John'}
              lastName={'Doe'}
              ensDomain={'John.CELO'}
              userAddress={'q827tbc1386..134c'}
            />
          </View>

          <Text style={styles.title}>Restoring the Kakamega Forest</Text>

          <View style={styles.logHeader}>
            <Image source={LightningIcon} style={styles.titleIcon} />
            <Text style={styles.title}>Action Log</Text>
          </View>
        </View>

        <ActivityLog name="Silvi Tree Claim" id="0x723a86c93838c1facse....." creationDate="July 3, 2023" />
        <ActivityLog name="Silvi Tree Claim" id="0x723a86c93838c1facse....." creationDate="July 3, 2023" />
        <ActivityLog name="Silvi Tree Claim" id="0x723a86c93838c1facse....." creationDate="July 3, 2023" />
        <ActivityLog name="Silvi Tree Claim" id="0x723a86c93838c1facse....." creationDate="July 3, 2023" />
        <ActivityLog name="Silvi Tree Claim" id="0x723a86c93838c1facse....." creationDate="July 3, 2023" />
      </View>
    </Layout>
  );
}

const styles = StyleSheet.create({
  body: {
    gap: 24,
    backgroundColor: Colors.white,
  },

  container: {
    width: '100%',
    shadowColor: Colors.black,
    backgroundColor: Colors.white,
    padding: 16,
    gap: 16,
    marginBottom: 1,
    zIndex: 1,
  },
  logHeader: { flex: 1, flexDirection: 'row', gap: 8, alignItems: 'center' },
  elevation: {
    shadowColor: Colors.black,
    shadowOffset: {
      width: 0,
      height: 50,
    },
    shadowOpacity: 0.1,
    shadowRadius: 30,
    elevation: 60,
  },
  image: {
    width: '100%',
    height: 192,
  },

  titleIcon: {
    width: 32,
    height: 32,
  },
  pfp: {
    width: 64,
    height: 64,
    backgroundColor: Colors.white,
    borderRadius: 32,
  },

  line: {
    color: Colors.gray[100],
    fontSize: 16,
    ...InterSmall,
  },
  lIcon: {
    width: 32,
    height: 32,
  },
  title: {
    fontSize: 18,
    ...InterSemiBold,
  },
});

export default ActivityLogPage;
