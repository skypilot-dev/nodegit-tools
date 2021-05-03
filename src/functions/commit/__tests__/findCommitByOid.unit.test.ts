import { Commit, Oid, Repository } from 'nodegit';

import { openRepository } from 'src/functions';
import { findCommitByOid } from '../findCommitByOid';

let currentOid: Oid;
let repo: Repository;
beforeAll(async () => {
  repo = await openRepository() as Repository;
  currentOid = (await repo.getHeadCommit()).id();
});

describe('findCommitByOid(tagName:string)', () => {
  it('should return the Commit corresponding to the Oid', async () => {
    const commit = await findCommitByOid(currentOid);
    expect(commit).toBeInstanceOf(Commit);
  });
});
