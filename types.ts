import React from 'react';

export interface ServiceItem {
  title: string;
  description: string;
  icon: React.ReactNode;
}

export interface PricingItem {
  service: string;
  description: string;
  targetClients: string;
  price: string;
}

export interface NavLink {
  name: string;
  href: string;
}