import { ReuseComponentPage } from './app.po';

describe('reuse-component App', () => {
  let page: ReuseComponentPage;

  beforeEach(() => {
    page = new ReuseComponentPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
