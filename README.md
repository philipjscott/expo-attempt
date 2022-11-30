https://www.educative.io/answers/how-to-debug-react-native-webview

The only way to read the webview logs is through remote debugging:
https://github.com/react-native-webview/react-native-webview/blob/master/docs/Debugging.md

Note you need to install `android-tools` on Arch Linux, or Android Studio to ensure you have the developer libraries.

Finally, Expo does *not* support toggling webview debugging:
https://github.com/expo/expo/issues/485
https://expo.canny.io/feature-requests/p/support-running-debugger-against-webview-without-native-changes
