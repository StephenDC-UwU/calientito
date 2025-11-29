import { Image } from 'expo-image';
import { Link, router, Stack } from 'expo-router';
import { ArrowLeft, X } from 'lucide-react-native';
import { useEffect, useState } from 'react';
import { FlatList, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from "react-native-safe-area-context";
import images from '../../assets/images.js';
import foods from '../../data/dataFood.json';

const ColoredText = ({ text, className, color }) => (
    <Text
        className={className}
        style={{ color: color, borderColor: color }}>
        {text}
    </Text>
)

const RenderImage = ({ slug }) => {
    const imageSource = images[slug]
    return (
        <Image source={imageSource} className='mx-5 my-4' style={{ width: 'full', height: 150, borderRadius: 20 }} />
    )
}


const SearchScreen = () => {

    const [textSearch, setTextSearch] = useState('');
    const [foodSearched, setFoodSearched] = useState([]);


    useEffect(() => {
        if (textSearch === '') {
            setFoodSearched([]);
        } else {
            return setFoodSearched(foods.data.filter((food) => food.title.toLowerCase().includes(textSearch.toLowerCase())));
        }
    }, [textSearch])



    return (
        <SafeAreaView className='flex-1 bg-bg-primary'>
            <Stack.Screen options={{ headerShown: false }} />
            <View className='border-b-[0.8px] border-b-[#9e9b8b] '>
                <View className='flex flex-row items-center w-full text-center gap-4 px-4 py-3'>
                    <TouchableOpacity
                        onPress={() => router.back()}
                    >
                        <ArrowLeft
                            className='flex-none text-center'
                            size={24} strokeWidth={2} color={'#8D8976'} />
                    </TouchableOpacity>
                    <TextInput
                        className='grow text-black'
                        placeholder='Search by name'
                        value={textSearch}
                        onChangeText={setTextSearch}
                    >
                    </TextInput>
                    <TouchableOpacity
                        onPress={() => setTextSearch('')}
                    >
                        <X
                            className='flex-none text-center'
                            size={20} color={'#8D8976'} />
                    </TouchableOpacity>

                </View>

            </View>
            {textSearch !== '' ? (
                <FlatList
                    data={foodSearched}
                    renderItem={({ item }) =>
                        <Link
                            className='my-1.5 w-full flex-1 m-2'
                            href={`/food/${item.id}`} asChild
                        >
                            <TouchableOpacity className={`w-full px-3 pt-4 pb-1 rounded-3xl`}
                                style={{
                                    backgroundColor: item.bgColor,
                                }}
                            >
                                <View className='flex flex-row justify-between pb-3 '>
                                    <ColoredText text={item.brand} color={item.textColor} className={"text-xl font-semibold  capitalize"} />
                                    <ColoredText text={item.time} color={item.textColor} className={"border-[1px] rounded-full px-4 py-1.5"} />
                                </View>
                                <RenderImage slug={item.img.slug} />
                                <ColoredText text={item.title} color={item.textColor} className={"text-3xl my-2 font-extrabold uppercase"} />
                            </TouchableOpacity >
                        </Link>
                    }
                    numColumns={2}
                />
            ) : (
                <View className='flex-1 items-center justify-center'>
                    <Text className='text-3xl font-semibold color-[#9e9b8b]'>Tipyng for tasted real flavour</Text>
                    <Image source={require('../../assets/images/search_icon.png')} style={{ width: '400', height: '400', resizeMode: 'contain' }} />
                </View>
            )}
        </SafeAreaView>
    );
}

export default SearchScreen;
