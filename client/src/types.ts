export interface College {
  _id: string; // Keep as _id to match the consistent API response
  name: string;
  location: string;
  course: string;
  fee: number;
}

export interface Review {
  id: number;
  collegeName: string;
  rating: number;
  comment: string;
  createdAt: string;
}