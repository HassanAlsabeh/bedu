import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import {login, register, resetLogin} from './authSlice';
import {increment, decrement, reset} from './counterSlice';
const Counter = () => {
  const count = useSelector(state => state.counter.count);
  const auth = useSelector(state => state.auth.user);
  console.log('authhhhhhh', auth);
  const dispatch = useDispatch();

  return (
    <View style={{alignItems: 'center', justifyContent: 'center', flex: 1}}>
      <Text>{count}</Text>
      <TouchableOpacity
        onPress={() => {
          dispatch(login());
        }}>
        <Text>+</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          dispatch(register());
        }}>
        <Text>-</Text>
      </TouchableOpacity>

      <Text>{auth.name}</Text>
      <Text>{auth.personal_id}</Text>

      <TouchableOpacity
        onPress={() => {
          dispatch(reset());
        }}>
        <Text>reset</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Counter;
