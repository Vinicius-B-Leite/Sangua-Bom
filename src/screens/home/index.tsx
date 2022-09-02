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
    const [refresh, setRefresh] = useState<boolean>(false)

    const getPublicacoes = async () =>{
        const dados = await getDocs(colecaoPublicacoes)
        setPublicacoes(dados.docs.map((doc)=> ({...doc.data(), id: doc.id})))
    }

    useEffect(()=>{ 

        getPublicacoes()
    }, [])
    return (
        <View>
            <StatusBar />
            <Header/> 
            <FlatList
                data={publicacoes}
                renderItem={({ item }) => <TouchableOpacity><CardPublicacao publi={item}/></TouchableOpacity>}
                keyExtractor={(item) => item.id}
                refreshing={refresh}
                onRefresh={()=>{
                    setRefresh(true)
                    setTimeout(()=>{
                        getPublicacoes()
                        setRefresh(false)
                    })
                }}
            />
            
        </View>
    );
}

export default Home;