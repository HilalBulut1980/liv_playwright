# Continious Testing for Livoneo with Playwright

[Test structure](#markdown-header-test-structure)  
[Test diagram](#markdown-header-test-diagramme)  
[Local testing](#markdown-header-local-testing)  
[Scheduled testruns](#markdown-header-scheduled-testruns)  
[Manual testruns](#markdown-header-manual-testruns)  
[Run personal selection](#markdown-header-how-to-run-a-personal-selection-of-specfiles)  
[Various hints](#markdown-header-various-hints)  

## Test structure 

- Each `spec.js-file` is a separate test case. 

- The .spec.js files are located in the respective folder of each specgroup, i.e.:    
    .  
    - `tests/product_configuration/**doppelrollo**/configure_doppelrollo_mini_ok.spec.js`    
    .  
- Negativ testcases are designated with `'neg'`. Currently we have the following distinct specgroups:    
.  
    - [doppelrollo](tests/product_configuration/doppelrollo/)  
    - [fliegengitter](tests/product_configuration/fliegengitter/)  
    - [gutschein](tests/product_configuration/gutschein/)  
    - [holzjalousie](tests/product_configuration/holzjalousie/)  
    - [insektenschutzrollo](tests/product_configuration/insektenschutzrollo/)  
    - [jalousie](tests/product_configuration/jalousie/)  
    - [kissenhuellen_einzeln](tests/product_configuration/kissenhuellen_einzeln/)  
    - [kissenhuellen_set](tests/product_configuration/kissenhuellen_set/)  
    - [muster](tests/product_configuration/muster/)  
    - [negative_doppelrollo](tests/product_configuration/negative_doppelrollo/)  
    - [negative_fliegengitter](tests/product_configuration/negative_fliegengitter/)  
    - [negative_holzjalousie](tests/product_configuration/negative_holzjalousie/)  
    - [negative_insektenschutzrollo](tests/product_configuration/negative_insektenschutzrollo/)  
    - [negative_jalousie](tests/product_configuration/negative_jalousie/)  
    - [negative_paypal](tests/product_configuration/negative_paypal/)  
    - [negative_plissee_basis](tests/product_configuration/negative_plissee_basis/)  
    - [negative_plissee_cosiflor](tests/product_configuration/negative_plissee_cosiflor/)  
    - [negative_raffrollo](tests/product_configuration/negative_raffrollo/)  
    - [negative_rollo](tests/product_configuration/negative_rollo/)  
    - [negative_schiebegardine](tests/product_configuration/negative_schiebegardine/)  
    - [negative_vatid](tests/product_configuration/negative_vatid/)  
    - [negative_vorhang](tests/product_configuration/negative_vorhang/)  
    - [paypal](tests/product_configuration/paypal/)  
    - [plissee_basis](tests/product_configuration/plissee_basis/)  
    - [plissee_cosiflor](tests/product_configuration/plissee_cosiflor/)  
    - [rabattcodes](tests/product_configuration/rabattcodes/)  
    - [raffrollo](tests/product_configuration/raffrollo/)  
    - [rollo](tests/product_configuration/rollo/)  
    - [schiebegardinen](tests/product_configuration/schiebegardinen/)  
    - [serviceprodukt](tests/product_configuration/serviceprodukt/)  
    - [user](tests/product_configuration/user/)  
    - [vat_id](tests/product_configuration/vat_id/)  
    - [vorhang](tests/product_configuration/vorhang/)  
    - [zubehoer_plissee](tests/product_configuration/zubehoer_plissee/)  
    - [zubehoer_rollo](tests/product_configuration/zubehoer_rollo/)  
    - [zubehoer_schiebegardinen](tests/product_configuration/zubehoer_schiebegardinen/)  
    - [zubehoer_vorhang](tests/product_configuration/zubehoer_vorhang/)      
.  


- Every specgroup directory contains a textfile "speclist.txt" with the list of available .spec.js files    

.  

![speclist](IMAGES/speclist.png)

.  

.    
- The default pipeline of this repository automatically checks on every push to the repository, whether there are changes in the tests/product_configuration directory and its subdirectories and updates the respective speclist.txt files accordingly.  

- Within the .spec.js file a configurator method is called. This method includes all set() functions that are required for the configuration of the product/test, i.e.:    
    - `tests/support/configurator_doppelrollo.js`  
    .    

- Within the configurator files the methods _`checkCart()`_ from `cart.js` and _`checkOut(), checkFinalPrices() and placeOrder()`_ from `checkout.js` are called:    
    - `checkCart()` includes all functions that are required to check prices in cart  
    - `checkOut()` includes all functions that are required to set the customer data  
    - `checkFinalPrices()` includes all functions that are required to check prices in 'Bestellübersicht'  
    - `placeOrder()` includes all functions that are required to set the order and check backend prices     

.  


## Test diagramme
![LIV structure](images/liv_diagramm.png)    
.    
  

## Local Testing

**1. Download / clone the repository https://bitbucket.org/delphinus/liv_playwright/src/main/**

**2. Installations in the `root` folder** 

  .  
**a. [Install Playwright](https://playwright.dev/docs/intro) with npm from the command line**    

```
npm init playwright@latest    
```  

  Run the install command and select the following to get started:    

  - Choose JavaScript
  - Name of your Tests folder (in our project it is named 'tests')
  - Install Playwright browsers (default is true)

.   

  ![installation](images/installation.png)  
      
.

**b. Alternatively you can also get started and run your tests using the [VS Code Extension](https://playwright.dev/docs/getting-started-vscode)**    
.    

  **c. Install necessary packages**

```
  npm install dotenv 
```
   _-->this is needed for using variables from `.env-file`_

  .    
```  
  npm install json-logic-js 
```  
_-->this is needed for the mathematical operations within the tests_

.   
**3. Environment variables**

In the root folder there is the `.env` file where you can set and change environment variables.

In our case you can change the base url, change the backend url, set the placeorder variable to true/false etc.   
**Important:**   
When testing against the stage environment **locally**, both the base URL and the URLs for the JavaScript files specific to the stage environment must be activated.   
While testing via bitbucket pipeline there is no need to make any changes in .env since the variables will be overwritten during test execution.

![env](images/env.png)    


**4. Start tests**

```
npx playwright test
```
_--> runs `all tests` on all installed browsers in a `headless mode`_

.
```
npx playwright test ./tests/product_configuration/user/configure_LoginWithPriceCheck_AT.spec.js
```
_--> runs `specified test` on all installed browsers_

.
```
npx playwright test --workers 3
```
_--> runs all tests on all installed browsers `with three workers (machines) in parallel`_  
_--> in our case workers is set to 1 in the config file since this is recommended by playwright for CI environments_

.
```
npx playwright test one.spec.js two.spec.js three.spec.js
```
_--> runs `specified tests` on all installed browsers in a `headless mode`_

.
```
npx playwright test one two three
```
_--> runs tests that have `one`, `two` or `three` in the filename_

.
```
npx playwright test -g "foo"
```
_--> runs the test `with title 'foo'`_

_--> a testcase may include more than one test - with this command you can select the test by title_

.
```
npx playwright test --project chromimum
```
_--> runs all tests on `specified browser`_

.
```
npx playwright test --project chromimum --headed
```
_--> runs all tests on `specified browser in a headed mode`_

.
```
npx playwright test --debug
```
_--> used for troubleshooting - runs in headed mode_
     
_--> a separate `inspector window` will pop up for a step by step `debugging`_

.
```
npx playwright test --ui
```
_--> runs all tests on a `user interface` (similar to the cypress runner)_

![userinterface](images/user_interface.png)   
.  

## Scheduled testruns

.    
Every morning all scheduled test cases run via Bitbucket pipelines against production server (test cases stop on checkout page in order to avoid test orders on production system).  
We can update test schedule via Repositories > tests-test > Pipelines > Schedules.    
.    
![scheduled](images/schedules.png)   
.    
**All testresults are being displayed in real-time on the currents.dev dashboard:**    
.    
![currents dashboard](images/currents_dashboard.png)    
.    
**Screenshots, video recordings and artifacts, which show all steps of the tests are available:**  
  
![currents dashboard detail](images/currents_detail.png)    
.    

## Manual testruns via pipeline


Manual testruns can be started via:  

**1) Repositories > liv_playwright > Pipelines > Run pipeline**    
   
**If you want to run tests against `STAGE or PRODUCTION` environment you can specify the following options:**  
.

  `Branch:` The specfiles from this branch will be used  
  `Pipeline:` The custom test configuration on a specific testing environment  

  `SPECGROUP:` All specfiles in the selected specgroup will be executed against the testing environment. By default all available specfiles are preselected (" * ")  

 `SPECGROUP_2:` All specfiles in the selected specgroup will be executed against the testing environment. By default no specfiles are preselected ("NONE"). 
  Selection will be omitted during pipeline run if SPECGROUP is set to "*" or "CUSTOM" or SPECGROUP_2 is equal to SPECGROUP.  

`SPECGROUP_3:` All specfiles in the selected specgroup will be executed against the testing environment. By default no specfiles are preselected ("NONE") 
      Selection will be omitted during pipeline run if SPECGROUP is set to "*" or "CUSTOM" or SPECGROUP_3 is equal to SPECGROUP or SPECGROUP_3 is equal to SPECGROUP_2     
.    
.    
  ![dropdown](images/pipeline_dropdown.png)    
. 
.



  **2) Repositories > liv_playwright > Branches > Actions > Run pipeline for a branch**    

.    
![pipeline_for_branch](images/run-pipeline-for-branch.png)    
.    

## How to run a personal selection of specfiles
    
.    
  - Add a textfile "custom-speclist.txt" with a list of arbitrary specfiles at repository root  
  - Commit the file  
  - In the dropdown menu of the respective testing pipeline select "CUSTOM" for SPECGROUP   
.    
    

## Various hints
 
.    
- We changed user_agent for browser to "testing_agent" in order to avoid playwright to be part of VWO-Tests or Universal Analytics. Otherwise this would falsify statistics.    
- save testing_agent in playwright.config.js    
.    
``` 
"userAgent": 'testing_agent',
```
.    
#### Find project id
- https://app.currents.dev/ 
- select project LIV 
- settings (Manage project)
- the project id is used in file `bitbucket-pipelines.yml`


``` 
"projectId": "...",
```
