import { Commit, Repository } from 'nodegit';
import { openRepository } from '../../repository';
import { findRangeOfCommitsBySha } from '../findRangeOfCommitsBySha';

describe('findRangeOfCommitsBySha(:string, :string)', () => {
  it('should get a range of commits, from newest to oldest', async () => {
    const repo = await openRepository() as Repository;

    /* For purposes of test, grab a range of only two commits, which will be known to exist. */
    const headCommit = await repo.getHeadCommit();
    const parentCommit = (await headCommit.getParents(1 ))[0];

    const headSha = headCommit.id().tostrS();
    const parentSha = parentCommit.id().tostrS();

    const commits: Commit[] = await findRangeOfCommitsBySha(headSha, parentSha);
    expect(commits).toHaveLength(2);
    expect(commits[0]).toBeInstanceOf(Commit);
  });
});
