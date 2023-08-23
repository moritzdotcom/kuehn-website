import Image from 'next/image';
import Praxis1 from '@/public/images/praxis/1.jpeg';
import Praxis2 from '@/public/images/praxis/2.jpeg';
import Praxis3 from '@/public/images/praxis/3.jpeg';
import Praxis4 from '@/public/images/praxis/4.jpeg';

import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';
import { BsChevronLeft, BsChevronRight } from 'react-icons/bs';

export default function SlideShow() {
  return (
    <div>
      <Carousel
        showStatus={false}
        showThumbs={false}
        infiniteLoop
        centerMode
        centerSlidePercentage={100}
        renderArrowPrev={(onClickHandler) => (
          <button
            onClick={onClickHandler}
            className="absolute top-1/2 left-0 transform -translate-y-1/2 z-10 ml-5 border-2 border-white p-2 rounded"
          >
            <BsChevronLeft className="stroke-1 text-2xl text-white" />
          </button>
        )}
        renderArrowNext={(onClickHandler) => (
          <button
            onClick={onClickHandler}
            className="absolute top-1/2 right-0 transform -translate-y-1/2 z-10 mr-5 border-2 border-white p-2 rounded"
          >
            <BsChevronRight className="stroke-1 text-2xl text-white" />
          </button>
        )}
      >
        <Image
          src={Praxis1}
          alt="Praxis"
          className="w-full h-full max-h-[66vh] object-cover"
        />
        <Image
          src={Praxis2}
          alt="Praxis"
          className="w-full h-full max-h-[66vh] object-cover"
        />
        <Image
          src={Praxis3}
          alt="Praxis"
          className="w-full h-full max-h-[66vh] object-cover"
        />
        <Image
          src={Praxis4}
          alt="Praxis"
          className="w-full h-full max-h-[66vh] object-cover"
        />
      </Carousel>
    </div>
  );
}
