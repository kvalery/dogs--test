import { DogsBreedsPage } from './app.po';

describe('dogs-breeds App', () => {
  let page: DogsBreedsPage;

  beforeEach(() => {
    page = new DogsBreedsPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
