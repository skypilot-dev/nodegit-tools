import { Commit, Repository } from 'nodegit';

import { openRepository } from 'src/functions';

interface FindCommitByBranchNameOptions {
  repository?: Repository;
}

/* Given a branch name, return the latest Commit on that branch. */
export async function findCommitByBranchName(
  branchName: string,
  options: FindCommitByBranchNameOptions = {}
): Promise<Commit | null> {
  const {
    repository = await openRepository(),
  } = options;
  if (!repository) {
    return null;
  }
  try {
    return await repository.getBranchCommit(branchName);
  } catch (e) {
    return null;
  }
}
