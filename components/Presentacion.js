import { StyleSheet, Text, View, Image, ScrollView, Linking, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

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

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView contentContainerStyle={{ backgroundColor: '#375261', paddingBottom: 20 }}>

        {/* ENCABEZADO */}
        <View style={s.header}>
          <Text style={s.nombre}>Ludmila Gaido</Text>
          <Text style={s.texto}>Un poco de mi vida</Text>
        </View>

        {/* FOTO ACTUAL */}
        <Image
          source={require('../assets/espejo.jpeg')}
          style={s.fotoPrincipal}
        />

        {/* INSTAGRAM */}
        <TouchableOpacity onPress={abrirInstagram}>
          <Text style={s.link}>@ludmilagaido_</Text>
        </TouchableOpacity>

        {/* FOTOS DE VIDA */}
        <Text style={s.titulo}>Mi recorrido</Text>

        <View style={s.tarjeta}>
          <Image source={require('../assets/BEBE.jpeg')} style={s.foto} />
          <Text style={s.texto}>De bebé</Text>
        </View>

        <View style={s.tarjeta}>
          <Image source={require('../assets/jardin.jpeg')} style={s.foto} />
          <Text style={s.texto}>En el jardincito</Text>
        </View>

        <View style={s.tarjeta}>
          <Image source={require('../assets/primavera.jpeg')} style={s.foto} />
          <Text style={s.texto}>Primer primavera con remera</Text>
        </View>

        <View style={s.tarjeta}>
          <Image source={require('../assets/voley.jpeg')} style={s.foto} />
          <Text style={s.texto}>
            El deporte es muy importante en mi vida, especialmente el vóley
          </Text>
        </View>

        <View style={s.tarjeta}>
          <Image source={require('../assets/campera.jpeg')} style={s.foto} />
          <Text style={s.texto}>Hoy soy ella</Text>
        </View>

        {/* CIERRE */}
        <Text style={s.footer}>Egresada 2026 🎓</Text>

      </ScrollView>
    </SafeAreaView>
  );
}

const s = StyleSheet.create({
  header: { 
    alignItems: 'center', 
    padding: 20, 
    backgroundColor: '#AECDDF' 
  },

  nombre: { 
    fontSize: 28, 
    fontWeight: 'bold', 
    color: 'beige' 
  },

  texto: { 
    fontSize: 14, 
    marginTop: 5, 
    textAlign: 'center',
    paddingHorizontal: 10
  },

  fotoPrincipal: { 
    width: '70%', 
    height: 250,  
    alignSelf: 'center', 
    marginTop: 18,
    borderRadius: 10
  },

  link: {
    color: '#B2DAFA',
    textAlign: 'center',
    marginVertical: 15,
    fontWeight: 'bold'
  },

  titulo: { 
    fontSize: 20, 
    margin: 10, 
    fontWeight: 'bold', 
    color: '#8CB4D8',
    textAlign: 'center'
  },

  tarjeta: {
    backgroundColor: 'white',
    marginHorizontal: 10,
    marginVertical: 6,
    padding: 10,
    borderRadius: 10,
    alignItems: 'center'
  },

  foto: { 
    width: '100%', 
    height: 180, 
    marginBottom: 5,
    borderRadius: 8
  },

  footer: {
    textAlign: 'center',
    padding: 20,
    fontWeight: 'bold',
    color: 'white'
  }
});