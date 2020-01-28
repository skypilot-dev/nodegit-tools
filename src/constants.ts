/* https://www.nodegit.org/api/object/#TYPE */
export const OBJECT_TYPE_ANY = -2;
export const OBJECT_TYPE_INVALID = -1;
export const OBJECT_TYPE_COMMIT = 1;
export const OBJECT_TYPE_TREE = 2;
export const OBJECT_TYPE_BLOB = 3;
export const OBJECT_TYPE_TAG = 4;
export const OBJECT_TYPE_OFS_DELTA = 6;
export const OBJECT_TYPE_REF_DELTA = 7;

/* Undocumented */
export const TAG_CREATE_SAFE = 0;
export const TAG_CREATE_FORCE = 1;
