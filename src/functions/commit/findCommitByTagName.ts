import { Commit, Repository } from 'nodegit';
import { findReferenceByTagName } from '../reference';
import { openRepository } from '../repository';
import { findCommitByReference } from './findCommitByReference';

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
