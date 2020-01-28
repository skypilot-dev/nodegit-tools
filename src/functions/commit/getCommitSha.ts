import { Commit } from 'nodegit';

export function getCommitSha(commit: Commit): string {
  return commit.id().tostrS();
}
