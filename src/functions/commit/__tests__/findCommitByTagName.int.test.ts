import { Commit, Object as NodeGitObject, Repository, Tag } from 'nodegit';

import { OBJECT_TYPE_COMMIT, TAG_CREATE_FORCE } from 'src/constants';
import { openRepository } from 'src/functions';
import { findCommitByTagName } from '../findCommitByTagName';

const testTagName = 'test/findCommitByTagName';

let repo: Repository;
beforeAll(async () => {
  repo = await openRepository() as Repository;
  const currentObjectId = (await repo.getHeadCommit()).id();
  const currentObject = await NodeGitObject.lookup(repo, currentObjectId, OBJECT_TYPE_COMMIT);
  await Tag.createLightweight(repo, testTagName, currentObject, TAG_CREATE_FORCE);
});

afterAll(async () => {
  if (repo) {
    await Tag.delete(repo, testTagName);
  }
});

describe('findCommitByTagName(tagName:string)', () => {
  it('should return the Commit corresponding to the tag', async () => {
    const reference = await findCommitByTagName(testTagName);
    expect(reference).toBeInstanceOf(Commit);
  });

  it('given a nonexistent tag, should return null', async () => {
    const reference = await findCommitByTagName('non-existent-tag');
    expect(reference).toBeNull();
  });
});
