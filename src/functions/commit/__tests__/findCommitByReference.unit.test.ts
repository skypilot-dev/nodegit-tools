import { Commit, Object as NodeGitObject, Reference, Repository, Tag } from 'nodegit';
import { OBJECT_TYPE_COMMIT, TAG_CREATE_FORCE } from '../../../constants';
import { openRepository } from '../../repository';
import { findCommitByReference } from '../findCommitByReference';

const testTagName = 'test/findCommitByReference';

describe('findCommitByReference(:Reference)', () => {
  let repo: Repository;
  let reference: Reference;
  beforeAll(async () => {
    repo = await openRepository() as Repository;
    const currentObjectId = (await repo.getHeadCommit()).id();
    const currentObject = await NodeGitObject.lookup(repo, currentObjectId, OBJECT_TYPE_COMMIT);
    await Tag.createLightweight(repo, testTagName, currentObject, TAG_CREATE_FORCE);
    reference = await Reference.lookup(repo, `refs/tags/${testTagName}`);
  });

  afterAll(async () => {
    await Tag.delete(repo, testTagName);
  });

  it('should return the Commit corresponding to the Reference', async () => {
    const commit = await findCommitByReference(reference);
    expect(commit).toBeInstanceOf(Commit);
  });
});
