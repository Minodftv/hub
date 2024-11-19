
// main.ts

import { createAppKit } from '@reown/appkit'
import { Ethers5Adapter } from '@reown/appkit-adapter-ethers5'
import { mainnet, arbitrum } from '@reown/appkit/networks'

// 1. Get projectId from https://cloud.reown.com
const projectId = '527f3d738f03de81c4ff68783f834f17'

// 2. Create your application's metadata object
const metadata = {
  name: 'web',
  description: 'AppKit Example',
  url: 'https://reown.com/appkit', // origin must match your domain & subdomain
  icons: ['https://assets.reown.com/reown-profile-pic.png']
}

// 3. Create a AppKit instance
const modal = createAppKit({
  adapters: [new Ethers5Adapter()],
  networks: [mainnet, arbitrum],
  metadata,
  projectId,
  features: {
    analytics: true // Optional - defaults to your Cloud configuration
  }
})
