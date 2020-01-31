import { Commit } from 'nodegit';

export interface CommitRecord {
  date: Date;
  message: string;
  sha: string;
}

export function getCommitRecord(commit: Commit): CommitRecord {
  return {
    date: commit.date(),
    message: commit.message(),
    sha: commit.id().tostrS(),
  }
}
