import { FilterLinkPipe } from "./filter-link.pipe";
import { LinkEnum } from "../../enum/links.enum";
import { TechnologyEnum } from "../../enum/technology.enum";

describe("FilterLinkPipe", () => {
  it("create an instance", () => {
    const pipe = new FilterLinkPipe();
    expect(pipe).toBeTruthy();
    expect(pipe).toBeTruthy();
    expect(pipe.transform(TechnologyEnum.UI)).toBe(LinkEnum.UI);
    expect(pipe.transform('')).toBe('/');
  });
});
