import { constructImageURL } from "@/lib/image-hosting";

interface Testimonial {
  src: string;
  quote: string;
  name: string;
  designation?: string;
}

export const testimonials: Testimonial[] = [
  {
    name: "Lily, 26",
    quote:
      "Before I found LockedIn AI, preparing for project management interviews was overwhelming. This tool helped me nail all the behavioral questions and the project lifecycle scenarios like a pro. Thanks to LockedIn AI, I landed a $140k role at Netflix! No fluff, just straight results—this tool is a must-have!",
    src: `${constructImageURL("/landing/logos/netflix.png")}`,
    designation: "Project Manager @ Netflix",
  },
  {
    name: "Ryan, 23",
    quote:
      "Public speaking and technical interviews were my worst nightmare, but LockedIn AI made prepping a breeze. It helped me ace all my system design questions, and I snagged a $210k job at Microsoft. No BS, this tool is a lifesaver. You’ve gotta try it!",
    src: `${constructImageURL("/landing/logos/microsoft.png")}`,
    designation: "Software Developer @ Microsoft",
  },
  {
    name: "Emily, 25",
    quote:
      "Interviews used to stress me out big time, but LockedIn AI made it super easy. No joke, it helped me nail every system design and coding question during my Google interviews. I landed a $220k position, and it’s all thanks to this app. This thing is fire!",
    src: `${constructImageURL("/landing/logos/google.png")}`,
    designation: "UI/UX @ Google",
  },
  {
    name: "Jake, 22",
    quote:
      "Graduating was nerve-wracking, but LockedIn AI had my back, no cap. It walked me through all the market sizing and case study questions during my consulting interviews, and I aced them! Ended up securing a $180k consulting job at Meta. If you’re trying to level up, this tool is a must. Straight up!",
    src: `${constructImageURL("/landing/logos/meta.png")}`,
    designation: "Consultant @ Meta",
  },
  {
    name: "Sarah, 45",
    quote:
      "Getting back into finance after years away was intimidating, but LockedIn AI totally came through. It helped me prep for all the financial modeling and market analysis questions, and I locked in a $120k role at JP Morgan in just a month. This tool is legit amazing—no nonsense, just results!",
    src: `${constructImageURL("/landing/logos/jpmorgan.png")}`,
    designation: "Finance Analyst @ JP Morgan",
  },
  {
    name: "Nia, 24",
    quote:
      "I was freaking out about job hunting until I found LockedIn AI. No BS, it’s crazy simple to use! It helped me prep for my marketing interviews, and I totally crushed all the campaign strategy and budget questions. Landed my $230k job like a boss. This AI is like having a mentor on speed dial. Game-changer, for real!",
    src: `${constructImageURL("/landing/logos/apple.png")}`,
    designation: "Digital Marketing Specialist @ Apple",
  },
  {
    name: "James, 50",
    quote:
      "I was skeptical about using AI for career coaching, but LockedIn AI blew me away. It helped me navigate through all the sales strategy and negotiation questions during my IBM interviews, and I landed a $330k sales exec job. Thanks to this tool, now I can actually enjoy my life and buy everything I want",
    src: `${constructImageURL("/landing/logos/ibm.png")}`,
    designation: "Sales Executive @ IBM",
  },

  {
    name: "Alex, 28",
    quote:
      "DevOps interviews used to be a pain, but LockedIn AI broke it down for me. It helped me ace the infrastructure scaling and CI/CD pipeline questions that are usually a killer in these interviews. Ended up landing my $135k DevOps role at AWS! If you’re in tech, you’ve gotta try this—seriously, no BS!",
    src: `${constructImageURL("/landing/logos/aws.svg")}`,
    designation: "DevOps Engineer @ AWS",
  },
  {
    name: "Sophia, 30",
    quote:
      "As a UX Designer, interviews can be tricky, especially when it comes to design critiques and user research questions. LockedIn AI helped me tackle them with confidence. I crushed my interviews and scored a $190k position at Amazon. This AI is like having your own personal coach—it’s a game-changer!",
    src: `${constructImageURL("/landing/logos/amazon.png")}`,
    designation: "UX Designer @ Amazon",
  },
  {
    name: "Ethan, 29",
    quote:
      "LockedIn AI was a lifesaver for prepping for my data science interviews. It guided me through complex machine learning questions and case studies with ease. I landed a $150k role at Spotify! No cap, if you're in data science, this tool will make your interview prep stupid easy!",
    src: `${constructImageURL("/landing/logos/spotify.png")}`,
    designation: "Data Scientist @ Spotify",
  },
  {
    name: "Michael, 34",
    quote:
      "LockedIn AI helped me prep for my product management interviews like nothing else. It walked me through tough product strategy and market entry questions. I absolutely crushed it and landed a $110k job at Adobe! If you're serious about getting results, this AI is the way to go!",
    src: `${constructImageURL("/landing/logos/adobe.png")}`,
    designation: "Product Manager @ Adobe",
  },
  {
    name: "Grace, 32",
    quote:
      "The thought of legal interviews used to freak me out, especially the case law and ethics questions. LockedIn AI broke everything down in such an easy way. I ended up securing a $240k in-house counsel position at Goldman Sachs! No nonsense, just effective help—this tool is the real deal!",
    src: `${constructImageURL("/landing/logos/goldmansachs.png")}`,
    designation: "In-House Counsel @ Goldman Sachs",
  },
  {
    name: "Emma, 27",
    quote:
      "LockedIn AI transformed my interview prep! It broke down machine learning concepts so clearly that I aced my interviews. Thanks to this tool, I secured a $170k role at Google. If you're in AI, this tool is a no-brainer!",
    src: `${constructImageURL("/landing/logos/google.png")}`,
    designation: "AI Engineer @ Google",
  },
  {
    name: "Daniel, 31",
    quote:
      "Backend interview questions used to overwhelm me, but LockedIn AI made everything click. It guided me through microservices and API gateway scenarios step-by-step. With its help, I landed a $160k job at AWS. This tool is a game-changer!",
    src: `${constructImageURL("/landing/logos/aws.svg")}`,
    designation: "Backend Engineer @ AWS",
  },
  {
    name: "Olivia, 29",
    quote:
      "LockedIn AI is a lifesaver! It helped me ace my portfolio reviews and cross-functional collaboration questions. I crushed my interviews and secured a $200k product design role at Microsoft. Can’t recommend this tool enough!",
    src: `${constructImageURL("/landing/logos/microsoft.png")}`,
    designation: "Product Designer @ Microsoft",
  },
  {
    name: "Noah, 33",
    quote:
      "Cybersecurity interviews were intimidating, but LockedIn AI gave me detailed insights into threat modeling and encryption questions. I ended up landing a $180k security engineer position at Meta. No fluff, just results!",
    src: `${constructImageURL("/landing/logos/meta.png")}`,
    designation: "Security Engineer @ Meta",
  },
];
