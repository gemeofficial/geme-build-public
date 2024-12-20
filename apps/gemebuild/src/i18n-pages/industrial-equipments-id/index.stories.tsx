import type { Meta, StoryObj } from '@storybook/react'

import {
  IndustrialEquipmentsIdPageDe,
  IndustrialEquipmentsIdPageEn,
  IndustrialEquipmentsIdPageFr,
  IndustrialEquipmentsIdPageIt,
} from '.'
import { findEquipmentById } from '../../helpers/industrial-equipments/tool'
import { items } from '../../helpers/industrial-equipments/data/data-en'
import { items as itemsDe } from '../../helpers/industrial-equipments/data/data-de'
import { items as itemsFr } from '../../helpers/industrial-equipments/data/data-fr'
import { items as itemsIt } from '../../helpers/industrial-equipments/data/data-it'

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'Pages/industrial-equipments-id',
} satisfies Meta<typeof IndustrialEquipmentsIdPageEn>

export default meta
type Story = StoryObj<typeof meta>

const equipment = findEquipmentById('rs-bio-100', items)
const equipmentDE = findEquipmentById('rs-bio-100', itemsDe)
const equipmentFr = findEquipmentById('rs-bio-100', itemsFr)
const equipmentIt = findEquipmentById('rs-bio-100', itemsIt)

export const En: Story = {
  name: 'en',
  render: () => <IndustrialEquipmentsIdPageEn equipment={equipment} />,
}

export const Fr: Story = {
  name: 'fr',
  render: () => <IndustrialEquipmentsIdPageFr equipment={equipmentFr} />,
}

export const De: Story = {
  name: 'de',
  render: () => <IndustrialEquipmentsIdPageDe equipment={equipmentDE} />,
}

export const It: Story = {
  name: 'it',
  render: () => <IndustrialEquipmentsIdPageIt equipment={equipmentIt} />,
}
