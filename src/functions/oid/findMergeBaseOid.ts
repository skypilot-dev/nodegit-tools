import { Merge, Oid, Repository } from 'nodegit';

import { openRepository } from 'src/functions';

interface FindMergeBaseOidOptions {
  repository?: Repository;
}

/* Given two object IDs, return the object ID of their most recent common ancestor, or `null`
 * if they have no common ancestor. */
export async function findMergeBaseOid(
  oidA: Oid,
  oidB: Oid,
  options: FindMergeBaseOidOptions = {}
): Promise<Oid | null> {
  const {
    repository = await openRepository(),
  } = options;
  if (!repository) {
    return null;
  }

  try {
    return await Merge.base(repository, oidA, oidB);
  } catch (e) {
    return null;
  }
}
