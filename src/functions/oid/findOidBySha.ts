import { Commit, Oid, Repository } from 'nodegit';

import { findCommitBySha, getCommitOid, openRepository } from 'src/functions';

interface FindOidByShaOptions {
  repository?: Repository;
}

/* Given a SHA, return its corresponding `Oid` object. */
export async function findOidBySha(
  sha: string,
  options: FindOidByShaOptions = {}
): Promise<Oid | null> {
  const {
    repository = await openRepository(),
  } = options;
  if (!repository) {
    return null;
  }


  let commit: Commit | null;
  try {
    commit = await findCommitBySha(sha, { repository });
  } catch (e) {
    return null;
  }
  if (!commit) {
    return null;
  }
  return getCommitOid(commit);
}
