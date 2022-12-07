import React, { useState } from 'react';
import { Button, Htag, Rating, Tag } from '../components';
import { P } from '../components';


export default function Home(): JSX.Element {
  const [rating, setRating] = useState<number>(0);
  return (
    <>
      <Button appearance='primary' arrow='right'>Кнопка</Button>
      <Button appearance='ghost' arrow='down'>Кнопка</Button>
      <P size='l'>Большой</P>
      <P size='m'>Средний</P>
      <P size='s'>Малый</P>
      <Tag size='s'>Ghost</Tag>
      <Tag size='m' color='red'>Red</Tag>
      <Tag size='s' color='green'>Green</Tag>
      <Tag size='m' color='primary'>Primary</Tag>
      <Rating rating={rating} isEditable={true} setRating={setRating}></Rating>
    </>
  );
}

