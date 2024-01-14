import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

export const CTCarousel = () => {
  return (
    <Carousel plugins={[Autoplay({delay: 3000})]}>
      <CarouselContent>
        <CarouselItem>
          <img
            className="rounded-xl"
            src="/images/CT0.jpeg"
            alt="The charger terminal, default view"
          />
        </CarouselItem>
        <CarouselItem>
          <img
            className="rounded-xl"
            src="/images/CT1.jpeg"
            alt="The charger terminal, back view"
          />
        </CarouselItem>
        <CarouselItem>
          <img
            className="rounded-xl"
            src="/images/CT2.jpeg"
            alt="The charger terminal, being used on a car"
          />
        </CarouselItem>
        <CarouselItem>
          <img
            className="rounded-xl"
            src="/images/CT3.jpeg"
            alt="The charger terminal, front view"
          />
        </CarouselItem>
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
};
export const RCCarousel = () => {
  return (
    <Carousel plugins={[Autoplay({delay: 3000})]}>
      <CarouselContent>
        <CarouselItem>
          <img
            className="rounded-xl"
            src="/images/RC1.jpeg"
            alt="The residential controller, front view"
          />
        </CarouselItem>
        <CarouselItem>
          <img
            className="rounded-xl"
            src="/images/RC4.png"
            alt="The topology diagram for a residential deployment"
          />
        </CarouselItem>
        <CarouselItem>
          <img
            className="rounded-xl"
            src="/images/RC5.jpeg"
            alt="The residential controller, side view"
          />
        </CarouselItem>
        <CarouselItem>
          <img
            className="rounded-xl"
            src="/images/RC3.jpeg"
            alt="The charger terminal, top view"
          />
        </CarouselItem>
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
};
export const GCCarousel = () => {
  return (
    <Carousel plugins={[Autoplay({delay: 3000})]}>
      <CarouselContent>
        <CarouselItem>
          <img
            className="rounded-xl"
            src="/images/GC0.jpeg"
            alt="A datacenter"
          />
        </CarouselItem>
        <CarouselItem>
          <img
            className="rounded-xl"
            src="/images/GC1.jpg"
            alt="Image of cloud secure data transfer"
          />
        </CarouselItem>
        <CarouselItem>
          <img
            className="rounded-xl"
            src="/images/GC2.jpeg"
            alt="Our team leader in front of our workshop server"
          />
        </CarouselItem>
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
};
