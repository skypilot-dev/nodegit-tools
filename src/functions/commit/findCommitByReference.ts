import { Commit, Reference, Repository } from 'nodegit';

import { OBJECT_TYPE_COMMIT } from 'src/constants';
import { openRepository } from 'src/functions';
import { findCommitByOid } from './findCommitByOid';

interface FindCommitByTagName {
  repository?: Repository;
}

export async function findCommitByReference(
  reference: Reference,
  options: FindCommitByTagName = {}
): Promise<Commit | null> {
  const {
    repository = await openRepository(),
  } = options;
  if (!repository) {
    return null;
  }

  const peeledRef = await reference.peel(OBJECT_TYPE_COMMIT);
  const oid = peeledRef.id();

  try {
    return await findCommitByOid(oid, { repository });
  } catch (e) {
    return null;
  }
}
