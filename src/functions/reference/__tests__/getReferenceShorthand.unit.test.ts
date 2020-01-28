import { Reference, Repository } from 'nodegit';
import { openRepository } from '../../repository';
import { getReferenceShorthand } from '../getReferenceShorthand';

describe('getReferenceShorthand(:Reference)', () => {
  it('should', async () => {
    const repo = await openRepository() as Repository;
    const branchRef: Reference = await repo.getCurrentBranch();
    const branchStr = getReferenceShorthand(branchRef);
    expect(typeof branchStr).toBe('string');
  });
});
