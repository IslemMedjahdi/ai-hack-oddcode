import { onAuthStateChanged } from "firebase/auth";
import React, { useEffect, useState } from "react";
import {
  Dimensions,
  Pressable,
  Text,
  View,
  Image,
  Button,
  ScrollView,
} from "react-native";
import { auth, db } from "../core/firebaseConfig";
import { doc, getDoc } from "firebase/firestore";

const WIDTH = Dimensions.get("window").width;
const HEIGHT = Dimensions.get("window").height;

const watches = [
  {
    id: 1,
    name: "Garmin",
    picture: require("../../assets/Garmin-Logo-2006 1.png"),
    selected: false,
  },
  {
    id: 2,
    name: "Garmin",
    picture: require("../../assets/unnamed 1.png"),
    selected: false,
  },
  {
    id: 3,
    name: "Garmin",
    picture: require("../../assets/Peloton-Cycle-Logo 1.png"),
    selected: false,
  },
  {
    id: 4,
    name: "Garmin",
    picture: require("../../assets/50097 1.png"),
    selected: false,
  },
  {
    id: 5,
    name: "Garmin",
    picture: require("../../assets/Fitbit_logo 1.png"),
    selected: false,
  },
];

export default function SelectWearable({ navigation }) {
  const [selected, setSelected] = useState(null);
  const [loading, setLoading] = useState(false);
  const [user, setUser] = useState({ fName: "..." });
  const getUser = async (id) => {
    const snap = await getDoc(doc(db, "users", id));
    if (snap.exists()) {
      setUser(snap.data());
    }
  };
  const selectHandler = async () => {};
  useEffect(() => {
    /* if (auth) {
      const unsub = onAuthStateChanged(auth, (currentUser) => {
        if (currentUser) {
          getUser(currentUser.uid);
        } else {
          navigation.replace("Login");
        }
      });
      return () => unsub();
    } */
  }, [auth]);
  return (
    <View style={{ flex: 1 }}>
      <View
        style={{
          height: (20 * HEIGHT) / 100,
          alignItems: "center",
          backgroundColor: "#2D1010",
          borderRadius: (45 * WIDTH) / 100,
          borderTopLeftRadius: 0,
          borderTopRightRadius: 0,
          justifyContent: "center",
        }}
      >
        <Text style={{ fontFamily: "Cinzel", fontSize: 25, color: "white" }}>
          Select A Wearable
        </Text>
      </View>
      <ScrollView contentContainerStyle={{ marginTop: 10 }}>
        <View
          style={{
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {watches.map((watch) => (
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
                padding: 20,
              }}
              key={watch.id}
            >
              <Image
                source={watch.picture}
                style={{ width: 80, height: 50, marginHorizontal: 5 }}
                resizeMode="contain"
              />
              <Pressable
                android_ripple={{ color: "#ffffff50" }}
                style={{
                  backgroundColor:
                    watch.id === selected && !loading ? "#CAA29F" : "#1F1F1F",
                  paddingHorizontal: 40,
                  paddingVertical: 20,
                  alignItems: "center",
                  borderRadius: 10,
                  marginHorizontal: 5,
                }}
                onPress={() => {
                  if (!selected) {
                    setSelected(watch.id);
                    setLoading(true);
                    setTimeout(() => setLoading(false), 2000);
                  }
                }}
              >
                <Text
                  style={{
                    color: "#fff",
                    fontFamily: "MontserratBold",
                    fontSize: 17,
                  }}
                >
                  {!loading && watch.id === selected
                    ? "connected"
                    : `Connect ${
                        loading && watch.id === selected ? "..." : ""
                      }`}
                </Text>
              </Pressable>
            </View>
          ))}
          <Pressable
            android_ripple={{ color: "#ffffff50" }}
            style={{
              backgroundColor: selected && !loading ? "#1F1F1F" : "#1F1F1F70",
              paddingHorizontal: 40,
              paddingVertical: 20,
              alignItems: "center",
              borderRadius: 10,
            }}
            disabled={loading && !selected}
            onPress={() => navigation.replace("Home")}
          >
            <Text
              style={{
                color: "#fff",
                fontFamily: "MontserratBold",
                fontSize: 17,
              }}
            >
              Continue
            </Text>
          </Pressable>
        </View>
      </ScrollView>
    </View>
  );
}
