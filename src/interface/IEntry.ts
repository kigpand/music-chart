export interface ILabel {
  label: string;
}

export interface IName extends ILabel {}

export interface IAttributes {
  height: string;
}

export interface IImage extends ILabel {
  attributes: IAttributes;
}

export interface IItemCount extends ILabel {}

export interface IPrice extends ILabel {
  attributes: {
    amount: "string";
    currency: "string";
  };
}

export interface IContentAttributes extends ILabel {
  term: "string";
}

export interface IContentType {
  "im:contentType": {
    attributes: IContentAttributes;
  };
  attributes: IContentAttributes;
}

export interface IRights extends ILabel {}

export interface ITitle extends ILabel {}

export interface ILink {
  attributes: {
    rel: string;
    type: string;
    href: string;
  };
}

export interface IId extends ILabel {
  attributes: {
    "im:id": string;
  };
}

export interface IArtist extends ILabel {
  attributes: {
    href: string;
  };
}

export interface ICategory extends ILabel {
  attributes: {
    "im:id": string;
    term: string;
    scheme: string;
  };
}

export interface IReleaseData extends ILabel {
  attributes: ILabel;
}

export interface IEntry {
  "im:name": IName;
  "im:image": IImage[];
  "im:itemCount": IItemCount;
  "im:price": IPrice;
  "im:contentType": IContentType;
  rights: IRights;
  title: ITitle;
  link: ILink;
  id: IId;
  artist: IArtist;
  category: ICategory;
  "im:releaseData": IReleaseData;
}
