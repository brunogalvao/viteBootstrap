import { Text, View, TextInput, TouchableOpacity, FlatList, Alert } from 'react-native';
import { styles } from './styles';

import { Participant } from '../../components/Participant';

export function Home() {

    const participants = [
        'Bruno',
        'Rafael',
        'Ricardo',
        'Viviane',
        'Ana',
        'Maria',
        'João',
        'José',
        'Pedro',
        'Paulo',
        'Rafaela',
    ]

    function handleParticipantAdd() {
        if (participants.includes(participants[3])) {
            return Alert.alert("Participante Existe", `O Participante ${participants[3]} já existe na lista`);
        }
        console.log('Adicionar participante');
    }

    function handleParticipantRemove(name: string) {

        return Alert.alert("Remover Participante", `Deseja remover o participante ${name} ?`, [
            {
                text: 'Sim 🤗',
                onPress: () => console.log('Deletado com sucesso'),
            },
            {
                text: 'Não 😢',
                style: 'cancel'
            }
        ])

        console.log(`Remover participante ${name}`);
    }

    return (
        <View style={styles.container}>

            <Text style={styles.eventName}>
                Construindo meu APPP
            </Text>

            <Text style={styles.eventDate}>
                Controle de Contas 💳
            </Text>

            <View style={styles.form}>
                <TextInput
                    style={styles.input}
                    placeholder="Digite o nome do evento"
                    placeholderTextColor={'#6b6b6b'}
                    keyboardType='default'
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
                        Ninguém está no evento, adicione alguém!
                    </Text>
                )}
            />

        </View>
    )
}

