import { Commit, Oid, Revwalk } from 'nodegit';
import { FindRangeOfCommitsOptions } from '../../types';
import { openRepository } from '../repository';

/* TODO: Modify to allow the range of commits in either order. */
export async function findRangeOfCommitsByOid(
  newestOid: Oid,
  oldestOid: Oid,
  options: FindRangeOfCommitsOptions = {}
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
