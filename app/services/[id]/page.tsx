import { notFound } from "next/navigation";
import { services } from "@/lib/data/services";
import { ServiceDetailClient } from "@/components/services/ServiceDetailClient";
import { ServiceNavigationLink } from "@/components/ui/ServiceNavigationLink";

// ✅ Required for static export builds
export function generateStaticParams() {
  return services.map((service) => ({
    id: service.id,
  }));
}

export default function ServiceDetailPage({
  params,
}: {
  params: { id: string };
}) {
  const service = services.find((s) => s.id === params.id);

  if (!service) {
    return (
      <div className="min-h-screen bg-[#030617] flex items-center justify-center text-white">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
            Service Not Found
          </h1>
          <p className="text-gray-400 mb-8">
            The service you're looking for doesn't exist.
          </p>
          <ServiceNavigationLink sectionId="services" />
        </div>
      </div>
    );
  }

  // Render the icon on the server and pass the rendered element
  const Icon = service.icon;
  const iconElement = <Icon className="w-10 h-10 text-white" />;

  // Extract service data without the icon function
  const { icon, ...serviceData } = service;
  const heroImage = service.heroImage;

  return (
    <ServiceDetailClient
      service={serviceData}
      iconElement={iconElement}
      heroImage={heroImage}
    />
  );
}
