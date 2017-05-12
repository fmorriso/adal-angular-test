import { AdalAngularTestPage } from './app.po';

describe('adal-angular-test App', () => {
  let page: AdalAngularTestPage;

  beforeEach(() => {
    page = new AdalAngularTestPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
