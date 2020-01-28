import { Reference, Repository } from 'nodegit';
import { openRepository } from '../repository';

interface RetrieveCurrentBranchReferenceOptions {
  repository?: Repository;
}

/* Get a `Reference` object for the current branch. */
export async function retrieveCurrentBranchReference(
  options: RetrieveCurrentBranchReferenceOptions = {}
): Promise<Reference | null> {
  const {
    repository = await openRepository(),
  } = options;
  if (!repository) {
    return null;
  }
  return await repository.getCurrentBranch();
}
