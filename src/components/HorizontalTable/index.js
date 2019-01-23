import HorizontalTable from './HorizontalTable'

import { use, registerComponent } from '../../utils/plugins'

const Plugin = {
    install(Vue) {
        registerComponent(Vue, HorizontalTable)
    }
}

use(Plugin)

export default Plugin

export {
  HorizontalTable
}
