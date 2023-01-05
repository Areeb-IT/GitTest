import React, {useState} from 'react';
import {NativeBaseProvider, Box, Stack, Input, Button, Text} from 'native-base';
export default function App() {
  const [Data, setData] = useState<any>('');
  const [Data1, setData1] = useState<any>('');

  return (
    <NativeBaseProvider>
      <Stack flex={1} bgColor={'blueGray.200'}>
        <Input
          testID="1"
          variant={'rounded'}
          borderWidth={'4'}
          borderColor={'black'}
          mt={'12'}
          value={Data}
          onChangeText={setData}></Input>
        <Button
          variant={'solid'}
          borderRadius={'2xl'}
          mt={'12'}
          onPress={() => setData('')}>
          clear
        </Button>
        <Text>{Data}</Text>
      </Stack>
    </NativeBaseProvider>
  );
}
