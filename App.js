import "react-native-gesture-handler";
import * as eva from "@eva-design/eva";
import { AppNavigator } from "./src/infra/navigation/main.navigation";
import { ApplicationProvider, IconRegistry } from "@ui-kitten/components";
import { AuthProvider } from "./src/provider/auth";
import Toast from 'react-native-toast-message';
import { default as theme } from "./theme.json";
import { FrappeProvider } from "./src/provider/backend";
import { EvaIconsPack } from '@ui-kitten/eva-icons';

export default function App() {
  return (
    <>
      <IconRegistry icons={EvaIconsPack} />
      <ApplicationProvider {...eva} theme={{ ...eva.light, ...theme }}>
        <AuthProvider>
          <FrappeProvider>
            <AppNavigator />
          </FrappeProvider>
        </AuthProvider>
        <Toast />
      </ApplicationProvider>
    </>
  );
}
