export class News {

  public title: string;
  public description: string;
  public text: string;
  public category: string;
  public city: string;
  public newsID: number;

  constructor(data?) {
    const { title, description, text, category, city, id } = data;
    this.title = title;
    this.description = description;
    this.text = text;
    this.category = category || null;
    this.city = city || null;
    this.newsID = id || null;
    // this.date = date;
    // this.active = active;
  }
}
