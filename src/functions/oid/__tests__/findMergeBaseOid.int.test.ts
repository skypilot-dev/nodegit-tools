import { Oid, Repository } from 'nodegit';

import { openRepository } from 'src/functions';
import { findMergeBaseOid } from '../findMergeBaseOid';

describe('findMergeBaseOid(:Oid, :Oid)', () => {
  it('should return an Oid', async () => {
    const repo = await openRepository() as Repository;
    const headOid = (await repo.getHeadCommit()).id();
    const masterOid = (await repo.getBranchCommit('master')).id();
    const mergeBaseOid = await findMergeBaseOid(headOid, masterOid);
    expect(mergeBaseOid).toBeInstanceOf(Oid);
  });
});
