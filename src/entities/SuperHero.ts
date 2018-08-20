export default class SuperHero {
  id: number;
  name: string;
  description?: string;
  logo?: string;

  constructor(id: number, name: string, description?: string) {
    this.id = id;
    this.name = name;
    this.description = description;
    this.logo = "/api/images/" + this.id + "?type=standard";
  }
}
