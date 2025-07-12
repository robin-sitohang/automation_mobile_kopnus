import * as dotenv from 'dotenv';
dotenv.config();

export const config = {
    device: {
        udid: process.env.UDID || '127.0.0.1:6555',
        platformVersion: process.env.PLATFORM_VERSION || '13.0',
        deviceName: process.env.DEVICE_NAME || 'Nexus 5'
    },
    app: {
        path: process.env.APP_PATH || '/Users/robinvalentinositohang/Documents/wdio_automation_mobile/apk/app v3.3.4.apk',
        package: process.env.APP_PACKAGE || 'com.kopnus.kdigi.mock',
        activity: process.env.APP_ACTIVITY || 'com.kopnus.kdigi.MainActivity'
    },
    appium: {
        automationName: process.env.AUTOMATION_NAME || 'UiAutomator2',
        noReset: process.env.NO_RESET === 'true',
        fullReset: process.env.FULL_RESET === 'true'
    }
};