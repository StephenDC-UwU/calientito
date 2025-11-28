import { Tabs } from "expo-router";
import { Hamburger, History, ShoppingBag } from 'lucide-react-native';
import { Text, View } from "react-native";


interface TabIconProps {
    icon: "hamburguer" | "history" | "cart";
    focused: boolean;
    label: string;
}

const iconsMap = {
    hamburguer: Hamburger,
    history: History,
    cart: ShoppingBag
}

const TabIcon = ({ icon, label, focused }: TabIconProps) => {
    const IconComponent = iconsMap[icon];

    if (focused) {
        return (
            <View className="flex flex-1 min-w-[90px] min-h-full mt-6 justify-center items-center">
                <View className="min-w-[90px]  rounded-full bg-bg-secondary items-center py-1">
                    <IconComponent size={24} color="#262626" />
                </View>
                <View>
                    <Text >
                        {label}
                    </Text>
                </View>
            </View>
        );
    }

    return (
        <View className="flex flex-1 min-w-[60px] min-h-[50px] mt-6 justify-center items-center rounded-full">
            <View className="min-w-[90px]  rounded-full items-center py-1">
                <IconComponent size={24} color="#262626" />
            </View>
            <View>
                <Text >
                    {label}
                </Text>
            </View>
        </View>
    )
}



const TabLayout = () => {

    return (
        <Tabs
            screenOptions={{
                tabBarShowLabel: false,
                tabBarItemStyle: {
                    flex: 1,
                    justifyContent: "center",
                    alignItems: "center",
                },
                tabBarStyle: {
                    height: 90,
                    marginTop: 1,
                    backgroundColor: "#FFFCF7"
                },
            }}
        >
            <Tabs.Screen name="index" options={{
                tabBarItemStyle: { display: "none" }, headerShown: false
            }} />
            <Tabs.Screen name="food" options={{
                headerShown: false, tabBarIcon: ({ color, focused }) => (
                    <TabIcon icon="hamburguer" focused={focused} label={"Food"} />
                )
            }} />
            <Tabs.Screen name="history" options={{
                title: 'History', headerShown: false, tabBarIcon: ({ color, focused }) => (
                    <TabIcon icon="history" focused={focused} label={"History"} />

                )
            }} />
            <Tabs.Screen name="cart" options={{
                title: 'Cart', headerShown: false, tabBarIcon: ({ color, focused }) => (
                    <TabIcon icon="cart" focused={focused} label={"Cart"} />
                )
            }} />
        </Tabs>
    )
}

export default TabLayout;