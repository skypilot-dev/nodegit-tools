import { getReferenceShorthand, retrieveCurrentBranchReference } from '../reference';
import { RetrieveCurrentBranchOptions } from '../reference/retrieveCurrentBranchReference';

export async function retrieveCurrentBranchName(
  options: RetrieveCurrentBranchOptions<string> = {}
): Promise<string | null> {
  return retrieveCurrentBranchReference<string>(
    { ...options, transformer: getReferenceShorthand }
  );
}
