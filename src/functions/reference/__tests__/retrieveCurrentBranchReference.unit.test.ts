import { Reference } from 'nodegit';
import { retrieveCurrentBranchReference } from '../retrieveCurrentBranchReference';

describe('retrieveCurrentBranchReference()', () => {
  it('should get a Reference to the current branch', async () => {
    const branchRef = await retrieveCurrentBranchReference();
    expect(branchRef).toBeInstanceOf(Reference);
  });
});
