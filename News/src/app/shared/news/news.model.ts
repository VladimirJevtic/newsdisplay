export class News {

  public title: string;
  public description: string;
  public text: string;
  public category: string;
  public city: string;
  public newsID: number;
  public active: boolean;
  public date: string;
  public pathToPicture: string;

  constructor(data?) {
    const { title, description, text, category, city, active, date, id, pathToPicture } = data;
    this.title = title;
    this.description = description;
    this.text = text;
    this.category = category;
    this.city = city;
    this.newsID = id;
    this.active = active;
    this.date = date;
    this.pathToPicture = pathToPicture;
    // this.date = date;
    // this.active = active;
  }
}
