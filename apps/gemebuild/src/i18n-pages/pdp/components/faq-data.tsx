import { IFaqProps } from 'ui'

// Faqs
export const pdpFaqProps: IFaqProps = {
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
    // {
    //   slug: 'can-I-add-food-waste-when-it-is-running',
    //   question: 'Can I add food waste when it is running?',
    //   answer: ``,
    // },
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
