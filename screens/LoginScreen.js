import { StyleSheet, Text, View } from 'react-native';
import React, { useState, useEffect } from 'react';
import { KeyboardAvoidingView } from 'react-native';
import { Button, Input, Image } from "react-native-elements";
import { StatusBar } from 'expo-status-bar';
// import { auth } from '../firebase';

const LoginScreen = ({ navigation }) => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    // useEffect(() => {
    //     const unsubscribe =  auth.onAuthStateChanged((authUser) => {
    //         if(authUser){
    //             navigation.replace("Home");
    //         }
    //     })
    //     return unsubscribe;
    // }, []);

    const signIn = () => {};

    return (
        <KeyboardAvoidingView enabled behavior='padding' style={styles.container}>
            <StatusBar style="light" />
            <Image
                source={{
                    uri: "https://blog.mozilla.org/internetcitizen/files/2018/08/signal-logo.png",
                }}
                style={{ width: 200, height: 200 }}
            />
            <View style={styles.inputContainer}>
                <Input 
                    placeholder='Email' 
                    autoFocus 
                    type="email" 
                    value={email}
                    onChangeText={(text) => setEmail(text)}
                />
                <Input 
                    placeholder="Password" 
                    type="password" 
                    secureTextEntry
                    value={password}
                    onChangeText={(text) => setPassword(text)}
                />
            </View>

            <Button containerStyle={styles.button} onPress={signIn} title="Login" />
            <Button 
                containerStyle={styles.button} 
                type="outline" 
                title="Register" 
                onPress={() => navigation.navigate("Register")}
            />
            <View style={{ height: 100 }} />
        </KeyboardAvoidingView>
    )
}

export default LoginScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        padding: 10,
        backgroundColor: "white",
    },
    inputContainer: {
        width: 300,
    },
    button: {
        width: 200,
        marginTop: 10,
    },
    logo: {},
    input: {
        width: 300,
        padding: 30,
        backgroundColor: "white",
        borderRadius: 30,
        marginBottom: 10,
    },
})