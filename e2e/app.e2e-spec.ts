import { Socks01Page } from './app.po';

describe('socks01 App', function() {
  let page: Socks01Page;

  beforeEach(() => {
    page = new Socks01Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
