import React from 'react'
import HeroMain from '../Components/HeroMain';
import CarouselMain from '../Components/CarouselMain';
import Section1 from '../Components/Section1';

  const logos = [
    {
        name: 'logo-001.jpg',
        url: '/logo-008.png'
    },
    {
        name: 'logo-002.jpg',
        url: '/logo-008.png'
    },
    {
        name: 'logo-003.jpg',
        url: '/logo-008.png'
    },
    {
        name: 'logo-004.jpg',
        url: '/logo-008.png'
    },
    {
        name: 'logo-005.jpg',
        url: '/logo-008.png'
    },
    {
        name: 'logo-006.jpg',
        url: '/logo-008.png'
    },
    {
        name: 'logo-007.jpg',
        url: '/logo-008.png'
    },
    {
        name: 'logo-008.jpg',
        url: '/logo-008.png'
    }
  ]

  
const Home = ({categories}) => {
  return (
    <div>
        <HeroMain />
        <div className="" style={{background:'#fff'}}>
          <CarouselMain logos={logos} />
          <Section1 categories={categories} />
        </div>
    </div>
  )
}

export default Home