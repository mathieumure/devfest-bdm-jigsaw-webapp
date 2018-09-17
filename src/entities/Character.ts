export default class Character {
  id: string;
  name: string;
  description?: string;
  logo?: string;

  constructor(id: string, name: string, description?: string) {
    this.id = id;
    this.name = name;
    this.description = description;
    this.logo = "/api/images/" + this.id + "?type=standard";
  }
}
