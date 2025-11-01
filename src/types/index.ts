export interface TravelDestination {
  country: string;
  emoji: string;
  description?: string;
}

export interface GalleryItem {
  id: number;
  src: string;
  alt: string;
  type: "image" | "video";
}

export interface NavItem {
  label: string;
  href: string;
}
