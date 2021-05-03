import { Repository } from 'nodegit';
import { openRepository } from '../openRepository';

describe('getCurrentRepo()', () => {
  it("invoked with a path, should return this project's repository", async () => {
    const currentRepo = await openRepository();
    expect(currentRepo).toBeInstanceOf(Repository);
  });

  it('if given a bad path, should return null', async () => {
    const currentRepo = await openRepository({ path: 'non-existent-path' });
    expect(currentRepo).toBeNull();
  });
});
