import AnyHeader from './AnyHeader'

import { use, registerComponent } from '../../utils/plugins'

const Plugin = {
    install(Vue) {
        registerComponent(Vue, AnyHeader)
    }
}

use(Plugin)

export default Plugin

export {
    AnyHeader
}
