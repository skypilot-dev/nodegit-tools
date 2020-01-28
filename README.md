# @skypilot/nodegit-tools
A collection of utilities for working with NodeGit

## Functions

### Commit functions

#### findCommitByOid

```
async findCommitByOid(oid: Oid, { repository?: Repository }): Promise<Commit>
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