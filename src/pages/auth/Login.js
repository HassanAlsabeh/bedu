import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Dimensions,
  Keyboard,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';

// You can use your custom background image

// expo install expo-font
import {useFonts} from 'expo-font';

// https://fonts.google.com/specimen/Source+Sans+Pro

// npm install react-native-elements
import {Icon} from 'react-native-elements';

// npm install react-native-animatable
import * as Animatable from 'react-native-animatable';

export default function Login() {
  //   const [loaded] = useFonts({
  //     SourceSansProLight,
  //     SourceSansProRegular,
  //     SourceSansProBold,
  //   });

  //   if (!loaded || !BackgroundImage) {
  //     return <Text>Loading...</Text>;
  //   }

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <KeyboardAvoidingView
        style={styles.container}
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
        keyboardVerticalOffset={Platform.OS === 'ios' ? 0 : 0}>
        <View style={styles.container}>
          <View style={{flex: 1}}>
            <Image
              style={{flex: 1, width: null}}
              source={{uri: 'https://wallpaperaccess.com/full/3045087.jpg'}}
            />
          </View>
          <Animatable.Text
            style={styles.titleText}
            animation="fadeInUp"
            delay={1500}>
            Travello
          </Animatable.Text>
          <View style={styles.bottomView}>
            <Text style={styles.loginText}>Login</Text>
            <View style={styles.inputView}>
              <Icon
                style={styles.inputIcon}
                name="person"
                type="ionicons"
                color="#5352ed"
              />
              <TextInput
                style={styles.input}
                placeholder="Username"
                autoCapitalize="none"
                keyboardType="email-address"
                textContentType="emailAddress"
              />
            </View>
            <View style={styles.inputView}>
              <Icon
                style={styles.inputIcon}
                name="lock"
                type="ionicons"
                color="#5352ed"
              />
              <TextInput
                style={styles.input}
                placeholder="Password"
                secureTextEntry={true}
                autoCapitalize="none"
              />
            </View>
            <Text style={styles.fpText}>Forgot Password?</Text>
            <TouchableOpacity style={styles.loginButton}>
              <Text style={styles.loginButtonText}>Login</Text>
            </TouchableOpacity>
            <Text style={styles.registerText}>
              Don't have an account?
              <Text style={{color: '#5352ed'}}>{' Register'}</Text>
            </Text>
          </View>
        </View>
      </KeyboardAvoidingView>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  titleText: {
    position: 'absolute',
    top: Dimensions.get('screen').height * 0.1,
    alignSelf: 'center',
    color: '#fff',

    fontSize: 60,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowOpacity: 0.44,
    shadowRadius: 10.32,
    elevation: 16,
  },
  bottomView: {
    backgroundColor: '#fff',
    opacity: 0.95,
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingTop: 10,
    paddingBottom: 20,
    paddingHorizontal: 20,
  },
  loginText: {
    fontSize: 24,
    marginTop: 12,
    marginBottom: 4,
  },
  inputView: {
    height: 40,
    borderRadius: 10,
    backgroundColor: '#f1f3f6',
    marginTop: 10,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  inputIcon: {
    paddingHorizontal: 8,
  },
  input: {
    height: 40,
    flex: 1,

    fontSize: 16,
    color: '#333',
  },
  loginButton: {
    backgroundColor: '#5352ed',
    paddingVertical: 10,
    borderRadius: 8,
    marginTop: 10,
  },
  loginButtonText: {
    color: '#fff',

    alignSelf: 'center',
    fontSize: 18,
  },
  registerText: {
    alignSelf: 'center',
    marginTop: 12,

    fontSize: 16,
  },
  fpText: {
    marginTop: 10,
    alignSelf: 'flex-end',

    fontSize: 16,
    color: '#5352ed',
  },
});
