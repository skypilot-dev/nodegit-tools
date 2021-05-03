import { Oid, Repository } from 'nodegit';

import { openRepository } from 'src/functions';
import { findOidBySha } from '../findOidBySha';

let sha: string;
let repo: Repository;
beforeAll(async () => {
  repo = await openRepository() as Repository;
  sha = (await repo.getHeadCommit()).id().tostrS();
});

describe('findOidBySha(sha:string)', () => {
  it('should return the Oid corresponding to the SHA', async () => {
    const commit = await findOidBySha(sha);
    expect(commit).toBeInstanceOf(Oid);
  });
});
