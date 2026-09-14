import {
  WeddingLayout,
  HeroSection,
  StorySection,
  CountdownSection,
  EventDetails,
  GallerySection,
  Footer,
} from "./components";

export default function Home() {
  return (
    <WeddingLayout>
      <HeroSection />
      <StorySection />
      <CountdownSection />
      <EventDetails />
      <GallerySection />
      <Footer />
    </WeddingLayout>
  );
}
