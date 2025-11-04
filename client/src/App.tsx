import { Router, Route } from 'wouter';
import Home from './pages/Home';
import Camera from './pages/Camera';
import Settings from './pages/Settings';
import ShoppingList from './pages/ShoppingList';
import Profile from './pages/Profile';
import { ThemeProvider } from './contexts/ThemeContext';
import { AccessibilityProvider } from './contexts/AccessibilityContext';
import { PurchaseHistoryProvider } from './contexts/PurchaseHistoryContext';
import { VoiceCommandProvider } from './contexts/VoiceCommandContext';

function App() {
  return (
    <ThemeProvider>
      <AccessibilityProvider>
        <PurchaseHistoryProvider>
          <VoiceCommandProvider>
            <Router>
              <Route path="/" component={Home} />
              <Route path="/camera/:mode" component={Camera} />
              <Route path="/settings" component={Settings} />
              <Route path="/shopping-list" component={ShoppingList} />
              <Route path="/profile" component={Profile} />
            </Router>
          </VoiceCommandProvider>
        </PurchaseHistoryProvider>
      </AccessibilityProvider>
    </ThemeProvider>
  );
}

export default App;