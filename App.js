import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { WebView } from 'react-native-webview';

const html = `
<html>
  <h1>hello world</h1>
  <div id="container" style="height: 100%; width: 100%; border: none"></div>
  <script type="module">
    import Hyperbeam from "https://unpkg.com/@hyperbeam/web@latest/dist/index.js"
    const container = document.getElementById("container")
    const embedURL = "https://1n3gz1hpcnqdu0d7un7mi7olf.hyperbeam.com/ukqHvBjLRjW6-hmVFkwRYQ?token=qbAeW9ct_fRc-eGA75eJMZb5CyTXdDVP7qQhgYKdbIw"

    initializeHB()
    async function initializeHB() {
      try {
        const hb = await Hyperbeam(container, embedURL)
      } catch (e) {
        alert(e)
      }
    }
  </script>
</html>
`

export default function App() {
  console.log('this is a log please print')
  return (
		  <WebView
      originWhitelist={['*']}
      source={{ html }}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
  },
});
