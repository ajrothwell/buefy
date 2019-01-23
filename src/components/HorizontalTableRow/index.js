import HorizontalTableRow from './HorizontalTableRow'

import { use, registerComponent } from '../../utils/plugins'

const Plugin = {
    install(Vue) {
        registerComponent(Vue, HorizontalTableRow)
    }
}

use(Plugin)

export default Plugin

export {
  HorizontalTableRow
}
