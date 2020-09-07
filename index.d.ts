import * as React from "react";

declare class Gallery extends React.Component<Props> {}

declare type ImageOptions = {
  src:               string;
  thumbnail:         string;
  thumbnailWidth:    number;
  thumbnailHeight:   number;
  isSelected?:       boolean;
  caption?:          string;
};

declare type Props = {
  images:                ImageOptions[];
  id?:                   string;
  enableImageSelection?: boolean;
  onSelectImage?:        () => void;
  rowHeight?:            number;
  maxRows?:              number;
  margin?:               number;
  enableLightbox?:       boolean;
  onClickThumbnail?:     () => void;
  lightboxWillOpen?:     () => void;
  lightboxWillClose?:    () => void;
  tagStyle?:             object;
  tileViewportStyle?:    () => void;
  thumbnailStyle?:       () => void;
}

export = Gallery;
