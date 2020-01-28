# @skypilot/nodegit-tools
A collection of utilities for working with NodeGit

## Functions

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