import { useState, useRef } from "react";
import { View, Text, Image, Button, Pressable } from "react-native";
import { Camera, useCameraPermissions } from "expo-camera"; 
import * as MediaLibrary from 'expo-media-library';
import * as Linking from 'expo-linking';

export default function CameraComponent() {
    const [permissao, pedirPermissao] = useCameraPermissions();
    const [foto, setFoto] = useState(null);
    const cameraRef = useRef(null);
    const [ladoCamera, setLadoCamera] = useState('back');

    // Verifica permissões
    if (!permissao) {
        return <View><Text>Carregando permissões...</Text></View>; 
    }

    if (!permissao.granted) {
        return (
            <View>
                <Text>Você precisa de permissão para usar a câmera</Text>
                <Button title='Pedir Permissão' onPress={pedirPermissao} />
            </View>
        );
    }

    const tirarFoto = async () => {
        const fotoBase = await cameraRef.current?.takePictureAsync({
            quality: 0.5,
            base64: true
        });
        setFoto(fotoBase);
    };

    const salvarFoto = async () => {
        if (foto?.uri) {
            await MediaLibrary.saveToLibraryAsync(foto.uri);
            setFoto(null);
        }
    };

    const inverterLadoCamera = () => {
        setLadoCamera(ladoCamera === 'back' ? 'front' : 'back');
    };

    return (
        <View>
            {foto ? (
                <View>
                    <Image source={{ uri: foto.uri }} />
                    <Pressable onPress={salvarFoto}>
                        <Text>Salvar Foto</Text>
                    </Pressable>
                    <Pressable onPress={() => setFoto(null)}>
                        <Text>Descartar Foto</Text>
                    </Pressable>
                </View>
            ) : (
                <CameraView 
                    style={{ height: 400, width: 300 }} 
                    type={ladoCamera} 
                    ref={cameraRef} 
                    onBarcodeScanned={(code) => Linking.openURL(code.data)}
                >
                    <View>
                        <Button title="Tirar Foto" onPress={tirarFoto} />
                        <Button title="Trocar Lado da Câmera" onPress={inverterLadoCamera} />
                    </View>
                </CameraView>
            )}
        </View>
    );
}
