# Getting Started

> **Note**: Make sure you have completed the [React Native - Environment Setup](https://reactnative.dev/docs/environment-setup) instructions till "Creating a new application" step, before proceeding.

## Step 1: Create the .env file

First, create a .env file in the root directory of the project and add the following environment variables in the created file.

BASE_URL=https://lessonapi.educationforalliraqis.com
USER_ID=65edc62cc1aa0078000f9c01
GRADE_ID=6625514923f87505231c8f89
TOKEN=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NWVkYzYyY2MxYWEwMDc4MDAwZjljMDEiLCJpYXQiOjE3MTM3MzQxOTh9.2ZIPdqfGIEbm0t6iSE14HTQw1ASehe_hijG_iEnWFJU

It may seem silly that I'm sharing the variables in Readme but not pushing the .env file itself but it is just to demonstrate the real-life scenarios.

## Step 2: Start the Metro Server

First, you will need to start **Metro**, the JavaScript _bundler_ that ships _with_ React Native.

To start Metro, run the following command from the _root_ of your React Native project:

```bash
# using npm
npm start

# OR using Yarn
yarn start
```

## Step 3: Start your Application

Let Metro Bundler run in its _own_ terminal. Open a _new_ terminal from the _root_ of your React Native project. Run the following command to start your _Android_ or _iOS_ app:

### For Android

```bash
# using npm
npm run android

# OR using Yarn
yarn android
```

### For iOS

```bash
# using npm
npm run ios

# OR using Yarn
yarn ios
```

If everything is set up _correctly_, you should see your new app running in your _Android Emulator_ or _iOS Simulator_ shortly provided you have set up your emulator/simulator correctly.

This is one way to run your app — you can also run it directly from within Android Studio and Xcode respectively.

## Assumptions:

1. The user has purchased all the lessons of the subjects of the grade they are enrolled in.
2. As the data returned by the `/lessons/subject/${subjectId}` API is an array, I'm assuming there can be multiple chapters in the subject (obvious imo) and the `lessons` array in any element of the `data` array is related to the `chapter` within the same element. Moreover, the `chapter` array in any element will always contain one and only one element (doesn't make sense for multiple chapters).

## Technical Choices:

The app demanded a central state management system, and as I am most familiar and comfortable with redux, I implemented Redux as my state management platform.
For API integration, I used the RTK Query as it's very easy to integrate with redux and provides some ease in state management.
I treated the provided secret variables like `userId`, `gradeId` and `token` like environment variables to mock a close to real-life scenario.
I used `react-navigation` for the minimum navigation that was required in the application.
To implement the persistence logic, I made use of `redux-persit` and `AsyncStorage`.

## Future Plans:

I would spend more time on designing UI (although it's not my forte) and adding animations for a more smooth UX.
If more time was available, I would have considered using/displaying rest of the data related to chapters and lessons somehow in my application to make it more appealing and engaging.
I may add a splash screen and an app icon as well.
Treat error handling better if I know what type of errors may occur from backend.

## Bonus Features Attempted:

Added support for internationalization.

## Compromises:

The `questions` array in lesson details API is not populated and instead it just returns the `id` of the questions. Because of this reason, I couldn't implement the quiz logic and you will see a screen displaying an error message for the MCQ widgets. This feels like a very important part of the application but as I was not getting the required data from the backend, I had to make this compromise.

## Resources Used:

I used React Native Paper UI library to be done with UI faster than having to create it manually.

## UI Images:

![showing persisted progress](https://github.com/adey69/corssy-mvp/blob/main/demo/showing-persisted-progress.png)
![showing second selected subject](https://github.com/adey69/corssy-mvp/blob/main/demo/showing-second-selected-subject.png)
![text with image](https://github.com/adey69/corssy-mvp/blob/main/demo/text-with-video.png)
![textual content](https://github.com/adey69/corssy-mvp/blob/main/demo/textual-content.png)
![video content](https://github.com/adey69/corssy-mvp/blob/main/demo/video-content.png)
