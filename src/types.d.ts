/**
 * global types.
 * Use in the Images and Simple list at time of writing this.
 * LIT0: "Lists in typescript"
 * Next see LIT1:
 */

// Images and Image
interface IImage {
    url: string;
    description: string;
    featured: boolean;
    id: string;
  }

  interface ImageListItem {
    image: IImage;
  }
  interface ImageList {
    images: IImage[];
  }



  // ListItems and listItem
 interface IListItem {
    userId: number;
    id: number;
    title: string;
    completed: boolean;
}
interface SimpleListItem {
  listItem: IListItem;
}
interface SimpleList {
  listItems: IListItem[];
}


