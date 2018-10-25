export class News {
  public newsID: number;
  public title: string;
  public description: string;
  public text: string;
  public category: string;
  public city: string;
  // public date: string;
  // public active: boolean;

  constructor(
    title: string,
    description: string,
    text: string,
    category: string,
    city: string,
    newsID?: number
      // date: string,
      // active: boolean
  ) {
    this.newsID = newsID;
    this.title = title;
    this.description = description;
    this.text = text;
    this.category = category;
    this.city = city;
    // this.date = date;
    // this.active = active;
  }
}
