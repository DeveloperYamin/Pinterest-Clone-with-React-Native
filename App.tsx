import { StatusBar } from "expo-status-bar";
import { SafeAreaProvider } from "react-native-safe-area-context";
import useCachedResources from "./hooks/useCachedResources";
import useColorScheme from "./hooks/useColorScheme";
import Navigation from "./navigation";
import { NhostClient, NhostReactProvider } from "@nhost/react";
import * as SecureStore from 'expo-secure-store';
import { useEffect } from "react";

export default function App() {
  const isLoadingComplete = useCachedResources();
  const colorScheme = useColorScheme();

  const nhost = new NhostClient({
    backendUrl: "https://hngotgoxexpubwkbmdqm.nhost.run",
    clientStorageType: "expo-secure-storage",
    clientStorage: SecureStore,
  });

  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      <NhostReactProvider nhost={nhost} >
      <SafeAreaProvider>
        <Navigation colorScheme={colorScheme} />
        <StatusBar />
      </SafeAreaProvider>
      </NhostReactProvider>
    );
  }
}
