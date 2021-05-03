import { Commit, Repository } from 'nodegit';

import { openRepository } from 'src/functions';

interface FindCommitBySha {
  repository?: Repository;
}

/* Given a SHA, return its correspondin `Oid` object. */
export async function findCommitBySha(
  sha: string,
  options: FindCommitBySha = {}
): Promise<Commit | null> {
  const {
    repository = await openRepository(),
  } = options;
  if (!repository) {
    return null;
  }

  try {
    return await repository.getCommit(sha);
  } catch (e) {
    return null;
  }
}
