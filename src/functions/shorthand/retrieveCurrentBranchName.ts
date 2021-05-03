import { getReferenceShorthand, retrieveCurrentBranchReference } from 'src/functions';
import type { RetrieveCurrentBranchOptions } from 'src/functions';

export async function retrieveCurrentBranchName(
  options: RetrieveCurrentBranchOptions<string> = {}
): Promise<string | null> {
  return retrieveCurrentBranchReference<string>(
    { ...options, transformer: getReferenceShorthand }
  );
}
