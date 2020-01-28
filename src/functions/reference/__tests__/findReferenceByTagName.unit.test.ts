import { Object as NodeGitObject, Reference, Repository, Tag } from 'nodegit';
import { OBJECT_TYPE_COMMIT, TAG_CREATE_FORCE } from '../../../constants';
import { openRepository } from '../../repository';
import { findReferenceByTagName } from '../findReferenceByTagName';

const testTagName = 'test/findReferenceByTagName';

describe('findReferenceByTagName(tagName:string)', () => {
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

  it('should return a Reference to the tag', async () => {
    const reference = await findReferenceByTagName(testTagName);
    expect(reference).toBeInstanceOf(Reference);
  });

  it('given a nonexistent tag name, should return null', async () => {
    const reference = await findReferenceByTagName('nonexistent-tag');
    expect(reference).toBeNull();
  });
});
