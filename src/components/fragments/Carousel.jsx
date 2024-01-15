import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

export const CTCarousel = (props) => {
  return (
    <Carousel plugins={[Autoplay({delay: 3000})]}>
      <CarouselContent>
        <CarouselItem>
          {props.ct0}
        </CarouselItem>
        <CarouselItem>
          {props.ct1}
        </CarouselItem>
        <CarouselItem>
          {props.ct2}
        </CarouselItem>
        <CarouselItem>
          {props.ct3}
        </CarouselItem>
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
};
export const RCCarousel = (props) => {
  return (
    <Carousel plugins={[Autoplay({delay: 3000})]}>
      <CarouselContent>
        <CarouselItem>
          {props.rc1}
        </CarouselItem>
        <CarouselItem>
          {props.rc4}
        </CarouselItem>
        <CarouselItem>
          {props.rc5}
        </CarouselItem>
        <CarouselItem>
          {props.rc3}
        </CarouselItem>
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
};
export const GCCarousel = (props) => {
  return (
    <Carousel plugins={[Autoplay({delay: 3000})]}>
      <CarouselContent>
        <CarouselItem>
          {props.gc0}
        </CarouselItem>
        <CarouselItem>
          {props.gc1}
        </CarouselItem>
        <CarouselItem>
          {props.gc2}
        </CarouselItem>
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
};
