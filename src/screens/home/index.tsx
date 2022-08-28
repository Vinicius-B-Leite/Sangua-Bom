import React, { useEffect, useState } from "react";
import { FlatList, StatusBar, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import CardPublicacao from "../../components/cardPublicacao";
import Header from "../../components/header";
import { colecaoPublicacoes } from "../../firebase/firebase";
import { getDocs } from 'firebase/firestore'
import { IPublicao } from "../../types/IPublicacao";






function Home() {
    const [publicacoes, setPublicacoes] = useState<IPublicao[]>([])
    useEffect(()=>{ 
        const getPublicacoes = async () =>{
            const dados = await getDocs(colecaoPublicacoes)
            const publica = dados.docs.map((doc)=> ({...doc.data(), id: doc.id}))
            console.log(publica)
            setPublicacoes(dados.docs.map((doc)=> ({...doc.data(), id: doc.id})))
        }
        getPublicacoes()
    }, [])
    return (
        <View>
            <StatusBar />
            <Header/> 
            <FlatList
                data={publicacoes}
                renderItem={({ item }) => <TouchableOpacity><CardPublicacao publi={item}/></TouchableOpacity>}
                keyExtractor={(item) => item.usuario}
            />
            
        </View>
    );
}

export default Home;