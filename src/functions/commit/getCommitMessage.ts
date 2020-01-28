import { Commit } from 'nodegit';

export function getCommitMessage(commit: Commit): string {
  return commit.message();
}
