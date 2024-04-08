export interface ShareButton {
  shareType: string;
  shareUrl: string;
}

export interface ShareButtonConfig {
  title: string;
  buttons: ShareButton[];
}