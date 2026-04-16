import { StyleSheet, Text, View, Image, ScrollView, Linking, TouchableOpacity } from 'react-native';

export default function App() {

  const abrirInstagram = () => {
    Linking.openURL('https://instagram.com/ludmilagaido_');
  };

  return (
    <ScrollView style={{ backgroundColor: '#375261' }}>

      {/* ENCABEZADO */}
      <View style={s.header}>
        <Text style={s.nombre}>Ludmila Gaido</Text>
        <Text style={s.texto}>Un poco de mi vida </Text>
      </View>

      {/* FOTO ACTUAL */}
      <Image
        source={require('./assets/espejo.jpeg')}
        style={s.fotoPrincipal}
      />

      {/* INSTAGRAM */}
      <TouchableOpacity onPress={abrirInstagram}>
        <Text style={s.link}>@ludmilagaido_</Text>
      </TouchableOpacity>

      {/* FOTOS DE VIDA */}
      <Text style={s.titulo}>Mi recorrido</Text>

      <View style={s.tarjeta}>
        <Image source={require('./assets/BEBE.jpeg')} style={s.foto} />
        <Text style={s.texto}>De bebé </Text>
      </View>

      <View style={s.tarjeta}>
        <Image source={require('./assets/jardin.jpeg')} style={s.foto} />
        <Text style={s.texto}>En el jardincito </Text>
      </View>

      <View style={s.tarjeta}>
        <Image source={require('./assets/primavera.jpeg')} style={s.foto} />
        <Text style={s.texto}>Primer primavera con remes </Text>
      </View>

      <View style={s.tarjeta}>
        <Image source={require('./assets/voley.jpeg')} style={s.foto} />
        <Text style={s.texto}>El deporte es algo muy importante en mi vida, mas que nada el voley</Text>
      </View>

      <View style={s.tarjeta}>
        <Image source={require('./assets/campera.jpeg')} style={s.foto} />
        <Text style={s.texto}>Hoy soy ella</Text>
      </View>

      {/* CIERRE */}
      <Text style={s.footer}>Egresada 2026 🎓</Text>

    </ScrollView>
  );
}

const s = StyleSheet.create({
  header: { alignItems: 'center', padding: 20, backgroundColor: '#AECDDF' },
  nombre: { fontSize: 28, fontWeight: 'bold', color: 'beige' },
  texto: { fontSize: 14, marginTop: 5, textAlign: 'center', backgroundColor: '#FAF0E6' },

  fotoPrincipal: { width: '65%', height: 250,  marginLeft: 65, marginTop: 18 },

  link: {
    color: '#B2DAFA',
    textAlign: 'center',
    marginBottom: 15,
    fontWeight: 'bold'
  },

  titulo: { fontSize: 20, margin: 10, fontWeight: 'bold', color: '#8CB4D8' },

  tarjeta: {
    backgroundColor: 'white',
    margin: 10,
    padding: 1,
    borderRadius: 10,
    alignItems: 'center'
  },

  foto: { width: 340, height: 180, marginBottom: 5,},

  footer: {
    textAlign: 'center',
    padding: 20,
    fontWeight: 'bold',
    color: '#375261'
  }
});