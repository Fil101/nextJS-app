import { GetStaticProps } from 'next';
import React, { useState } from 'react';
import { Button, Htag, Rating, Tag } from '../components';
import { P } from '../components';
import { withLayout } from '../Layout/Layout';
import axios from 'axios';
import { MenuItem } from '../interfaces/menu.interface';


function Home({menu, firstCategory}: HomeProps): JSX.Element {
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
      <ul>
      {menu.map(m => (<li key={m._id.secondCategory}>{m._id.secondCategory}</li>))}
      </ul>
    </>
  );
}

export default withLayout(Home);

export const getStaticProps: GetStaticProps = async () => {
  const firstCategory = 0;
  const { data: menu} = await axios.post<MenuItem[]>(process.env.NEXT_PUBLIC_DOMAIN + '/api/top-page/find', {
    firstCategory
  });
  return {
    props: {
      menu,
      firstCategory,
    },
  };
};

interface HomeProps extends Record<string, unknown> {
  menu: MenuItem[];
  firstCategory: number;
}
