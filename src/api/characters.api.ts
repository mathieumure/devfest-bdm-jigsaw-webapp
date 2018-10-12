import Character from "@/entities/Character";
import axios from "axios";
import Infos from "@/entities/Infos";

const CHARACTERS_URL = "/api/characters";
const INFO_URL = "/api/info";

export function getCharacters(
  search: string,
  score?: number
): Promise<Array<Character>> {
  return axios
    .get(CHARACTERS_URL, {
      params: {
        search,
        score
      }
    })
    .then(response =>
      response.data.characters.map(
        (it: any) => new Character(it.id, it.name, it.description)
      )
    )
    .catch(
      (error: any): any => {
        if (error.response.status === 404) {
          return Promise.resolve([]);
        }
        /* eslint-disable no-console */
        console.error(error.response);
        return Promise.reject();
      }
    );
}

export function getCharacter(id: String): Promise<Character> {
  return axios
    .get(CHARACTERS_URL + "/" + id)
    .then(response => response.data)
    .then((it: any) => new Character(it.id, it.name, it.description));
}

export function getInfos(): Promise<Infos> {
  return axios.get(INFO_URL).then(response => new Infos(response.data));
}
