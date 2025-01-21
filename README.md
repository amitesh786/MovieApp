# MovieApp
MovieApp app using React Native with TypeScript - Developed by Amitesh Singh

## Requirements:
Node and npm installed globally on your machine `https://nodejs.org`.

## Step 1: Install the package
- Go to root Folder: `npm i` or `npm install`.
- Go to iOS folder and execute `pod install` or `pod install --repo-update`.

## Step 2: Start the metro server
First, you will need to start **Metro**, the JavaScript _bundler_ that ships _with_ React Native. To start Metro, run the following command from the _root_ of your React Native project: `npm run start`.

- For iOS: `npm run start`, sync with Xcode. After execute the command it will open the emulator app.
- For Android: To run the project on Android emulator you have to connect your device with USB or open any emulator via Android Studio in AVD Manager and run the following command: `react-native run-android`.

## Step 3: Start your application

Let Metro Bundler run in its _own_ terminal. Open a _new_ terminal from the _root_ of your React Native project. Run the following command to start your _Android_ or _iOS_ app:

- For iOS: `npm run ios`.
- For Android: `npm run android`.

If everything is set up _correctly_, you should see your new app running in your _iOS Simulator_ or _Android Emulator_  shortly provided you have set up your simulator/emulator correctly.

This is one way to run your app — you can also run it directly from within Android Studio and Xcode respectively.

## Step 4: Build the package to deploy `appetize.io`

- For iOS: `npm run ios:build-simulator`, upon successful completion, the build will be located in the following directory: `ios/build/Build/Products/Release-iphonesimulator/`. Locate the file named `MovieApp`, compress it into a .zip archive, and upload it to `appetize.io`.

- For Android: `npm run android:build`, upon successful completion, the build will be located in the following directory: `android/app/build/outputs/apk/release/`. Locate the file named `app-release.apk` and upload it to `appetize.io`.

## Step 5: iOS and Android app screen recorded on screenshot folder which is present on the root

Store the screen recordings in the designated screenshot folder located at the root directory. Use the following subdirectories for their respective platforms:
- For iOS : './screenshots/iOS_16.mov'
- For Android: './screenshots/Android_Pixel8.mov'

## Step 6: Additional Commands

### Testing (Jest)
- To run the tests in the application: `npm run test`
- To run tests in watch all mode: `npm run test:watch`

### Linting
- To check for linting issues: `npm run lint`

### Formatting
- To format the codebase using Prettier: `npm run format`

### Cleaning
- To clean and reinstall node modules: `npm run clean`
- To clean node modules and build directories for Android and iOS: `npm run clean:all`

## Screenshot
- iOS (MovieApp recording): `screenshot/iOS_16.mov`
