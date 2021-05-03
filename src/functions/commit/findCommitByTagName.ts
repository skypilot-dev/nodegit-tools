import { Commit, Repository } from 'nodegit';

import { findCommitByReference, findReferenceByTagName, openRepository } from 'src/functions';

interface FindCommitByTagName {
  repository?: Repository;
}

export async function findCommitByTagName(
  tagName: string,
  options: FindCommitByTagName = {}
): Promise<Commit | null> {
  const {
    repository = await openRepository(),
  } = options;
  if (!repository) {
    return null;
  }
  const reference = await findReferenceByTagName(tagName, { repository });
  if (!reference) {
    return null;
  }
  try {
    return await findCommitByReference(reference, { repository });
  } catch (e) {
    return null;
  }
}
