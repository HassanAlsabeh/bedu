import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import {Alert} from 'react-native';
import urlAxios from './api';

export const login = createAsyncThunk('auth/login', async thunkAPI => {
  try {
    const loginData = new FormData();
    loginData.append('personal_id', '66771112345678');
    loginData.append('password', 123456);
    const response = await urlAxios.post('/authentication/signIn', loginData);
    console.log('logggggginnnnn', response);
    return {user: response.data.data};
  } catch (error) {
    console.log('zzzzzzzz');

    const message =
      (error.response && error.response.data && error.response.data.message) ||
      error.message ||
      error.toString();
    return thunkAPI.rejectWithValue();
  }
});

export const register = createAsyncThunk('auth/register', async thunkAPI => {
  try {
    const registerdata = new FormData();
    registerdata.append('name', 'hassan');
    registerdata.append('email', 'sabehf17+11@gmail.com');
    registerdata.append('password', '123456789');
    registerdata.append('confirm_password', '123456789');
    registerdata.append('mobile', '74455223');
    registerdata.append('gender', 'male');
    registerdata.append('personal_id', '1190031');
    registerdata.append('date_of_birth', '01-01-2002');

    const response = await urlAxios.post(
      '/authentication/signUp',
      registerdata,
    );
    console.log('registerData', response);
    return response.data;
  } catch (error) {
    const message =
      (error.response && error.response.data && error.response.data.message) ||
      error.message ||
      error.toString();
    return thunkAPI.rejectWithValue();
  }
});
const initialState = {
  authData: 1,
};
const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: {
    [register.fulfilled]: (state, action) => {
      console.log('regggggissss', action);
    },
    [register.rejected]: (state, action) => {
      console.log('regggggisssserrrrrrr', action);
    },
    [login.fulfilled]: (state, action) => {
      console.log('stateeeeeee', state);
      state.user = action.payload.user;
    },
    [login.rejected]: (state, action) => {
      console.log('rejeecctt', action);

      state.user = null;
    },
  },
});

const {reducer} = authSlice;
export default reducer;
