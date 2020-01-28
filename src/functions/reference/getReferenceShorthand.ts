import { Reference } from 'nodegit';

/* Given a Reference, return its shorthand representation. */
export function getReferenceShorthand(reference: Reference): string {
  return reference.shorthand();
}
