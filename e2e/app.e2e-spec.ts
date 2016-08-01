import { NationsPage } from './app.po';

describe('nations App', function() {
  let page: NationsPage;

  beforeEach(() => {
    page = new NationsPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
