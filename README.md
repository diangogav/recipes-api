<p align="center">

  <p align="center">
    <br />
    <br />
    <br />
    <a href="https://recipes-api-abc.herokuapp.com/">๐ฅ View Demo</a>
    ยท
    <a href="https://recipes-api-abc.herokuapp.com/graphql">๐ฑ Playground</a>
    ยท
</p>
<br />
<p align="center">
  <h3 align="center">๐๐๐ Recipes API ๐๐๐</h3>

  <p align="center">
    An excellent API to manage your recipes
    <br />
    <br />
    <br />
  </p>
</p>

<!-- TABLE OF CONTENTS -->
<details open="open">
  <summary><h2 style="display: inline-block">Table of Contents</h2></summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
        <li><a href="#installation">Docker</a></li>
      </ul>
    </li>

  </ol>
</details>

<!-- ABOUT THE PROJECT -->

## About The Project

An excellent API to manage your recipes, which can be classified by categories.

### Built With

- ๐ [NestJS]('https://docs.nestjs.com/')
- ๐ฒ [Graphql]('https://graphql.org/')
- ๐ฅ [TypeORM]('https://typeorm.io/')

<!-- GETTING STARTED -->

## Getting Started

To get a local copy up and running follow these simple steps.

<!-- ### Prerequisites

This is an example of how to list things you need to use the software and how to install them.

- npm
  ```sh
  npm install npm@latest -g
  ``` -->

### Prerequisites

1. ๐ Install and npm

2. ๐ฅ Install postgres database

3. ๐ฅซ Optional: Docker and Docker Compose if you want skip database instalation and running the project with docker. Command in last part

### Installation

1. Clone the repo
   ```sh
   git clone https://github.com/diangogav/recipes-api.git
   ```
2. Install NPM packages
   ```sh
   npm install
   ```
3. Create .env file based on .env.example
4. Create database in postgres database
5. Run the project
   ```
   npm run start:dev
   ```

### ๐ฅ๐ฅ๐ฅ๐ฅ Docker ๐ฅ๐ฅ๐ฅ๐ฅ

Also, you can use docker for running the project with the database:

```sh
docker-compose up -d
```
