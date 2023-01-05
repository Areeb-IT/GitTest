import React from 'react';
import {NativeBaseProvider, Box, Stack, Input, Button} from 'native-base';

export default function App() {
  return (
    <NativeBaseProvider>
      <Stack flex={1} bgColor={'blueGray.200'}>
        <Input
          variant={'rounded'}
          borderWidth={'4'}
          borderColor={'black'}
          mt={'12'}></Input>
        <Button variant={'solid'} borderRadius={'2xl'} mt={'12'}>
          submit
        </Button>
      </Stack>
    </NativeBaseProvider>
  );
}
