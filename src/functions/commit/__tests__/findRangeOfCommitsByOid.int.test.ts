import { Commit, Repository } from 'nodegit';

import { openRepository } from 'src/functions';
import { findRangeOfCommitsByOid } from '../findRangeOfCommitsByOid';

describe('findRangeOfCommitsByOid(:Oid, :Oid)', () => {
  it('should get a range of commits, from newest to oldest', async () => {
    const repo = await openRepository() as Repository;

    /* For purposes of test, grab a range of only two commits, which will be known to exist. */
    const headCommit = await repo.getHeadCommit();
    const parentCommit = (await headCommit.getParents(1 ))[0];

    const commits: Commit[] = await findRangeOfCommitsByOid(headCommit.id(), parentCommit.id());
    /* The length will be 2 if the previous commit was a fast-forward, or greater than two
     * if it was a merge commit. */
    expect(commits.length).toBeGreaterThan(1);
    expect(commits[0]).toBeInstanceOf(Commit);
  });
});
