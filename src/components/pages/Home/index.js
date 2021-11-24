import * as React from 'react';
import {FlatList, View, StatusBar} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import {Searchbar} from 'react-native-paper';
import {connect} from 'react-redux';

import img from '../../../asset/Mr.jpg';
import colors from '../../../constants/colors';
import routes from '../../../navigation/routes';

import AppText from '../../atoms/AppText';
import AppProfileCard from '../../modecules/AppProfileCard/index';
import AppNoResult from '../../../screens/AppNoResult/index';
import styles from './styles';

function HomeScreen(props) {
  const {navigation} = props;

  const [searchQuery, setSearchQuery] = React.useState('');
  const onChangeSearch = query => setSearchQuery(query);

  return (
    <View style={styles.container}>
      <StatusBar
        barStyle="LIGHT-content"
        hidden={false}
        backgroundColor={colors.primary}
        translucent={true}
      />

      <AppText style={styles.title}>Welcome To </AppText>
      <AppText style={styles.subTitle}>USER App</AppText>

      <Searchbar
        placeholder="Search"
        onChangeText={onChangeSearch}
        value={searchQuery}
        style={styles.searchBar}
      />
      <View style={{marginTop: '10%'}}>
        {(searchQuery === '') | null ? (
          <FlatList
            data={props.user}
            renderItem={({item}) => (
              <View key={props.user.key} style={styles.ProfileContainer}>
                <AppProfileCard
                  image={img}
                  title={item.title}
                  name={item.name}
                  gender={item.gender}
                  dob={item.dob}
                  onPress={() => navigation.navigate(routes.PROFILE)}
                />
              </View>
            )}
          />
        ) : (
          <View>
            <AppNoResult />
          </View>
        )}
      </View>
    </View>
  );
}
const mapStateToProps = state => {
  return {
    user: state.user.array,
  };
};

const mapDispatch = dispatch => ({});

export default connect(mapStateToProps, mapDispatch)(HomeScreen);
