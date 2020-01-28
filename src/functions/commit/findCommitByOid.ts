import { Commit, Oid, Repository } from 'nodegit';
import { openRepository } from '../repository';

interface FindCommitByTagName {
  repository?: Repository;
}

export async function findCommitByOid(
  oid: Oid,
  options: FindCommitByTagName = {}
): Promise<Commit | null> {
  const {
    repository = await openRepository(),
  } = options;
  if (!repository) {
    return null;
  }
  try {
    return await Commit.lookup(repository, oid);
  } catch (e) {
    return null;
  }
}
