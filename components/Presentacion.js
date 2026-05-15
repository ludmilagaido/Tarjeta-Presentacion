import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  Linking,
  Pressable,
} from 'react-native';

import {
  SafeAreaProvider,
  SafeAreaView,
} from 'react-native-safe-area-context';

export default function Presentacion() {

  const abrirInstagram = async () => {
    const url = 'https://instagram.com/ludmilagaido_';

    const supported = await Linking.canOpenURL(url);

    if (supported) {
      await Linking.openURL(url);
    } else {
      console.log('No se puede abrir el link');
    }
  };

  const abrirTwitter = async () => {
    const url = 'https://x.com/ludmig19?s=11';

    const supported = await Linking.canOpenURL(url);

    if (supported) {
      await Linking.openURL(url);
    } else {
      console.log('No se puede abrir el link');
    }
  };

  return (
    <SafeAreaProvider>

      <SafeAreaView style={s.container}>

        <ScrollView
          style={{ flex: 1 }}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={s.scrollContainer}
        >

          {/* ENCABEZADO */}
          <View style={s.header}>

            <Text style={s.nombre}>
              Ludmila Gaido
            </Text>

            <Text style={s.texto}>
              Un poco de mi vida
            </Text>

          </View>

          {/* FOTO PRINCIPAL */}
          <Image
            source={require('../assets/espejo.jpeg')}
            style={s.fotoPrincipal}
            resizeMode="cover"
          />

          {/* BOTÓN INSTAGRAM */}
          <Pressable
            onPress={abrirInstagram}
            style={({ pressed }) => [
              s.botonInstagram,
              pressed && { opacity: 0.7 },
            ]}
          >
            <Text style={s.linkInstagram}>
              @ludmilagaido_
            </Text>
          </Pressable>

          {/* TÍTULO */}
          <Text style={s.titulo}>
            Mi recorrido
          </Text>

          {/* TARJETAS */}

          <View style={s.tarjeta}>

            <Image
              source={require('../assets/BEBE.jpeg')}
              style={s.foto}
              resizeMode="cover"
            />

            <Text style={s.texto}>
              De bebé
            </Text>

          </View>

          <View style={s.tarjeta}>

            <Image
              source={require('../assets/jardin.jpeg')}
              style={s.foto}
              resizeMode="cover"
            />

            <Text style={s.texto}>
              En el jardincito
            </Text>

          </View>

          <View style={s.tarjeta}>

            <Image
              source={require('../assets/primavera.jpeg')}
              style={s.foto}
              resizeMode="cover"
            />

            <Text style={s.texto}>
              Primer primavera con remera
            </Text>

          </View>

          <View style={s.tarjeta}>

            <Image
              source={require('../assets/voley.jpeg')}
              style={s.foto}
              resizeMode="cover"
            />

            <Text style={s.texto}>
              El deporte es muy importante
              en mi vida, especialmente
              el vóley
            </Text>

          </View>

          <View style={s.tarjeta}>

            <Image
              source={require('../assets/campera.jpeg')}
              style={s.foto}
              resizeMode="cover"
            />

            <Text style={s.texto}>
              Hoy soy ella
            </Text>

          </View>

          {/* SECCIÓN TWITTER/X */}

          <View style={s.seccionTwitter}>

            <Text style={s.textoTwitter}>
              Seguime también en X 
            </Text>

            <Pressable
              onPress={abrirTwitter}
              style={({ pressed }) => [
                s.botonTwitter,
                pressed && { opacity: 0.7 },
              ]}
            >
              <Text style={s.linkTwitter}>
                @ludmig19
              </Text>
            </Pressable>

          </View>

          {/* FOOTER */}
          <Text style={s.footer}>
            Egresada 2026 🎓
          </Text>

        </ScrollView>

      </SafeAreaView>

    </SafeAreaProvider>
  );
}

const s = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: '#375261',
  },

  scrollContainer: {
    paddingBottom: 40,
    flexGrow: 1,
  },

  header: {
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#AECDDF',
  },

  nombre: {
    fontSize: 28,
    fontWeight: 'bold',
    color: 'beige',
  },

  texto: {
    fontSize: 14,
    marginTop: 5,
    textAlign: 'center',
    paddingHorizontal: 10,
    color: '#222',
  },

  fotoPrincipal: {
    width: '70%',
    height: 250,
    alignSelf: 'center',
    marginTop: 18,
    borderRadius: 10,
  },

  botonInstagram: {
    alignSelf: 'center',
    backgroundColor: '#4E7085',
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 15,
    marginTop: 15,
  },

  linkInstagram: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
  },

  titulo: {
    fontSize: 20,
    margin: 10,
    fontWeight: 'bold',
    color: '#8CB4D8',
    textAlign: 'center',
  },

  tarjeta: {
    backgroundColor: 'white',
    marginHorizontal: 10,
    marginVertical: 6,
    padding: 10,
    borderRadius: 10,
    alignItems: 'center',
  },

  foto: {
    width: '95%',
    height: 180,
    marginBottom: 5,
    borderRadius: 8,
  },

  /* TWITTER/X */

  seccionTwitter: {
    marginTop: 30,
    alignItems: 'center',
  },

  textoTwitter: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 12,
  },

  botonTwitter: {
    backgroundColor: '#111',
    paddingVertical: 14,
    paddingHorizontal: 35,
    borderRadius: 20,
  },

  linkTwitter: {
    color: 'white',
    fontSize: 17,
    fontWeight: 'bold',
  },

  footer: {
    textAlign: 'center',
    padding: 20,
    fontWeight: 'bold',
    color: 'white',
    fontSize: 16,
    marginTop: 15,
  },

});

