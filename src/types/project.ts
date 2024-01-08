export interface Project {
    id: number;
    name: string;
    country: string;
    image?: string;
    price_per_ton: number;
    offered_volume_in_tons: number;
    distribution_weight: number;
    supplier_name: string;
    earliest_delivery: string; // Assuming it's a date string, you can adjust the type accordingly
    sdgs: number[]; // Assuming it's an array of strings, you can adjust the type accordingly
    description: string;
  }