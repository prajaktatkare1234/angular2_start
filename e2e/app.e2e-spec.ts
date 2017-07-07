import { ProjectAngular2Page } from './app.po';

describe('project-angular2 App', function() {
  let page: ProjectAngular2Page;

  beforeEach(() => {
    page = new ProjectAngular2Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
