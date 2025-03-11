import { TbLocationBolt } from "react-icons/tb";

import { AmbientColor } from "../ambient-color";
import { FeatureIconContainer } from "../features/feature-icon-container";
import { Heading } from "../heading";
import { TestimonialsGrid } from "./grid";
import { TestimonialsSlider } from "./slider";

export const Testimonials = () => {
  return (
    <div id="testimonial" className="relative overflow-hidden">
      <AmbientColor />
      <div className="py-20">
        <FeatureIconContainer className="flex items-center justify-center overflow-hidden">
          <TbLocationBolt className="h-6 w-6 text-cyan-500" />
        </FeatureIconContainer>
        <Heading as="h2" className="pt-4">
          Trusted by our users
        </Heading>
      </div>

      {/* Add a container with relative positioning and hide overflow */}
      <div className="relative py-60">
        <div className="absolute inset-0 h-full w-full bg-charcoal opacity-30 [mask-image:radial-gradient(circle_at_center,transparent_10%,white_90%)]">
          <TestimonialsGrid />
        </div>
        <TestimonialsSlider />
      </div>
      <div className="absolute inset-x-0 bottom-0 h-40 w-full bg-gradient-to-t from-charcoal to-transparent"></div>
    </div>
  );
};
