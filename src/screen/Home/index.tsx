import React,{useState} from "react";
import "../../utils/i18next";
import { useTranslation } from "react-i18next";
import { View, Text, TouchableOpacity, Image } from "react-native";
import { styles } from "./styles";
import { changeLanguage } from "i18next";


const Home = () => {
  const [currentLanguage,setCurrentLanguage] = useState('en');
  const { t, i18n } = useTranslation();

  const changeLanguage = (value:string)=>{
    i18n.changeLanguage(value)
    .then(() =>{
      console.log("LINGUAGEM ALTERADA");
      setCurrentLanguage(value);
    })
    .catch((err:any)=>{
      console.log(err)
    })
  }

  return (
    <View style={styles.container}>
      <View style={styles.languages}>
        <TouchableOpacity
          onPress={() => changeLanguage('en')}
          style={[styles.langButton, { borderColor:currentLanguage ==='en'?"#037CFC":'transparent' }]}
        >
          <Text style={styles.langText}>Inglês</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => changeLanguage('pt')}
          style={[styles.langButton, { borderColor:currentLanguage === 'pt'?"#037CFC":'transparent' }]}
        >
          <Text style={styles.langText}>Português Brasil</Text>
        </TouchableOpacity>
      </View>

      <Image
        source={require("../../assets/logo.png")}
        style={styles.logo}
        resizeMode="contain"
      />

      <Text style={styles.title}>{t('Sejam bem-vindo')}</Text>
      <Text style={styles.title}>{t('ao seu app de filme')}</Text>

      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>{t('Acessar')}</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.linkButton}>
        <Text style={styles.linkText}>{t('Cria uma nova conta')}</Text>
      </TouchableOpacity>
    </View>
  );
};

export { Home };
