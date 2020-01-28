import { Oid, Repository, Tag } from 'nodegit';
import { openRepository } from '../../repository';
import { findOidBySha } from '../findOidBySha';

const testTagName = 'test/findOidBySha';

describe('findOidBySha(sha:string)', () => {
  let sha: string;
  let repo: Repository;
  beforeAll(async () => {
    repo = await openRepository() as Repository;
    sha = (await repo.getHeadCommit()).id().tostrS();
  });

  afterAll(async () => {
    await Tag.delete(repo, testTagName);
  });

  it('should return the Oid corresponding to the SHA', async () => {
    const commit = await findOidBySha(sha);
    expect(commit).toBeInstanceOf(Oid);
  });
});
