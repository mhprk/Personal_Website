import { useEffect } from 'react';
import { Lanyard } from '../components/Lanyard';
import Stack from '../components/Stack';
import Hero from '../components/Hero';
import PageTransition from '../components/PageTransition';
import young from '../images/young.jpg';
import me from '../images/me.jpg';
import museum from '../images/museum.jpg';
import badminton from '../images/badminton.jpg';

const images = [
  { id: 1, img: badminton },
  { id: 2, img: me },
  { id: 3, img: museum },
  { id: 4, img: young },
];

export default function Home() {
  useEffect(() => {
    document.title = 'Mihyeon Park';
  }, []);

  return (
    <PageTransition>
      <div>
        <Hero />
        <Lanyard />
        <Stack
          randomRotation={false}
          sensitivity={180}
          sendToBackOnClick={true}
          cardDimensions={{ width: 250, height: 200 }}
          cardsData={images}
        />
      </div>
    </PageTransition>
  );
}
