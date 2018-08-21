import SuperHero from "@/entities/SuperHero";
import axios from "axios";
import Infos from "@/entities/Infos";

const CHARACTERS_URL = "/api/characters";
const INFO_URL = "/api/info";

export function getCharacters(
  search: string,
  score?: number
): Promise<Array<SuperHero>> {
  return axios
    .get(CHARACTERS_URL, {
      params: {
        search,
        score
      }
    })
    .then(response =>
      response.data.characters.map(
        (it: any) => new SuperHero(it.id, it.name, it.description)
      )
    )
    .catch(
      (error: any): any => {
        if (error.response.status === 404) {
          return Promise.resolve([]);
        }
        console.error(error.response);
      }
    );
}

export function getCharacter(id: number): Promise<SuperHero> {
  return axios
    .get(CHARACTERS_URL + "/" + id)
    .then(response => response.data)
    .then((it: any) => new SuperHero(it.id, it.name, it.description));
}

export function getInfos(): Promise<Infos> {
  return axios.get(INFO_URL).then(response => new Infos(response.data));
}
