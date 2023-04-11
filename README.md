# Angular-Library

#### Before to start

This project uses Angular CLI, NodeJS and NPM. Below I will indicate which versions each of them has. It is possible that if you do not have these versions you may experience bugs in the project:

- Angular CLI: 15.2.2
- NodeJS: 18.15.0
- NPM: 9.5.0

If you want to use this project correctly it is important that you have all the latest updates.

## Welcome

My name is Sergi and this library contains two modules exclusively. A footer and an error view in case something in the application fails (classic 404). The purpose of this library is to use these modules in any project in order to save hours of work and automate certain elements of the creation of web applications.

## Installation

In order to install this proyect yourself, you will have to clone it. And you will have to execute the following code:

```bash
  git clone
```

To be able to use this project locally you will have to download the necessary dependencies for the project to work correctly. So, once you have opened the project in your favourite IDE, you will have to run the following command:

```bash
  npm i
```

If you open the "package.json" of the project you have several options in the script execution. The one I personally recommend is "npm run start", mainly because it will open your browser without you having to type the localhost and its respective port.
Likewise, if you already have a localhost in your browser open, you can run "npm run quick" and once it runs correctly you will only have to refresh it to be able to see the local project.

```bash
  npm run quick

  or

  npm run start
```

## Architecture

The scafolding applied to this project is a bit peculiar because there are two Angular applications in one.
The first one, which is where the "projects/ui-workbench" folder is located, is the application in charge of creating the modules, programming and styling them.
The application that we can find in the root folder is the folder where we will test locally all our previously created modules in order to preview those modules.

## Goals

The goal with this library was not only to make a footer and an error view, it was also to parametrize a header to add the links to the different components that we were adding and to parametrize the logo so that we can always change it. Besides having the ngx-translate module included in order to have the multilanguage option included as a base. This could not be possible because due to problems with ngx-translate the build of the module was not done correctly. So this option was discarded.

I also had the idea of doing the same with the breadcrumb but it always gave problems with the app-routing.module.ts because you had to put the one from the library project and when you called it in another project, having downloaded the library previously, it gave error because it didn't locate it.

Finally I had the idea of parameterizing the styles of both components mentioned above but due to a matter of time I preferred not to investigate more on the matter and prioritize perhaps other things that I considered more important.

## Styles

The styles used in this library are the corporate colours of Vueling. The idea with this library is to be able to incorporate it in any project made during the Vueling University and to be able to adapt it to any situation perfectly. For this we have used the SASS variables to be able to save and use them. In addition to including a slight animation in the error page in order to adapt it to the theme of the company.

## Author

- My [GitHub](https://github.com/sergiJimenez).
- My [LinkedIn](https://www.linkedin.com/in/sergijim/).
- My personal email is acasualcolumbus@gmail.com.
