import { router, Stack } from 'expo-router';
import { LockKeyhole, Mail } from 'lucide-react-native';
import { useState } from 'react';
import { Text, TextInput, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from "react-native-safe-area-context";
import users from '../../data/dataUser.json';

const LoginScreen = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const handleLogin = () => {
        let currentUser = users.data.filter((user) => user.email === email && user.password === password);
        if (currentUser.length > 0) {
            return router.push('/(tabs)/food')
        } else {
            setError("Invalide Credentials");
            setTimeout(() => setError(''), 1000);
        }
    }

    return (
        <SafeAreaView className='flex-1 bg-bg-primary'>
            <Stack.Screen options={{ headerShown: false }} />
            <View className='w-full items-center justify-center pt-[10rem] pb-[2rem]'>
                <Text className='text-7xl text-left'>Calientito</Text>
            </View>
            <View className='mx-4 mt-[2rem]'>
                <Text className='text-2xl text-left'>We're glad to hear you're back</Text>


                <View className='bg-bg-secondary flex-row items-center justify-start rounded-xl mt-[3rem] border-black border-b-[1px]'>
                    <View className='mx-2'>
                        <Mail size={24} color={'black'} />
                    </View>
                    <View className='ml-6'>
                        <Text>Email*</Text>
                        <TextInput
                            placeholder='Enter your email'
                            keyboardType='email-address'
                            value={email}
                            onChangeText={setEmail}
                        >
                        </TextInput>
                    </View>
                </View>
                <View className='bg-bg-secondary my-3 flex-row items-center justify-start rounded-xl mt-[1.5rem] border-black border-b-[1px]'>
                    <View className='mx-2'>
                        <LockKeyhole />
                    </View>
                    <View className='ml-6'>
                        <Text>Password*</Text>
                        <TextInput
                            placeholder='Enter your password'
                            secureTextEntry
                            value={password}
                            onChangeText={setPassword}
                        >
                        </TextInput>
                    </View>
                </View>
            </View>
            <TouchableOpacity
                className='bg-black h-14 items-center justify-center rounded-full mx-12 mt-[12rem]'
                onPress={handleLogin}
            >
                <Text className='text-white text-center text-xl font-normal'>
                    Log in
                </Text>
            </TouchableOpacity>

            {
                error !== '' && (
                    <Text className='bg-yellow-400 text-black h-[3em] text-center items-center justify-center mt-10'>
                        {error}
                    </Text>
                )
            }
            <View className="mt-[1.8rem] items-center">
                <View className="flex-row items-center justify-center">
                    <Text className="text-lg">Don't have an account yet?</Text>

                    <TouchableOpacity
                        onPress={() => router.push('/(auth)/register')}
                    >
                        <Text className="text-text-strong text-lg ml-1">
                            Join Calientito!
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>

        </SafeAreaView>
    );
}

export default LoginScreen;