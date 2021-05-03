import { Reference, Repository } from 'nodegit';

import { openRepository } from 'src/functions';

interface FindReferenceByTagNameOptions {
  repository?: Repository;
}

export async function findReferenceByTagName(
  tagName: string, options: FindReferenceByTagNameOptions = {}
): Promise<Reference | null> {
  const {
    repository = await openRepository(),
  } = options;
  if (!repository) {
    return null;
  }
  try {
    return await Reference.lookup(repository, `refs/tags/${tagName}`);
  } catch (e) {
    return null;
  }
}
