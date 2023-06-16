import { createRoot } from 'react-dom/client'
import { App } from 'src/components/App'
import { DevSupport } from '@react-buddy/ide-toolbox'
import { ComponentPreviews, useInitial } from '@/dev/index.js'

const container = document.getElementById('root')
const root = createRoot(container)

root.render(
  <DevSupport ComponentPreviews={ComponentPreviews} useInitialHook={useInitial}>
    <App />
  </DevSupport>
)
