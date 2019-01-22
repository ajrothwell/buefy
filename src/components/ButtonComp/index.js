import ButtonComp from './ButtonComp'

import { use, registerComponent } from '../../utils/plugins'

const Plugin = {
    install(Vue) {
        registerComponent(Vue, ButtonComp)
    }
}

use(Plugin)

export default Plugin

export {
    ButtonComp
}
