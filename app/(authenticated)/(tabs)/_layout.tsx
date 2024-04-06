import React from "react";
import { Tabs } from "expo-router";
import Colors from "@/constants/Colors";
import { FontAwesome } from "@expo/vector-icons";

const Layout = () => {
	return (
		<Tabs
			screenOptions={{
				tabBarActiveTintColor: Colors.primary,
			}}
		>
			<Tabs.Screen
				name="home"
				options={{
					title: "Home",
					tabBarIcon: ({ size, color }) => (
						<FontAwesome color={color} name="home" size={size} />
					),
				}}
			/>

			<Tabs.Screen
				name="invest"
				options={{
					title: "Invest",
					tabBarIcon: ({ size, color }) => (
						<FontAwesome color={color} name="line-chart" size={size} />
					),
				}}
			/>
			<Tabs.Screen
				name="transfer"
				options={{
					title: "Transfers",
					tabBarIcon: ({ size, color }) => (
						<FontAwesome color={color} name="exchange" size={size} />
					),
				}}
			/>
			<Tabs.Screen
				name="crypto"
				options={{
					title: "Crypto",
					tabBarIcon: ({ size, color }) => (
						<FontAwesome color={color} name="bitcoin" size={size} />
					),
				}}
			/>
			<Tabs.Screen
				name="lifestyle"
				options={{
					title: "Lifestyle",
					tabBarIcon: ({ size, color }) => (
						<FontAwesome color={color} name="th" size={size} />
					),
				}}
			/>
		</Tabs>
	);
};

export default Layout;
