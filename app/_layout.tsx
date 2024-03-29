import Colors from "@/constants/Colors";
import { Ionicons } from "@expo/vector-icons";
import FontAwesome from "@expo/vector-icons/FontAwesome";

import { useFonts } from "expo-font";
import { Stack, router } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { useEffect } from "react";
import { TouchableOpacity } from "react-native";

export {
	// Catch any errors thrown by the Layout component.
	ErrorBoundary,
} from "expo-router";

export const unstable_settings = {
	// Ensure that reloading on `/modal` keeps a back button present.
	initialRouteName: "(tabs)",
};

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function InitialLayout() {
	const [loaded, error] = useFonts({
		SpaceMono: require("../assets/fonts/SpaceMono-Regular.ttf"),
		...FontAwesome.font,
	});

	// Expo Router uses Error Boundaries to catch errors in the navigation tree.
	useEffect(() => {
		if (error) throw error;
	}, [error]);

	useEffect(() => {
		if (loaded) {
			SplashScreen.hideAsync();
		}
	}, [loaded]);

	if (!loaded) {
		return null;
	}

	return (
		<Stack>
			<Stack.Screen
				name="index"
				options={{
					headerShown: false,
				}}
			/>
			<Stack.Screen
				name="login"
				options={{
					title: "",
					headerBackTitle: " ",
					headerShadowVisible: false,
					headerStyle: {
						backgroundColor: Colors.background,
					},
					headerLeft: () => (
						<TouchableOpacity
							onPress={() => {
								router.back();
							}}
						>
							<Ionicons
								name="arrow-back"
								size={34}
								color={Colors.primary}
							/>
						</TouchableOpacity>
					),
				}}
			/>
			<Stack.Screen
				name="signup"
				options={{
					title: "",
					headerBackTitle: " ",
					headerShadowVisible: false,
					headerStyle: {
						backgroundColor: Colors.background,
					},
					headerLeft: () => (
						<TouchableOpacity
							onPress={() => {
								router.back();
							}}
						>
							<Ionicons
								name="arrow-back"
								size={34}
								color={Colors.primary}
							/>
						</TouchableOpacity>
					),
				}}
			/>
		</Stack>
	);
}

function RootLayoutNav() {
	return (
		<>
			<InitialLayout />
		</>
	);
}
