import Greeting from './Greeting'

import { use, registerComponent } from '../../utils/plugins'

const Plugin = {
    install(Vue) {
        registerComponent(Vue, Greeting)
    }
}

use(Plugin)

export default Plugin

export {
  Greeting
}
