import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useRef } from 'react';
import { useTranslation } from 'react-i18next';
import Slider from 'react-slick';

import { highlights } from '../../../../_shared/constant/highlights';
import { Subtitle } from '../../../../components/Subtitle';
import { HighlightCard } from './components/HighlightCard';

export const HighlightProjects = () => {
  const { t } = useTranslation();

  const sliderRef = useRef<Slider>(null);

  const settings = {
    dots: true,
    infinite: true,
    speed: 1500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5500,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 425,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  const nextSlide = () => {
    if (sliderRef.current) {
      sliderRef.current.slickNext();
    }
  };

  const prevSlide = () => {
    if (sliderRef.current) {
      sliderRef.current.slickPrev();
    }
  };

  return (
    <div className="flex flex-col gap-3">
      <Subtitle subtitle={t('highlight')} />
      <div className="flex justify-end items-center">
        <ChevronLeft
          className="cursor-pointer text-stone-500 hover:text-opacity-60 w-8 h-8"
          onClick={prevSlide}
        />
        <ChevronRight
          className="cursor-pointer text-stone-500 hover:text-opacity-60 w-8 h-8"
          onClick={nextSlide}
        />
      </div>

      <div className="w-full">
        <Slider ref={sliderRef} {...settings}>
          {highlights.map((highlight, index) => (
            <div key={index} className="px-2">
              <HighlightCard
                key={index}
                name={highlight.name}
                html_url={highlight.html_url}
                topics={highlight.topics}
                homepage={highlight.homepage}
                previewImageUrl={highlight.previewImageUrl}
              />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};
