import { shallowMount } from "@vue/test-utils";
import SuperheroCard from "@/components/SuperheroCard.vue";
import SuperHero from "@/entities/Character";

describe("SuperheroCard.vue", () => {
  it("renders superhero detail", () => {
    const superhero = new SuperHero(
      "GUID1",
      "Mathieu Mure",
      "He's the best i've known"
    );
    const wrapper = shallowMount(SuperheroCard, {
      propsData: { superhero }
    });
    expect(wrapper.find(".superhero-card__logo").attributes().src).toBe(
      "/api/images/GUID1?type=standard"
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
