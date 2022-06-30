import React from 'react';
import {View, Linking, Text, Pressable, Image, StyleSheet, SafeAreaView, StatusBar} from 'react-native'

const colorGithub = '#010409';
const colorFontGithub = '#C9D1D9';
const colorDarkFontGithub = '#4F565E';
const imageProfileGithub = 'https://avatars.githubusercontent.com/u/81115692?v=4';
const urlToMyGithub = 'https://github.com/L4N0XD';
const App = () => {
    const handlePressGoToGithub = async () => {
     const res = await Linking.canOpenURL(urlToMyGithub);
     if (res) {
       await Linking.openURL(urlToMyGithub);
     }
    };
    return ( 
    <SafeAreaView style={style.container}>
        <StatusBar backgroundColor={colorGithub} barStyle="light-content"/>
            <View style={style.content}>
                <Image accessibilityLabel='Imagem de Perfil de Taylan' style={style.avatar} source={{uri: imageProfileGithub}}/>
                <Text>Taylan Noronha</Text>
                <Text style={[style.defaultText, style.nickname]}>L4N0XD</Text>
                <Text style={style.defaultText}>I'm an enthusiastic developer, just starting to finally work in an area that I like and have an affinity for.</Text>
        
                <Pressable onPress={handlePressGoToGithub}>

                <View style = {style.button}>
                    <Text style={[style.defaultText, style.textButton]}>Open in GitHub</Text>
                </View>
                </Pressable>
            </View>
    </SafeAreaView>
    );
};

export default App;

const style = StyleSheet.create({ 
container: { 
    //colunas
    backgroundColor: colorGithub,
    flex: 1, //Expandir para a tela inteira
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
},
content: {
    alignItems: 'center',
    padding: 20,
},
avatar: {
    height: 200,
    width: 200,
    borderRadius: 100,
    borderColor: 'white',
    borderWidth: 2,
},
defaultText: {
    color: colorFontGithub,
},
name: {
    fontWeight: 'bold',
    fontSize: 24,
},
nickname: {
    fontSize: 18,
    color: colorDarkFontGithub,
},
description: {
    fontWeight: 'bold', 
    fontSize: 14,
},
button: {
    backgroundColor: colorDarkFontGithub,
    borderRadius: 10,
    padding: 20,
},
textButton: {
    fontWeight: 'bold', 
    fontSize: 16,
},

});
