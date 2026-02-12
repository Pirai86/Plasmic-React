
import Homepage from './components/Homepage';
import GlobalContextsProvider from './components/plasmic/starter_project_desktop_first/PlasmicGlobalContextsProvider'

function App() {
  return (<GlobalContextsProvider><Homepage /></GlobalContextsProvider>);
}

export default App;
  