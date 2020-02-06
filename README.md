# @skypilot/nodegit-tools

[![build](https://img.shields.io/github/workflow/status/skypilotcc/nodegit-tools/Stable%20release?label=build)]()&nbsp;
[![npm](https://img.shields.io/npm/v/@skypilot/nodegit-tools?label=npm)](https://www.npmjs.com/package/@skypilot/nodegit-tools)&nbsp;
[![license: ISC](https://img.shields.io/badge/license-ISC-blue.svg)](https://opensource.org/licenses/ISC)  

A collection of utilities for working with NodeGit

## Functions

### Commit functions

#### findCommitByBranchName

```
async findCommitByBranchName(branchName: string, { repository?: Repository }): Promise<Commit>
```

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

#### findRangeOfCommitsByOid

```
async findRangeOfCommitsByOid(newestOid: Oid, oldestOid: Oid, { repository?: Repository }): Promise<Commit[]>
```

#### findRangeOfCommitsBySha

```
async findRangeOfCommitsBySha(newestSha: string, oldestSha: string, { repository?: Repository }): Promise<Commit[]>
```

#### getCommitOid

```
getCommitOid(commit: Commit): Oid
```

#### getCommitRecord

```
getCommitRecord(commit: Commit): { date: Date, message: string, sha: string } 
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

#### findOidBySha

```
async findOidBySha(sha: string, { repository?: Repository }): Promise<Oid>
```

#### getOidSha

```
getOidSha(oid: Oid): string
```

### Reference functions

#### findReferenceByTagName

```
async findReferenceByTagName(tagName: string, { repository?: Repository }): Promise<Reference>
```

#### getReferenceShorthand

```
getReferenceShorthand(reference: Reference): string
```

#### retrieveCurrentBranchName

```
async retrieveCurrentBranchName({ repository?: Repository }): Promise<Reference>
```

#### retrieveCurrentBranchReference

```
async retrieveCurrentBranchReference({ repository?: Repository }): Promise<Reference>
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
