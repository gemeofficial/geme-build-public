/* eslint-disable react/no-unescaped-entities */

import { IFaqProps } from 'ui'

// Faqs
export const koboldFaqPropsEn: IFaqProps = {
  title: 'Frequently Asked Questions',
  description: '',
  faqs: [
    {
      slug: 'how-it-works',
      question: 'How does it work?',
      answer: (
        <>
          <h4>
            ✅ <strong>Simulates a compost pile in a box</strong>, ❌
            <del>not just dehydration and heat</del>
          </h4>
          GEME Composters are home appliances that provide and maintain{' '}
          <strong>an ideal environment</strong> for {`GEME's`} special microbes
          (GEME Kobold) to break down bio-waste. Terra 2 works on the same
          principle.
          <br />
          <ul>
            <li>
              <strong>The Machine</strong>: It simulates a compost pile in a
              contained environment, ensuring that it will not smell.
              <br />
              <picture>
                <img
                  alt="How electric composter works"
                  src="/assets/images/how-it-works/how-geme-composter-works.jpg"
                />
              </picture>
            </li>
            <li>
              <strong>The Kobold</strong>: Microbes perform most of the work.
              They reproduce quickly and absorb energy from the food waste. Just
              like worms consume food, microbes break down waste and produce
              compost.
              <picture>
                <img
                  alt="How microbes grow"
                  src="/assets/images/geme-terra-2/microbes-grow.png"
                />
              </picture>
              Under ideal conditions, some bacterial species can divide every
              10–15 minutes, doubling the population at these intervals.
            </li>
          </ul>
        </>
      ),
    },
    {
      slug: 'what-is-the-difference-between-other-electric-composters-like-lomi',
      question:
        'What is the difference between other electric composters like Lomi?',
      answer: (
        <>
          <div className="overflow-x-auto">
            <table className="min-w-full bg-white border border-gray-300">
              <thead>
                <tr>
                  <th className="py-2 px-4 border-b border-gray-300 text-left text-sm font-semibold text-gray-700">
                    Features
                  </th>
                  <th className="py-2 px-4 border-b border-gray-300 text-left text-sm font-semibold text-gray-700">
                    GEME Terra 2
                  </th>
                  <th className="py-2 px-4 border-b border-gray-300 text-left text-sm font-semibold text-gray-700">
                    Lomi-like Dehydrators
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="bg-gray-50">
                  <td className="py-3 px-4 border-b border-gray-300 text-sm text-gray-700">
                    Price
                  </td>
                  <td className="py-3 px-4 border-b border-gray-300 text-sm text-gray-700">{`< $600`}</td>
                  <td className="py-3 px-4 border-b border-gray-300 text-sm text-gray-700">{`$150 < x < $500`}</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 border-b border-gray-300 text-sm text-gray-700">
                    Size
                  </td>
                  <td className="py-3 px-4 border-b border-gray-300 text-sm text-gray-700">
                    14L
                  </td>
                  <td className="py-3 px-4 border-b border-gray-300 text-sm text-gray-700">
                    3L - 4L
                  </td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="py-3 px-4 border-b border-gray-300 text-sm text-gray-700">
                    Working Mode
                  </td>
                  <td className="py-3 px-4 border-b border-gray-300 text-sm text-gray-700">
                    Continuous composting
                  </td>
                  <td className="py-3 px-4 border-b border-gray-300 text-sm text-gray-700">
                    Periodic grinding and dehydrating
                  </td>
                </tr>
                <tr>
                  <td className="py-3 px-4 border-b border-gray-300 text-sm text-gray-700">
                    End Result
                  </td>
                  <td className="py-3 px-4 border-b border-gray-300 text-sm text-gray-700">
                    Real compost
                  </td>
                  <td className="py-3 px-4 border-b border-gray-300 text-sm text-gray-700">
                    Dried and cooked waste
                  </td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="py-3 px-4 border-b border-gray-300 text-sm text-gray-700">
                    Interaction
                  </td>
                  <td className="py-3 px-4 border-b border-gray-300 text-sm text-gray-700">
                    Add waste anytime
                  </td>
                  <td className="py-3 px-4 border-b border-gray-300 text-sm text-gray-700">
                    Wait for cycle to complete
                  </td>
                </tr>
                <tr>
                  <td className="py-3 px-4 border-b border-gray-300 text-sm text-gray-700">
                    Filter System
                  </td>
                  <td className="py-3 px-4 border-b border-gray-300 text-sm text-gray-700">
                    Permanent filter,
                    <br />
                    No need to replace
                  </td>
                  <td className="py-3 px-4 border-b border-gray-300 text-sm text-gray-700">
                    Carbon filter,
                    <br />
                    Replace every 3 months
                  </td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="py-3 px-4 border-b border-gray-300 text-sm text-gray-700">
                    Clean-up
                  </td>
                  <td className="py-3 px-4 border-b border-gray-300 text-sm text-gray-700">
                    No need to clean
                  </td>
                  <td className="py-3 px-4 border-b border-gray-300 text-sm text-gray-700">
                    Easily clogged
                  </td>
                </tr>
                <tr>
                  <td className="py-3 px-4 border-b border-gray-300 text-sm text-gray-700">
                    Days to Fill
                  </td>
                  <td className="py-3 px-4 border-b border-gray-300 text-sm text-gray-700">
                    45 days+
                  </td>
                  <td className="py-3 px-4 border-b border-gray-300 text-sm text-gray-700">{`1 day`}</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 border-b border-gray-300 text-sm text-gray-700">
                    Sound Level
                  </td>
                  <td className="py-3 px-4 border-b border-gray-300 text-sm text-gray-700">
                    25dB to 40dB
                  </td>
                  <td className="py-3 px-4 border-b border-gray-300 text-sm text-gray-700">
                    60dB+
                  </td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="py-3 px-4 border-b border-gray-300 text-sm text-gray-700">
                    Energy Cost
                  </td>
                  <td className="py-3 px-4 border-b border-gray-300 text-sm text-gray-700">
                    1.2~1.7 kWh/day
                    <br />
                    Similar to a MacBook Pro
                  </td>
                  <td className="py-3 px-4 border-b border-gray-300 text-sm text-gray-700">
                    500W+ Power
                    <br />
                    Similar to an oven
                  </td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="py-3 px-4 border-b border-gray-300 text-sm text-gray-700">
                    Space
                  </td>
                  <td className="py-3 px-4 border-b border-gray-300 text-sm text-gray-700">
                    Floor, countertop
                  </td>
                  <td className="py-3 px-4 border-b border-gray-300 text-sm text-gray-700">
                    Countertop only
                  </td>
                </tr>
                <tr>
                  <td className="py-3 px-4 border-b border-gray-300 text-sm text-gray-700">
                    How to Start
                  </td>
                  <td className="py-3 px-4 border-b border-gray-300 text-sm text-gray-700">
                    Throw in and close the lid
                  </td>
                  <td className="py-3 px-4 border-b border-gray-300 text-sm text-gray-700">
                    Align lid carefully
                  </td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="py-3 px-4 border-b border-gray-300 text-sm text-gray-700">
                    Liquid Waste
                  </td>
                  <td className="py-3 px-4 border-b border-gray-300 text-sm text-gray-700">
                    Yes
                  </td>
                  <td className="py-3 px-4 border-b border-gray-300 text-sm text-gray-700">
                    No
                  </td>
                </tr>
                <tr>
                  <td className="py-3 px-4 border-b border-gray-300 text-sm text-gray-700">
                    Meat
                  </td>
                  <td className="py-3 px-4 border-b border-gray-300 text-sm text-gray-700">
                    Yes
                  </td>
                  <td className="py-3 px-4 border-b border-gray-300 text-sm text-gray-700">
                    No
                  </td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="py-3 px-4 border-b border-gray-300 text-sm text-gray-700">
                    Supports Pet Waste
                  </td>
                  <td className="py-3 px-4 border-b border-gray-300 text-sm text-gray-700">
                    Yes
                  </td>
                  <td className="py-3 px-4 border-b border-gray-300 text-sm text-gray-700">
                    No
                  </td>
                </tr>
                <tr>
                  <td className="py-3 px-4 border-b border-gray-300 text-sm text-gray-700">
                    Up to 3kg
                  </td>
                  <td className="py-3 px-4 border-b border-gray-300 text-sm text-gray-700">
                    Yes
                  </td>
                  <td className="py-3 px-4 border-b border-gray-300 text-sm text-gray-700">
                    No
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <iframe
            className="w-full aspect-[16/9] self-stretch md:min-h-[500px]"
            src="https://www.youtube.com/embed/-qkjLB3GcKo"
            frameBorder="0"
            title="Product Overview Video"
            aria-hidden="true"
          />
        </>
      ),
    },

    {
      slug: 'can-I-add-food-waste-when-it-is-running',
      question: 'Can I add food waste when it is running?',
      answer: `Yes`,
    },
    {
      slug: 'how-much-food-waste-can-i-add-at-once',
      question: 'How much food waste can I add at once?',
      answer: (
        <>
          You can add <strong>up to 2kg</strong> at one time. You can add food
          waste multiple times in one day, but{' '}
          <strong>please do not exceed 5kg</strong> in a single day.
          <br />
          <br />
          <em>Note:</em> The container can hold up to <strong>19L</strong>, but
          this {"doesn't"} mean you can fill it completely at once.
          <br />
          <br />
          Adding <strong>5kg of waste at once</strong> is possible and has pass
          factory benchmark testing, but it is{' '}
          <strong>not recommended for daily use</strong>.
          <iframe
            className="w-full aspect-[16/9] self-stretch md:min-h-[500px]"
            src="https://www.youtube.com/embed/JV0nZtaRaD0"
            frameBorder="0"
            title="GEME breaks down food waste in 7 hours - uncut video"
            aria-hidden="true"
          />
        </>
      ),
    },

    {
      slug: 'what-kinds-of-food-waste-can-i-put',
      question: 'What kinds of food waste can I put?',
      answer: (
        <>
          <div className="max-w-3xl mx-auto p-6">
            <p className="text-gray-700 text-lg leading-relaxed mb-6">
              Almost all food you eat can go into the GEME composter.
            </p>
            <div className="flex flex-col md:flex-row items-start md:items-center mb-6">
              <picture>
                <img
                  src="https://www.geme.bio/help-center/assets/images/supported-foodwaste-guide-055cef03c7c375f24ce99e1625de5d6f.png"
                  alt="GEME Composter Supported Food Waste"
                />
              </picture>
            </div>

            <p className="text-gray-700 text-lg leading-relaxed mb-6">
              It also supports liquid waste, like soup.
              <iframe
                className="w-full aspect-[16/9] self-stretch md:min-h-[500px]"
                src="https://www.youtube.com/embed/yGkcEaeXlQQ"
                frameBorder="0"
                title="Product Overview Video"
                aria-hidden="true"
              />
            </p>

            <p className="text-gray-700 text-lg leading-relaxed">
              It can also break down pet waste, such as dog poop and cat litter.
            </p>
            <picture>
              <img
                src="/assets/images/geme-terra-2/cat-litter.png"
                alt="GEME Composter Supported Pet Waste"
              />
            </picture>
          </div>
        </>
      ),
    },
    {
      slug: 'how-long-will-it-take-for-geme-to-turn-my-food-waste-into-compost',
      question: 'How long will it take to turn my food waste into compost?',
      answer: (
        <>
          For most daily leftovers, it takes around 6 to 8 hours to break down
          the waste.
          <br />
          Check out this uncut 7-hour video. (
          <b className="text-gray-500">
            none of our competitors dare to share such live videos with the
            public
          </b>
          )
          <iframe
            className="w-full aspect-[16/9] self-stretch md:min-h-[500px]"
            src="https://www.youtube.com/embed/asNRoqkC_BA"
            frameBorder="0"
            title="GEME breaks down food waste in 7 hours - uncut video"
            aria-hidden="true"
          />
          However, for certain food waste, like orange peels, it will take
          slightly longer due to their tough fibers. Small bones take even more
          time.
          <picture>
            <img
              src="https://www.geme.bio/help-center/assets/images/supported-foodwaste-guide-055cef03c7c375f24ce99e1625de5d6f.png"
              alt="GEME Composter Supported Food Waste"
            />
          </picture>
          <strong>Note:</strong> While it takes a few hours or days to break
          down into compost, this is not yet finished compost. We recommend
          waiting at least 45 days before using it. Alternatively, you can mix
          the unfinished compost with soil at a 1:8 ratio to grow your plants.
        </>
      ),
    },

    {
      slug: 'is-it-smell-how-often-should-i-replace-the-carbon-filter',
      question: 'Does it smell? How often should I replace the carbon filter?',
      answer: (
        <>
          <div>
            {`It doesn't smell`} because it uses{' '}
            <strong className="text-v2311-primary">
              metal ion catalytic oxidation
            </strong>{' '}
            technology to neutralize odors. Unlike traditional composters,{' '}
            {`it doesn't use carbon filters, so there's `}
            <strong className="text-v2311-primary">
              no need to replace them
            </strong>
            . The filter is designed to last a lifetime.
          </div>
          <div className="container mx-auto p-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white rounded-lg shadow-md">
                <picture>
                  <img
                    src="/assets/images/geme-terra-2/odor/1.jpg"
                    alt="Photocatalyst UV Layer"
                    className="w-full h-auto rounded-t-lg"
                  />
                </picture>
                <div className="p-4">
                  <h2 className="text-xl font-semibold mb-2">Layer 1</h2>
                  <p className="text-gray-700">
                    Photocatalyst and UV light that eliminate harmful bacteria.
                  </p>
                </div>
              </div>

              <div className="bg-white rounded-lg shadow-md">
                <picture>
                  <img
                    src="/assets/images/geme-terra-2/odor/2.jpg"
                    alt="Metal Ion Oxidation Layer"
                    className="w-full h-auto rounded-t-lg"
                  />
                </picture>
                <div className="p-4">
                  <h2 className="text-xl font-semibold mb-2">Layer 2</h2>
                  <p className="text-gray-700">
                    Metal ion catalytic oxidation process.
                  </p>
                </div>
              </div>

              <div className="bg-white rounded-lg shadow-md">
                <picture>
                  <img
                    src="/assets/images/geme-terra-2/odor/3.jpg"
                    alt="Aerobic Air Exchange Layer"
                    className="w-full h-auto rounded-t-lg"
                  />
                </picture>
                <div className="p-4">
                  <h2 className="text-xl font-semibold mb-2">Layer 3</h2>
                  <p className="text-gray-700">
                    A powerful aerobic air exchange system for odor control.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </>
      ),
    },
    {
      slug: 'how-often-should-i-clean-the-bin',
      question: 'How often should I clean the bin?',
      answer: (
        <>
          Technically, there is no need to clean the bin. It may not look great,
          and there might be a slight odor when you open the lid, but once the
          lid is closed, it remains clean and odorless. <br />
          The real question you might want to ask is:{' '}
          <strong>How often should I harvest the compost?</strong>
          <div className="container mx-auto p-4">
            <h5 className="text-xl font-semibold text-gray-800 mb-4">
              {`1. Don't exceed the full limit line`}
            </h5>
            <p className="text-gray-700 mb-6">
              This is a hard limit. If it gets full, remove the compost as soon
              as possible.
            </p>

            <h5 className="text-xl font-semibold text-gray-800 mb-4">
              2. Do not empty all of the compost
            </h5>
            <p className="text-gray-700 mb-6">
              Every time you remove compost, leave some at the base so that the
              bacteria in the GEME Kobold can reproduce and continue processing
              new food waste.
              <strong className="text-v2311-primary">
                Keep the compost level aligned with the agitator shaft.
              </strong>
            </p>

            <h5 className="text-xl font-semibold text-gray-800 mb-4">
              3. Recommended: Remove compost when the paddle is fully buried
            </h5>
            <p className="text-gray-700 mb-6">
              Look for the yellow line in the picture below. This is a best
              practice that allows you to collect compost more efficiently while
              reducing the machine’s workload, helping to extend its lifespan.
            </p>
          </div>
          <picture>
            <img
              src="/assets/images/geme-terra-2/harvest-compost/best-practice-removal.png"
              alt="Best practice to remove GEME compost"
            />
          </picture>
        </>
      ),
    },

    {
      slug: 'can-i-feed-the-output-compost-to-my-worm-bin',
      question:
        'Can I feed the output from GEME to my worm bin for vermin composting?',
      answer: (
        <>
          Yes, you can! The microbes from <a href="/geme-kobold">GEME Kobold</a>{' '}
          are collected and extracted from nature. They are not harmful to
          animals and good to the soil. They can work perfectly with worms in
          the worm bin. The unfinished organic material will be the best food
          for the worms while the decomposed material remains high nutrient.
        </>
      ),
    },
    {
      slug: 'what-is-the-maintenance-cost-for-keep-the-unit',
      question: 'What is the electricity cost to keep the unit?',
      answer: (
        <>
          <div className="max-w-4xl mx-auto p-6 bg-white shadow-md rounded-lg">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              GEME Composter Annual Costs: A Detailed Reasoning
            </h2>

            <div className="mb-4">
              <h3 className="text-xl font-semibold text-gray-700 mb-2">
                1. Daily Energy Consumption
              </h3>
              <p className="text-gray-700">
                The GEME Composter consumes approximately{' '}
                <strong>1.44 kWh per day</strong>. This is comparable to the
                daily energy usage of a standard laptop running continuously.
              </p>
            </div>

            <div className="mb-4">
              <h3 className="text-xl font-semibold text-gray-700 mb-2">
                2. Annual Energy Consumption
              </h3>
              <p className="text-gray-700">
                Given that the appliance operates 24 hours a day, the total
                energy consumption over a year can be calculated as:
              </p>
              <p className="text-gray-700 font-mono bg-gray-100 p-2 rounded-lg">
                1.44 kWh/day × 365 days/year = 525.6 kWh/year
              </p>
              <p className="text-gray-700">
                This means that over the course of a year, the GEME Composter
                uses a total of <strong>525.6 kWh</strong>.
              </p>
            </div>

            <div className="mb-4">
              <h3 className="text-xl font-semibold text-gray-700 mb-2">
                3. Electricity Cost
              </h3>
              <p className="text-gray-700">
                The average electricity cost in the United States is around{' '}
                <strong>$0.13 per kWh</strong>. Therefore, the annual cost of
                running the GEME Composter can be calculated as:
              </p>
              <p className="text-gray-700 font-mono bg-gray-100 p-2 rounded-lg">
                525.6 kWh/year × $0.13/kWh = $68.33/year
              </p>
              <p className="text-gray-700">
                This calculation shows that the GEME Composter’s electricity
                cost amounts to approximately <strong>$68.33 per year</strong>.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-gray-700 mb-2">
                4. Conclusion
              </h3>
              <p className="text-gray-700">
                The annual operating cost of the GEME Composter, when
                considering only electricity usage, is relatively low at{' '}
                <strong>$68.33</strong>. This makes it an economical choice for
                those looking to reduce food waste and produce compost, all
                while maintaining low operating expenses.
              </p>
            </div>

            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              Annual Electricity Cost Comparison
            </h2>
            <div className="overflow-x-auto">
              <table className="min-w-full bg-white border border-gray-300">
                <thead>
                  <tr>
                    <th className="py-2 px-4 border-b border-gray-300 text-left text-sm font-semibold text-gray-700">
                      Device
                    </th>
                    <th className="py-2 px-4 border-b border-gray-300 text-left text-sm font-semibold text-gray-700">
                      Daily Energy Consumption (kWh)
                    </th>
                    <th className="py-2 px-4 border-b border-gray-300 text-left text-sm font-semibold text-gray-700">
                      Annual Energy Consumption (kWh)
                    </th>
                    <th className="py-2 px-4 border-b border-gray-300 text-left text-sm font-semibold text-gray-700">
                      Average Electricity Cost ($/kWh)
                    </th>
                    <th className="py-2 px-4 border-b border-gray-300 text-left text-sm font-semibold text-gray-700">
                      Annual Electricity Cost ($)
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="bg-gray-50">
                    <td className="py-3 px-4 border-b border-gray-300 text-sm text-gray-700">
                      GEME Composter
                    </td>
                    <td className="py-3 px-4 border-b border-gray-300 text-sm text-gray-700">
                      1.44
                    </td>
                    <td className="py-3 px-4 border-b border-gray-300 text-sm text-gray-700">
                      525.6
                    </td>
                    <td className="py-3 px-4 border-b border-gray-300 text-sm text-gray-700">
                      $0.13
                    </td>
                    <td className="py-3 px-4 border-b border-gray-300 text-sm text-gray-700">
                      $68.33
                    </td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 border-b border-gray-300 text-sm text-gray-700">
                      Refrigerator
                    </td>
                    <td className="py-3 px-4 border-b border-gray-300 text-sm text-gray-700">
                      1.5
                    </td>
                    <td className="py-3 px-4 border-b border-gray-300 text-sm text-gray-700">
                      547.5
                    </td>
                    <td className="py-3 px-4 border-b border-gray-300 text-sm text-gray-700">
                      $0.13
                    </td>
                    <td className="py-3 px-4 border-b border-gray-300 text-sm text-gray-700">
                      $71.18
                    </td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="py-3 px-4 border-b border-gray-300 text-sm text-gray-700">
                      Air Conditioner
                    </td>
                    <td className="py-3 px-4 border-b border-gray-300 text-sm text-gray-700">
                      5.0 (during summer)
                    </td>
                    <td className="py-3 px-4 border-b border-gray-300 text-sm text-gray-700">
                      600
                    </td>
                    <td className="py-3 px-4 border-b border-gray-300 text-sm text-gray-700">
                      $0.13
                    </td>
                    <td className="py-3 px-4 border-b border-gray-300 text-sm text-gray-700">
                      $78.00
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </>
      ),
    },
  ],
}

export const koboldFaqPropsDe: IFaqProps = {
  title: 'Frequently Asked Questions',
  description: '',
  faqs: [
    {
      slug: 'how-it-works',
      question: 'Wie funktioniert es?',
      answer: (
        <>
          <h4>
            ✅ <strong>Simuliert einen Komposthaufen in einer Box</strong>, ❌
            <del>nicht nur Dehydration und Hitze</del>
          </h4>
          GEME Komposter sind Haushaltsgeräte, die eine{' '}
          <strong>ideale Umgebung</strong> für {`GEME's`} spezielle Mikroben
          (GEME Kobold) bieten und aufrechterhalten, um Bioabfälle abzubauen.
          Terra 2 funktioniert nach dem gleichen Prinzip.
          <br />
          <ul>
            <li>
              <strong>Die Maschine</strong>: Sie simuliert einen Komposthaufen
              in einer geschlossenen Umgebung und stellt sicher, dass es nicht
              riecht.
              <br />
              <picture>
                <img
                  alt="Wie der elektrische Komposter funktioniert"
                  src="/assets/images/how-it-works/how-geme-composter-works.jpg"
                />
              </picture>
            </li>
            <li>
              <strong>Der Kobold</strong>: Mikroben erledigen die meiste Arbeit.
              Sie vermehren sich schnell und nehmen Energie aus den
              Lebensmittelabfällen auf. Genau wie Würmer Nahrung konsumieren,
              bauen Mikroben Abfälle ab und produzieren Kompost.
              <picture>
                <img
                  alt="Wie Mikroben wachsen"
                  src="/assets/images/geme-terra-2/microbes-grow.png"
                />
              </picture>
              Unter idealen Bedingungen können sich einige Bakterienarten alle
              10–15 Minuten teilen und die Population in diesen Intervallen
              verdoppeln.
            </li>
          </ul>
        </>
      ),
    },
    {
      slug: 'what-is-the-difference-between-other-electric-composters-like-lomi',
      question:
        'Was ist der Unterschied zu anderen elektrischen Kompostern wie Lomi?',
      answer: (
        <>
          <div className="overflow-x-auto">
            <table className="min-w-full bg-white border border-gray-300">
              <thead>
                <tr>
                  <th className="py-2 px-4 border-b border-gray-300 text-left text-sm font-semibold text-gray-700">
                    Merkmale
                  </th>
                  <th className="py-2 px-4 border-b border-gray-300 text-left text-sm font-semibold text-gray-700">
                    GEME Terra 2
                  </th>
                  <th className="py-2 px-4 border-b border-gray-300 text-left text-sm font-semibold text-gray-700">
                    Lomi-ähnliche Dehydratoren
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="bg-gray-50">
                  <td className="py-3 px-4 border-b border-gray-300 text-sm text-gray-700">
                    Preis
                  </td>
                  <td className="py-3 px-4 border-b border-gray-300 text-sm text-gray-700">{`< 600 €`}</td>
                  <td className="py-3 px-4 border-b border-gray-300 text-sm text-gray-700">{`150 € < x < 500 €`}</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 border-b border-gray-300 text-sm text-gray-700">
                    Größe
                  </td>
                  <td className="py-3 px-4 border-b border-gray-300 text-sm text-gray-700">
                    14L
                  </td>
                  <td className="py-3 px-4 border-b border-gray-300 text-sm text-gray-700">
                    3L - 4L
                  </td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="py-3 px-4 border-b border-gray-300 text-sm text-gray-700">
                    Arbeitsmodus
                  </td>
                  <td className="py-3 px-4 border-b border-gray-300 text-sm text-gray-700">
                    Kontinuierliches Kompostieren
                  </td>
                  <td className="py-3 px-4 border-b border-gray-300 text-sm text-gray-700">
                    Periodisches Mahlen und Dehydrieren
                  </td>
                </tr>
                <tr>
                  <td className="py-3 px-4 border-b border-gray-300 text-sm text-gray-700">
                    Endergebnis
                  </td>
                  <td className="py-3 px-4 border-b border-gray-300 text-sm text-gray-700">
                    Echter Kompost
                  </td>
                  <td className="py-3 px-4 border-b border-gray-300 text-sm text-gray-700">
                    Getrockneter und gekochter Abfall
                  </td>
                </tr>
                {/* Additional rows omitted for brevity */}
              </tbody>
            </table>
          </div>
          <iframe
            className="w-full aspect-[16/9] self-stretch md:min-h-[500px]"
            src="https://www.youtube.com/embed/-qkjLB3GcKo"
            frameBorder="0"
            title="Produktübersicht Video"
            aria-hidden="true"
          />
        </>
      ),
    },

    {
      slug: 'can-I-add-food-waste-when-it-is-running',
      question: 'Kann ich während des Betriebs Lebensmittelabfälle hinzufügen?',
      answer: `Ja`,
    },
    {
      slug: 'how-much-food-waste-can-i-add-at-once',
      question: 'Wie viel Lebensmittelabfall kann ich auf einmal hinzufügen?',
      answer: (
        <>
          Sie können <strong>bis zu 2kg</strong> auf einmal hinzufügen. Es ist
          möglich, Lebensmittelabfälle mehrmals am Tag hinzuzufügen, aber bitte{' '}
          <strong>überschreiten Sie nicht 5kg</strong> an einem Tag.
          <br />
          <br />
          <em>Hinweis:</em> Der Behälter kann bis zu <strong>19L</strong>{' '}
          fassen, aber das bedeutet nicht, dass er auf einmal vollständig
          gefüllt werden kann.
          <br />
          <br />
          Es ist möglich, <strong>5kg Abfall auf einmal</strong> hinzuzufügen,
          was bei den Werksprüfungen getestet wurde, aber es wird{' '}
          <strong>nicht für den täglichen Gebrauch empfohlen</strong>.
          <iframe
            className="w-full aspect-[16/9] self-stretch md:min-h-[500px]"
            src="https://www.youtube.com/embed/JV0nZtaRaD0"
            frameBorder="0"
            title="GEME zersetzt Lebensmittelabfälle in 7 Stunden - ungeschnittenes Video"
            aria-hidden="true"
          />
        </>
      ),
    },

    {
      slug: 'what-kinds-of-food-waste-can-i-put',
      question: 'Welche Arten von Lebensmittelabfällen kann ich hineinlegen?',
      answer: (
        <>
          <div className="max-w-3xl mx-auto p-6">
            <p className="text-gray-700 text-lg leading-relaxed mb-6">
              Fast alle Lebensmittel, die Sie essen, können in den GEME
              Komposter gegeben werden.
            </p>
            <div className="flex flex-col md:flex-row items-start md:items-center mb-6">
              <picture>
                <img
                  src="https://www.geme.bio/help-center/assets/images/supported-foodwaste-guide-055cef03c7c375f24ce99e1625de5d6f.png"
                  alt="GEME Komposter unterstützte Lebensmittelabfälle"
                />
              </picture>
            </div>

            <p className="text-gray-700 text-lg leading-relaxed mb-6">
              Er unterstützt auch flüssige Abfälle, wie Suppe.
              <iframe
                className="w-full aspect-[16/9] self-stretch md:min-h-[500px]"
                src="https://www.youtube.com/embed/yGkcEaeXlQQ"
                frameBorder="0"
                title="Produktübersicht Video"
                aria-hidden="true"
              />
            </p>

            <p className="text-gray-700 text-lg leading-relaxed">
              Er kann auch Haustierabfälle wie Hundekot und Katzenstreu abbauen.
            </p>
            <picture>
              <img
                src="/assets/images/geme-terra-2/cat-litter.png"
                alt="GEME Komposter unterstützte Haustierabfälle"
              />
            </picture>
          </div>
        </>
      ),
    },
    {
      slug: 'how-long-will-it-take-for-geme-to-turn-my-food-waste-into-compost',
      question:
        'Wie lange dauert es, bis meine Lebensmittelabfälle zu Kompost werden?',
      answer: (
        <>
          Für die meisten täglichen Speisereste dauert es etwa 6 bis 8 Stunden,
          um den Abfall zu zersetzen.
          <br />
          Sehen Sie sich dieses ungeschnittene 7-Stunden-Video an. (
          <b className="text-gray-500">
            Keiner unserer Wettbewerber wagt es, solche Live-Videos der
            Öffentlichkeit zu zeigen
          </b>
          )
          <iframe
            className="w-full aspect-[16/9] self-stretch md:min-h-[500px]"
            src="https://www.youtube.com/embed/asNRoqkC_BA"
            frameBorder="0"
            title="GEME zersetzt Lebensmittelabfälle in 7 Stunden - ungeschnittenes Video"
            aria-hidden="true"
          />
          Für bestimmte Lebensmittelabfälle, wie Orangenschalen, dauert es
          jedoch etwas länger, da sie zähe Fasern haben. Kleine Knochen brauchen
          noch mehr Zeit.
          <picture>
            <img
              src="https://www.geme.bio/help-center/assets/images/supported-foodwaste-guide-055cef03c7c375f24ce99e1625de5d6f.png"
              alt="GEME Komposter unterstützte Lebensmittelabfälle"
            />
          </picture>
          <strong>Hinweis:</strong> Obwohl es nur wenige Stunden oder Tage
          dauert, bis es zu Kompost wird, ist dies noch kein fertiger Kompost.
          Wir empfehlen, mindestens 45 Tage zu warten, bevor Sie ihn verwenden.
          Alternativ können Sie den unfertigen Kompost mit Erde im Verhältnis
          1:8 mischen, um Ihre Pflanzen zu düngen.
        </>
      ),
    },

    {
      slug: 'is-it-smell-how-often-should-i-replace-the-carbon-filter',
      question: 'Riecht es? Wie oft sollte ich den Kohlefilter austauschen?',
      answer: (
        <>
          <div>
            {`Es riecht nicht`} da es die{' '}
            <strong className="text-v2311-primary">
              Metallionen-Katalyse-Oxidation
            </strong>{' '}
            Technologie verwendet, um Gerüche zu neutralisieren. Anders als bei
            herkömmlichen Kompostern {`wird kein Kohlefilter verwendet, daher `}
            <strong className="text-v2311-primary">
              muss dieser nicht ersetzt werden
            </strong>
            . Der Filter ist so konzipiert, dass er ein Leben lang hält.
          </div>
          <div className="container mx-auto p-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white rounded-lg shadow-md">
                <picture>
                  <img
                    src="/assets/images/geme-terra-2/odor/1.jpg"
                    alt="Photokatalysator UV-Schicht"
                    className="w-full h-auto rounded-t-lg"
                  />
                </picture>
                <div className="p-4">
                  <h2 className="text-xl font-semibold mb-2">Schicht 1</h2>
                  <p className="text-gray-700">
                    Photokatalysator und UV-Licht zur Beseitigung schädlicher
                    Bakterien.
                  </p>
                </div>
              </div>

              <div className="bg-white rounded-lg shadow-md">
                <picture>
                  <img
                    src="/assets/images/geme-terra-2/odor/2.jpg"
                    alt="Metallionen-Oxidationsschicht"
                    className="w-full h-auto rounded-t-lg"
                  />
                </picture>
                <div className="p-4">
                  <h2 className="text-xl font-semibold mb-2">Schicht 2</h2>
                  <p className="text-gray-700">
                    Metallionen-Katalyse-Oxidationsprozess.
                  </p>
                </div>
              </div>

              <div className="bg-white rounded-lg shadow-md">
                <picture>
                  <img
                    src="/assets/images/geme-terra-2/odor/3.jpg"
                    alt="Aerobe Luftaustauschschicht"
                    className="w-full h-auto rounded-t-lg"
                  />
                </picture>
                <div className="p-4">
                  <h2 className="text-xl font-semibold mb-2">Schicht 3</h2>
                  <p className="text-gray-700">
                    Ein leistungsstarkes aerober Luftaustauschsystem zur
                    Geruchskontrolle.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </>
      ),
    },
    {
      slug: 'how-often-should-i-clean-the-bin',
      question: 'Wie oft sollte ich den Behälter reinigen?',
      answer: (
        <>
          Technisch gesehen muss der Behälter nicht gereinigt werden. Es sieht
          vielleicht nicht gut aus und es könnte ein leichter Geruch auftreten,
          wenn Sie den Deckel öffnen, aber sobald der Deckel geschlossen ist,
          bleibt er sauber und geruchlos. <br />
          Die eigentliche Frage, die Sie sich stellen könnten, lautet:{' '}
          <strong>Wie oft sollte ich den Kompost ernten?</strong>
          <div className="container mx-auto p-4">
            <h5 className="text-xl font-semibold text-gray-800 mb-4">
              {`1. Überschreiten Sie nicht die maximale Fülllinie`}
            </h5>
            <p className="text-gray-700 mb-6">
              Dies ist eine feste Grenze. Wenn der Behälter voll ist, entfernen
              Sie den Kompost so schnell wie möglich.
            </p>

            <h5 className="text-xl font-semibold text-gray-800 mb-4">
              2. Leeren Sie nicht den gesamten Kompost
            </h5>
            <p className="text-gray-700 mb-6">
              Jedes Mal, wenn Sie Kompost entfernen, lassen Sie etwas am Boden,
              damit sich die Bakterien im GEME Kobold vermehren und weiterhin
              neue Lebensmittelabfälle verarbeiten können.
              <strong className="text-v2311-primary">
                Halten Sie das Kompostniveau in Übereinstimmung mit der
                Mischwelle.
              </strong>
            </p>

            <h5 className="text-xl font-semibold text-gray-800 mb-4">
              3. Empfehlung: Entfernen Sie den Kompost, wenn das Rührwerk
              vollständig bedeckt ist
            </h5>
            <p className="text-gray-700 mb-6">
              Achten Sie auf die gelbe Linie im Bild unten. Dies ist eine
              bewährte Methode, um Kompost effizienter zu sammeln und
              gleichzeitig die Arbeitsbelastung der Maschine zu reduzieren, was
              ihre Lebensdauer verlängert.
            </p>
          </div>
          <picture>
            <img
              src="/assets/images/geme-terra-2/harvest-compost/best-practice-removal.png"
              alt="Beste Vorgehensweise zur Entnahme von GEME Kompost"
            />
          </picture>
        </>
      ),
    },

    {
      slug: 'can-i-feed-the-output-compost-to-my-worm-bin',
      question:
        'Kann ich den Ausgangskompost von GEME meinem Wurmbehälter zur Wurmkompostierung hinzufügen?',
      answer: (
        <>
          Ja, das können Sie! Die Mikroben von{' '}
          <a href="/geme-kobold">GEME Kobold</a> werden aus der Natur gewonnen
          und extrahiert. Sie sind für Tiere nicht schädlich und gut für den
          Boden. Sie funktionieren perfekt mit Würmern im Wurmbehälter. Das
          nicht vollständig zersetzte organische Material ist das beste Futter
          für die Würmer, während das zersetzte Material weiterhin
          nährstoffreich bleibt.
        </>
      ),
    },
    {
      slug: 'what-is-the-maintenance-cost-for-keep-the-unit',
      question: 'Was kostet der Stromverbrauch zur Erhaltung des Geräts?',
      answer: (
        <>
          <div className="max-w-4xl mx-auto p-6 bg-white shadow-md rounded-lg">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              Jährliche Kosten des GEME Komposters: Eine detaillierte Begründung
            </h2>

            <div className="mb-4">
              <h3 className="text-xl font-semibold text-gray-700 mb-2">
                1. Täglicher Energieverbrauch
              </h3>
              <p className="text-gray-700">
                Der GEME Komposter verbraucht ungefähr{' '}
                <strong>1,44 kWh pro Tag</strong>. Dies ist vergleichbar mit dem
                täglichen Energieverbrauch eines Standard-Laptops im
                Dauerbetrieb.
              </p>
            </div>

            <div className="mb-4">
              <h3 className="text-xl font-semibold text-gray-700 mb-2">
                2. Jährlicher Energieverbrauch
              </h3>
              <p className="text-gray-700">
                Da das Gerät 24 Stunden am Tag arbeitet, kann der gesamte
                Energieverbrauch pro Jahr wie folgt berechnet werden:
              </p>
              <p className="text-gray-700 font-mono bg-gray-100 p-2 rounded-lg">
                1,44 kWh/Tag × 365 Tage/Jahr = 525,6 kWh/Jahr
              </p>
              <p className="text-gray-700">
                Das bedeutet, dass der GEME Komposter über das Jahr hinweg
                insgesamt <strong>525,6 kWh</strong> verbraucht.
              </p>
            </div>

            <div className="mb-4">
              <h3 className="text-xl font-semibold text-gray-700 mb-2">
                3. Stromkosten
              </h3>
              <p className="text-gray-700">
                Der durchschnittliche Strompreis in den Vereinigten Staaten
                liegt bei etwa <strong>$0,13 pro kWh</strong>. Daher lassen sich
                die jährlichen Betriebskosten des GEME Komposters wie folgt
                berechnen:
              </p>
              <p className="text-gray-700 font-mono bg-gray-100 p-2 rounded-lg">
                525,6 kWh/Jahr × $0,13/kWh = $68,33/Jahr
              </p>
              <p className="text-gray-700">
                Diese Berechnung zeigt, dass die Stromkosten des GEME Komposters
                bei etwa <strong>$68,33 pro Jahr</strong> liegen.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-gray-700 mb-2">
                4. Fazit
              </h3>
              <p className="text-gray-700">
                Die jährlichen Betriebskosten des GEME Komposters, wenn man nur
                den Stromverbrauch berücksichtigt, sind mit{' '}
                <strong>$68,33</strong> relativ niedrig. Dies macht ihn zu einer
                wirtschaftlichen Wahl für diejenigen, die Lebensmittelabfälle
                reduzieren und Kompost produzieren möchten, und gleichzeitig
                niedrige Betriebskosten beibehalten.
              </p>
            </div>

            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              Vergleich der jährlichen Stromkosten
            </h2>
            <div className="overflow-x-auto">
              <table className="min-w-full bg-white border border-gray-300">
                <thead>
                  <tr>
                    <th className="py-2 px-4 border-b border-gray-300 text-left text-sm font-semibold text-gray-700">
                      Gerät
                    </th>
                    <th className="py-2 px-4 border-b border-gray-300 text-left text-sm font-semibold text-gray-700">
                      Täglicher Energieverbrauch (kWh)
                    </th>
                    <th className="py-2 px-4 border-b border-gray-300 text-left text-sm font-semibold text-gray-700">
                      Jährlicher Energieverbrauch (kWh)
                    </th>
                    <th className="py-2 px-4 border-b border-gray-300 text-left text-sm font-semibold text-gray-700">
                      Durchschnittliche Stromkosten ($/kWh)
                    </th>
                    <th className="py-2 px-4 border-b border-gray-300 text-left text-sm font-semibold text-gray-700">
                      Jährliche Stromkosten ($)
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="bg-gray-50">
                    <td className="py-3 px-4 border-b border-gray-300 text-sm text-gray-700">
                      GEME Komposter
                    </td>
                    <td className="py-3 px-4 border-b border-gray-300 text-sm text-gray-700">
                      1,44
                    </td>
                    <td className="py-3 px-4 border-b border-gray-300 text-sm text-gray-700">
                      525,6
                    </td>
                    <td className="py-3 px-4 border-b border-gray-300 text-sm text-gray-700">
                      $0,13
                    </td>
                    <td className="py-3 px-4 border-b border-gray-300 text-sm text-gray-700">
                      $68,33
                    </td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 border-b border-gray-300 text-sm text-gray-700">
                      Kühlschrank
                    </td>
                    <td className="py-3 px-4 border-b border-gray-300 text-sm text-gray-700">
                      1,5
                    </td>
                    <td className="py-3 px-4 border-b border-gray-300 text-sm text-gray-700">
                      547,5
                    </td>
                    <td className="py-3 px-4 border-b border-gray-300 text-sm text-gray-700">
                      $0,13
                    </td>
                    <td className="py-3 px-4 border-b border-gray-300 text-sm text-gray-700">
                      $71,18
                    </td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="py-3 px-4 border-b border-gray-300 text-sm text-gray-700">
                      Klimaanlage
                    </td>
                    <td className="py-3 px-4 border-b border-gray-300 text-sm text-gray-700">
                      5,0 (im Sommer)
                    </td>
                    <td className="py-3 px-4 border-b border-gray-300 text-sm text-gray-700">
                      600
                    </td>
                    <td className="py-3 px-4 border-b border-gray-300 text-sm text-gray-700">
                      $0,13
                    </td>
                    <td className="py-3 px-4 border-b border-gray-300 text-sm text-gray-700">
                      $78,00
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </>
      ),
    },
  ],
}

export const koboldFaqPropsFr: IFaqProps = {
  title: 'Frequently Asked Questions',
  description: '',
  faqs: [
    {
      slug: 'how-it-works',
      question: 'Comment ça marche ?',
      answer: (
        <>
          <h4>
            ✅ <strong>Simule un tas de compost dans une boîte</strong>, ❌
            <del>pas seulement de la déshydratation et de la chaleur</del>
          </h4>
          Les composteurs GEME sont des appareils ménagers qui créent et
          maintiennent un <strong>environnement idéal</strong> pour les microbes
          spéciaux de {`GEME`} (GEME Kobold) pour décomposer les déchets
          organiques. Terra 2 fonctionne sur le même principe.
          <br />
          <ul>
            <li>
              <strong>La machine</strong>: Elle simule un tas de compost dans un
              environnement fermé, garantissant qu'il n'y a pas de mauvaises
              odeurs.
              <br />
              <picture>
                <img
                  alt="Comment fonctionne le composteur électrique"
                  src="/assets/images/how-it-works/how-geme-composter-works.jpg"
                />
              </picture>
            </li>
            <li>
              <strong>Le Kobold</strong>: Les microbes font la plupart du
              travail. Ils se reproduisent rapidement et absorbent l'énergie des
              déchets alimentaires. Tout comme les vers consomment de la
              nourriture, les microbes décomposent les déchets et produisent du
              compost.
              <picture>
                <img
                  alt="Comment les microbes se développent"
                  src="/assets/images/geme-terra-2/microbes-grow.png"
                />
              </picture>
              Dans des conditions idéales, certaines espèces bactériennes
              peuvent se diviser toutes les 10 à 15 minutes, doublant ainsi leur
              population à ces intervalles.
            </li>
          </ul>
        </>
      ),
    },
    {
      slug: 'what-is-the-difference-between-other-electric-composters-like-lomi',
      question:
        'Quelle est la différence avec d’autres composteurs électriques comme Lomi ?',
      answer: (
        <>
          <div className="overflow-x-auto">
            <table className="min-w-full bg-white border border-gray-300">
              <thead>
                <tr>
                  <th className="py-2 px-4 border-b border-gray-300 text-left text-sm font-semibold text-gray-700">
                    Caractéristiques
                  </th>
                  <th className="py-2 px-4 border-b border-gray-300 text-left text-sm font-semibold text-gray-700">
                    GEME Terra 2
                  </th>
                  <th className="py-2 px-4 border-b border-gray-300 text-left text-sm font-semibold text-gray-700">
                    Déshydrateurs de type Lomi
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="bg-gray-50">
                  <td className="py-3 px-4 border-b border-gray-300 text-sm text-gray-700">
                    Prix
                  </td>
                  <td className="py-3 px-4 border-b border-gray-300 text-sm text-gray-700">{`< 600 €`}</td>
                  <td className="py-3 px-4 border-b border-gray-300 text-sm text-gray-700">{`150 € < x < 500 €`}</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 border-b border-gray-300 text-sm text-gray-700">
                    Taille
                  </td>
                  <td className="py-3 px-4 border-b border-gray-300 text-sm text-gray-700">
                    14L
                  </td>
                  <td className="py-3 px-4 border-b border-gray-300 text-sm text-gray-700">
                    3L - 4L
                  </td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="py-3 px-4 border-b border-gray-300 text-sm text-gray-700">
                    Mode de fonctionnement
                  </td>
                  <td className="py-3 px-4 border-b border-gray-300 text-sm text-gray-700">
                    Compostage continu
                  </td>
                  <td className="py-3 px-4 border-b border-gray-300 text-sm text-gray-700">
                    Broyage et déshydratation périodiques
                  </td>
                </tr>
                <tr>
                  <td className="py-3 px-4 border-b border-gray-300 text-sm text-gray-700">
                    Résultat final
                  </td>
                  <td className="py-3 px-4 border-b border-gray-300 text-sm text-gray-700">
                    Véritable compost
                  </td>
                  <td className="py-3 px-4 border-b border-gray-300 text-sm text-gray-700">
                    Déchets séchés et cuits
                  </td>
                </tr>
                {/* Additional rows omitted for brevity */}
              </tbody>
            </table>
          </div>
          <iframe
            className="w-full aspect-[16/9] self-stretch md:min-h-[500px]"
            src="https://www.youtube.com/embed/-qkjLB3GcKo"
            frameBorder="0"
            title="Vidéo de présentation du produit"
            aria-hidden="true"
          />
        </>
      ),
    },

    {
      slug: 'can-I-add-food-waste-when-it-is-running',
      question:
        'Puis-je ajouter des déchets alimentaires lorsqu’il est en marche?',
      answer: `Oui`,
    },
    {
      slug: 'how-much-food-waste-can-i-add-at-once',
      question:
        'Quelle quantité de déchets alimentaires puis-je ajouter à la fois?',
      answer: (
        <>
          Vous pouvez ajouter <strong>jusqu'à 2kg</strong> à la fois. Il est
          possible d'ajouter des déchets alimentaires plusieurs fois dans la
          même journée, mais <strong>ne dépassez pas 5kg</strong> en une seule
          journée.
          <br />
          <br />
          <em>Remarque :</em> Le récipient peut contenir jusqu'à{' '}
          <strong>19L</strong>, mais cela ne signifie pas que vous pouvez le
          remplir complètement d’un coup.
          <br />
          <br />
          Ajouter <strong>5kg de déchets à la fois</strong> est possible et a
          été testé selon les critères de référence de l'usine, mais cela{' '}
          <strong>n'est pas recommandé pour une utilisation quotidienne</strong>
          .
          <iframe
            className="w-full aspect-[16/9] self-stretch md:min-h-[500px]"
            src="https://www.youtube.com/embed/JV0nZtaRaD0"
            frameBorder="0"
            title="GEME décompose les déchets alimentaires en 7 heures - vidéo non coupée"
            aria-hidden="true"
          />
        </>
      ),
    },

    {
      slug: 'what-kinds-of-food-waste-can-i-put',
      question: 'Quels types de déchets alimentaires puis-je mettre?',
      answer: (
        <>
          <div className="max-w-3xl mx-auto p-6">
            <p className="text-gray-700 text-lg leading-relaxed mb-6">
              Presque tous les aliments que vous mangez peuvent être mis dans le
              composteur GEME.
            </p>
            <div className="flex flex-col md:flex-row items-start md:items-center mb-6">
              <picture>
                <img
                  src="https://www.geme.bio/help-center/assets/images/supported-foodwaste-guide-055cef03c7c375f24ce99e1625de5d6f.png"
                  alt="Déchets alimentaires pris en charge par le composteur GEME"
                />
              </picture>
            </div>

            <p className="text-gray-700 text-lg leading-relaxed mb-6">
              Il prend également en charge les déchets liquides, comme la soupe.
              <iframe
                className="w-full aspect-[16/9] self-stretch md:min-h-[500px]"
                src="https://www.youtube.com/embed/yGkcEaeXlQQ"
                frameBorder="0"
                title="Vidéo de présentation du produit"
                aria-hidden="true"
              />
            </p>

            <p className="text-gray-700 text-lg leading-relaxed">
              Il peut également décomposer les déchets d'animaux, comme les
              excréments de chien et la litière pour chats.
            </p>
            <picture>
              <img
                src="/assets/images/geme-terra-2/cat-litter.png"
                alt="Déchets d'animaux pris en charge par le composteur GEME"
              />
            </picture>
          </div>
        </>
      ),
    },
    {
      slug: 'how-long-will-it-take-for-geme-to-turn-my-food-waste-into-compost',
      question:
        'Combien de temps faut-il pour que mes déchets alimentaires se transforment en compost?',
      answer: (
        <>
          Pour la plupart des restes quotidiens, cela prend environ 6 à 8 heures
          pour décomposer les déchets.
          <br />
          Regardez cette vidéo non coupée de 7 heures. (
          <b className="text-gray-500">
            aucun de nos concurrents n'ose partager de telles vidéos en direct
            avec le public
          </b>
          )
          <iframe
            className="w-full aspect-[16/9] self-stretch md:min-h-[500px]"
            src="https://www.youtube.com/embed/asNRoqkC_BA"
            frameBorder="0"
            title="GEME décompose les déchets alimentaires en 7 heures - vidéo non coupée"
            aria-hidden="true"
          />
          Cependant, pour certains déchets alimentaires, comme les épluchures
          d'orange, cela prendra un peu plus de temps en raison de leurs fibres
          résistantes. Les petits os prennent encore plus de temps.
          <picture>
            <img
              src="https://www.geme.bio/help-center/assets/images/supported-foodwaste-guide-055cef03c7c375f24ce99e1625de5d6f.png"
              alt="Déchets alimentaires pris en charge par le composteur GEME"
            />
          </picture>
          <strong>Remarque:</strong> Bien qu'il ne faille que quelques heures ou
          jours pour se transformer en compost, il ne s'agit pas encore de
          compost fini. Nous recommandons d'attendre au moins 45 jours avant de
          l'utiliser. Alternativement, vous pouvez mélanger le compost non fini
          avec du sol dans un rapport de 1:8 pour faire pousser vos plantes.
        </>
      ),
    },

    {
      slug: 'is-it-smell-how-often-should-i-replace-the-carbon-filter',
      question:
        'Est-ce que ça sent ? À quelle fréquence dois-je remplacer le filtre à charbon ?',
      answer: (
        <>
          <div>
            {`Ça ne sent pas`} car il utilise la{' '}
            <strong className="text-v2311-primary">
              technologie d'oxydation catalytique des ions métalliques
            </strong>{' '}
            pour neutraliser les odeurs. Contrairement aux composteurs
            traditionnels, {`il n'utilise pas de filtres à charbon, donc `}
            <strong className="text-v2311-primary">
              il n'y a pas besoin de les remplacer
            </strong>
            . Le filtre est conçu pour durer toute une vie.
          </div>
          <div className="container mx-auto p-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white rounded-lg shadow-md">
                <picture>
                  <img
                    src="/assets/images/geme-terra-2/odor/1.jpg"
                    alt="Couche UV photocalytique"
                    className="w-full h-auto rounded-t-lg"
                  />
                </picture>
                <div className="p-4">
                  <h2 className="text-xl font-semibold mb-2">Couche 1</h2>
                  <p className="text-gray-700">
                    Photocatalyseur et lumière UV pour éliminer les bactéries
                    nocives.
                  </p>
                </div>
              </div>

              <div className="bg-white rounded-lg shadow-md">
                <picture>
                  <img
                    src="/assets/images/geme-terra-2/odor/2.jpg"
                    alt="Couche d'oxydation ionique métallique"
                    className="w-full h-auto rounded-t-lg"
                  />
                </picture>
                <div className="p-4">
                  <h2 className="text-xl font-semibold mb-2">Couche 2</h2>
                  <p className="text-gray-700">
                    Processus d'oxydation catalytique des ions métalliques.
                  </p>
                </div>
              </div>

              <div className="bg-white rounded-lg shadow-md">
                <picture>
                  <img
                    src="/assets/images/geme-terra-2/odor/3.jpg"
                    alt="Couche d'échange d'air aérobie"
                    className="w-full h-auto rounded-t-lg"
                  />
                </picture>
                <div className="p-4">
                  <h2 className="text-xl font-semibold mb-2">Couche 3</h2>
                  <p className="text-gray-700">
                    Un puissant système d'échange d'air aérobie pour le contrôle
                    des odeurs.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </>
      ),
    },
    {
      slug: 'how-often-should-i-clean-the-bin',
      question: 'À quelle fréquence dois-je nettoyer le bac?',
      answer: (
        <>
          Techniquement, il n'est pas nécessaire de nettoyer le bac. Cela ne
          sera peut-être pas esthétique et il pourrait y avoir une légère odeur
          lorsque vous ouvrez le couvercle, mais une fois fermé, il reste propre
          et sans odeur. <br />
          La véritable question que vous pourriez poser est:{' '}
          <strong>À quelle fréquence dois-je récolter le compost?</strong>
          <div className="container mx-auto p-4">
            <h5 className="text-xl font-semibold text-gray-800 mb-4">
              {`1. Ne dépassez pas la ligne de limite maximale`}
            </h5>
            <p className="text-gray-700 mb-6">
              Il s'agit d'une limite stricte. Si le bac est plein, retirez le
              compost dès que possible.
            </p>

            <h5 className="text-xl font-semibold text-gray-800 mb-4">
              2. Ne videz pas tout le compost
            </h5>
            <p className="text-gray-700 mb-6">
              Chaque fois que vous retirez du compost, laissez-en un peu à la
              base pour que les bactéries dans le GEME Kobold puissent se
              reproduire et continuer à traiter les nouveaux déchets
              alimentaires.
              <strong className="text-v2311-primary">
                Gardez le niveau du compost aligné avec l'arbre de l'agitateur.
              </strong>
            </p>

            <h5 className="text-xl font-semibold text-gray-800 mb-4">
              3. Recommandation: Retirez le compost lorsque la pelle est
              complètement enterrée
            </h5>
            <p className="text-gray-700 mb-6">
              Recherchez la ligne jaune dans l'image ci-dessous. Il s'agit d'une
              bonne pratique qui vous permet de collecter le compost plus
              efficacement tout en réduisant la charge de travail de la machine,
              ce qui contribue à prolonger sa durée de vie.
            </p>
          </div>
          <picture>
            <img
              src="/assets/images/geme-terra-2/harvest-compost/best-practice-removal.png"
              alt="Meilleure méthode pour retirer le compost GEME"
            />
          </picture>
        </>
      ),
    },

    {
      slug: 'can-i-feed-the-output-compost-to-my-worm-bin',
      question:
        'Puis-je nourrir mon bac à vers avec le compost produit par GEME pour le vermicompostage?',
      answer: (
        <>
          Oui, vous le pouvez ! Les microbes du{' '}
          <a href="/geme-kobold">GEME Kobold</a> sont collectés et extraits de
          la nature. Ils ne sont pas nocifs pour les animaux et sont bons pour
          le sol. Ils fonctionnent parfaitement avec les vers dans le bac à
          vers. Le matériau organique non décomposé sera la meilleure nourriture
          pour les vers, tandis que le matériau décomposé restera riche en
          nutriments.
        </>
      ),
    },
    {
      slug: 'what-is-the-maintenance-cost-for-keep-the-unit',
      question:
        'Quel est le coût de l’électricité pour faire fonctionner l’appareil?',
      answer: (
        <>
          <div className="max-w-4xl mx-auto p-6 bg-white shadow-md rounded-lg">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              Coûts annuels du composteur GEME : Une analyse détaillée
            </h2>

            <div className="mb-4">
              <h3 className="text-xl font-semibold text-gray-700 mb-2">
                1. Consommation d'énergie quotidienne
              </h3>
              <p className="text-gray-700">
                Le composteur GEME consomme environ{' '}
                <strong>1,44 kWh par jour</strong>. Cela équivaut à la
                consommation énergétique quotidienne d'un ordinateur portable
                fonctionnant en continu.
              </p>
            </div>

            <div className="mb-4">
              <h3 className="text-xl font-semibold text-gray-700 mb-2">
                2. Consommation d'énergie annuelle
              </h3>
              <p className="text-gray-700">
                Étant donné que l'appareil fonctionne 24 heures par jour, la
                consommation totale d'énergie sur une année peut être calculée
                comme suit :
              </p>
              <p className="text-gray-700 font-mono bg-gray-100 p-2 rounded-lg">
                1,44 kWh/jour × 365 jours/an = 525,6 kWh/an
              </p>
              <p className="text-gray-700">
                Cela signifie qu'au cours d'une année, le composteur GEME
                utilise un total de <strong>525,6 kWh</strong>.
              </p>
            </div>

            <div className="mb-4">
              <h3 className="text-xl font-semibold text-gray-700 mb-2">
                3. Coût de l'électricité
              </h3>
              <p className="text-gray-700">
                Le coût moyen de l'électricité aux États-Unis est d'environ{' '}
                <strong>$0,13 par kWh</strong>. Par conséquent, le coût annuel
                de fonctionnement du composteur GEME peut être calculé comme
                suit :
              </p>
              <p className="text-gray-700 font-mono bg-gray-100 p-2 rounded-lg">
                525,6 kWh/an × $0,13/kWh = $68,33/an
              </p>
              <p className="text-gray-700">
                Cette calcul montre que le coût de l’électricité pour le
                composteur GEME s'élève à environ <strong>$68,33 par an</strong>
                .
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-gray-700 mb-2">
                4. Conclusion
              </h3>
              <p className="text-gray-700">
                Le coût annuel de fonctionnement du composteur GEME, en tenant
                compte uniquement de l'électricité, est relativement faible, à{' '}
                <strong>$68,33</strong>. Cela en fait un choix économique pour
                ceux qui souhaitent réduire les déchets alimentaires et produire
                du compost tout en maintenant de faibles frais de
                fonctionnement.
              </p>
            </div>

            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              Comparaison des coûts annuels d'électricité
            </h2>
            <div className="overflow-x-auto">
              <table className="min-w-full bg-white border border-gray-300">
                <thead>
                  <tr>
                    <th className="py-2 px-4 border-b border-gray-300 text-left text-sm font-semibold text-gray-700">
                      Appareil
                    </th>
                    <th className="py-2 px-4 border-b border-gray-300 text-left text-sm font-semibold text-gray-700">
                      Consommation d'énergie quotidienne (kWh)
                    </th>
                    <th className="py-2 px-4 border-b border-gray-300 text-left text-sm font-semibold text-gray-700">
                      Consommation d'énergie annuelle (kWh)
                    </th>
                    <th className="py-2 px-4 border-b border-gray-300 text-left text-sm font-semibold text-gray-700">
                      Coût moyen de l'électricité ($/kWh)
                    </th>
                    <th className="py-2 px-4 border-b border-gray-300 text-left text-sm font-semibold text-gray-700">
                      Coût annuel de l'électricité ($)
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="bg-gray-50">
                    <td className="py-3 px-4 border-b border-gray-300 text-sm text-gray-700">
                      Composteur GEME
                    </td>
                    <td className="py-3 px-4 border-b border-gray-300 text-sm text-gray-700">
                      1,44
                    </td>
                    <td className="py-3 px-4 border-b border-gray-300 text-sm text-gray-700">
                      525,6
                    </td>
                    <td className="py-3 px-4 border-b border-gray-300 text-sm text-gray-700">
                      $0,13
                    </td>
                    <td className="py-3 px-4 border-b border-gray-300 text-sm text-gray-700">
                      $68,33
                    </td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 border-b border-gray-300 text-sm text-gray-700">
                      Réfrigérateur
                    </td>
                    <td className="py-3 px-4 border-b border-gray-300 text-sm text-gray-700">
                      1,5
                    </td>
                    <td className="py-3 px-4 border-b border-gray-300 text-sm text-gray-700">
                      547,5
                    </td>
                    <td className="py-3 px-4 border-b border-gray-300 text-sm text-gray-700">
                      $0,13
                    </td>
                    <td className="py-3 px-4 border-b border-gray-300 text-sm text-gray-700">
                      $71,18
                    </td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="py-3 px-4 border-b border-gray-300 text-sm text-gray-700">
                      Climatisation
                    </td>
                    <td className="py-3 px-4 border-b border-gray-300 text-sm text-gray-700">
                      5,0 (en été)
                    </td>
                    <td className="py-3 px-4 border-b border-gray-300 text-sm text-gray-700">
                      600
                    </td>
                    <td className="py-3 px-4 border-b border-gray-300 text-sm text-gray-700">
                      $0,13
                    </td>
                    <td className="py-3 px-4 border-b border-gray-300 text-sm text-gray-700">
                      $78,00
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </>
      ),
    },
  ],
}
