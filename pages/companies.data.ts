
export type Company = {
  name: string;
  logo?: string;
  website: string;
  employeeCount: string;
  type: string;
  revenue: string;
  founded: string;
  headquarters: string;
  industry: string;
  competitors: string[];
  description: string;
  mission: string;
};

export const companies: Record<string, Company> = {
  "google": {
    name: "Google",
    logo: "/lovable-uploads/97e2ac30-c8a6-4a9d-bc80-a609159e14dc.png",
    website: "google.com",
    employeeCount: "156,000+",
    type: "Public",
    revenue: "$282.8 billion (2022)",
    founded: "1998",
    headquarters: "Mountain View, California",
    industry: "Technology",
    competitors: ["Microsoft", "Amazon", "Apple", "Meta"],
    description: "Google is a multinational technology company specializing in internet-related services and products, including online advertising technologies, a search engine, cloud computing, software, and hardware.",
    mission: "To organize the world's information and make it universally accessible and useful."
  },
  "perplexity": {
    name: "Perplexity AI",
    logo: "/lovable-uploads/94ab9326-b09c-486c-bb0f-a34d00a25de8.png",
    website: "perplexity.ai",
    employeeCount: "50-100",
    type: "Private",
    revenue: "Undisclosed",
    founded: "2022",
    headquarters: "San Francisco, California",
    industry: "Artificial Intelligence",
    competitors: ["Anthropic", "OpenAI", "Google"],
    description: "Perplexity AI is revolutionizing the way people access and process information through AI. Their platform combines cutting-edge language models with real-time information to provide accurate, conversational answers to complex queries.",
    mission: "To build the world's best answer engine by combining frontier AI models with factual knowledge."
  }
};
