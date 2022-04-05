import { DirectiveEx400Page } from './app.po';

describe('directive-ex400 App', function() {
  let page: DirectiveEx400Page;

  beforeEach(() => {
    page = new DirectiveEx400Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
