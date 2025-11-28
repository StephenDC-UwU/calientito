import { Link, Stack } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";

export default function NotFoundScreen() {
    return (
        <>
            <Stack.Screen options={{ title: 'Oops! Not Found' }} />
            <SafeAreaView className="flex-1 items-center">
                <Link href={"/"}>
                    Go back to Home
                </Link>
            </SafeAreaView>
        </>
    )
}