import { Commit, Oid, Repository, Revwalk } from 'nodegit';
import { openRepository } from '../repository';

interface FindRangeOfCommitsByOidOptions {
  repository?: Repository;
}

/* TODO: Modify to allow the range of commits in either order. */
export async function findRangeOfCommitsByOid(
  newestOid: Oid,
  oldestOid: Oid,
  options: FindRangeOfCommitsByOidOptions = {}
): Promise<Commit[]> {
  const {
    repository = await openRepository(),
  } = options;
  if (!repository) {
    return [];
  }
  const toSha: string = oldestOid.tostrS();
  const revwalk: Revwalk = repository.createRevWalk();
  revwalk.push(newestOid);
  return revwalk.getCommitsUntil((commit: Commit) => commit.id().tostrS() !== toSha);
}
