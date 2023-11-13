import * as Font from 'expo-font';

const customFonts = {
  'Cabin-Bold': require('../../assets/fonts/cabin/Cabin-Italic.ttf') ,
  // Agrega más fuentes si es necesario
};

export async function loadCustomFonts() {
  await Font.loadAsync(customFonts);
}
