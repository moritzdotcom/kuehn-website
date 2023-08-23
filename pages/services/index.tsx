import ServicesGrid from '@/components/servicesGrid';

export default function ServicePage() {
  return (
    <div className="py-5 relative">
      <div id="services" className="-mt-20 absolute top-0" />
      <h2 className="text-center text-2xl sm:text-4xl text-primary">
        Unsere Leistungen
      </h2>
      <ServicesGrid />
    </div>
  );
}
