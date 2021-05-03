import { Commit } from 'nodegit';

import { retrieveHeadCommit } from '../retrieveHeadCommit';

describe('retrieveHeadCommit()', () => {
  it('should return a Commit', async () => {
    const commit = await retrieveHeadCommit();
    expect(commit).toBeInstanceOf(Commit);
  });
});
