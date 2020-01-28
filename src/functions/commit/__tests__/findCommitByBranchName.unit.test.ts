import { Commit } from 'nodegit';
import { findCommitByBranchName } from '../findCommitByBranchName';

describe('findCommitByBranchName()', () => {
  it('should return the last commit on the branch', async () => {
    const commit = await findCommitByBranchName('master');
    expect(commit).toBeInstanceOf(Commit)
  });

  it('given the name of a nonexistent branch, should return null', async () => {
    const commit = await findCommitByBranchName('nonexistent-branch');
    expect(commit).toBeNull();
  });
});
