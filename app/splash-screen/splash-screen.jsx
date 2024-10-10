import { StyleSheet, Image, View, Text, Pressable } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Link } from 'expo-router';

const App_logo = () => {
  const Logo_deuses_gregos = require('./pasta de imagens/logo_deuses.png');

  return (
    <View style={styles.container}>
      <View style={styles.navbar}>
        <Link href="/bacario_modal" asChild>
          <Pressable>
            <Text style={styles.navLink}>Bancário Modal</Text>
          </Pressable>
        </Link>
        <Link href="/calculadoras/calculadora_inicial" asChild>
          <Pressable>
            <Text style={styles.navLink}>Calculadora Inicial</Text>
          </Pressable>
        </Link>
        <Link href="/calculadoras/calculadora" asChild>
          <Pressable>
            <Text style={styles.navLink}>Calculadora Intermediária</Text>
          </Pressable>
        </Link>
        <Link href="/calculadoras/calculadora2" asChild>
          <Pressable>
            <Text style={styles.navLink}>Calculadora Final</Text>
          </Pressable>
        </Link>
        <Link href="/flat-list" asChild>
          <Pressable>
            <Text style={styles.navLink}>Flat-List</Text>
          </Pressable>
        </Link>
        <Link href="/Picker" asChild>
          <Pressable>
            <Text style={styles.navLink}>Picker Inicial</Text>
          </Pressable>
        </Link>
        <Link href="/Picker/index2" asChild>
          <Pressable>
            <Text style={styles.navLink}>Picker Inicial 2</Text>
          </Pressable>
        </Link>
        <Link href="/Picker2" asChild>
          <Pressable>
            <Text style={styles.navLink}>Picker 2</Text>
          </Pressable>
        </Link>
        <Link href="/sign_up" asChild>
          <Pressable>
            <Text style={styles.navLink}>Cadastrar Mobile</Text>
          </Pressable>
        </Link>
        <Link href="/sign_up-web" asChild>
          <Pressable>
            <Text style={styles.navLink}>Cadastrar Web</Text>
          </Pressable>
        </Link>
      </View>

      <View style={styles.logoContainer}>
        <Image style={styles.logo} source={Logo_deuses_gregos} />
      </View>

      <LinearGradient
        colors={['rgba(0,0,0,0.8)', 'transparent']}
        style={styles.background}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#4c669f',
    justifyContent: 'space-between',
  },
  navbar: {
    width: '100%',
    flexDirection: 'row',
    flexWrap: 'wrap', 
    justifyContent: 'space-around',
    padding: 10,
    backgroundColor: '#333',
  },
  navLink: {
    color: 'white',
    fontSize: 16,
    padding: 5, 
  },
  logoContainer: {
    flex: 1,
    justifyContent: 'center', 
    alignItems: 'center',    
  },
  logo: {
    width: 150, 
    height: 150,
    resizeMode: 'contain',
  },
  background: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    zIndex: -1, 
  },
});

export default App_logo;