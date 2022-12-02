import React from 'react';
import { Button, Htag } from '../components';
import { P } from '../components/Paragraph/P';


export default function Home(): JSX.Element {
  return (
    <>
      <Htag tag='h1'>Hello</Htag>
      <Button appearance='primary' arrow='right'>Кнопка</Button>
      <Button appearance='ghost' arrow='down'>Кнопка</Button>
      <P size='s'>HEllo mathafucker</P>
    </>
  );
}

