used react native cli from https://reactnative.dev/docs/getting-started-without-a-framework

used tailwind for css from https://v2.nativewind.dev/getting-started/installation

steps to run:
"npm start" for metro builder to start
"npm run android" for app to start

steps to built apk:
mkdir -p android/app/src/main/assets
mkdir -p android/app/src/main/res

npx react-native bundle \
  --platform android \
  --dev false \
  --entry-file index.jsx \
  --bundle-output android/app/src/main/assets/index.android.bundle \
  --assets-dest android/app/src/main/res

-------- built using android studio by opening the "android" folder there or use the command below --------

cd android
./gradlew assembleRelease 