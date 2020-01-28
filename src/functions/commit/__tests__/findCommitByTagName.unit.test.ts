import { Commit, Object as NodeGitObject, Repository, Tag } from 'nodegit';
import { OBJECT_TYPE_COMMIT, TAG_CREATE_FORCE } from '../../../constants';
import { openRepository } from '../../repository';
import { findCommitByTagName } from '../findCommitByTagName';

const testTagName = 'test/findCommitByTagName';

describe('findCommitByTagName(tagName:string)', () => {
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

  it('should return the Commit corresponding to the tag', async () => {
    const reference = await findCommitByTagName(testTagName);
    expect(reference).toBeInstanceOf(Commit);
  });

  it('given a nonexistent tag, should return null', async () => {
    const reference = await findCommitByTagName('non-existent-tag');
    expect(reference).toBeNull();
  });
});
