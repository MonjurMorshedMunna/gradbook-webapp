import { GradbookWebappPage } from './app.po';

describe('gradbook-webapp App', () => {
  let page: GradbookWebappPage;

  beforeEach(() => {
    page = new GradbookWebappPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
