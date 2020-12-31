import React, { useState, useEffect } from "react";
import { View, Text, TextInput, Button, StyleSheet } from "react-native";
import { FontAwesome } from '@expo/vector-icons';

const HomeScreen = ({ navigation }) => {

	const [originalPrice, setOriginalPrice] = useState("");
	const [discoutPercentage, setDiscountPercentage] = useState("");
	const [Total, setTotal] = useState("0");
	const [discount, setDiscount] = useState("0");
	const [history, setHistory] = useState([]);
	const [error, setError] = useState("");

	React.useLayoutEffect(() => {
		navigation.setOptions({
			headerRight: () => (
				<View style={{ margin: 2 }}>
					<FontAwesome
            name="history"
            size={29}
            color="white"
            onPress={() =>{
							navigation.navigate("History", {
								history,})
						}
            }/></View>
			),
		});
	}, [navigation, history]);

	useEffect(() => {
			let totalPrice =
				originalPrice - originalPrice * (discoutPercentage / 100);
			setTotal(totalPrice.toFixed(1));}
      
	, [originalPrice, discoutPercentage]);

	const saveHandler = () => {
		if (error == "") {
			var newData = {
				originalPrice,
				discoutPercentage,
				Total,
			}; 
			setHistory((history) => [...history, newData]);
			setOriginalPrice("");
			setDiscountPercentage("");
		}
	};

	return (
		<View style={styles.container}>
      <Text style={{ marginLeft: 20,fontSize: 20,  fontWeight: "500",fontFamily: 'lucida grande'}}>{"\n"}Product Price</Text>

			<TextInput
				style={[styles.inputStyles, { marginTop: 0, marginLeft: 20,height: 30, width:120}] }
     
        
				keyboardType="numeric"
				value={originalPrice}
				onChangeText={(price) => setOriginalPrice(price)}
			/>
            <Text style={{ marginLeft: 20,fontSize: 20, fontWeight: "500",fontFamily: 'lucida grande',marginTop: 15}}>Discount Perc.</Text>

			<TextInput
				style={[
					styles.inputStyles,
					{ marginTop: 2, marginBottom: 10, marginLeft: 20,height: 30, width:120},
				]}
				keyboardType="numeric"
				value={discoutPercentage}
				onChangeText={(disc) => setDiscountPercentage(disc)}
			/>

        <View style={styles.discountStyles}>
				<Text style={styles.price}>New Price: {Total}</Text>
			</View>
			<Text
				style={{
					color: "red",
					textAlign: "center",
					fontSize: 15,
					fontWeight: "bold",
				}}
			>
				{originalPrice && error}
			</Text>
			<Text style={styles.calculateStyles}>
				{originalPrice && (
					<View>
						<Button title="Save it!" onPress={saveHandler} color="brown" />
					</View>
				)}
			</Text>

			<View>
				<View
					style={{
						marginTop: 40,
						textAlign: "left",
						marginLeft: 10,
						marginBottom: 10,
					}}
				>
				</View>
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {},
	inputStyles: {
		borderWidth: 1,
		borderColor: "grey",
    padding: 5,
		borderRadius: 4,
	},
	discountStyles: {
		textAlign: "center",
		marginTop: 10,
		marginLeft: 10,
	},
	price: {
		fontFamily:"Arial",
		borderColor:"black",
    fontSize: 19,
    marginTop: 10,
    marginRight: 20,
		marginLeft: 20,
    borderWidth:3,
		width: "85%",
    height:31,
    borderRadius:4,
    textAlign: "center",
	},
	calculateStyles: {
		width: "50%",
		margin: "auto",
		marginTop: 15,
		marginLeft: 145,
	},
});

export default HomeScreen;
