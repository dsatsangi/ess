const IS_DEV = process.env.APP_VARIANT === 'development';


export default {
  "expo": {
    "name": "genisup-ess",
    "slug": "ess",
    "version": "1.0.0",
    "orientation": "portrait",
    "icon": "./assets/icon.png",
    "userInterfaceStyle": "light",
    "owner": "sdheeraz",
    "splash": {
      "image": "./assets/splash.png",
      "resizeMode": "contain",
      "backgroundColor": "#ffffff"
    },
    "scheme": "com.genisup.ess",
    "assetBundlePatterns": [
      "**/*"
    ],
    "ios": {
      "supportsTablet": true,
      "config": {
        "usesNonExemptEncryption": false
      },
      "bundleIdentifier": IS_DEV ? 'exp://192.168.1.19:8081/--/auth' : 'exp://192.168.1.19:8081/--/auth',
    },
    "android": {
      "adaptiveIcon": {
        "foregroundImage": "./assets/adaptive-icon.png",
        "backgroundColor": "#ffffff"
      },
      "package": "com.genisup.ess"
    },
    "web": {
      "favicon": "./assets/favicon.png"
    },
    "extra": {
      "eas": {
        "projectId": "e8365ed6-93ae-4d3b-9d53-c53bca372f73"
      }
    },
    "plugins": [
      "expo-build-properties",
      "expo-secure-store"
    ]
  }
}
