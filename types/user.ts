// types/user.ts
export type UserType = "admin" | "artist" | "fan" | "brand";

export interface SocialUrls {
  website?: string;
  twitter?: string;
  instagram?: string;
  facebook?: string;
}

export interface BaseUserProfile {
  id: string;
  username: string;
  display_name: string;
  avatar_url?: string;
  bio?: string;
  user_type: UserType;
  created_at: string;
  updated_at: string;
}

export interface FanProfile extends BaseUserProfile {
  user_type: "fan";
}

export interface ArtistProfile extends BaseUserProfile {
  user_type: "artist";
  artist_name: string;
  genre?: string;
}

export interface BrandProfile extends BaseUserProfile {
  user_type: "brand";
  brand_name: string;
  industry?: string;
}

export interface AdminProfile extends BaseUserProfile {
  user_type: "admin";
}

export type UserProfile =
  | FanProfile
  | ArtistProfile
  | BrandProfile
  | AdminProfile;
