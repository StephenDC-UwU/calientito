import { Image } from 'expo-image';
import { Link } from 'expo-router';
import { Search } from 'lucide-react-native';
import React from 'react';
import { FlatList, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import images from '../../assets/images.js';
import foods from '../../data/dataFood.json';


const FoodScreen = () => {
    const RenderImage = ({ slug }) => {
        const imageSource = images[slug]
        return (
            <Image source={imageSource} className='mx-5 my-4' style={{ width: 'full', height: 160, borderRadius: 20 }} />
        )
    }

    const ColoredText = ({ text, className }) => (
        <Text
            className={className}
            style={{ color: 'white' }}>
            {text}
        </Text>
    )

    return (
        <SafeAreaView className='bg-bg-primary flex-1 flex-col items-center'>
            <View className='flex flex-row p-10 w-full'>
                <Image className={'size-14 flex-none grow-3 w-15 h-full rounded-full'} width='60' height='auto' source={require("../../assets/images/react-logo.png")} alt='profile' />
                <Text className='size-14 grow items-center justify-center text-center text-4xl font-bold'>Calientito</Text>
                <Link href={'/search'} asChild>
                    <TouchableOpacity>
                        <Search className='size-14 flex-none' size="30" strokeWidth={2} />
                    </TouchableOpacity>
                </Link>
            </View>
            <FlatList
                className='flex-1 w-full px-3'
                data={foods.data}
                renderItem={({ item }) =>
                    <Link
                        className='my-1.5 w-full'
                        href={`/food/${item.id}`} asChild
                    >
                        <TouchableOpacity className={`w-full px-5 py-5 rounded-3xl`}
                            style={{
                                backgroundColor: item.bgColor,

                            }}
                        >
                            <ColoredText text={item.title} className={"text-5xl my-2 font-bold uppercase"} />
                            <View className='flex-row justify-between py-3'>
                                <ColoredText text={item.brand} className={"text-2xl font-semibold  capitalize"} />
                                <ColoredText text={item.time} className={"border-[1px] mr-4 border-white rounded-full px-6 py-1.5"} />
                            </View>
                            <RenderImage slug={item.img.slug} />
                        </TouchableOpacity >
                    </Link>
                }
            />
        </SafeAreaView >
    )
}

export default FoodScreen