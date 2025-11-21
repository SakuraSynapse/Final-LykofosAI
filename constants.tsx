import React from 'react';
import { FileText, ScanText, MessageSquare, Mic, Layout, Search, Zap, Megaphone, TrendingUp } from 'lucide-react';
import { ServiceItem, PricingItem } from './types';

export const SERVICES: ServiceItem[] = [
  {
    title: "AI Document Intelligence",
    description: "Ingest, classify, and extract insights from up to 400k documents instantly.",
    icon: <FileText />
  },
  {
    title: "OCR & Multimedia Add-on",
    description: "Advanced processing for scanned PDFs, images, handwritten notes, and video subtitles.",
    icon: <ScanText />
  },
  {
    title: "Custom Conversational AI",
    description: "Intelligent chatbots for Website, WhatsApp, Telegram, and internal support.",
    icon: <MessageSquare />
  },
  {
    title: "Voice AI Agents",
    description: "Human-like phone agents for outbound booking and IVR replacement.",
    icon: <Mic />
  },
  {
    title: "Website Development",
    description: "Custom or no-code (Webflow/Framer) sites deeply integrated with AI agents.",
    icon: <Layout />
  },
  {
    title: "GEO (Gen Engine Optimization)",
    description: "Rank your brand in ChatGPT, Perplexity, Claude, and Gemini answers.",
    icon: <Search />
  },
  {
    title: "AI Automation Agency",
    description: "End-to-end workflows using Zapier/Make, data pipelines, and autonomous agents.",
    icon: <Zap />
  },
  {
    title: "AI Marketing & Content",
    description: "Scalable content creation for blogs, LinkedIn, and email sequences.",
    icon: <Megaphone />
  },
  {
    title: "Strategic AI Consulting",
    description: "Executive workshops, implementation roadmaps, and ROI calculation.",
    icon: <TrendingUp />
  }
];

export const PRICING_DATA: PricingItem[] = [
  {
    service: "AI Document Intelligence & Analyzer",
    description: "Ingest, classify, extract, summarize, Q&A over up to 400k docs",
    targetClients: "Law firms, consultancies, finance, real estate",
    price: "Starter: $12,500 + $499/mo · Pro: $25,000 + $999/mo · Enterprise: $50k–$75k + $1,999/mo"
  },
  {
    service: "OCR & Multimedia Add-on",
    description: "Scanned PDFs, images, video subtitles, handwritten notes",
    targetClients: "Anyone with archives",
    price: "+30% on base price"
  },
  {
    service: "Custom Conversational AI",
    description: "Website, WhatsApp, Telegram, KakaoTalk, internal bots",
    targetClients: "E-commerce, clinics, support teams",
    price: "$8,000–$25,000 + $299–$999/mo"
  },
  {
    service: "Voice AI Agents",
    description: "Human-like phone agents, IVR replacement, outbound booking",
    targetClients: "Clinics, real estate, restaurants",
    price: "$15,000–$35,000 + $599–$1,499/mo (incl. minutes)"
  },
  {
    service: "Website Development",
    description: "Full custom or no-code (Webflow/Framer/Lovable) sites with AI integrations",
    targetClients: "Startups, agencies, professional firms",
    price: "$8,000–$20,000 one-time"
  },
  {
    service: "GEO – Generative Engine Optimization",
    description: "Rank in ChatGPT, Perplexity, Claude, Gemini answers & featured snippets",
    targetClients: "SaaS, e-commerce, law firms, content sites",
    price: "$4,000–$12,000 per quarter (ongoing)"
  },
  {
    service: "AI Automation Agency Services",
    description: "Zapier/Make + AI agents, data pipelines",
    targetClients: "All SMEs",
    price: "$5,000–$15,000 per project"
  },
  {
    service: "AI Marketing & Content",
    description: "Blogs, LinkedIn carousels, email sequences (white-label OK)",
    targetClients: "Agencies & direct clients",
    price: "$3k–$8k/month retainer"
  },
  {
    service: "Strategic AI Consulting",
    description: "Workshops, roadmaps, ROI calculations",
    targetClients: "Mid-to-large companies",
    price: "$10,000–$30,000 flat"
  }
];