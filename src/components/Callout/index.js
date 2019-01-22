import Callout from './Callout'

import { use, registerComponent } from '../../utils/plugins'

const Plugin = {
    install(Vue) {
        registerComponent(Vue, Callout)
    }
}

use(Plugin)

export default Plugin

export {
    Callout
}
