import { Commit, Repository } from 'nodegit';
import { openRepository } from '../repository';

interface RetrieveHeadCommitOptions {
  repository?: Repository;
}

/* Return the Commit at HEAD. */
export async function retrieveHeadCommit(
  options: RetrieveHeadCommitOptions = {}
): Promise<Commit | null> {
  const {
    repository = await openRepository(),
  } = options;
  if (!repository) {
    return null;
  }
  return await repository.getHeadCommit();
}
