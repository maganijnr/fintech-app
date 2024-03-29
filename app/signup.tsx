import {
	KeyboardAvoidingView,
	Platform,
	StyleSheet,
	Text,
	TextInput,
	TouchableOpacity,
	View,
} from "react-native";
import React, { useState } from "react";
import { defaultStyles } from "@/constants/Styles";
import Colors from "@/constants/Colors";
import { Link } from "expo-router";
import { StatusBar } from "expo-status-bar";

const Page = () => {
	const [countryCode, setCountryCode] = useState("");
	const [phoneNumber, setPhoneNumber] = useState("");
	const keyboardOffset = Platform.OS === "ios" ? 85 : 0;

	const onUserSignUp = () => {};
	return (
		<KeyboardAvoidingView
			style={{ flex: 1 }}
			behavior="padding"
			keyboardVerticalOffset={keyboardOffset}
		>
			<StatusBar style="dark" />
			<View
				style={[
					defaultStyles.container,
					{ backgroundColor: Colors.background },
				]}
			>
				<Text style={defaultStyles.header}>Let's get started!</Text>
				<Text style={defaultStyles.descriptionText}>
					Enter your phone number. We will send you a confirmation code
					there.
				</Text>
				<View style={styles.inputContainer}>
					<TextInput
						style={styles.input}
						defaultValue=""
						keyboardType="numeric"
						placeholder="Eg:234"
						value={countryCode}
						onChangeText={setCountryCode}
						placeholderTextColor={Colors.gray}
					/>
					<TextInput
						style={[styles.input, { flex: 1 }]}
						defaultValue=""
						keyboardType="numeric"
						placeholder="Mobile Number"
						value={phoneNumber}
						onChangeText={setPhoneNumber}
						placeholderTextColor={Colors.gray}
					/>
				</View>
				<Link href={"/login"} asChild style={defaultStyles.textLink}>
					<Text>Already have an account? Log in</Text>
				</Link>
				<View style={{ flex: 1 }}></View>
				<View style={{ marginBottom: 50 }}>
					<TouchableOpacity
						onPress={onUserSignUp}
						style={[
							defaultStyles.pillButton,
							{
								backgroundColor:
									phoneNumber === ""
										? Colors.primaryMuted
										: Colors.primary,
							},
						]}
					>
						<Text style={defaultStyles.buttonText}>Sign up</Text>
					</TouchableOpacity>
				</View>
			</View>
		</KeyboardAvoidingView>
	);
};

export default Page;

const styles = StyleSheet.create({
	inputContainer: {
		marginVertical: 40,
		flexDirection: "row",
		gap: 10,
	},
	input: {
		backgroundColor: Colors.lightGray,
		paddingHorizontal: 30,
		paddingVertical: 20,
		fontSize: 18,
		borderRadius: 16,
	},
});
