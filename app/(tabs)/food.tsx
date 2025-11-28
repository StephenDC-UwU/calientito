import { Image } from 'expo-image';
import { Search } from 'lucide-react-native';
import React from 'react';
import { FlatList, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const itemsFood = [
    {
        id: 0,
        bgColor: '#59080F',
        textColor: '#F294EC',
        title: "sushi",
        brand: "norimon",
        time: "15 min",
        img: {
            url: require("./assets/images/sushi_norimon.jpg"),
            alt: "sushi-norimon"
        },
        price: '0,99',
        description: 'Una explosión de sabor en cada bocado. Nuestro sushi combina ingredientes frescos, cortes precisos y el auténtico toque japonés que distingue a Norimon, Disfruta de rolls cuidadosamente elaborados con pescado de alta calidad, arroz sazonado a la perfección y un balance ideal de texturas. ¡Haz tu pedido y deja que el sabor hable por si solo!'
    }, {
        id: 1,
        bgColor: '#FE5E29',
        textColor: '#FFFFFF',
        title: "hot dog",
        brand: "lucho's",
        time: "15 min",
        img: {
            url: require("./assets/images/hot-dog.jpg"),
            alt: "hot-dog-luchos"
        },
        price: '1,99',
        description: 'Una explosión de sabor en cada bocado. Nuestro sushi combina ingredientes frescos, cortes precisos y el auténtico toque japonés que distingue a Norimon, Disfruta de rolls cuidadosamente elaborados con pescado de alta calidad, arroz sazonado a la perfección y un balance ideal de texturas. ¡Haz tu pedido y deja que el sabor hable por si solo!'
    }, {
        id: 2,
        bgColor: '#FFD02E',
        textColor: '#025548',
        title: "cocktail",
        brand: "bielsko",
        time: "15 min",
        img: {
            url: require("./assets/images/cocktail.jpg"),
            alt: "cocktail-bielsko"
        },
        price: '1,99',
        description: 'Una explosión de sabor en cada bocado. Nuestro sushi combina ingredientes frescos, cortes precisos y el auténtico toque japonés que distingue a Norimon, Disfruta de rolls cuidadosamente elaborados con pescado de alta calidad, arroz sazonado a la perfección y un balance ideal de texturas. ¡Haz tu pedido y deja que el sabor hable por si solo!'
    }, {
        id: 3,
        bgColor: '#131414',
        textColor: '#FFFFFF',
        title: "burger",
        brand: "norimon",
        time: "15 min",
        img: {
            url: require("./assets/images/burger.jpg"),
            alt: "burger-norimon"
        },
        price: '1,99',
        description: 'Una explosión de sabor en cada bocado. Nuestro sushi combina ingredientes frescos, cortes precisos y el auténtico toque japonés que distingue a Norimon, Disfruta de rolls cuidadosamente elaborados con pescado de alta calidad, arroz sazonado a la perfección y un balance ideal de texturas. ¡Haz tu pedido y deja que el sabor hable por si solo!'
    }
]


const FoodScreen = () => {


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
                <Search className='size-14 flex-none' size="30" strokeWidth={2} />
            </View>
            <FlatList
                className='flex-1 w-full'
                data={itemsFood}
                renderItem={({ item }) =>
                    <View className={`mx-3 my-1.5 rounded-xl`}
                        style={{
                            backgroundColor: item.bgColor,

                        }}
                    >
                        <ColoredText text={item.title} className={"text-5xl mx-4 my-5 font-bold"} />
                        <View className='flex-row justify-between'>
                            <ColoredText text={item.brand} className={"text-xl mx-4"} />
                            <ColoredText text={item.time} className={"border-2 mr-4 border-white rounded-full px-3 py-2"} />
                        </View>
                        <Image source={item.img.url} width='60' height='auto' />
                    </View>
                }
            />

        </SafeAreaView>
    )
}

export default FoodScreen