import { Commit, Oid, Repository, Tag } from 'nodegit';
import { openRepository } from '../../repository';
import { findCommitByOid } from '../findCommitByOid';

const testTagName = 'test/findCommitByOid';

describe('findCommitByOid(tagName:string)', () => {
  let currentOid: Oid;
  let repo: Repository;
  beforeAll(async () => {
    repo = await openRepository() as Repository;
    currentOid = (await repo.getHeadCommit()).id();
  });

  afterAll(async () => {
    await Tag.delete(repo, testTagName);
  });

  it('should return the Commit corresponding to the Oid', async () => {
    const commit = await findCommitByOid(currentOid);
    expect(commit).toBeInstanceOf(Commit);
  });
});
