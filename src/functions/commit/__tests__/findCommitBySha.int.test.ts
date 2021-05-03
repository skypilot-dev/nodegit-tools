import { Commit, Repository } from 'nodegit';

import { openRepository } from 'src/functions';
import { findCommitBySha } from '../findCommitBySha';

let sha: string;
let repo: Repository;

beforeAll(async () => {
  repo = await openRepository() as Repository;
  sha = (await repo.getHeadCommit()).id().tostrS();
});

describe('findCommitBySha(sha:string)', () => {
  it('should return the Commit corresponding to the SHA', async () => {
    const commit = await findCommitBySha(sha);
    expect(commit).toBeInstanceOf(Commit);
  });
});
