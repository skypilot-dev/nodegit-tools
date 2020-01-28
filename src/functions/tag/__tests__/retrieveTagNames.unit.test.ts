import { Object as NodeGitObject, Repository, Tag } from 'nodegit';
import { OBJECT_TYPE_COMMIT, TAG_CREATE_FORCE } from '../../../constants';
import { openRepository } from '../../repository';
import { retrieveTagNames } from '../retrieveTagNames';

const testTagName = 'test/retrieveTagNames';

describe('retrieveTagNames()', () => {
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

  it('should return an array of all tag names in the repo', async () => {
    const tagNames = await retrieveTagNames();
    expect(Array.isArray(tagNames)).toBe(true);
    expect(tagNames.length).toBeGreaterThan(0);
    expect(typeof tagNames[0]).toBe('string');
  });
});
