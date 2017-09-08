import { CvhectorPage } from './app.po';

describe('cvhector App', () => {
  let page: CvhectorPage;

  beforeEach(() => {
    page = new CvhectorPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
