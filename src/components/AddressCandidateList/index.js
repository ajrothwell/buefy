import AddressCandidateList from './AddressCandidateList'

import { use, registerComponent } from '../../utils/plugins'

const Plugin = {
    install(Vue) {
        registerComponent(Vue, AddressCandidateList)
    }
}

use(Plugin)

export default Plugin

export {
  AddressCandidateList
}
