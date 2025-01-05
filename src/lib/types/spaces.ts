interface DayPassDiscount {
  value: number;
  message: string;
}

export interface ISpaceItem {
  id: string;
  name: string;
  google_maps_url: string;
  address: string;
  latitude: number;
  longitude: number;
  city: string;
  state: string;
  country: string;
  postal_code: string;
  description: string | null;
  rules: string | null;
  amenities: string[];
  images: string[];
  working_hours_start: string;
  working_hours_end: string;
  facilities: string | null;
  is_active: boolean;
  is_day_pass_enabled: boolean;
  day_pass_price: number;
  day_pass_discounts_percentage: Record<string, DayPassDiscount>;
  manager_id: string | null;
  can_edit: boolean;
}
