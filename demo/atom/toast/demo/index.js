/* eslint-disable react/prop-types, no-unused-vars, no-console */

import React, {useState} from 'react'
import Button from '@schibstedspain/sui-atom-button'
import MoleculeSelect from '@s-ui/react-molecule-select'
import MoleculeSelectOption from '@s-ui/react-molecule-dropdown-option'

import {IconArrowDown} from './Icons'

import AtomToast, {
  atomToastPosistions,
  atomToastAutoCloseTimes,
  atomToastSizes,
  atomToastMargins
} from '../../../../components/atom/toast/src'

import './index.scss'

const Demo = () => {
  const [show, setShow] = useState(false)

  const [position, setPosition] = useState()
  const [autoClose, setAutoClose] = useState(true)
  const [autoCloseTime, setAutoCloseTime] = useState()
  const [crossToClose, setCrossToClose] = useState(true)
  const [size, setSize] = useState()
  const [margin, setMargin] = useState()
  const [globalClose, setGlobalClose] = useState()
  const [effect, setEffect] = useState(true)

  const renderContent = () => (
    <div className="DemoToast-content">
      <span>Morty! I'm a pickle! 🥒</span>
    </div>
  )

  return (
    <div className="DemoToast">
      <h1>Atom Toast</h1>
      <label className="DemoToast-label">Position</label>
      <MoleculeSelect
        value={position}
        onChange={(ev, {value}) => setPosition(value)}
        placeholder="Select a position..."
        iconArrowDown={<IconArrowDown />}
      >
        {Object.keys(atomToastPosistions).map(key => (
          <MoleculeSelectOption key={key} value={atomToastPosistions[key]}>
            {key}
          </MoleculeSelectOption>
        ))}
      </MoleculeSelect>
      <label className="DemoToast-label">Auto close time</label>
      <MoleculeSelect
        value={autoCloseTime}
        onChange={(ev, {value}) => setAutoCloseTime(value)}
        placeholder="Select an auto close time..."
        iconArrowDown={<IconArrowDown />}
      >
        {Object.keys(atomToastAutoCloseTimes).map(key => (
          <MoleculeSelectOption key={key} value={atomToastAutoCloseTimes[key]}>
            {key}
          </MoleculeSelectOption>
        ))}
      </MoleculeSelect>
      <label className="DemoToast-label">Size</label>
      <MoleculeSelect
        value={size}
        onChange={(ev, {value}) => setSize(value)}
        placeholder="Select a size..."
        iconArrowDown={<IconArrowDown />}
      >
        {Object.keys(atomToastSizes).map(key => (
          <MoleculeSelectOption key={key} value={atomToastSizes[key]}>
            {key}
          </MoleculeSelectOption>
        ))}
      </MoleculeSelect>
      <label className="DemoToast-label">Margin</label>
      <MoleculeSelect
        value={margin}
        onChange={(ev, {value}) => setMargin(value)}
        placeholder="Select a margin..."
        iconArrowDown={<IconArrowDown />}
      >
        {Object.keys(atomToastMargins).map(key => (
          <MoleculeSelectOption key={key} value={atomToastMargins[key]}>
            {key}
          </MoleculeSelectOption>
        ))}
      </MoleculeSelect>
      <label className="DemoToast-label">Auto close</label>
      <input
        type="checkbox"
        checked={autoClose}
        onChange={ev => setAutoClose(ev.target.checked)}
      />
      <label className="DemoToast-label">Cross to close</label>
      <input
        type="checkbox"
        checked={crossToClose}
        onChange={ev => setCrossToClose(ev.target.checked)}
      />
      <label className="DemoToast-label">Global close</label>
      <input
        type="checkbox"
        checked={globalClose}
        onChange={ev => setGlobalClose(ev.target.checked)}
      />
      <label className="DemoToast-label">Effect</label>
      <input
        type="checkbox"
        checked={effect}
        onChange={ev => setEffect(ev.target.checked)}
      />
      <br />
      <Button onClick={() => setShow(true)} fullWidth>
        Show Toast
      </Button>
      {show && (
        <AtomToast
          autoClose={Boolean(autoClose)}
          autoCloseTime={autoCloseTime}
          crossToClose={crossToClose}
          effect={effect}
          position={position}
          onClose={() => setShow(false)}
          size={size}
          margin={margin}
          globalClose={globalClose}
        >
          {renderContent()}
        </AtomToast>
      )}
    </div>
  )
}

export default Demo
