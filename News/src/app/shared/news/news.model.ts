export class News {

  public title: string;
  public description: string;
  public text: string;
  public category: string;
  public city: string;
  public newsID: number;
  public active: boolean;
  public date: string;

  constructor(data?) {
    const { title, description, text, category, city, active, date, id } = data;
    this.title = title;
    this.description = description;
    this.text = text;
    this.category = category || null;
    this.city = city || null;
    this.newsID = id || null;
    this.active = active || null;
    this.date = date || null;
    // this.date = date;
    // this.active = active;
  }
}
