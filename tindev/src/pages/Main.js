import React from 'react';
import {
  View,
  SafeAreaView,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
} from 'react-native';

import axios from '../services/api';
import logo from '../assets/logo.png';
import dislikes from '../assets/dislikes.png';
import likes from '../assets/likes.png';

export default function Main() {
  return (
    <SafeAreaView style={styles.container}>
      <Image source={logo} style={styles.logo} />
      <View style={styles.cardsContainer}>
        <View style={styles.card}>
          <Image
            source={{
              uri: 'https://avatars2.githubusercontent.com/u/861751?v=4',
            }}
          />
          <View style={styles.footer}>
            <Text style={styles.name}>Mauri Vinicius</Text>
            <Text style={styles.bio} numberOfLines={3}>
              "viniciusmauri", "bio": "Desenvolvedor Java, NodeJs. Formado em
              Sistemas de Informação pela UNA - Belo Horizonte. Apaixonado pelo
              que faz, e entusiasta com novas tecnologias.
            </Text>
          </View>
        </View>
      </View>
      <View style={styles.buttonsContainer}>
        <TouchableOpacity style={styles.button}>
          <Image source={dislikes} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Image source={likes} />
        </TouchableOpacity>
      </View>
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  cardsContainer: {
    flex: 1,
    alignSelf: 'stretch',
    justifyContent: 'center',
    maxHeight: 500,
  },

  cards: {
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
    margin: 30,
    overflow: 'hidden',
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
  },

  avatar: {
    flex: 1,
    height: 300,
  },
  footer: {
    backgroundColor: '#fff',
    paddingHorizontal: 20,
    paddingVertical: 15,
  },

  name: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
  bio: {
    fontSize: 14,
    color: '#999',
    marginTop: 5,
    lineHeight: 18,
  },

  logo: {
    marginTop: 40,
  },

  buttonsContainer: {
    flexDirection: 'row',
    marginBottom: 30,
  },

  button: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: '#fff',
    justifyContent: 'center',
    marginHorizontal: 20,
    elevation: 2,
  },
});
