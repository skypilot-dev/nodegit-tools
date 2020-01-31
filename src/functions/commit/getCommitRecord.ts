import { Commit } from 'nodegit';

interface CommitRecord {
  date: Date;
  sha: string;
}

export function getCommitRecord(commit: Commit): CommitRecord {
  return {
    date: commit.date(),
    sha: commit.id().tostrS(),
  }
}
