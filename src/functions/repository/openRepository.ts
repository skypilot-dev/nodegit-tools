import path from 'path';
import { Repository } from 'nodegit';

interface OpenRepositoryOptions {
  path?: string;
}

/* Given a path to a repository (defaults: the current directory), return a Repository object for
 * the repo, or `null` if the repo doesn't exist. */
export async function openRepository(
  options: OpenRepositoryOptions = {}
): Promise<Repository | null> {
  const {
    path: pathToRepo = __dirname,
  } = options;

  let currentRepoPathBuffer;
  try {
    /* Currently configured not to cross filesystem devices; change if needed. */
    currentRepoPathBuffer = await Repository.discover(path.resolve(pathToRepo), 0, '');
  } catch (e) {
    return null;
  }
  const currentRepoPath = currentRepoPathBuffer.toString();
  return Repository.open(path.resolve(currentRepoPath));
}
