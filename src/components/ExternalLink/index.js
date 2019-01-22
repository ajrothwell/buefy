import ExternalLink from './ExternalLink'

import { use, registerComponent } from '../../utils/plugins'

const Plugin = {
    install(Vue) {
        registerComponent(Vue, ExternalLink)
    }
}

use(Plugin)

export default Plugin

export {
  ExternalLink
}
