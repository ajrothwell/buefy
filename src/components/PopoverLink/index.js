import PopoverLink from './PopoverLink'

import { use, registerComponent } from '../../utils/plugins'

const Plugin = {
    install(Vue) {
        registerComponent(Vue, PopoverLink)
    }
}

use(Plugin)

export default Plugin

export {
  PopoverLink
}
