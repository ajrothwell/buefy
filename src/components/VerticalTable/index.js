import VerticalTable from './VerticalTable'

import { use, registerComponent } from '../../utils/plugins'

const Plugin = {
    install(Vue) {
        registerComponent(Vue, VerticalTable)
    }
}

use(Plugin)

export default Plugin

export {
  VerticalTable
}
