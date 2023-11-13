import { StyleSheet } from 'react-native';
import { loadCustomFonts } from '../fonts/fonts.js'; // Asegúrate de que la ruta sea correcta

// Carga las fuentes personalizadas antes de definir los estilos
loadCustomFonts();

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start',
    top: 0  ,
    //marginHorizontal: 16,
    //marginVertical: 320
  },
  input_inicio: {
    fontSize: 16, 
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 5,
    padding: 10,
    margin: 10,
    width: 300,
  },
  btn_inicio: {
    width: 300,
    height: 40,
    //border: '1px solid #ff9c00', // Color de fondo inicial
    borderWidth: 1,              // Ancho del borde (1 píxel)
    borderColor: '#ff9c00',      // Color del borde
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    marginBottom: 10,
  },
  btnText: {
    color: '#ff9c00',
    fontSize: 16,
  },
  text_inicio: {
    fontSize: 55,
    padding: 10,
    margin: 10,
    width: 320,
    fontFamily: 'Cabin-Bold', // Utiliza la fuente personalizada
    fontWeight: '700',
  },
  image_inicio: {
    width: 135,
    height:75,
  },
  image_inicio_div: {
    width: 300,
    height:75,
  },
  checkboxContainer_general: {
    flexDirection: 'row',
    marginBottom: 30,
    width: 300,
    display: 'flex',
    justifyContent: 'space-between',
  },
  checkboxContainer: {
    flexDirection: 'row',
    //marginBottom: 10,
  },
  checkbox: {
    //alignSelf: 'left',
  },
  label: {
    //alignSelf: 'left',
  },
  btnText_Registrar: {
    color: '#ff5900',
  },
  textinput: {
    flex: 1,
    height: 30,
    paddingHorizontal: 10,
  },
  searchBox: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgba(116, 120, 141, 0.09)',
    borderRadius: 20,
    paddingTop: 5,
    paddingBottom: 5,
    marginTop: 15,
  },
  searchIcon: {
    paddingHorizontal: 10,
  },
 //TAB NAVIGATION
 navigationBar: {
  flexDirection: 'row',
  backgroundColor: '#EBEBEB',
  elevation: 5,
},
tab: {
  flex: 1,
  padding: 12,
  alignItems: 'center',
},
activeTab: {
  backgroundColor: '#556EE6',
},
tabLabel: {
  fontSize: 14,
  fontWeight: '500',
  color: '#495057',
},
activeTabLabel: {
  color: '#fff',
},
 tabBar: {
    borderTopWidth: 0, // Elimina el borde superior
    elevation: 0, // Elimina la sombra
  },
 //TAB NAVIGATION
 menu: {
  position: 'absolute',
  top: 40,
  right: 10,
  padding: 10,
  backgroundColor: '#fff',
  elevation: 5,
},

SelectChat: {
backgroundColor: 'transparent',
borderColor: 'transparent',
width: 180,
},

NombreChat:{
  flexDirection: 'row',
  display: 'flex',
  justifyContent: 'space-between',
  paddingRight: 10
},
optionContainer:{
  flexDirection: 'row',
  display: 'flex',
},
optionIcono:{
  paddingRight: 10
},

});
