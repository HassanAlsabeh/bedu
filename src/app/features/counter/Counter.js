import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import {increment, decrement, reset} from './counterSlice';
const Counter = () => {
  const count = useSelector(state => state.counter.count);
  const dispatch = useDispatch();

  return (
    <View style={{alignItems: 'center', justifyContent: 'center', flex: 1}}>
      <Text>{count}</Text>
      <TouchableOpacity
        onPress={() => {
          dispatch(increment());
        }}>
        <Text>+</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          dispatch(decrement());
        }}>
        <Text>-</Text>
      </TouchableOpacity>
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
