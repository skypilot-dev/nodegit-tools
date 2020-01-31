import { retrieveCurrentBranchName } from '../retrieveCurrentBranchName';

describe('retrieveCurrentBranchReference()', () => {
  it('should get a Reference to the current branch', async () => {
    const branchRef = await retrieveCurrentBranchName();
    expect(typeof branchRef).toBe('string');
  });
});
