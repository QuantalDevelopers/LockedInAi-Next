import React from "react";
import Image from "next/image";

interface GuideSectionProps {
  id: string;
  title: string;
  children: React.ReactNode;
}

const GuideSection: React.FC<GuideSectionProps> = ({ id, title, children }) => (
  <div id={id} className="mb-4 py-6">
    <div className="rounded-xl border border-gray-700/30 bg-gray-800/50">
      <div className="border-b border-gray-700/30 px-6 py-4">
        <h2 className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-2xl font-bold text-transparent">
          {title}
        </h2>
      </div>
      <div className="p-8">{children}</div>
    </div>
  </div>
);

interface GuideStepProps {
  number: string | number;
  title: string;
  description: React.ReactNode;
  image?: string | string[];
}

const GuideStep: React.FC<GuideStepProps> = ({
  number,
  title,
  description,
  image,
}) => {
  const images = image ? (Array.isArray(image) ? image : [image]) : [];

  return (
    <div className="mb-10 last:mb-0">
      <div className="flex items-start space-x-3">
        <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 shadow-lg">
          <span className="text-base font-bold text-white drop-shadow-sm">
            {number}
          </span>
        </div>
        <div className="flex-1">
          <h3 className="mb-1 text-xl font-semibold text-gray-100">{title}</h3>
          <div className="text-base text-gray-400">
            {typeof description === "string" ? (
              <p>{description}</p>
            ) : (
              description
            )}
          </div>
        </div>
      </div>
      {images.length > 0 && (
        <div className="mt-8 space-y-3">
          {images.map((img, index) => (
            <div
              key={index}
              className="overflow-hidden rounded-lg border border-gray-700/30"
            >
              <div className="max-h-[800px] overflow-hidden">
                <Image
                  src={img}
                  alt={`Step ${number}: ${title} - Image ${index + 1}`}
                  width={1200}
                  height={800}
                  className="mx-auto h-auto w-full max-w-xl rounded-lg object-contain"
                  priority={index === 0}
                />
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export { GuideSection, GuideStep };
