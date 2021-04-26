export interface IPhotoFeed {
  id: number;
  image_url: string;
  nickname: string;
  profile_image_url: string;
  scrap?: boolean;
};

export type photoFeedListType = Array<IPhotoFeed>;
