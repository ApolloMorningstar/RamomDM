import { useState, useRef } from "react";
import { CameraView, useCameraPermissions } from 'expo-camera';
import { View, StyleSheet, Text, Image, Button, Pressable, Linking } from "react-native";
import * as MediaLibrary from 'expo-media-library';


export default function CameraComponent() {
    const [permissao, pedirPermissao] = useCameraPermissions();
    const [foto, setFoto] = useState(null);
    const cameraRef = useRef(null);
    const [LadoCamera, seTladoCamera] = useState('back');

    if (!permissao) {
        return <View></View>;
    }

    if (!permissao.granted) {
        return (
            <View style={styles.container}>
                <Text style={styles.textopermissao}>Você precisa de permissão para usar a câmera</Text>
                <Button title='Pedir Permissão' onPress={pedirPermissao} />
            </View>
        );
    }

    const tirarFoto = async () => {
        const fotobase = await cameraRef.current?.takePictureAsync({
            quality: 0.5,
            base64: true
        });
        setFoto(fotobase);
    };

    const salvarFoto = async () => {
        if (foto) {
            await MediaLibrary.saveToLibraryAsync(foto.uri);
            setFoto(null);
        }
    };
    const inverterLadoCamera = () => {
        seTladoCamera(LadoCamera === 'back' ? 'front' : 'back')
    }

    return (
        <View style={styles.container}>
            {foto ? (
                <View style={styles.fototirada}>
                    <Image style={styles.image} source={{ uri: foto.uri }} />
                    <Pressable style={styles.salvafoto} onPress={salvarFoto}>
                        <Text style={styles.salvarText}>Salvar Foto</Text>
                    </Pressable>
                    <Pressable style={styles.descartarfoto} onPress={() => setFoto(null)}>
                        <Text style={styles.descartarText}>Descartar Foto</Text>
                    </Pressable>
                </View>
            ) : (
                <CameraView
                    style={styles.camera}
                    facing={LadoCamera}
                    ref={cameraRef}
                    barcodeScannerSettings={{ barcodeTypes: ["qr"] }}
                    onBarcodeScanned={({ data }) => Linking.openURL(data)}
                >
                    <View style={styles.ButtonContainer}>
                        <Pressable
                            style={({ pressed }) => [styles.button, { opacity: pressed ? 0.5 : 1 }]}
                            onPress={tirarFoto}
                        />
                        <Pressable style={styles.giracamera} onPress={inverterLadoCamera}>
                            <Text style={styles.giraText}> Trocar Lado</Text>
                        </Pressable>
                    </View>
                </CameraView>
            )}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center'
    },
    textopermissao: {
        textAlign: 'center'
    },
    camera: {
        flex: 1
    },
    image: {
        width: '100%',
        height: '100%'
    },
    fototirada: {
        flex: 1,
        justifyContent: 'center',
        marginBottom: 35
    },
    ButtonContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'flex-end',
        paddingBottom: 20,
        width: '100%',
        position: 'absolute',
        bottom: 0,
    },
    button: {
        width: 80,
        height: 80,
        borderRadius: 40,
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center',
        elevation: 5,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.3,
        shadowRadius: 4,
    },
    giracamera: {
        position: 'absolute',
        right: 20,
        bottom: 30,
        backgroundColor: '#4CAF50',
        padding: 10,
        borderRadius: 25,
        elevation: 5,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.3,
        shadowRadius: 4,
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: 1,
    },
    salvarText: {
        color: '#fff',
        fontWeight: 'bold',
    },
    descartarText: {
        color: '#000',
        fontWeight: 'bold',
    },
    giraText: {
        color: '#fff',
        fontWeight: 'bold',
    },
    salvafoto: {
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 10,
        backgroundColor: '#007BFF',
        padding: 10,
        borderRadius: 5,
    },
    descartarfoto: {
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 40,
        backgroundColor: '#FF5722',
        padding: 10,
        borderRadius: 5,
    },
});
