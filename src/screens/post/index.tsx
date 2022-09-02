import React, { useState } from 'react';
import { Image, ScrollView, Text, TextInput, TouchableOpacity } from 'react-native';
import { Form, InputImagem, ConteinerLabel, Inputs } from './styles';
import { useForm, Controller } from 'react-hook-form';

import HeaderPost from '../../components/headerPost';

import * as ImagePicker from 'expo-image-picker';

import { storage, colecaoPublicacoes } from '../../firebase/firebase'
import { getDownloadURL, ref, uploadBytes } from 'firebase/storage'
import { addDoc } from 'firebase/firestore'

import 'react-native-get-random-values';

import { v4 } from 'uuid'
import { IPublicao } from '../../types/IPublicacao';




function CriarPublicacao() {
    const [image, setImage] = useState<string>("");


    const { handleSubmit, control, formState: { errors }, setValue } = useForm<IPublicao>()

    const pegarImagem = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            allowsEditing: true,
            aspect: [10, 6],
            quality: 1,
        });

        if (!result.cancelled) {
            const imageRef = ref(storage, `${v4()}`)

            const img = await fetch(result.uri)
            const byts = await img.blob()
            await uploadBytes(imageRef, byts)

            await getDownloadURL(imageRef).then(imgurl => {
                setImage(imgurl)
            })
        }
    };

    const limparInputs = () => {
        setValue("usuario", "Vinicius")
        setValue("endereco", "")
        setValue("horario_aberto", "")
        setValue("telefone", "")
        setValue("site", "")
        setValue("descricao", "")
        setValue('id', '133')
        setValue('cartaz', 'dsfsf')
        setImage("")
    }
    const criarPublicacao = async (dados: IPublicao) => {
        limparInputs
    }

    



    return (
        <ScrollView>
            <HeaderPost criarPublicacao={handleSubmit(criarPublicacao)} />
            <Form>
                <TouchableOpacity onPress={pegarImagem}>
                    {image.length ?
                        <Image source={{ uri: image }} style={{ width: '100%', height: 200 }} />
                        :
                        <InputImagem><Text>Selecione uma imagem</Text></InputImagem>
                    }
                </TouchableOpacity>
                <ConteinerLabel>
                    {
                        (errors.endereco || errors.horario_aberto || errors.telefone || errors.descricao) &&<Text>Preencha todos os campo</Text> 
                    }
                    <Controller
                        name="endereco"
                        control={control}
                        rules={{
                            required: 'erro endereco',

                        }}
                        render={({ field: { value, onChange } }) => {
                            return <Inputs placeholder='Endereço do ponto de coleta' value={value} onChangeText={onChange} />
                        }}
                    />

                    <Controller
                        name="horario_aberto"
                        control={control}
                        rules={{
                            required: 'erro horario aberto',
                            
                        }}
                        render={({ field: { value, onChange } }) => {
                            return <Inputs placeholder='Horário que estará aberto' value={value} onChangeText={onChange} />
                        }}
                    />

                    <Controller
                        name="telefone"
                        control={control}
                        rules={{
                            required: 'erro telefone',

                        }}
                        render={({ field: { value, onChange } }) => {
                            return <Inputs placeholder='Telefone' value={value} onChangeText={onChange} />
                        }}
                    />

                    <Controller
                        name="site"
                        control={control}
                        render={({ field: { value, onChange } }) => {
                            return <Inputs placeholder='Web site(opcional)' value={value} onChangeText={onChange} />
                        }}
                    />
                    <Controller
                        name="descricao"
                        control={control}
                        render={({ field: { value, onChange } }) => {
                            return <Inputs placeholder='Descrição(opcional)' multiline={true} value={value} onChangeText={onChange} />

                        }}
                    />


                </ConteinerLabel>
            </Form>
        </ScrollView>
    );
}

export default CriarPublicacao;