import { OxswotCorePage } from './app.po';

describe('oxswot-core App', () => {
  let page: OxswotCorePage;

  beforeEach(() => {
    page = new OxswotCorePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
