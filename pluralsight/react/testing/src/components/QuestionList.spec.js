describe('QuestionList Component', () => {
  beforeAll(() => {
    console.log("Before All");
  });
  beforeEach(() => {
    console.log("Before Each");
  });
  it('should display a list of items', () => {
    expect(40 + 2).toEqual(42);
  });
  it.skip('should display a list of item double', () => {
    expect(40 + 2).toEqual(41);
  });
});
