# WebDriverIO Mobile Testing on macOS

This repository contains automated mobile testing scripts using WebDriverIO framework for Android applications on macOS.

## Prerequisites

Before you begin, ensure you have the following installed:
- Node.js (v14 or later) and npm
- Xcode Command Line Tools
- Java Development Kit (JDK) 11 or later
- Android Studio with:
  - Android SDK
  - Platform Tools
  - Android Emulator (or a physical Android device)
- Appium (can be installed via npm)

## Installation and Setup

### 1. Clone Repository
```bash
git clone [https://github.com/robin-sitohang/wdio_mobile_swaglabs_apps.git]
cd wdio_mobile_swaglabs_apps
```
### 2. Install Dependencies
```bash
npm install
```

### 3. Update .env File:
```bash
UDID=your_device_udid
PLATFORM_VERSION=13  # Your Android version
DEVICE_NAME="Nexus 5"  # Your device/emulator name
APP_PATH=$PWD/apk/app\ v3.3.4.apk  # Adjust path as needed
APP_PACKAGE=com.kopnus.kdigi.mock
APP_ACTIVITY=com.kopnus.kdigi.MainActivity
```



### 4. Running Tests Start Appium Server
```bash
apppium -pa /wd/hub
```

### 5. Running Tests

#### Basic Test Execution
```bash
npm run test
```

#### Additional Commands
- Run a specific feature:
  ```bash
  npm run test:feature --name=<feature_name>
  ```

- Run tests with specific tag:
  ```bash
  npm run test:tag --tag=<tag_name>
  ```
  or
  ```bash
  npm run test -- --cucumberOpts.tagExpression='@tag_name'
  ```

- Generate HTML report:
  ```bash
  npm run test:report
  ```
