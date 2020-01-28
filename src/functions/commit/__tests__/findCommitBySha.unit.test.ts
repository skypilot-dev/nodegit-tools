import { Commit, Repository, Tag } from 'nodegit';
import { openRepository } from '../../repository';
import { findCommitBySha } from '../findCommitBySha';

const testTagName = 'test/findCommitBySha';

describe('findCommitBySha(sha:string)', () => {
  let sha: string;
  let repo: Repository;
  beforeAll(async () => {
    repo = await openRepository() as Repository;
    sha = (await repo.getHeadCommit()).id().tostrS();
  });

  afterAll(async () => {
    await Tag.delete(repo, testTagName);
  });

  it('should return the Commit corresponding to the SHA', async () => {
    const commit = await findCommitBySha(sha);
    expect(commit).toBeInstanceOf(Commit);
  });
});
