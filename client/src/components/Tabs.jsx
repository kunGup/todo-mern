import React from 'react'
import {TABS} from '../redux/actions/type'
import {useDispatch} from 'react-redux'
import { toggleTabs } from '../redux/actions'
function Tabs({currentTab}) {
  const dispatch = useDispatch()
  return (
    TABS.map(tab=>(
        <button onClick={()=>dispatch(toggleTabs(tab))} key={tab} className={tab===currentTab?'button selected':'button'}>
            {tab}
        </button>
    ))
  )
}

export default Tabs