import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity,
  ImageBackground,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Feather } from "@expo/vector-icons"; // weather-like icons

export default function App() {
  const forecastData = [
    { day: "Tue", temp: "22°", condition: "Cloudy", icon: "cloud" },
    { day: "Wed", temp: "20°", condition: "Rainy", icon: "cloud-rain" },
    { day: "Thu", temp: "23°", condition: "Sunny", icon: "sun" },
    { day: "Fri", temp: "19°", condition: "Stormy", icon: "cloud-lightning" },
    { day: "Sat", temp: "21°", condition: "Partly Cloudy", icon: "cloud-sun" },
  ];

  return (
    <ImageBackground
      source={{
        uri: "data:image/jpeg;base64,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",
      }}
      style={styles.background}
      resizeMode="cover"
    >
      <LinearGradient
        colors={["rgba(0,0,0,0.6)", "rgba(0,0,0,0.3)"]}
        style={styles.overlay}
      >
        {/* Header */}

        <View style={styles.header}>
          <Text style={styles.city}>Cape Town</Text>
          <Text style={styles.date}>Tuesday, Sep 1 • 14:35</Text>
        </View>

        {/* Current Weather */}

        <View style={styles.currentWeather}>
          <Feather name="cloud-rain" size={90} color="#fff" />
          <Text style={styles.temp}>20°C</Text>
          <Text style={styles.condition}>Overcast with light drizzle</Text>
        </View>

        {/* Forecast */}

        <View style={styles.forecastSection}>
          <FlatList
            data={forecastData}
            horizontal
            keyExtractor={(item, index) => index.toString()}
            renderItem={({ item }) => (
              <View style={styles.forecastCard}>
                <Text style={styles.forecastDay}>{item.day}</Text>
                <Feather name={item.icon as any} size={32} color="#fff" />
                <Text style={styles.forecastTemp}>{item.temp}</Text>
              </View>
            )}
            showsHorizontalScrollIndicator={false}
          />
        </View>

        {/* Temp Toggle */}

        <View style={styles.toggle}>
          <TouchableOpacity style={styles.toggleBtn}>
            <Text style={styles.toggleText}>°C</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.toggleBtnInactive}>
            <Text style={styles.toggleTextInactive}>°F</Text>
          </TouchableOpacity>
        </View>

        <StatusBar style="light" />
      </LinearGradient>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
  },
  overlay: {
    flex: 1,
    padding: 20,
    justifyContent: "space-between",
  },
  header: {
    marginTop: 40,
  },
  city: {
    fontSize: 32,
    fontWeight: "bold",
    color: "#fff",
  },
  date: {
    fontSize: 16,
    color: "#ddd",
    marginTop: 4,
  },
  currentWeather: {
    alignItems: "center",
  },
  temp: {
    fontSize: 72,
    fontWeight: "300",
    color: "#fff",
    marginTop: 10,
  },
  condition: {
    fontSize: 18,
    color: "#eee",
    marginTop: 8,
    textAlign: "center",
  },
  forecastSection: {
    marginTop: 20,
  },
  forecastCard: {
    backgroundColor: "rgba(255,255,255,0.2)",
    borderRadius: 15,
    padding: 15,
    marginRight: 12,
    alignItems: "center",
  },
  forecastDay: {
    fontSize: 16,
    color: "#fff",
    marginBottom: 5,
  },
  forecastTemp: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#fff",
    marginTop: 5,
  },
  toggle: {
    flexDirection: "row",
    justifyContent: "center",
    marginBottom: 20,
  },
  toggleBtn: {
    backgroundColor: "#fff",
    paddingVertical: 8,
    paddingHorizontal: 20,
    borderRadius: 20,
    marginHorizontal: 5,
  },
  toggleBtnInactive: {
    backgroundColor: "rgba(255,255,255,0.2)",
    paddingVertical: 8,
    paddingHorizontal: 20,
    borderRadius: 20,
    marginHorizontal: 5,
  },
  toggleText: {
    color: "#333",
    fontWeight: "bold",
  },
  toggleTextInactive: {
    color: "#fff",
  },
});
