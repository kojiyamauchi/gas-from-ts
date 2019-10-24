# GAS from TypeScript Template. ☕️  
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

🛹
