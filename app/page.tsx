import {
  WeddingLayout,
  HeroSection,
  StorySection,
  CountdownSection,
  EventDetails,
  GallerySection,
  RSVPForm,
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
      <RSVPForm />
      <Footer />
    </WeddingLayout>
  );
}
