import { Commit, Repository } from 'nodegit';
import { openRepository } from '../../repository';
import { findRangeOfCommitsByOid } from '../findRangeOfCommitsByOid';

describe('findRangeOfCommitsByOid(:Oid, :Oid)', () => {
  it('should get a range of commits, from newest to oldest', async () => {
    const repo = await openRepository() as Repository;

    /* For purposes of test, grab a range of only two commits, which will be known to exist. */
    const headCommit = await repo.getHeadCommit();
    const parentCommit = (await headCommit.getParents(1 ))[0];

    const commits: Commit[] = await findRangeOfCommitsByOid(headCommit.id(), parentCommit.id());
    expect(commits).toHaveLength(2);
    expect(commits[0]).toBeInstanceOf(Commit);
  });
});
