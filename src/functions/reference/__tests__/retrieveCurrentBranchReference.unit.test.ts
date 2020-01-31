import { Reference } from 'nodegit';
import { retrieveCurrentBranchReference } from '../retrieveCurrentBranchReference';

describe('retrieveCurrentBranchReference()', () => {
  it('should get a Reference to the current branch', async () => {
    const branchRef = await retrieveCurrentBranchReference();
    expect(branchRef).toBeInstanceOf(Reference);
  });

  it('given a transformer, should apply the transformer before returning the result', async () => {
    const transformer = (ref: Reference) => ref.shorthand();
    const branchRef = await retrieveCurrentBranchReference<string>({ transformer });
    expect(typeof branchRef).toBe('string');
  });
});
