import Image from 'next/legacy/image'
import { AlternativeSideBySideWithImages } from '../feature-sections'
import { ReactNode, useMemo } from 'react'

interface IGemeSpecsProps {
  title?: ReactNode
  specs: { id: number; name: string; description: string }[]
}

const gemeSpecsExampleProps: IGemeSpecsProps = {
  title: 'Tech spec',
  specs: [
    {
      id: 1,
      name: 'Size',
      description: 'W320*D455*H665mm  (18" x 12.6" x 26.2")',
    },
    {
      id: 2,
      name: 'Weight',
      description: '19.5kg',
    },
    {
      id: 3,
      name: 'Power',
      description: 'AC110V-60Hz/220V-50Hz',
    },
    {
      id: 4,
      name: 'Decibel',
      description: '≈40db (23db-55db)',
    },
    {
      id: 5,
      name: 'Capacity',
      description: '5kg/day',
    },
    {
      id: 6,
      name: 'Certifications',
      description: 'CE/FCC/ISO9001/ISO14001/ISO45001',
    },
    {
      id: 7,
      name: 'Function',
      description:
        'Fully automatic quick-acting bio-composting; Safe and energy-saving; Automatic deodorization; Automatic dehumidification',
    },
  ],
}

function GemeSpecs({ title, specs }: IGemeSpecsProps) {
  const props = useMemo(() => {
    return {
      textAndImageblocks: [
        {
          name: 'geme tech specs',
          LeftBlock: () => (
            <div className="mx-auto max-w-xl sm:px-6 lg:mx-0 lg:max-w-none lg:px-0">
              <h3 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">
                {title}
              </h3>

              <dl className="mt-6 space-y-4">
                {specs.map((item) => (
                  <div key={item.id} className="relative">
                    <dt>
                      <p className="text-lg font-medium leading-6 text-gray-900">
                        {item.name}
                      </p>
                    </dt>
                    <dd className="mt-2 text-base text-gray-500">
                      {item.description}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
          ),
          RightBlock: () => (
            <>
              <Image
                className="relative mx-auto"
                layout="responsive"
                width={850}
                height={850}
                src="/assets/images/geme-specs/s3.png"
                alt="GEME tech specs"
              />
            </>
          ),
        },
      ],
    }
  }, [title, specs])

  return <AlternativeSideBySideWithImages {...props} />
}

export default GemeSpecs
export { gemeSpecsExampleProps }
