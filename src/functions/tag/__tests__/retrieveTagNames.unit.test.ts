import { Object as NodeGitObject, Repository, Tag } from 'nodegit';

import { OBJECT_TYPE_COMMIT, TAG_CREATE_FORCE } from 'src/constants';
import { openRepository } from 'src/functions';
import { retrieveTagNames } from '../retrieveTagNames';

const testTagName = 'test/retrieveTagNames';

let repo: Repository;
beforeAll(async () => {
  repo = await openRepository() as Repository;
  const currentObjectId = (await repo.getHeadCommit()).id();
  const currentObject = await NodeGitObject.lookup(repo, currentObjectId, OBJECT_TYPE_COMMIT);
  await Tag.createLightweight(repo, testTagName, currentObject, TAG_CREATE_FORCE);
});

afterAll(async () => {
  await Tag.delete(repo, testTagName);
});

describe('retrieveTagNames()', () => {
  it('should return an array of all tag names in the repo', async () => {
    const tagNames = await retrieveTagNames();
    expect(Array.isArray(tagNames)).toBe(true);
    expect(tagNames.length).toBeGreaterThan(0);
    expect(typeof tagNames[0]).toBe('string');
  });
});
