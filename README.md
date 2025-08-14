# DawaSathi – A Smart Medicine Reminder App for Timely Pill Management

## ⚠️ Development Status

**This app is still under development and may not work properly out of the box.** Please review and configure the code before running to ensure proper functionality.

## 🚀 Getting Started

### Prerequisites
Make sure you have completed the React Native development environment setup.

### Development Setup

1. **Install Dependencies**
   ```bash
   npm install
   ```

2. **Start Metro Bundler**
   ```bash
   npm start
   ```

3. **Run the App**
   ```bash
   npm run android
   ```

## 📱 Building APK

### Step 1: Prepare Build Directory
Make sure `android/app/src/main/assets/` exists. If not:
```bash
mkdir -p android/app/src/main/assets
```

### Step 2: Bundle the App
```bash
cd ..
npx react-native bundle \
  --platform android \
  --dev false \
  --entry-file index.js \
  --bundle-output android/app/src/main/assets/index.android.bundle \
  --assets-dest android/app/src/main/res
```

```bash
cd ..
node node_modules/react-native/cli.js bundle \
  --platform android \
  --dev false \
  --entry-file index.js \
  --bundle-output android/app/src/main/assets/index.android.bundle \
  --assets-dest android/app/src/main/res
```

### Step 3: Build APK

**Option 1: Using Android Studio**
- Open the `android` folder in Android Studio
- Build the project from there

**Option 2: Using Command Line**
```bash
cd android
./gradlew assembleRelease
```

> **Note:** Build steps might change with React Native CLI updates

## 🖥️ Backend Setup

### Starting the Backend Server

1. **Navigate to Backend Directory**
   ```bash
   cd backend
   ```

2. **Start Development Server**
   ```bash
   npm run dev
   ```

## 📝 Additional Notes

- **APK will be located at:** `android/app/build/outputs/apk/release/app-release.apk`