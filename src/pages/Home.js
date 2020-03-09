import React from 'react';

import '../styles/Home.css';

import WithDeerlab from '../components/WithDeerlab';
import BoxContainers from '../components/BoxContainers';
import BoxInfo from '../components/BoxInfo';

const Home = () => (
  <>
    <WithDeerlab />
    <BoxContainers />
    <BoxInfo />
  </>
);

export default Home;
