import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  Image,
  Dimensions,
  ScrollView,
  Pressable,
  FlatList,
  Modal,
} from "react-native";
import Footer from "../components/Footer";
import AsyncStorage from "@react-native-async-storage/async-storage";
import * as Animatable from "react-native-animatable";

const HEIGHT = Dimensions.get("window").height;
const WIDTH = Dimensions.get("window").width;

const products = [
  {
    id: 1,
    type: "Ordinary",
    name: "Serum D",
    price: "2000 DA",
    image: require("../../assets/image1.png"),
  },
  {
    id: 2,
    type: "Curology",
    name: "Anti-Aging",
    price: "1550 DA",
    image: require("../../assets/image2.png"),
  },
  {
    id: 3,
    type: "I’m fabulous",
    name: "Body oil",
    price: "3950 DA",
    image: require("../../assets/image3.png"),
  },
];

export default function Results({ navigation, route }) {
  const [photoResult, setPhotoResult] = useState("");
  useEffect(() => {
    if (route && route.params) {
      const { photo } = route.params;
      setPhotoResult(photo);
    } else {
      AsyncStorage.getItem("photo").then(
        (photo) => photo && setPhotoResult(photo)
      );
    }
  });
  const [isVisible, setIsVisible] = useState(true);
  useEffect(() => {
    setIsVisible(true);
  }, []);
  return (
    <View style={{}}>
      <ScrollView
        nestedScrollEnabled
        contentContainerStyle={{ alignItems: "center" }}
        style={{
          height: (90 * Dimensions.get("window").height) / 100,
        }}
      >
        <View
          style={{
            height: (60 * HEIGHT) / 100,
            width: "100%",
            alignItems: "center",
            backgroundColor: "#2D1010",
            borderRadius: (50 * WIDTH) / 100,
            borderTopLeftRadius: 0,
            borderTopRightRadius: 0,
          }}
        >
          <Text
            style={{
              fontFamily: "Cinzel",
              fontSize: 25,
              color: "white",
              marginTop: 10,
            }}
          >
            Results
          </Text>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-evenly",
              width: "100%",
              marginTop: 15,
            }}
          >
            {photoResult.length > 0 && (
              <>
                <Image
                  resizeMode="contain"
                  source={{ uri: photoResult }}
                  style={{
                    width: 150,
                    height: 150,
                    borderRadius: 75,
                    borderWidth: 3,
                    borderColor: "white",
                  }}
                />
                <View>
                  <View>
                    <Text style={{ color: "white", fontFamily: "Montserrat" }}>
                      Type
                    </Text>
                    <Text
                      style={{
                        color: "white",
                        fontFamily: "MontserratBold",
                        fontSize: 25,
                      }}
                    >
                      Acne
                    </Text>
                  </View>
                  <View
                    style={{
                      width: "60%",
                      height: 1,
                      backgroundColor: "white",
                      marginVertical: 10,
                    }}
                  />
                  <View>
                    <Text style={{ color: "white", fontFamily: "Montserrat" }}>
                      Probalility
                    </Text>
                    <Text
                      style={{
                        color: "white",
                        fontFamily: "MontserratBold",
                        fontSize: 25,
                      }}
                    >
                      68%
                    </Text>
                  </View>
                </View>
              </>
            )}
          </View>
          <View>
            <Text
              style={{
                color: "white",
                fontFamily: "Montserrat",
                fontSize: 20,
                marginTop: 10,
              }}
            >
              Possible Causes Probability
            </Text>
          </View>
          <View style={{ width: "100%", alignItems: "center" }}>
            <View style={{ width: "70%", alignItems: "center" }}>
              <Text
                style={{
                  color: "white",
                  fontFamily: "Montserrat",
                  fontSize: 16,
                  marginTop: 10,
                  alignSelf: "baseline",
                }}
              >
                Stress 68%
              </Text>
              <View
                style={{
                  width: "100%",
                  height: 15,
                  backgroundColor: "#C2C2C250",
                  borderRadius: 10,
                  overflow: "hidden",
                }}
              >
                <Animatable.View
                  animation={"slideInLeft"}
                  style={{
                    width: "68%",
                    backgroundColor: "#D88181",
                    height: "100%",
                    borderRadius: 10,
                  }}
                ></Animatable.View>
              </View>
            </View>
          </View>
          <View style={{ width: "100%", alignItems: "center" }}>
            <View style={{ width: "70%", alignItems: "center" }}>
              <Text
                style={{
                  color: "white",
                  fontFamily: "Montserrat",
                  fontSize: 16,
                  marginTop: 10,
                  alignSelf: "baseline",
                }}
              >
                Diet 52%
              </Text>
              <View
                style={{
                  width: "100%",
                  height: 15,
                  backgroundColor: "#C2C2C250",
                  borderRadius: 10,
                  overflow: "hidden",
                }}
              >
                <Animatable.View
                  animation={"slideInLeft"}
                  delay={100}
                  style={{
                    width: "52%",
                    backgroundColor: "#CAA29F",
                    height: "100%",
                    borderRadius: 10,
                  }}
                ></Animatable.View>
              </View>
            </View>
          </View>
          <View style={{ width: "100%", alignItems: "center" }}>
            <View style={{ width: "70%", alignItems: "center" }}>
              <Text
                style={{
                  color: "white",
                  fontFamily: "Montserrat",
                  fontSize: 16,
                  marginTop: 10,
                  alignSelf: "baseline",
                }}
              >
                Sleep 35%
              </Text>
              <View
                style={{
                  width: "100%",
                  height: 15,
                  backgroundColor: "#C2C2C250",
                  borderRadius: 10,
                  overflow: "hidden",
                }}
              >
                <Animatable.View
                  delay={200}
                  animation={"slideInLeft"}
                  style={{
                    width: "35%",
                    backgroundColor: "#C57722",
                    height: "100%",
                    borderRadius: 10,
                  }}
                ></Animatable.View>
              </View>
            </View>
          </View>
        </View>
        <View style={{ width: "80%", marginTop: 10 }}>
          <View>
            <Text style={{ fontFamily: "MontserratBold", fontSize: 16 }}>
              About Acne
            </Text>
            <Animatable.View
              style={{ width: "100%" }}
              animation={"fadeInLeft"}
              duration={700}
              delay={0}
            >
              <Pressable
                android_ripple={{ color: "#ffffff50" }}
                style={{
                  padding: 20,
                  marginTop: 10,
                  backgroundColor: "#CAA29F",
                  borderRadius: 15,
                }}
              >
                <Text
                  style={{
                    color: "white",
                    fontFamily: "Montserrat",
                  }}
                >
                  Acne is a skin condition that occurs when your hair follicles
                  become plugged with oil and dead skin cells. It causes
                  whiteheads, blackheads or pimples.
                </Text>
              </Pressable>
            </Animatable.View>
          </View>
        </View>
        <View style={{ width: "80%", marginTop: 10 }}>
          <View>
            <Text style={{ fontFamily: "MontserratBold", fontSize: 16 }}>
              Some Tips
            </Text>
            <Animatable.View
              style={{ width: "100%" }}
              animation={"fadeInRight"}
              duration={700}
              delay={500}
            >
              <Pressable
                android_ripple={{ color: "#ffffff50" }}
                style={{
                  padding: 20,
                  marginTop: 10,
                  backgroundColor: "#D88181",
                  borderRadius: 15,
                }}
              >
                <Text
                  style={{
                    color: "white",
                    fontFamily: "MontserratBold",
                    fontSize: 16,
                  }}
                >
                  Stress
                </Text>
                <Text
                  style={{
                    color: "white",
                    fontFamily: "Montserrat",
                  }}
                >
                  {"- Deep breathing exercises.\n - Meditation."}
                </Text>
              </Pressable>
            </Animatable.View>
          </View>
        </View>
        <Animatable.View
          style={{ width: "100%", alignItems: "center" }}
          animation={"fadeInLeft"}
          duration={700}
          delay={1000}
        >
          <Pressable
            android_ripple={{ color: "#ffffff50" }}
            style={{
              width: "80%",
              marginTop: 10,
              backgroundColor: "#CAA29F",
              borderRadius: 15,
              padding: 20,
            }}
          >
            <View style={{ width: "100%" }}>
              <View style={{ width: "100%" }}>
                <Text
                  style={{
                    color: "white",
                    fontFamily: "MontserratBold",
                    fontSize: 16,
                  }}
                >
                  Diet
                </Text>
                <Text
                  style={{
                    color: "white",
                    fontFamily: "Montserrat",
                  }}
                >
                  {"- Choosing whole grain foods.\n -  Eating protein foods."}
                </Text>
              </View>
            </View>
          </Pressable>
        </Animatable.View>
        <Animatable.View
          style={{ width: "100%", alignItems: "center" }}
          animation={"fadeInRight"}
          duration={700}
          delay={1500}
        >
          <Pressable
            android_ripple={{ color: "#ffffff50" }}
            style={{
              width: "80%",
              marginVertical: 10,
              backgroundColor: "#C57722",
              borderRadius: 15,
              padding: 20,
            }}
          >
            <View style={{ width: "100%" }}>
              <View>
                <Text
                  style={{
                    color: "white",
                    fontFamily: "MontserratBold",
                    fontSize: 16,
                  }}
                >
                  Sleep
                </Text>
                <Text
                  style={{
                    color: "white",
                    fontFamily: "Montserrat",
                  }}
                >
                  {
                    " - Stick to a sleep schedule.\n - Pay attention to what you eat and drink."
                  }
                </Text>
              </View>
            </View>
          </Pressable>
        </Animatable.View>
        <View style={{ width: "80%", marginVertical: 10 }}>
          <Text style={{ fontFamily: "MontserratBold" }}>
            Recommanded Products
          </Text>
        </View>
        <View style={{ width: "95%" }}>
          <FlatList
            contentContainerStyle={{ marginBottom: 20 }}
            horizontal
            nestedScrollEnabled
            showsHorizontalScrollIndicator={false}
            data={products}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
              <View
                style={{
                  borderRadius: 10,
                  marginRight: 10,
                  overflow: "hidden",
                }}
              >
                <Pressable
                  android_ripple={{ color: "#00000010" }}
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                    backgroundColor: "white",
                    paddingHorizontal: 15,
                    paddingVertical: 10,
                  }}
                >
                  <Image
                    style={{ width: 60, height: 60, marginRight: 10 }}
                    source={item.image}
                  />
                  <View>
                    <Text
                      style={{
                        fontFamily: "Montserrat",
                        color: "#B1B1B1",
                      }}
                    >
                      {item.type}
                    </Text>
                    <Text
                      style={{
                        fontFamily: "Montserrat",
                        color: "#494949",
                        fontSize: 15,
                      }}
                    >
                      {item.name}
                    </Text>
                    <Text
                      style={{
                        fontFamily: "Montserrat",
                        color: "#F08F5F",
                        fontSize: 15,
                      }}
                    >
                      {item.price}
                    </Text>
                  </View>
                </Pressable>
              </View>
            )}
          />
        </View>
        <View style={{ width: "100%", alignItems: "center", marginBottom: 10 }}>
          {[
            {
              name: "Dr. Usman Yousaf",
              picture: require("../../assets/Ellipse 21.png"),
            },
            {
              name: "Dr. Ury Maniel",
              picture: require("../../assets/Ellipse 21 (2).png"),
            },
            {
              name: "Dr. Nada Hamza",
              picture: require("../../assets/Ellipse 21 (1).png"),
            },
          ].map((item, index) => (
            <View
              key={index}
              style={{
                marginTop: 5,
                backgroundColor: "white",
                width: "85%",
                margin: 6,
                borderRadius: 10,
                padding: 14,
              }}
            >
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  marginTop: 10,
                }}
              >
                <Image
                  source={item.picture}
                  style={{
                    width: 50,
                    height: 50,
                    marginHorizontal: 6,
                    borderRadius: 999,
                  }}
                />
                <View style={{ marginHorizontal: 6 }}>
                  <Text
                    style={{
                      fontSize: 16,
                      fontWeight: 600,
                    }}
                  >
                    {item.name}
                  </Text>
                  <Text style={{ color: "#C4C4C4" }}>Dermatologist</Text>
                </View>
              </View>
              <View
                style={{
                  alignItems: "center",
                  flexDirection: "row",
                  justifyContent: "space-between",
                  backgroundColor: "#F8F8FC",
                  marginTop: 14,
                  padding: 10,
                }}
              >
                <Image
                  source={require("../../assets/calendar.png")}
                  style={{ width: 20, height: 20 }}
                />
                <Text style={{ fontWeight: 500 }}>Sunday - Thursday</Text>
                <Image
                  source={require("../../assets/bx_time-five.png")}
                  style={{ width: 20, height: 20 }}
                />
                <Text style={{ fontWeight: 500 }}>09am - 03pm</Text>
              </View>
            </View>
          ))}
        </View>
      </ScrollView>
      <View>
        <Footer navigation={navigation} index={2} />
      </View>
      <Modal visible={isVisible} transparent>
        <View
          style={{
            alignItems: "center",
            justifyContent: "center",
            height: "100%",
            width: "100%",
            backgroundColor: "#ffffff70",
          }}
        >
          <View
            style={{
              height: "85%",
              width: "85%",
              backgroundColor: "white",
              borderRadius: 20,
              overflow: "hidden",
              padding: 16,
            }}
          >
            <Image
              source={require("../../assets/tiny.png")}
              style={{ width: "100%", height: 200 }}
              resizeMode="contain"
            />
            <Text
              style={{
                fontWeight: 700,
                fontSize: 22,
                textAlign: "center",
                marginTop: 10,
              }}
            >
              02$ / Month
            </Text>
            <View style={{ marginTop: 10 }}>
              <Text
                style={{
                  fontWeight: 700,
                  fontSize: 20,
                  marginTop: 6,
                }}
              >
                Take it to another level
              </Text>
              <Text
                style={{
                  marginTop: 6,
                }}
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                vulputate libero et velit interdum, ac aliquet odio mattis.
                Class aptent taciti sociosqu ad litora torquent per conubia
                nostra.
              </Text>
              <View
                style={{
                  alignItems: "center",
                  width: "100%",
                  marginTop: 20,
                }}
              >
                <View
                  style={{
                    borderRadius: 10,
                    overflow: "hidden",
                    width: "100%",
                    alignItems: "center",
                  }}
                >
                  <Pressable
                    onPress={() => setIsVisible(false)}
                    android_ripple={{ color: "#ffffff50" }}
                    style={{
                      backgroundColor: "#1F1F1F",
                      width: "80%",
                      paddingVertical: 20,
                      alignItems: "center",
                      borderRadius: 10,
                    }}
                  >
                    <Text
                      style={{
                        color: "#fff",
                        fontFamily: "MontserratBold",
                        fontSize: 17,
                      }}
                    >
                      Go Premium Now
                    </Text>
                  </Pressable>
                </View>
              </View>
              <View
                style={{
                  alignItems: "center",
                  width: "100%",
                  marginTop: 10,
                }}
              >
                <View
                  style={{
                    borderRadius: 10,
                    overflow: "hidden",
                    width: "100%",
                    alignItems: "center",
                  }}
                >
                  <Pressable
                    onPress={() => setIsVisible(false)}
                    android_ripple={{ color: "#ffffff50" }}
                    style={{
                      borderColor: "#1F1F1F",
                      borderWidth: 2,
                      width: "80%",
                      paddingVertical: 20,
                      alignItems: "center",
                      borderRadius: 10,
                    }}
                  >
                    <Text
                      style={{
                        color: "#1F1F1F",
                        fontFamily: "MontserratBold",
                        fontSize: 17,
                      }}
                    >
                      3 Days Free Trial
                    </Text>
                  </Pressable>
                </View>
              </View>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
}
