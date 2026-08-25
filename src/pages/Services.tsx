import PageHeader from "@/components/PageHeader";
import ServicesGrid from "@/sections/ServicesGrid";
import CTA from "@/sections/CTA";

export default function Services() {
  return (
    <>
      <PageHeader
        eyebrow="What we do"
        title="Window cleaning services built around your property"
        description="From a single storefront to a full residential exterior, every visit follows the same detail-first standard."
      />
      <ServicesGrid showDetails />
      <CTA />
    </>
  );
}
