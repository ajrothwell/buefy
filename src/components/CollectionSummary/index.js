import CollectionSummary from './CollectionSummary'

import { use, registerComponent } from '../../utils/plugins'

const Plugin = {
    install(Vue) {
        registerComponent(Vue, CollectionSummary)
    }
}

use(Plugin)

export default Plugin

export {
    CollectionSummary
}
