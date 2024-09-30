import type { Meta, StoryObj } from '@storybook/react'

import { PdpIntroDe, PdpIntroEn, PdpIntroFr, PdpIntroIt } from '.'
import { exampleReviewsSectionData } from 'ui'

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'Pages/PdpIntro',
} satisfies Meta<typeof PdpIntroEn>

export default meta
type Story = StoryObj<typeof meta>

export const En: Story = {
  name: 'en',
  render: () => (
    <PdpIntroEn
      reviewsSectionConfig={exampleReviewsSectionData}
      ReviewsComponent={() => (
        <div className=" h-96 bg-v2311-bg-light-green  flex justify-center items-center ">
          <h2 className=" v2311-font-h2 text-v2311-primary ">
            Reviews Placeholder
          </h2>
        </div>
      )}
    />
  ),
}
export const De: Story = {
  name: 'de',
  render: () => (
    <PdpIntroDe
      reviewsSectionConfig={exampleReviewsSectionData}
      ReviewsComponent={() => (
        <div className=" h-96 bg-v2311-bg-light-green  flex justify-center items-center ">
          <h2 className=" v2311-font-h2 text-v2311-primary ">
            Platzhalter für Bewertungen
          </h2>
        </div>
      )}
    />
  ),
}

export const Fr: Story = {
  name: 'fr',
  render: () => (
    <PdpIntroFr
      reviewsSectionConfig={exampleReviewsSectionData}
      ReviewsComponent={() => (
        <div className=" h-96 bg-v2311-bg-light-green  flex justify-center items-center ">
          <h2 className=" v2311-font-h2 text-v2311-primary ">
            Espace réservé aux avis
          </h2>
        </div>
      )}
    />
  ),
}

export const It: Story = {
  name: 'it',
  render: () => (
    <PdpIntroIt
      reviewsSectionConfig={exampleReviewsSectionData}
      ReviewsComponent={() => (
        <div className=" h-96 bg-v2311-bg-light-green  flex justify-center items-center ">
          <h2 className=" v2311-font-h2 text-v2311-primary ">
            Reviews Placeholder
          </h2>
        </div>
      )}
    />
  ),
}
