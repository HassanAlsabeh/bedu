import React from 'react';
import Avatar from './src/components/styles/Avatar';
import styled from 'styled-components/native';
import {PersistGate} from 'redux-persist/integration/react';

import Header from './src/components/styles/Header';
import InputContainer from './src/components/styles/InputContainer';
import PressableButton from './src/components/styles/PressableButton';
import Card from './src/components/styles/Card';
import {persistor, store} from './src/app/store';
import {Provider} from 'react-redux';
import Login from './src/pages/auth/Login';
import Counter from './src/app/features/counter/Counter';
import {LogBox} from 'react-native';
const Container = styled.View`
  width: 100%;
  height: 50px;
  padding-horizontal: 10px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;
const RowContainer = styled.View`
  width: 100%;
  height: 50px;
  padding-horizontal: 10px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;
const DATA = [
  {
    id: '1',
    userAvatar: require('./src/assets/post1.png'),
    userName: 'User 1',
    postText:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
    postImage: require('./src/assets/post1.png'),
  },
  {
    id: '2',
    userAvatar: require('./src/assets/avatar2.png'),
    userName: 'User 2',
    postText:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
    postImage: require('./src/assets/post2.png'),
  },
  {
    id: '3',
    userAvatar: require('./src/assets/avatar3.png'),
    userName: 'User 3',
    postText:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
    postImage: require('./src/assets/post3.png'),
  },
  {
    id: '4',
    userAvatar: require('./src/assets/avatar4.png'),
    userName: 'User 4',
    postText:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
    postImage: require('./src/assets/post1.png'),
  },
];
LogBox.ignoreAllLogs();
export default function App({onPress, bgColor, title}) {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        {/* <Login /> */}
        <Counter />
        {/* <Container>
        <Header headerTitle="social" />
        <RowContainer>
          <Avatar imageSource={require('./src/assets/avatar1.png')} />
          <InputContainer />
        </RowContainer>
        <Card data={DATA} />
      </Container> */}
      </PersistGate>
    </Provider>
  );
}
