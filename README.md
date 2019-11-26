# GAS from TypeScript Template. 🍵  
## Usage.  
- Clone or Download This Repository.  
- Initialize package.json  
  - -> `yarn init`  
- Install All Packages.  
  - -> `yarn install`  
- Create or Clone GAS Project.
  - -> `clasp create` || `clasp clone 'Script ID'`  
- Setup.  
  - -> `cat .clasp.json | jq '.rootDir = "deploy"' .clasp.json | sponge .clasp.json`  
  - -> `yarn setup`  
- Build Manually.
  - -> `webpack`  
- Deploy Manually.  
  - -> `clasp push`  
- Development. (When Saving Work Files, Build & Deploy Automatically.)  
  - -> `yarn dev`  
- GAS API.
  - -> <https://developers.google.com/apps-script/reference/base>
ー

### TODO Memo.
- @typescript-eslint ver.2 Parse Doesn't Work. (on Terminal && on VSCode)
  - <https://github.com/typescript-eslint/typescript-eslint/releases/tag/v2.0.0>

🛹
