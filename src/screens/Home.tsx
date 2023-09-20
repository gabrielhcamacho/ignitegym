import React, { useState } from 'react';
import { Center, HStack, Text, VStack, FlatList, Heading } from 'native-base'


import { Group } from '@components/Group';
import { HomeHeader } from '@components/HomeHeader';
import { ExerciseCard } from '@components/ExerciseCard';


export function Home() {

  const [groupSelected, setGroupSelected] = useState('costa')
  const [groups, setGroups] = useState(['costa', 'ombro', 'biceps', 'triceps'])
  const [exercises, setExercises] = useState([
    'Puxada frontal', 'Remada curvada', 'Levantamento terra', 'Remada unilateral'
  ])


  return (
    <VStack flex={1}>
      <HomeHeader />

      <FlatList
        data={groups}
        keyExtractor={item => item}
        horizontal
        showsHorizontalScrollIndicator={false}
        _contentContainerStyle={{ px: 4 }}
        my={8}
        maxH={10}
        renderItem={({ item }) => (
          <Group
            name={item}
            isActive={groupSelected.toLocaleUpperCase() === item.toLocaleUpperCase()}
            onPress={() => setGroupSelected(item)}
          />
        )}
      />

      <VStack flex={1} px={8}>
        <HStack justifyContent='space-between' mb={5}>
          <Heading color='gray.200' fontSize='md'>Exercicios</Heading>
          <Text color='gray.200' fontSize='sm'>{exercises.length}</Text>
        </HStack>

        <FlatList
        data={exercises}
        keyExtractor={item => item}
        showsVerticalScrollIndicator={false}
        _contentContainerStyle={{ paddingBottom: 20}}
        renderItem={({ item }) => (
          <ExerciseCard
            
          />
        )}
      />

      </VStack>

    </VStack>
  );
}