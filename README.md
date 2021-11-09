# Auth-app

Next.js (TypeScript) solution for the auth-app challenge on devChallenges.

Live demo available at: https://auth-app-lyart.vercel.app/profile

## Description

This project was built to complete all the user stories listed or described by the challenge itself. Hence in this project, a user can:

- Register a new account
- Log in
- Log in or register with at least one of the following services: Google, Facebook, Twitter or Github
- Sign out
- See his/her profile details
- Edit his/her details including: photo, name, bio, phone, email and password
- Upload a new photo or provide an image URL

## Installation

1. To get this project files locally on your machine, you can clone this repository by running the following command on your terminal or command line:

```bash
git clone https://github.com/cvrlnolan/auth-app
```

2. Next, you need to setup the .env file found in the root with the appropriate API Keys & credentials from the following service provider:

- [Google Firebase]()

3. Install all the dependency packages found in the `package.json` file by running `yarn install` or `npm install` from the project root directory.

4. To start the development server of the application, run `npm run dev` or `yarn dev`. This should log some start-up application information & display the development server url: `http://localhost:3000`. Visit http://localhost:3000 to view your application.

## Usage

### General

This application was built reflecting the MVC architecture and the main dependencies(all found in the package.json) of the application are organised as so:

- Front-end User Interface(UI): [React.js](https://reactjs.org/), [Tailwind CSS](https://tailwindcss.com/)
- Database Management: [Cloud Firestore](https://firebase.google.com/products/firestore),
- Authentication: [Firebase Authentication](https://firebase.google.com/products/auth)
- Backend Integration: [Next.js API (serverless functions)](https://nextjs.org/docs/api-routes/introduction)

Other important services & dependency libraries of the application include:

- [axios](https://www.npmjs.com/package/axios): An http client to fetch urls and make api calls or requests within the application.
- [swr](https://swr.vercel.app/): To fetch and revalidate data on the client-side of the application while keeping the UI reactive.
- [js-cookie](https://www.npmjs.com/package/js-cookie): A simple, lightweight JavaScript API for handling cookies
- [compressorjs](compressorjs): Javascript image compressor to compress images before uploading them to storage to have an optimized and servable version.

### Directives

The application is organized from the root(.) as follows:

- `./page/` folder(integrated by NextJS) contains the UI Views for the application with the exception of the `./page/api/*` sub-folder(reserved for serverless functions).
- `./lib/` folder contains the Firebase initialization configuration file.
- `./components/` folder contains coded UI layouts to be used through out the application.
- `./styles/` folder(integrated by NextJS) contains the global style of the application in which Tailwindcss presets have been defined. The global stylesheet is accessible by all components.
- `./public/` folder(integrated by NextJS) contains global files to be shared through the application. You can store static images here.

Absolute imports to any of these folders through the application are configured in the tsconfig.json file in the root.

### Deployment

You may eventually want to deploy a live version of your app in a future instance. [Vercel](https://vercel.com/) platform is suitably built fo the deployment of NextJS application and more as they have an integrated environment to deploy directly from your own [Github Repository](https://github.com/new).

## Support

If any worries, bugs or problem arises in the future, you can create an issue, contribute or contact me via:

- carlnolan@lootyclub.com

## License

![GitHub](https://img.shields.io/github/license/cvrlnolan/auth-app) ![GitHub contributors](https://img.shields.io/github/contributors/cvrlnolan/auth-app) ![GitHub last commit](https://img.shields.io/github/last-commit/cvrlnolan/auth-app) ![GitHub issues](https://img.shields.io/github/issues/cvrlnolan/auth-app) ![GitHub repo size](https://img.shields.io/github/repo-size/cvrlnolan/auth-app)

![GitHub followers](https://img.shields.io/github/followers/cvrlnolan?style=social) ![Twitter Follow](https://img.shields.io/twitter/follow/realcarlnolan?style=social)
