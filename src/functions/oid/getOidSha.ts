import { Oid } from 'nodegit';

export function getOidSha(oid: Oid): string {
  return oid.tostrS();
}
