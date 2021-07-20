import fetchQuotes from './fetchQuotes';


describe('fetchQuotes', () => {
  it('returns a single quote in the correct format', async () => {
    const quote = await fetchQuotes();

    expect(quote).toEqual({ 
      name: expect.anything(),
      text: expect.anything(),
      image: expect.anything(),
    });

  });
});
