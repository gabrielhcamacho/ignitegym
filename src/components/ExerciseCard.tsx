import { HStack, Heading, Image, VStack, Text, Icon } from "native-base";
import { TouchableOpacity, TouchableOpacityProps } from "react-native";
import { Entypo } from '@expo/vector-icons'


type Props = TouchableOpacityProps & {

}

export function ExerciseCard({...rest}: Props){
    return(
        <TouchableOpacity {...rest}>
            <HStack bg='gray.500' alignItems='center' p={2} pr={4} mb={3} rounded='md'>
                <Image
                    source={{uri : 'https://www.fiqueinforma.com/wp-content/uploads/2008/12/puxadas.jpg'}}
                    alt='imagem do exercicio'
                    w={16}
                    h={16}
                    rounded="md"
                    mr={4}
                    resizeMode="center"
                />
                <VStack flex={1}>
                    <Heading fontSize='lg' color='white'>Puxada Frontal</Heading>
                    <Text fontSize='sm' color='gray.200' mt={1} numberOfLines={2}>3 séries de 12 repetições</Text>
                </VStack>

                <Icon as={Entypo} name="chevron-thin-right" color="gray.300"/>
            </HStack>

        </TouchableOpacity>
    )
}