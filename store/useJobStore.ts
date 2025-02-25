type JobListing = {
    id: number;
    title: string;
    company: string;
    type: "Full-time" | "Part-time" | "Contract" | "Freelance";
    location: string;
    salary: string;
    description: string;
    skills: string[];
    requirements: string[];
    responsibilities: string[];
    benefits: string[];
    postedDate: string; // ISO format date
    applicationDeadline: string; // ISO format date
  };

  jobs: [
    {
      id: 1,
      title: "Smart Contract Developer",
      company: "DeFi Protocol X",
      type: "Full-time",
      location: "Remote",
      salary: "120-150K USDC",
      description:
        "Looking for an experienced Solidity developer to build and audit smart contracts for our DeFi protocol.",
      skills: ["Solidity", "Smart Contracts", "DeFi"],
      requirements: [
        "5+ years of experience with Solidity",
        "Experience with Cairo and Starknet",
        "Strong understanding of DeFi protocols",
        "Security-first mindset",
      ],
      responsibilities: [
        "Design and implement smart contracts",
        "Conduct internal audits",
        "Collaborate with the security team",
        "Optimize gas usage",
      ],
      benefits: [
        "Competitive salary in USDC",
        "Flexible working hours",
        "Remote-first culture",
        "Token incentives",
      ],
      postedDate: "2024-03-15",
      applicationDeadline: "2024-04-15",
    },
    {
      id: 2,
      title: "Frontend Web3 Engineer",
      company: "NFT Marketplace Y",
      type: "Contract",
      location: "Remote",
      salary: "80-100K USDC",
      description:
        "Seeking a frontend developer with experience in React, ethers.js, and Web3 integration.",
      skills: ["React", "TypeScript", "Web3.js", "Ethers.js"],
      requirements: [
        "3+ years of React experience",
        "Strong TypeScript skills",
        "Experience with Web3 libraries",
        "Understanding of NFT standards",
      ],
      responsibilities: [
        "Build responsive Web3 interfaces",
        "Integrate wallet connections",
        "Optimize dApp performance",
        "Implement NFT marketplace features",
      ],
      benefits: [
        "Competitive contract rate",
        "Remote work",
        "Flexible hours",
        "NFT bonuses",
      ],
      postedDate: "2024-03-10",
      applicationDeadline: "2024-04-10",
    },
    {
      id: 3,
      title: "Blockchain Security Researcher",
      company: "Security DAO",
      type: "Full-time",
      location: "Remote",
      salary: "130-160K USDC",
      description:
        "Join our team to research and improve blockchain security measures across multiple protocols.",
      skills: ["Security", "Blockchain", "Smart Contracts", "Auditing"],
      requirements: [
        "Strong security background",
        "Experience with blockchain protocols",
        "Smart contract auditing experience",
        "Knowledge of common attack vectors",
      ],
      responsibilities: [
        "Conduct security audits",
        "Research new attack vectors",
        "Write security reports",
        "Collaborate with protocol teams",
      ],
      benefits: [
        "Industry-leading compensation",
        "DAO governance tokens",
        "Flexible work environment",
        "Professional development budget",
      ],
      postedDate: "2024-03-12",
      applicationDeadline: "2024-04-12",
    },
  ];