# 🔒 SAFERCE - BACKEND

![1](https://img.shields.io/badge/12.13.1-Node-green?style=flat-square&logo=node.js)
![2](https://img.shields.io/badge/0.60.5-AdonisJS%20-purple?style=flat-square&logo=adonisjs)
![3](https://img.shields.io/badge/1.44.2-Visual%20Studio%20Code-blue?style=flat-square&logo=visual-studio-code)
![4](https://img.shields.io/badge/6.12.1-npm-red?style=flat-square&logo=SQL)
![5](https://img.shields.io/badge/^2.18.1-mysql-blue?style=flat-square&logo=mysql)

Saferce is an application where users can find service providers closest to their home, having the differential of the provider's assessments based on their hygiene and safety items. In a world affected by COVID-19, it is extremely important to be able to access essential services but, at the same time, protect ourselves against any risk of contagion. The application also helps service providers and small businesses to gain visibility in the market, even in situations as unusual as this.

> This repository refers to the application backend.

<!-- vscode-markdown-toc -->

- [Install Dependencies](#InstallDependencies)
- [Run](#Serve)
- [What I Used](#WhatIUsed)
- [Database](#Database)

<!-- vscode-markdown-toc-config
	numbering=true
	autoSave=true
	/vscode-markdown-toc-config -->
<!-- /vscode-markdown-toc -->

## <a name='InstallDependencies'></a>Install Dependencies

    npm install

To make things easier, install globally [AdonisJS CLI](https://adonisjs.com/docs/4.1/installation)

## <a name='Serve'></a>Run

    adonis serve --dev

## <a name='WhatIUsed'></a>What I Used

- AdonisJS (Lucid ORM, Migrations, Seeds, etc)
- Validator
- Axios

## <a name='Database'></a>Database

- It is necessary to create a mysql database;
- To create the tables in the database created earlier, run the following command:

      adonis migration:run
