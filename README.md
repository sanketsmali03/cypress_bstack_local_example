

![Logo](https://www.browserstack.com/images/static/header-logo.jpg)

# BrowserStack Examples Cypress <a href="https://www.cypress.io/"><img src="https://www.cypress.io/static/cypress-io-logo-social-share-8fb8a1db3cdc0b289fad927694ecb415.png" alt="Cypress" height="32" /></a> <a href="https://mochajs.org/"><img src="https://avatars.githubusercontent.com/u/8770005?s=400&v=4" alt="Mocha" height="32" /></a>

## Introduction

Cypress is a next generation front end testing tool built for the modern web. It addresses the key pain points developers and QA engineers face when testing modern applications. Mocha is a software tool that supports behavior-driven development (BDD).

This BrowserStack Example repository demonstrates a Cypress framework with parallel testing capabilities. The Cypress test scripts are written for the open source [BrowserStack Demo web application](https://bstackdemo.com) ([Github](https://github.com/browserstack/browserstack-demo-app)). This BrowserStack Demo App is an e-commerce web application which showcases multiple real-world user scenarios. The app is bundled with offers data, orders data and products data that contains everything you need to start using the app and run tests out-of-the-box.

The Cypress tests are run on different platforms like on-prem, docker and BrowserStack using various run configurations and test capabilities.

---

## Repository setup

- Clone the repository

- Ensure you have the following dependencies installed on the machine
    - Cypress >= 6

    node:
    ```sh
    npm install
    ```


# BrowserStack

[BrowserStack](https://browserstack.com) provides instant access to 2,000+ real mobile devices and browsers on a highly reliable cloud infrastructure that effortlessly scales as testing needs grow.

## Prerequisites

- Create a new [BrowserStack account](https://www.browserstack.com/users/sign_up) or use an existing one.
- Identify your BrowserStack username and access key from the [BrowserStack Automate Dashboard](https://automate.browserstack.com/) and export them as environment variables using the below commands.

    - For \*nix based and Mac machines:

  ```sh
  export BROWSERSTACK_USERNAME=<browserstack-username> &&
  export BROWSERSTACK_ACCESS_KEY=<browserstack-access-key>
  ```

    - For Windows:

  ```shell
  set BROWSERSTACK_USERNAME=<browserstack-username>
  set BROWSERSTACK_ACCESS_KEY=<browserstack-access-key>
  ```
  
  Alternatively, you can also hardcode username and access_key objects in each of the config files in the [run_conf](run_conf) folder.

Note:
- We have configured a list of test capabilities in in each of the config files in the [run_conf](run_conf) folder. You can certainly update them based on your device / browser test requirements. 
- The exact test capability values can be easily identified using the [Browserstack Capability Generator](https://browserstack.com/automate/capabilities)


## Starting Binary manually

- ./BrowserStackLocal --key <ACCESS_KEY> --local-identifier <IDENTIFIE_VALUE> --enable-logging-for-api —-verbose 3  —force-local



## Running Your Tests

- How to run the test?

  To run the entire test suite in parallel on a single BrowserStack browser using BrowserStackLocal, use the following command:

  ```sh
  npm run test
  ```




