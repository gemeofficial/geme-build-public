import HeroSection, { IHeroSection } from './components/HeroSection'

const heroSectionProps: IHeroSection = {
  title: 'GEME Media Kit',
  description: (
    <div className="flex flex-col gap-2 md:gap-4 md:text-xl">
      <p>
        Welcome to the GEME Media Center! Here you can find a variety of
        resources, including high-resolution logos, product images, and brand
        stories to help you learn more about GEME and incorporate our brand into
        your media coverage, marketing campaigns, and more.
      </p>
      <p>
        Feel free to download and use these resources to help promote
        sustainable living.
      </p>
      <p>
        Want to make use of our marks in a way not covered by these guidelines?
        Contact us at{' '}
        <a
          href="mailto:info@geme.bio"
          className="text-v2311-primary underline underline-offset-[6px] inline-block"
        >
          info@geme.bio
        </a>{' '}
        and include a visual mockup of intended use.
      </p>
    </div>
  ),
}

export function CompostRecyclePageDe() {
  return (
    <>
      <HeroSection {...heroSectionProps} />
    </>
  )
}
