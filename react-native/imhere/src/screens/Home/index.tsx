import React, { useState } from 'react';
import { Text, View, TextInput, TouchableOpacity, FlatList, Alert } from 'react-native';
import { styles } from './styles';

import { Participant } from '../../components/Participant';

export function Home() {

    const [participants, setParticipants] = useState<string[]>([]);
    const [participantName, setParticipantName] = useState('');

    function handleParticipantAdd() {
        if (participants.includes(participantName) || participantName === '') {
            return participantName === ''
                ? Alert.alert("Participante Vazio", "O Participante não pode ser vazio")
                : Alert.alert("Participante já está na Lista.", `O Participante ${participantName} já existe na lista.`, [
                    {
                        text: 'Ok 😢',
                        onPress: () => setParticipantName(''),
                    }
                ]);
        }

        setParticipants(prevState => [...prevState, participantName])
        setParticipantName('');
    }

    function handleParticipantRemove(name: string) {



        Alert.alert("Remover Participante", `Deseja remover o participante ${name} ?`, [
            {
                text: 'Sim 🤗',
                onPress: () => setParticipants(prevState => prevState.filter(participant => participant !== name)),
            },
            {
                text: 'Não 😢',
                style: 'cancel'
            }
        ])

        console.log(`Remover participante ${name}`);
    }

    // Função apenas para testar o estado
    // function handleState(value: string) {
    //     setParticipantName(value);
    //     console.log(participantName);
    // }

    return (
        <View style={styles.container}>

            <Text style={styles.eventName}>
                Construindo meu APPP
            </Text>

            <Text style={styles.eventDate}>
                I am Here ✋🏼
            </Text>

            <View style={styles.form}>
                <TextInput
                    style={styles.input}
                    placeholder="Digite o nome do evento"
                    placeholderTextColor={'#6b6b6b'}
                    keyboardType='default'
                    onChangeText={setParticipantName}
                    value={participantName}
                />

                <TouchableOpacity style={styles.button} onPress={handleParticipantAdd}>
                    <Text style={styles.buttonText}> + </Text>
                </TouchableOpacity>
            </View>

            <FlatList
                data={participants}
                keyExtractor={item => item}
                renderItem={({ item }) => (
                    <Participant
                        key={item}
                        name={item}
                        onRemove={() => handleParticipantRemove(item)} />
                )}
                showsVerticalScrollIndicator={false}
                ListEmptyComponent={() => (
                    <Text style={styles.emptyListText}>
                        Evento está vazio, cadastre alguma pessoa no evento 😉!
                    </Text>
                )}
            />

        </View>
    )
}

