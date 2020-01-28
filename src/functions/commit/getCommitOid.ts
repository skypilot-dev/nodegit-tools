import { Commit, Oid } from 'nodegit';

export function getCommitOid(commit: Commit): Oid {
  return commit.id();
}
