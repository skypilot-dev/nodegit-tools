import { Reference, Repository } from 'nodegit';

import { openRepository } from 'src/functions';

export interface RetrieveCurrentBranchOptions<T> {
  repository?: Repository;
  transformer?: (ref: Reference) => T;
}

/* Get a `Reference` object for the current branch. */
export async function retrieveCurrentBranchReference<T = Reference>(
  options: RetrieveCurrentBranchOptions<T> = {},
): Promise<T | null> {
  const {
    repository = await openRepository(),
    transformer = (reference: Reference) => reference,
  } = options;
  if (!repository) {
    return null;
  }
  const reference: Reference = await repository.getCurrentBranch();
  return transformer(reference) as T;
}
