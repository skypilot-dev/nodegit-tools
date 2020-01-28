import { Commit } from 'nodegit';
import { FindRangeOfCommitsOptions } from '../../types';
import { findOidBySha } from '../oid';
import { openRepository } from '../repository';
import { findRangeOfCommitsByOid } from './findRangeOfCommitsByOid';

/* TODO: Modify to allow the range of commits in either order. */
export async function findRangeOfCommitsBySha(
  newestSha: string,
  oldestSha: string,
  options: FindRangeOfCommitsOptions = {}
): Promise<Commit[]> {
  const {
    repository = await openRepository(),
  } = options;
  if (!repository) {
    return [];
  }
  const newestOid = await findOidBySha(newestSha, { repository });
  const oldestOid = await findOidBySha(oldestSha, { repository });
  if (!newestOid || !oldestOid) {
    return [];
  }
  return findRangeOfCommitsByOid(newestOid, oldestOid, { repository });
}
