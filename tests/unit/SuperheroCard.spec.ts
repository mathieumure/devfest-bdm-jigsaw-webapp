import { shallow } from "@vue/test-utils";
import SuperheroCard from "@/components/SuperheroCard.vue";
import SuperHero from "@/entities/SuperHero";

describe("SuperheroCard.vue", () => {
  it("renders superhero detail", () => {
    const superhero = new SuperHero(
      "Mathieu Mure",
      "He's the best i've known",
      "http://my.super-hero.url.jpg"
    );
    const wrapper = shallow(SuperheroCard, {
      propsData: { superhero }
    });
    expect(wrapper.find(".superhero-card__logo").attributes().src).toBe(
      "http://my.super-hero.url.jpg"
    );
    expect(wrapper.find(".superhero-card__logo").attributes().alt).toEqual(
      "Mathieu Mure"
    );
    expect(
      wrapper
        .find(".superhero-card__title")
        .text()
        .trim()
    ).toBe("Mathieu Mure");
    expect(
      wrapper
        .find(".superhero-card__description")
        .text()
        .trim()
    ).toContain("He's the best i've known");
  });
});
