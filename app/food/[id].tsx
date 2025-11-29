import { Image } from 'expo-image';
import { router, Stack, useLocalSearchParams } from "expo-router";
import { ArrowLeft, CircleMinus, CirclePlus } from 'lucide-react-native';
import { useState } from 'react';
import { Alert, ScrollView, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from "react-native-safe-area-context";
import images from '../../assets/images.js';
import foods from '../../data/dataFood.json';

const getItemFood = (idItem: any) => {
    const result = foods.data.find((food) => food.id === parseInt(idItem))
    return result
}


const FoodDetails = () => {
    const initAmount = 1;
    const [amountFood, setAmountFood] = useState(initAmount);

    const handleAmountFood = (direction: string) => {
        let currentAmount = amountFood;

        if (direction === 'up') {
            currentAmount += 1;
        }
        if (direction === 'down') {
            currentAmount -= 1;
        }
        if (currentAmount < 1 || currentAmount > 99) {
            return
        }
        return setAmountFood(currentAmount);
    }



    const { id } = useLocalSearchParams();
    const itemFood = getItemFood(id);


    const RenderImage = ({ srcImage }: any) => {
        const imageSource = images[srcImage]
        return (
            <Image source={imageSource} style={{ width: '400', height: '400', resizeMode: 'contain' }} />
        )
    }

    const ColoredText = ({ text, className, color }: any) => (

        <Text
            className={className}
            style={{ color: color }}>
            {text}
        </Text>
    )

    const paragraphs = (paragraph: string) => {
        let renderParagraphs = paragraph.split('n/');
        return renderParagraphs.map((p) => p.trim());
    }

    return (

        <SafeAreaView className='flex-1 bg-black px-4' >
            <Stack.Screen options={{ headerShown: false }} />
            <ScrollView>
                <View className='w-full'>
                    <TouchableOpacity
                        onPress={() => router.back()}
                    >
                        <ArrowLeft size={24} strokeWidth={3} color={'white'} />
                    </TouchableOpacity>
                </View>
                <View className='items-center mt-6'>
                    <RenderImage srcImage={itemFood?.img.bgSlug} />
                </View>
                <View className='flex-row justify-between'>
                    <ColoredText text={itemFood?.title} color={itemFood?.textColor} className={"text-5xl font-bold uppercase"} />
                    <View className='flex flex-row items-center gap-6'>
                        <TouchableOpacity
                            onPress={() => handleAmountFood('down')}
                        >
                            <CircleMinus size={30} color={'black'} fill={'white'} />
                        </TouchableOpacity>
                        <Text className='color-white text-2xl text'>{amountFood}</Text>
                        <TouchableOpacity
                            onPress={() => handleAmountFood('up')}
                        >
                            <CirclePlus size={30} color={'black'} fill={'white'} />
                        </TouchableOpacity>
                    </View>
                </View>
                <View className='flex flex-row justify-between my-2'>
                    <View className='flex flex-row gap-5 items-center'>
                        <Text className='text-white text-3xl'>
                            {`${itemFood?.price}€`}
                        </Text>
                        <Text className='text-white text-3xl capitalize'>
                            {itemFood?.brand}
                        </Text>
                    </View>
                    <Text className={"border-[1px] mr-4 border-white rounded-full px-6 py-1 text-white"}>
                        {itemFood?.time}
                    </Text>
                </View>
                <View className='my-4'>
                    {
                        paragraphs(itemFood?.description).map((paragraph, index) => (
                            <Text
                                key={index}
                                className='text-white text-md text-left tracking-wide font-light mb-3'>{paragraph}</Text>
                        ))
                    }
                </View>
                <View className='w-full'>
                    <TouchableOpacity
                        className='bg-white text-black h-[4rem] w-auto text-center justify-center rounded-full mx-6 my-2'
                        onPress={() => Alert.alert(`idFood: ${itemFood?.id}, amountFood: ${amountFood}`)}
                    >
                        <Text className='text-center text-2xl font-bold'>Add to Cart</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </SafeAreaView >
    )
}

export default FoodDetails