# @skypilot/nodegit-tools
A collection of utilities for working with NodeGit

## Functions

### Commit functions

#### findCommitByOid

```
async findCommitByOid(oid: Oid, { repository?: Repository }): Promise<Commit>
```

#### findCommitByReference

```
async findCommitByReference(reference: Reference, { repository?: Repository }): Promise<Commit>
```

#### findCommitBySha

```
async findCommitBySha(sha: string, { repository?: Repository }): Promise<Commit>
```

#### findCommitByTagName

```
async findCommitByTagName(tagName: string, { repository?: Repository }): Promise<Commit>
```

#### getCommitOid

```
getCommitOid(commit: Commit): Oid
```

#### getCommitSha

```
getCommitSha(commit: Commit): string
```

#### retrieveHeadCommit

```
async retrieveHeadCommit({ repository?: Repository }): Promise<Commit>
```

### Oid (object ID) functions

#### findMergeBaseOid

```
async findMergBaseOid(oidA: Oid, oidB: Oid, { repository?: Repository }): Promise<Oid>
```

### Reference functions

#### findReferenceByTagName

```
async findReferenceByTagName(tagName: string, { repository?: Repository }): Promise<Reference>
```

### Repo functions

#### openRepo

```
async openRepository({ path?: string }): Promise<Repository>
```

### Tag functions

```
async retrieveTagNames({ repository?: Repository }): Promise<string[]>
```
