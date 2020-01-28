import { Repository, Tag } from 'nodegit';
import { openRepository } from '../repository';

interface RetrieveTagNamesOptions {
  repository?: Repository;
}

export async function retrieveTagNames(options: RetrieveTagNamesOptions = {}): Promise<string[]> {
  const {
    repository = await openRepository(),
  } = options;
  if (!repository) {
    return [];
  }
  return await Tag.list(repository);
}
