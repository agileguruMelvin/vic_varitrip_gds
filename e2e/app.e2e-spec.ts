import { VaritripPage } from './app.po';

describe('varitrip App', () => {
  let page: VaritripPage;

  beforeEach(() => {
    page = new VaritripPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
