import AddressInput from './AddressInput'

import { use, registerComponent } from '../../utils/plugins'

const Plugin = {
    install(Vue) {
        registerComponent(Vue, AddressInput)
    }
}

use(Plugin)

export default Plugin

export {
  AddressInput
}
