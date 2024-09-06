/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-img-element */

import { IFaqProps } from 'ui'

// Faqs
export const koboldFaqPropsEn: IFaqProps = {
  title: 'Frequently Asked Questions',
  description: '',
  faqs: [
    {
      slug: 'what-is-geme-kobold',
      question: 'What is GEME Kobold?',
      answer: (
        <>
          <p>
            GEME Kobold is a product that contains a set of microbes. These
            microbes are the key factor in breaking down food scraps and
            bio-waste. When applied to organic waste, the rapid composting
            process begins. The microbes form a microbiota and regenerate
            quickly. Food waste serves as the perfect feed for these microbes,
            allowing them to consume and replicate. These microbes are carefully
            selected from complex natural sources and are finely tuned through a
            series of microorganism engineering processes.
          </p>

          <p className="mt-4">
            To better understand the role of GEME Kobold, consider these
            examples: just like chickens in a farm consume kitchen scraps, and
            worms in a worm bin break down food waste, GEME Kobold microbes
            break down food waste in the GEME Composter. Each plays a unique
            role in waste reduction, using natural processes to recycle organic
            materials.
          </p>

          <div
            style={{
              display: 'flex',
              justifyContent: 'flex-start',
              alignItems: 'flex-start',
              marginTop: '20px',
            }}
          >
            <div style={{ flex: '1', textAlign: 'left', padding: '10px' }}>
              <h3>Chickens</h3>
              <img
                src="/assets/images/geme-kobold/faq/chicken-farm.png"
                alt="Chickens eating scraps"
              />
              <p>Scraps in chicken farm</p>
            </div>
            <div style={{ flex: '1', textAlign: 'left', padding: '10px' }}>
              <h3>Worms</h3>
              <img
                src="/assets/images/geme-kobold/faq/worm-bin.png"
                alt="Worms in worm bin"
              />

              <p>Food in worm bins</p>
            </div>
            <div style={{ flex: '1', textAlign: 'left', padding: '10px' }}>
              <h3>Kobold Microbes</h3>
              <img
                src="/assets/images/geme-kobold/faq/geme-composter.jpg"
                alt="Kobold microbes in composter"
              />
              <p>Waste in GEME Composter</p>
            </div>
          </div>
        </>
      ),
    },
    {
      slug: 'how-it-works',
      question: 'How does it work?',
      answer: (
        <>
          <div className="mb-8">
            <h2
              style={{
                fontWeight: 'bold',
              }}
            >
              How Does the GEME Composter Work?
            </h2>

            <h3
              style={{
                fontWeight: '600',
              }}
            >
              1. Simulating a Compost Pile in a Controlled Environment
            </h3>
            <p>
              GEME Composters create the perfect environment for composting, not
              just relying on dehydration and heat . They replicate the
              conditions of a compost pile while keeping everything contained
              and odor-free.
            </p>

            <iframe
              className="w-full aspect-[16/9] self-stretch md:min-h-[500px]"
              src="https://www.youtube.com/embed/asNRoqkC_BA"
              frameBorder="0"
              title="GEME zersetzt Lebensmittelabfälle in 7 Stunden - ungeschnittenes Video"
              aria-hidden="true"
            />

            <h4
              style={{
                fontWeight: '500',
              }}
            >
              The Technology Behind GEME Composters
            </h4>
            <p>
              GEME Composters are designed to maintain an{' '}
              <strong>ideal environment</strong> for the special microbes (GEME
              Kobold) to break down bio-waste. This environment mimics the
              natural composting process but speeds it up and keeps it
              contained.
            </p>

            <div className="overflow-x-auto">
              <table className="min-w-full bg-white border border-gray-300">
                <thead>
                  <tr>
                    <th className="py-2 px-4 border-b border-gray-300 text-left text-sm font-semibold text-gray-700">
                      Features
                    </th>
                    <th className="py-2 px-4 border-b border-gray-300 text-left text-sm font-semibold text-gray-700">
                      GEME Composter
                    </th>
                    <th className="py-2 px-4 border-b border-gray-300 text-left text-sm font-semibold text-gray-700">
                      Other Lomi-like Dehydrators
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="bg-gray-50">
                    <td className="py-3 px-4 border-b border-gray-300 text-sm text-gray-700">
                      Hot Composting Temperature
                    </td>
                    <td className="py-3 px-4 border-b border-gray-300 text-sm text-gray-700">{`✅Yes(45°C < 85°C)}`}</td>
                    <td className="py-3 px-4 border-b border-gray-300 text-sm text-gray-700">{`❌No(120°C+, Good bacteria killed)`}</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 border-b border-gray-300 text-sm text-gray-700">
                      Moisture Control
                    </td>
                    <td className="py-3 px-4 border-b border-gray-300 text-sm text-gray-700">
                      ✅Yes
                    </td>
                    <td className="py-3 px-4 border-b border-gray-300 text-sm text-gray-700">
                      ❌No
                    </td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="py-3 px-4 border-b border-gray-300 text-sm text-gray-700">
                      Aerobic Exchange
                    </td>
                    <td className="py-3 px-4 border-b border-gray-300 text-sm text-gray-700">
                      ✅Yes
                    </td>
                    <td className="py-3 px-4 border-b border-gray-300 text-sm text-gray-700">
                      ❌No
                    </td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 border-b border-gray-300 text-sm text-gray-700">
                      Stirring
                    </td>
                    <td className="py-3 px-4 border-b border-gray-300 text-sm text-gray-700">
                      ✅Yes(Gently Turning)
                    </td>
                    <td className="py-3 px-4 border-b border-gray-300 text-sm text-gray-700">
                      ❌No(Blade Cutting and Grinding)
                    </td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 border-b border-gray-300 text-sm text-gray-700">
                      Filter System
                    </td>
                    <td className="py-3 px-4 border-b border-gray-300 text-sm text-gray-700">
                      Metal ion catalytic oxidation,
                      <br />
                      No need to replace
                    </td>
                    <td className="py-3 px-4 border-b border-gray-300 text-sm text-gray-700">
                      Carbon filter,
                      <br />
                      Replace every 3 months
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h3
              style={{
                fontWeight: '600',
              }}
            >
              2. The Machine: Containing the Composting Process
            </h3>
            <p>
              The machine acts like a compost pile inside a box. It ensures that
              the bio-waste breaks down efficiently without producing any odors.
              This is achieved through the control of moisture, temperature, and
              airflow, all optimized for microbial activity.
            </p>
            <picture>
              <img
                alt="How electric composter works"
                src="/assets/images/how-it-works/how-geme-composter-works.jpg"
                style={{ maxWidth: '100%', marginTop: '15px' }}
              />
            </picture>

            <h3
              style={{
                fontWeight: '600',
              }}
            >
              3. The Microbes: The Real Workhorses
            </h3>
            <p>
              The heart of the composting process lies with{' '}
              <strong>GEME Kobold</strong> – a carefully selected set of
              microbes. These microbes act like the “worms” of traditional
              composting, but they work faster and more efficiently. They
              reproduce rapidly, feeding on the food waste and turning it into
              nutrient-rich compost.
            </p>

            <h4
              style={{
                fontWeight: '500',
              }}
            >
              Microbial Growth and Activity
            </h4>
            <p>
              Under ideal conditions, certain bacterial species can divide every
              10-15 minutes, doubling their population in a very short period.
              This exponential growth is key to the efficiency of GEME
              Composters, as it accelerates the breakdown of organic material
              into compost.
            </p>
            <picture>
              <img
                alt="How microbes grow"
                src="/assets/images/geme-terra-2/microbes-grow.png"
                style={{ maxWidth: '100%', marginTop: '15px' }}
              />
            </picture>

            <h4
              style={{
                fontWeight: '500',
              }}
            >
              Conclusion
            </h4>
            <p>
              In summary, GEME Composters replicate the natural composting
              process in a closed, efficient, and odor-free environment. By
              leveraging advanced microbial technology, these devices provide a
              practical and environmentally friendly solution for managing
              household food waste.
            </p>
          </div>
        </>
      ),
    },

    {
      slug: 'what-is-the-difference-between-the-starter-kobold-and-the-refill-kobold',
      question:
        "What's the difference between the starter Kobold and the refill Kobold?",
      answer: (
        <>
          <h3
            style={{
              fontWeight: 'bold',
            }}
          >
            The Starter(Big Bag Kobold)
          </h3>
          <p>
            Big Bag Kobold, usually refer to the 2kg/1.5kg bag of GEME Kobold.
            Which is used to be the compost starter. It supposed to be used all
            at one time in the <strong>setup phase</strong>.
          </p>
          <div
            style={{
              display: 'flex',
              justifyContent: 'flex-start',
              alignItems: 'flex-start',
            }}
          >
            <div style={{ flex: '1', textAlign: 'left', padding: '10px' }}>
              <h3>Starter 2kg </h3>
              <img
                src="/assets/images/geme-kobold/faq/geme-kobold-old.png"
                alt="Chickens eating scraps"
              />
              <p>Classic Kobold (2022.01 ~ 2023.10)</p>
            </div>
            <div style={{ flex: '1', textAlign: 'left', padding: '10px' }}>
              <h3>Starter 1.5kg(latest)</h3>
              <img
                src="/assets/images/geme-kobold/product-image-max.jpg"
                alt="Worms in worm bin"
              />

              <p>Upgraded Kobold (2023.10 ~)</p>
            </div>
          </div>
          <h3
            style={{
              fontWeight: 'bold',
            }}
          >
            The Refill Packs(Small Bag Kobold)
          </h3>
          <p>
            Small bag of Kobold, also called refill pack. Is a small and purer
            version of GEME Kobold and it is not the starter, but the refill
            ones. It supposed to be supplied periodically(2 or 3 weeks) after
            the starter setup and use for a while. When the first batch removed,
            around 60 days later.
          </p>

          <div
            style={{
              display: 'flex',
              justifyContent: 'flex-start',
              alignItems: 'flex-start',
            }}
          >
            <div style={{ flex: '1', textAlign: 'left', padding: '10px' }}>
              <img
                src="/assets/images/geme-kobold/product-image-back-garden.jpg"
                alt="One Refill Pack of GEME Kobold"
              />
              <p>Refill Kobold(Single)</p>
            </div>

            <div style={{ flex: '1', textAlign: 'left', padding: '10px' }}>
              <img
                src="/assets/images/geme-kobold/product-image-6.jpg"
                alt="One Refill Pack of GEME Kobold"
              />
              <p>Refill Kobold(Quarterly)</p>
            </div>

            <div style={{ flex: '1', textAlign: 'left', padding: '10px' }}>
              <img
                src="/assets/images/geme-kobold/product-image-12.jpg"
                alt="12 Refill Packs of GEME Kobold"
              />

              <p>Refill Kobold(Half-Year)</p>
            </div>

            <div style={{ flex: '1', textAlign: 'left', padding: '10px' }}>
              <img
                src="/assets/images/geme-kobold/product-image-24.jpg"
                alt="24 Refill Packs of GEME Kobold"
              />
              <p>Refill Kobold(Full-Year)</p>
            </div>
          </div>

          <h3
            style={{
              fontWeight: 'bold',
            }}
          >
            Quick Spec Compare
          </h3>
          <div className="overflow-x-auto">
            <table className="min-w-full bg-white border border-gray-300">
              <thead>
                <tr>
                  <th className="py-2 px-4 border-b border-gray-300 text-left text-sm font-semibold text-gray-700">
                    Types
                  </th>
                  <th className="py-2 px-4 border-b border-gray-300 text-left text-sm font-semibold text-gray-700">
                    Name
                  </th>
                  <th className="py-2 px-4 border-b border-gray-300 text-left text-sm font-semibold text-gray-700">
                    Weight
                  </th>
                  <th className="py-2 px-4 border-b border-gray-300 text-left text-sm font-semibold text-gray-700">
                    Description
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="bg-gray-50">
                  <td className="py-3 px-4 border-b border-gray-300 text-sm text-gray-700">
                    Starter
                  </td>
                  <td className="py-3 px-4 border-b border-gray-300 text-sm text-gray-700">
                    Classic GEME Kobold Starter{' '}
                  </td>
                  <td className="py-3 px-4 border-b border-gray-300 text-sm text-gray-700">
                    2kg
                  </td>
                  <td className="py-3 px-4 border-b border-gray-300 text-sm text-gray-700">
                    Since 2022 to 2023-10
                  </td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="py-3 px-4 border-b border-gray-300 text-sm text-gray-700">
                    Starter
                  </td>
                  <td className="py-3 px-4 border-b border-gray-300 text-sm text-gray-700">
                    Upgrade GEME Kobold Starter{' '}
                  </td>
                  <td className="py-3 px-4 border-b border-gray-300 text-sm text-gray-700">
                    1.5kg
                  </td>
                  <td className="py-3 px-4 border-b border-gray-300 text-sm text-gray-700">
                    Since 2023-10
                  </td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="py-3 px-4 border-b border-gray-300 text-sm text-gray-700">
                    Refill
                  </td>
                  <td className="py-3 px-4 border-b border-gray-300 text-sm text-gray-700">
                    GEME Kobold Refill Pack
                  </td>
                  <td className="py-3 px-4 border-b border-gray-300 text-sm text-gray-700">
                    20g
                  </td>
                  <td className="py-3 px-4 border-b border-gray-300 text-sm text-gray-700">
                    Like a small coffee bag
                  </td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="py-3 px-4 border-b border-gray-300 text-sm text-gray-700">
                    Refill
                  </td>
                  <td className="py-3 px-4 border-b border-gray-300 text-sm text-gray-700">
                    GEME Kobold Refill Quarterly
                  </td>
                  <td className="py-3 px-4 border-b border-gray-300 text-sm text-gray-700">
                    -
                  </td>
                  <td className="py-3 px-4 border-b border-gray-300 text-sm text-gray-700">
                    GEME Kobold Refill Pack x 6
                  </td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="py-3 px-4 border-b border-gray-300 text-sm text-gray-700">
                    Refill
                  </td>
                  <td className="py-3 px-4 border-b border-gray-300 text-sm text-gray-700">
                    GEME Kobold Refill Half-Year
                  </td>
                  <td className="py-3 px-4 border-b border-gray-300 text-sm text-gray-700">
                    -
                  </td>
                  <td className="py-3 px-4 border-b border-gray-300 text-sm text-gray-700">
                    GEME Kobold Refill Pack x 12
                  </td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="py-3 px-4 border-b border-gray-300 text-sm text-gray-700">
                    Refill
                  </td>
                  <td className="py-3 px-4 border-b border-gray-300 text-sm text-gray-700">
                    GEME Kobold Refill Full-Year
                  </td>
                  <td className="py-3 px-4 border-b border-gray-300 text-sm text-gray-700">
                    -
                  </td>
                  <td className="py-3 px-4 border-b border-gray-300 text-sm text-gray-700">
                    GEME Kobold Refill Pack x 24
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <p>
            More detail please refer to{' '}
            <a
              className="text-v2311-primary"
              href="/help-center/docs/faq/geme-kobold/what-is-the-difference-between-big-bag-kobold-and-small-bag-kobold"
            >
              Help Center Article
            </a>
          </p>
        </>
      ),
    },

    {
      slug: 'what-is-the-difference-between-the-starter-kobold-and-the-refill-kobold',
      question:
        'What\'s the difference between the GEME Kobold and other electric "composter" additive like Lomi Pod?',
      answer: (
        <>
          The GEME Kobold contains a mix of microorganisms, including bacteria,
          fungi, and heat-resistant strains, designed to efficiently break down
          food waste. It also includes lignin and moisture regulators, acting as
          carbon supplements for balancing the carbon-to-nitrogen ratio in
          compost. The rapid reproduction of these microbes drives the
          decomposition process. In contrast, Lomi Pod function mainly as{' '}
          <strong>placebos</strong>, where the decomposition is largely achieved
          through high heat and grinding, operating on a completely different
          principle.
        </>
      ),
    },
    {
      slug: 'what-is-the-difference-between-big-bag-kobold-and-small-bag-kobold',
      question:
        'When can I start harvesting the compost and how much should I need to Leave in GEME?',
      answer: (
        <>
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
      slug: 'how-often-should-i-replace-the-kobold',
      question: 'How often should I replace the Kobold?',
      answer: (
        <>
          If properly maintained, there is no need to replace the entire Kobold.
          However, if you notice that the material inside the composter is too
          wet or has become compacted, it’s better to replace it with a new
          starter.
          <picture>
            <img
              alt="Replace GEME Kobold"
              src="/assets/images/geme-kobold/faq/geme-kobold-get-rock.png"
              style={{ maxWidth: '100%', marginTop: '15px' }}
            />
          </picture>
        </>
      ),
    },

    {
      slug: 'how-often-should-i-add-geme-kobold',
      question: 'How often should I add GEME Kobold?',
      answer: (
        <>
          <p>
            This process is more based on experience rather than a fixed number.
            How often you need to add GEME Kobold depends on the amount of waste
            you put in and how frequently you remove the compost.
          </p>
          <br></br>

          <p>
            Your GEME device comes with a 1.5kg starter pack of GEME Kobold and
            moisture-adjusting materials. The more waste you add and the more
            often you remove compost, the more frequently you’ll need to add new
            GEME Kobold.
          </p>
          <br></br>

          <p>
            After activating GEME-Kobold, add 500g of waste daily. Remove the
            compost every two months, leaving some to enrich the remaining
            GEME-Kobold. Add one small pack of GEME Kobold every two weeks.
          </p>
          <br></br>
          <p>
            For example, a family of two adding 100g of waste daily only needs
            to remove compost once a year. Start adding GEME Kobold then. If the
            decomposition slows, start adding Kobold earlier.
          </p>

          <picture>
            <img
              alt="Replace GEME Kobold"
              src="/assets/images/geme-kobold/faq/when-and-how-to-add-kobold.png"
              style={{ maxWidth: '100%', marginTop: '15px' }}
            />
          </picture>

          <p>
            More detail please refer to{' '}
            <a
              className="text-v2311-primary"
              href="/help-center/docs/faq/how-to-use/how-often-should-i-add-geme-kobold"
            >
              Help Center Article
            </a>
            .
          </p>
        </>
      ),
    },
    {
      slug: 'how-often-should-i-replace-the-kobold',
      question:
        'Since Kobold contains bacteria, Is it harmful to human and animals?',
      answer: (
        <>
          No, the bacteria in GEME Kobold are not harmful. They are specifically
          chosen beneficial microbes that play a vital role in composting. In
          microbiology, many bacteria are known to support natural processes,
          such as breaking down organic materials into compost. These microbes
          are similar to the bacteria found in healthy soil or fermented foods.
          They focus on decomposing food waste efficiently, without posing any
          risk to humans, pets, or the environment. The carefully selected
          strains ensure safe and effective composting. And it is well tested
          and get certificate to produce in production.
        </>
      ),
    },

    {
      slug: 'how-often-should-i-replace-the-kobold',
      question: 'Can I use GEME Kobold outside GEME Composter?',
      answer: (
        <>
          No, GEME Kobold is specifically designed for use within the GEME
          Composter. The microbes in GEME Kobold require a controlled
          environment, such as the GEME Composter, where conditions like
          temperature, moisture, and airflow are optimized for effective
          composting. Using GEME Kobold outside of this environment may not
          yield the desired results because it won't provide the necessary
          conditions for microbial growth and decomposition.
          <br />
          <br />
          <b>Note</b>: If you purchase and use Kobold without GEME Composter,
          GEME is not responsible for the result.
        </>
      ),
    },
    {
      slug: 'how-often-should-i-replace-the-kobold',
      question:
        'Can I use other composting starter material inside GEME Composter?',
      answer: (
        <>
          While other composting starters may work in different composting
          systems, GEME Kobold is specifically designed for the GEME Composter.
          Its unique blend of microbes ensures optimal decomposition inside the
          controlled environment of the machine. Using other starter materials
          may not yield the same efficient results, as they are not tailored to
          GEME's specific process.
          <br />
          <br />
          <b>Note</b>: If you use other starters or material with GEME
          Composter, GEME is not responsible for the result.
        </>
      ),
    },
    {
      slug: 'where-can-i-buy-more-kobold',
      question: 'Where can I buy more Kobold?',
      answer: <>Here, in this page. Scroll up to order now.</>,
    },
  ],
}

export const koboldFaqPropsDe: IFaqProps = {
  title: 'Frequently Asked Questions',
  description: '',
  faqs: [
    {
      slug: 'what-is-geme-kobold',
      question: 'Was ist GEME Kobold?',
      answer: (
        <>
          <p>
            GEME Kobold ist ein Produkt, das eine Gruppe von Mikroben enthält.
            Diese Mikroben sind der Schlüssel zur Zersetzung von
            Lebensmittelresten und Bioabfällen. Sobald sie auf organische
            Abfälle aufgetragen werden, beginnt der schnelle
            Kompostierungsprozess. Die Mikroben bilden eine Mikrobiota und
            regenerieren sich schnell. Lebensmittelabfälle dienen als perfektes
            Futter für diese Mikroben, wodurch sie sich ernähren und vermehren
            können. Diese Mikroben werden sorgfältig aus komplexen natürlichen
            Quellen ausgewählt und durch eine Reihe von mikrobiologischen
            Verfahren verfeinert.
          </p>

          <p className="mt-4">
            Um die Rolle von GEME Kobold besser zu verstehen, betrachten Sie
            diese Beispiele: Genauso wie Hühner auf einem Bauernhof
            Küchenabfälle fressen und Würmer in einem Wurmbehälter
            Lebensmittelreste zersetzen, zersetzen die GEME Kobold Mikroben
            Lebensmittelabfälle im GEME Komposter. Jeder spielt eine
            einzigartige Rolle bei der Abfallreduzierung, indem natürliche
            Prozesse zur Wiederverwertung von organischen Materialien genutzt
            werden.
          </p>

          <div
            style={{
              display: 'flex',
              justifyContent: 'flex-start',
              alignItems: 'flex-start',
              marginTop: '20px',
            }}
          >
            <div style={{ flex: '1', textAlign: 'left', padding: '10px' }}>
              <h3>Hühner</h3>
              <img
                src="/assets/images/geme-kobold/faq/chicken-farm.png"
                alt="Hühner fressen Abfälle"
              />
              <p>Abfälle auf dem Bauernhof</p>
            </div>
            <div style={{ flex: '1', textAlign: 'left', padding: '10px' }}>
              <h3>Würmer</h3>
              <img
                src="/assets/images/geme-kobold/faq/worm-bin.png"
                alt="Würmer im Wurmbehälter"
              />
              <p>Abfälle im Wurmbehälter</p>
            </div>
            <div style={{ flex: '1', textAlign: 'left', padding: '10px' }}>
              <h3>Kobold Mikroben</h3>
              <img
                src="/assets/images/geme-kobold/faq/geme-composter.jpg"
                alt="Kobold Mikroben im Komposter"
              />
              <p>Abfälle im GEME Komposter</p>
            </div>
          </div>
        </>
      ),
    },
    {
      slug: 'how-it-works',
      question: 'Wie funktioniert es?',
      answer: (
        <>
          <div className="mb-8">
            <h2
              style={{
                fontWeight: 'bold',
              }}
            >
              Wie funktioniert der GEME Komposter?
            </h2>

            <h3
              style={{
                fontWeight: '600',
              }}
            >
              1. Simulation eines Komposthaufens in einer kontrollierten
              Umgebung
            </h3>
            <p>
              GEME Komposter schaffen die perfekte Umgebung für die
              Kompostierung, indem sie nicht nur auf Dehydration und Hitze
              angewiesen sind. Sie replizieren die Bedingungen eines
              Komposthaufens, halten jedoch alles geschlossen und geruchsfrei.
            </p>

            <iframe
              className="w-full aspect-[16/9] self-stretch md:min-h-[500px]"
              src="https://www.youtube.com/embed/asNRoqkC_BA"
              frameBorder="0"
              title="GEME zersetzt Lebensmittelabfälle in 7 Stunden - ungeschnittenes Video"
              aria-hidden="true"
            />

            <h4
              style={{
                fontWeight: '500',
              }}
            >
              Die Technologie hinter den GEME Kompostern
            </h4>
            <p>
              GEME Komposter sind so konzipiert, dass sie eine{' '}
              <strong>ideale Umgebung</strong> für die speziellen Mikroben (GEME
              Kobold) aufrechterhalten, um Bioabfälle abzubauen. Diese Umgebung
              imitiert den natürlichen Kompostierungsprozess, beschleunigt ihn
              jedoch und hält ihn geschlossen.
            </p>

            <div className="overflow-x-auto">
              <table className="min-w-full bg-white border border-gray-300">
                <thead>
                  <tr>
                    <th className="py-2 px-4 border-b border-gray-300 text-left text-sm font-semibold text-gray-700">
                      Eigenschaften
                    </th>
                    <th className="py-2 px-4 border-b border-gray-300 text-left text-sm font-semibold text-gray-700">
                      GEME Komposter
                    </th>
                    <th className="py-2 px-4 border-b border-gray-300 text-left text-sm font-semibold text-gray-700">
                      Andere Lomi-ähnliche Dehydratoren
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="bg-gray-50">
                    <td className="py-3 px-4 border-b border-gray-300 text-sm text-gray-700">
                      Heiße Kompostierungstemperatur
                    </td>
                    <td className="py-3 px-4 border-b border-gray-300 text-sm text-gray-700">{`✅Ja (45°C < 85°C)`}</td>
                    <td className="py-3 px-4 border-b border-gray-300 text-sm text-gray-700">{`❌Nein (120°C+, Gute Bakterien werden getötet)`}</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 border-b border-gray-300 text-sm text-gray-700">
                      Feuchtigkeitskontrolle
                    </td>
                    <td className="py-3 px-4 border-b border-gray-300 text-sm text-gray-700">
                      ✅Ja
                    </td>
                    <td className="py-3 px-4 border-b border-gray-300 text-sm text-gray-700">
                      ❌Nein
                    </td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="py-3 px-4 border-b border-gray-300 text-sm text-gray-700">
                      Aerober Austausch
                    </td>
                    <td className="py-3 px-4 border-b border-gray-300 text-sm text-gray-700">
                      ✅Ja
                    </td>
                    <td className="py-3 px-4 border-b border-gray-300 text-sm text-gray-700">
                      ❌Nein
                    </td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 border-b border-gray-300 text-sm text-gray-700">
                      Umwälzung
                    </td>
                    <td className="py-3 px-4 border-b border-gray-300 text-sm text-gray-700">
                      ✅Ja (Sanftes Drehen)
                    </td>
                    <td className="py-3 px-4 border-b border-gray-300 text-sm text-gray-700">
                      ❌Nein (Schneiden und Zerkleinern mit Klingen)
                    </td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 border-b border-gray-300 text-sm text-gray-700">
                      Filtersystem
                    </td>
                    <td className="py-3 px-4 border-b border-gray-300 text-sm text-gray-700">
                      Metallionen-Katalyseoxidation,
                      <br />
                      Keine Notwendigkeit zu ersetzen
                    </td>
                    <td className="py-3 px-4 border-b border-gray-300 text-sm text-gray-700">
                      Kohlefilter,
                      <br />
                      Alle 3 Monate ersetzen
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h3
              style={{
                fontWeight: '600',
              }}
            >
              2. Die Maschine: Der Kompostierungsprozess in einem geschlossenen
              System
            </h3>
            <p>
              Die Maschine fungiert wie ein Komposthaufen in einer Box. Sie
              stellt sicher, dass die Bioabfälle effizient zersetzt werden, ohne
              Gerüche zu erzeugen. Dies wird durch die Steuerung von
              Feuchtigkeit, Temperatur und Luftzirkulation erreicht, die alle
              für die mikrobielle Aktivität optimiert sind.
            </p>
            <picture>
              <img
                alt="Wie der elektrische Komposter funktioniert"
                src="/assets/images/how-it-works/how-geme-composter-works.jpg"
                style={{ maxWidth: '100%', marginTop: '15px' }}
              />
            </picture>

            <h3
              style={{
                fontWeight: '600',
              }}
            >
              3. Die Mikroben: Die wahren Arbeitstiere
            </h3>
            <p>
              Das Herzstück des Kompostierungsprozesses liegt bei{' '}
              <strong>GEME Kobold</strong> – einer sorgfältig ausgewählten
              Gruppe von Mikroben. Diese Mikroben wirken wie die „Würmer“ der
              traditionellen Kompostierung, arbeiten jedoch schneller und
              effizienter. Sie vermehren sich rasch, ernähren sich von den
              Lebensmittelabfällen und verwandeln sie in nährstoffreichen
              Kompost.
            </p>

            <h4
              style={{
                fontWeight: '500',
              }}
            >
              Mikrobielle Wachstum und Aktivität
            </h4>
            <p>
              Unter idealen Bedingungen können sich bestimmte Bakterienarten
              alle 10-15 Minuten teilen und ihre Population in sehr kurzer Zeit
              verdoppeln. Dieses exponentielle Wachstum ist der Schlüssel zur
              Effizienz der GEME Komposter, da es die Zersetzung organischer
              Materialien in Kompost beschleunigt.
            </p>
            <picture>
              <img
                alt="Wie Mikroben wachsen"
                src="/assets/images/geme-terra-2/microbes-grow.png"
                style={{ maxWidth: '100%', marginTop: '15px' }}
              />
            </picture>

            <h4
              style={{
                fontWeight: '500',
              }}
            >
              Fazit
            </h4>
            <p>
              Zusammenfassend lässt sich sagen, dass GEME Komposter den
              natürlichen Kompostierungsprozess in einer geschlossenen,
              effizienten und geruchslosen Umgebung nachahmen. Durch den Einsatz
              fortschrittlicher Mikroben-Technologie bieten diese Geräte eine
              praktische und umweltfreundliche Lösung für die Bewältigung von
              Haushaltsabfällen.
            </p>
          </div>
        </>
      ),
    },

    {
      slug: 'what-is-the-difference-between-the-starter-kobold-and-the-refill-kobold',
      question:
        'Was ist der Unterschied zwischen dem Starter Kobold und dem Nachfüll-Kobold?',
      answer: (
        <>
          <h3
            style={{
              fontWeight: 'bold',
            }}
          >
            Der Starter (Großer Beutel Kobold)
          </h3>
          <p>
            Der Große Beutel Kobold bezieht sich in der Regel auf den 2kg/1,5kg
            Beutel GEME Kobold. Dieser wird als Kompost-Starter verwendet und
            sollte in der <strong>Einrichtungsphase</strong> auf einmal
            verwendet werden.
          </p>
          <div
            style={{
              display: 'flex',
              justifyContent: 'flex-start',
              alignItems: 'flex-start',
            }}
          >
            <div style={{ flex: '1', textAlign: 'left', padding: '10px' }}>
              <h3>Starter 2kg </h3>
              <img
                src="/assets/images/geme-kobold/faq/geme-kobold-old.png"
                alt="Hühner fressen Abfälle"
              />
              <p>Klassischer Kobold (2022.01 ~ 2023.10)</p>
            </div>
            <div style={{ flex: '1', textAlign: 'left', padding: '10px' }}>
              <h3>Starter 1,5kg (neueste Version)</h3>
              <img
                src="/assets/images/geme-kobold/product-image-max.jpg"
                alt="Würmer im Wurmbehälter"
              />
              <p>Verbesserter Kobold (2023.10 ~)</p>
            </div>
          </div>
          <h3
            style={{
              fontWeight: 'bold',
            }}
          >
            Die Nachfüllpacks (Kleiner Beutel Kobold)
          </h3>
          <p>
            Der Kleine Beutel Kobold, auch als Nachfüllpack bezeichnet, ist eine
            kleinere und reinere Version des GEME Kobold und wird nicht als
            Starter, sondern als Nachfüllpack verwendet. Es sollte regelmäßig
            (alle 2 oder 3 Wochen) nach der Einrichtung verwendet werden, wenn
            die erste Charge nach etwa 60 Tagen entfernt wird.
          </p>

          <div
            style={{
              display: 'flex',
              justifyContent: 'flex-start',
              alignItems: 'flex-start',
            }}
          >
            <div style={{ flex: '1', textAlign: 'left', padding: '10px' }}>
              <img
                src="/assets/images/geme-kobold/product-image-back-garden.jpg"
                alt="Ein Nachfüllpack von GEME Kobold"
              />
              <p>Nachfüll-Kobold (Einzeln)</p>
            </div>

            <div style={{ flex: '1', textAlign: 'left', padding: '10px' }}>
              <img
                src="/assets/images/geme-kobold/product-image-6.jpg"
                alt="Ein Nachfüllpack von GEME Kobold"
              />
              <p>Nachfüll-Kobold (Quartalsweise)</p>
            </div>

            <div style={{ flex: '1', textAlign: 'left', padding: '10px' }}>
              <img
                src="/assets/images/geme-kobold/product-image-12.jpg"
                alt="12 Nachfüllpacks von GEME Kobold"
              />

              <p>Nachfüll-Kobold (Halbjährlich)</p>
            </div>

            <div style={{ flex: '1', textAlign: 'left', padding: '10px' }}>
              <img
                src="/assets/images/geme-kobold/product-image-24.jpg"
                alt="24 Nachfüllpacks von GEME Kobold"
              />
              <p>Nachfüll-Kobold (Ganzjährig)</p>
            </div>
          </div>

          <h3
            style={{
              fontWeight: 'bold',
            }}
          >
            Schnellvergleich der Spezifikationen
          </h3>
          <div className="overflow-x-auto">
            <table className="min-w-full bg-white border border-gray-300">
              <thead>
                <tr>
                  <th className="py-2 px-4 border-b border-gray-300 text-left text-sm font-semibold text-gray-700">
                    Typen
                  </th>
                  <th className="py-2 px-4 border-b border-gray-300 text-left text-sm font-semibold text-gray-700">
                    Name
                  </th>
                  <th className="py-2 px-4 border-b border-gray-300 text-left text-sm font-semibold text-gray-700">
                    Gewicht
                  </th>
                  <th className="py-2 px-4 border-b border-gray-300 text-left text-sm font-semibold text-gray-700">
                    Beschreibung
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="bg-gray-50">
                  <td className="py-3 px-4 border-b border-gray-300 text-sm text-gray-700">
                    Starter
                  </td>
                  <td className="py-3 px-4 border-b border-gray-300 text-sm text-gray-700">
                    Klassischer GEME Kobold Starter{' '}
                  </td>
                  <td className="py-3 px-4 border-b border-gray-300 text-sm text-gray-700">
                    2kg
                  </td>
                  <td className="py-3 px-4 border-b border-gray-300 text-sm text-gray-700">
                    Seit 2022 bis 2023-10
                  </td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="py-3 px-4 border-b border-gray-300 text-sm text-gray-700">
                    Starter
                  </td>
                  <td className="py-3 px-4 border-b border-gray-300 text-sm text-gray-700">
                    Verbessert GEME Kobold Starter{' '}
                  </td>
                  <td className="py-3 px-4 border-b border-gray-300 text-sm text-gray-700">
                    1,5kg
                  </td>
                  <td className="py-3 px-4 border-b border-gray-300 text-sm text-gray-700">
                    Seit 2023-10
                  </td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="py-3 px-4 border-b border-gray-300 text-sm text-gray-700">
                    Nachfüllpack
                  </td>
                  <td className="py-3 px-4 border-b border-gray-300 text-sm text-gray-700">
                    GEME Kobold Nachfüllpack
                  </td>
                  <td className="py-3 px-4 border-b border-gray-300 text-sm text-gray-700">
                    20g
                  </td>
                  <td className="py-3 px-4 border-b border-gray-300 text-sm text-gray-700">
                    Wie eine kleine Kaffeetüte
                  </td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="py-3 px-4 border-b border-gray-300 text-sm text-gray-700">
                    Nachfüllpack
                  </td>
                  <td className="py-3 px-4 border-b border-gray-300 text-sm text-gray-700">
                    GEME Kobold Nachfüllpack Quartal
                  </td>
                  <td className="py-3 px-4 border-b border-gray-300 text-sm text-gray-700">
                    -
                  </td>
                  <td className="py-3 px-4 border-b border-gray-300 text-sm text-gray-700">
                    GEME Kobold Nachfüllpack x 6
                  </td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="py-3 px-4 border-b border-gray-300 text-sm text-gray-700">
                    Nachfüllpack
                  </td>
                  <td className="py-3 px-4 border-b border-gray-300 text-sm text-gray-700">
                    GEME Kobold Nachfüllpack Halbjahr
                  </td>
                  <td className="py-3 px-4 border-b border-gray-300 text-sm text-gray-700">
                    -
                  </td>
                  <td className="py-3 px-4 border-b border-gray-300 text-sm text-gray-700">
                    GEME Kobold Nachfüllpack x 12
                  </td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="py-3 px-4 border-b border-gray-300 text-sm text-gray-700">
                    Nachfüllpack
                  </td>
                  <td className="py-3 px-4 border-b border-gray-300 text-sm text-gray-700">
                    GEME Kobold Nachfüllpack Ganzjahr
                  </td>
                  <td className="py-3 px-4 border-b border-gray-300 text-sm text-gray-700">
                    -
                  </td>
                  <td className="py-3 px-4 border-b border-gray-300 text-sm text-gray-700">
                    GEME Kobold Nachfüllpack x 24
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <p>
            Weitere Informationen finden Sie im{' '}
            <a
              className="text-v2311-primary"
              href="/help-center/docs/faq/geme-kobold/what-is-the-difference-between-big-bag-kobold-and-small-bag-kobold"
            >
              Hilfecenter-Artikel
            </a>
          </p>
        </>
      ),
    },

    {
      slug: 'what-is-the-difference-between-the-starter-kobold-and-the-refill-kobold',
      question:
        'Was ist der Unterschied zwischen dem GEME Kobold und anderen Zusätzen wie dem Lomi Pod?',
      answer: (
        <>
          Der GEME Kobold enthält eine Mischung aus Mikroorganismen, darunter
          Bakterien, Pilze und hitzebeständige Stämme, die darauf ausgelegt
          sind, Lebensmittelabfälle effizient abzubauen. Außerdem enthält er
          Lignin und Feuchtigkeitsregulatoren, die als Kohlenstoffzusätze zur
          Ausbalancierung des Kohlenstoff-Stickstoff-Verhältnisses im Kompost
          dienen. Die schnelle Vermehrung dieser Mikroben treibt den
          Zersetzungsprozess voran. Im Gegensatz dazu funktionieren Lomi Pods
          hauptsächlich als <strong>Placebos</strong>, bei denen die Zersetzung
          weitgehend durch hohe Hitze und Mahlvorgänge erfolgt und auf einem
          völlig anderen Prinzip basiert.
        </>
      ),
    },
    {
      slug: 'what-is-the-difference-between-big-bag-kobold-and-small-bag-kobold',
      question:
        'Wann kann ich den Kompost ernten und wie viel sollte ich im GEME lassen?',
      answer: (
        <>
          <div className="container mx-auto p-4">
            <h5 className="text-xl font-semibold text-gray-800 mb-4">
              {`1. Überschreiten Sie nicht die Füllstandsgrenze`}
            </h5>
            <p className="text-gray-700 mb-6">
              Dies ist eine feste Grenze. Wenn der Komposter voll ist, sollten
              Sie den Kompost so schnell wie möglich entfernen.
            </p>

            <h5 className="text-xl font-semibold text-gray-800 mb-4">
              2. Entfernen Sie nicht den gesamten Kompost
            </h5>
            <p className="text-gray-700 mb-6">
              Lassen Sie jedes Mal, wenn Sie Kompost entfernen, etwas am Boden,
              damit sich die Bakterien im GEME Kobold weiter vermehren und neue
              Lebensmittelabfälle zersetzen können.
              <strong className="text-v2311-primary">
                Halten Sie den Kompoststand in Höhe der Rührwelle.
              </strong>
            </p>

            <h5 className="text-xl font-semibold text-gray-800 mb-4">
              3. Empfehlung: Entfernen Sie den Kompost, wenn das Rührwerk
              vollständig vergraben ist
            </h5>
            <p className="text-gray-700 mb-6">
              Achten Sie auf die gelbe Linie im untenstehenden Bild. Dies ist
              eine bewährte Methode, mit der Sie den Kompost effizienter sammeln
              können, während die Arbeitslast der Maschine verringert wird, was
              deren Lebensdauer verlängert.
            </p>
          </div>
          <picture>
            <img
              src="/assets/images/geme-terra-2/harvest-compost/best-practice-removal.png"
              alt="Beste Methode zum Entfernen von GEME-Kompost"
            />
          </picture>
        </>
      ),
    },
    {
      slug: 'how-often-should-i-replace-the-kobold',
      question: 'Wie oft sollte ich den Kobold ersetzen?',
      answer: (
        <>
          Wenn der Kobold richtig gepflegt wird, muss er nicht vollständig
          ersetzt werden. Wenn Sie jedoch feststellen, dass das Material im
          Komposter zu feucht oder verdichtet ist, sollten Sie es besser durch
          einen neuen Starter ersetzen.
          <picture>
            <img
              alt="GEME Kobold ersetzen"
              src="/assets/images/geme-kobold/faq/geme-kobold-get-rock.png"
              style={{ maxWidth: '100%', marginTop: '15px' }}
            />
          </picture>
        </>
      ),
    },

    {
      slug: 'how-often-should-i-add-geme-kobold',
      question: 'Wie oft sollte ich GEME Kobold hinzufügen?',
      answer: (
        <>
          <p>
            Dieser Prozess basiert mehr auf Erfahrung als auf einer festen Zahl.
            Wie oft Sie GEME Kobold hinzufügen müssen, hängt von der Menge der
            Abfälle ab, die Sie einfüllen, und wie oft Sie den Kompost
            entfernen.
          </p>
          <br></br>

          <p>
            Ihr GEME-Gerät wird mit einem 1,5 kg Starterpack von GEME Kobold und
            feuchtigkeitsregulierenden Materialien geliefert. Je mehr Abfall Sie
            hinzufügen und je häufiger Sie den Kompost entfernen, desto öfter
            müssen Sie neuen GEME Kobold hinzufügen.
          </p>
          <br></br>

          <p>
            Nach der Aktivierung von GEME-Kobold fügen Sie täglich 500g Abfall
            hinzu. Entfernen Sie den Kompost alle zwei Monate und lassen Sie
            etwas zurück, um den verbleibenden GEME-Kobold zu bereichern. Fügen
            Sie alle zwei Wochen ein kleines Päckchen GEME Kobold hinzu.
          </p>
          <br></br>
          <p>
            Zum Beispiel: Eine Familie mit zwei Personen, die täglich 100g
            Abfall hinzufügt, muss den Kompost nur einmal im Jahr entfernen.
            Beginnen Sie dann, GEME Kobold hinzuzufügen. Wenn der
            Zersetzungsprozess langsamer wird, beginnen Sie früher damit.
          </p>

          <picture>
            <img
              alt="GEME Kobold ersetzen"
              src="/assets/images/geme-kobold/faq/when-and-how-to-add-kobold.png"
              style={{ maxWidth: '100%', marginTop: '15px' }}
            />
          </picture>

          <p>
            Weitere Informationen finden Sie im{' '}
            <a
              className="text-v2311-primary"
              href="/help-center/docs/faq/how-to-use/how-often-should-i-add-geme-kobold"
            >
              Hilfecenter-Artikel
            </a>
            .
          </p>
        </>
      ),
    },
    {
      slug: 'how-often-should-i-replace-the-kobold',
      question:
        'Da Kobold Bakterien enthält, ist es schädlich für Menschen und Tiere?',
      answer: (
        <>
          Nein, die Bakterien in GEME Kobold sind nicht schädlich. Es handelt
          sich um speziell ausgewählte, nützliche Mikroben, die eine wichtige
          Rolle im Kompostierungsprozess spielen. In der Mikrobiologie sind
          viele Bakterien dafür bekannt, natürliche Prozesse zu unterstützen,
          wie das Zersetzen organischer Materialien in Kompost. Diese Mikroben
          sind den Bakterien ähnlich, die in gesunder Erde oder fermentierten
          Lebensmitteln vorkommen. Sie konzentrieren sich darauf,
          Lebensmittelabfälle effizient zu zersetzen, ohne ein Risiko für
          Menschen, Haustiere oder die Umwelt darzustellen. Die sorgfältig
          ausgewählten Stämme sorgen für eine sichere und effektive
          Kompostierung. Außerdem wurde dies umfassend getestet und
          zertifiziert.
        </>
      ),
    },

    {
      slug: 'how-often-should-i-replace-the-kobold',
      question: 'Kann ich GEME Kobold außerhalb des GEME Komposters verwenden?',
      answer: (
        <>
          Nein, GEME Kobold ist speziell für die Verwendung im GEME Komposter
          entwickelt. Die Mikroben in GEME Kobold benötigen eine kontrollierte
          Umgebung, wie sie im GEME Komposter vorliegt, wo Bedingungen wie
          Temperatur, Feuchtigkeit und Luftstrom für eine effektive
          Kompostierung optimiert sind. Wenn GEME Kobold außerhalb dieser
          Umgebung verwendet wird, sind möglicherweise nicht die gewünschten
          Ergebnisse zu erzielen, da die erforderlichen Bedingungen für das
          Wachstum und die Zersetzung der Mikroben fehlen.
          <br />
          <br />
          <b>Hinweis</b>: Wenn Sie Kobold ohne GEME Komposter kaufen und
          verwenden, übernimmt GEME keine Verantwortung für das Ergebnis.
        </>
      ),
    },
    {
      slug: 'how-often-should-i-replace-the-kobold',
      question:
        'Kann ich andere Kompoststarter-Materialien im GEME Komposter verwenden?',
      answer: (
        <>
          Während andere Kompoststarter in verschiedenen Kompostiersystemen
          funktionieren können, ist GEME Kobold speziell für den GEME Komposter
          entwickelt. Seine einzigartige Mischung von Mikroben sorgt für eine
          optimale Zersetzung in der kontrollierten Umgebung der Maschine. Die
          Verwendung anderer Startermaterialien führt möglicherweise nicht zu
          denselben effizienten Ergebnissen, da sie nicht auf den spezifischen
          Prozess von GEME abgestimmt sind.
          <br />
          <br />
          <b>Hinweis</b>: Wenn Sie andere Starter oder Materialien mit dem GEME
          Komposter verwenden, übernimmt GEME keine Verantwortung für das
          Ergebnis.
        </>
      ),
    },
    {
      slug: 'where-can-i-buy-more-kobold',
      question: 'Wo kann ich mehr Kobold kaufen?',
      answer: (
        <>
          Hier, auf dieser Seite. Scrollen Sie nach oben, um jetzt zu bestellen.
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
      slug: 'what-is-geme-kobold',
      question: 'Qu’est-ce que GEME Kobold?',
      answer: (
        <>
          <p>
            GEME Kobold est un produit qui contient un ensemble de microbes. Ces
            microbes sont le facteur clé dans la décomposition des restes
            alimentaires et des déchets organiques. Lorsqu'ils sont appliqués
            aux déchets organiques, le processus de compostage rapide commence.
            Les microbes forment une microbiote et se régénèrent rapidement. Les
            déchets alimentaires servent de nourriture parfaite pour ces
            microbes, leur permettant de se nourrir et de se reproduire. Ces
            microbes sont soigneusement sélectionnés à partir de sources
            naturelles complexes et sont affinés grâce à une série de processus
            d'ingénierie microbienne.
          </p>

          <p className="mt-4">
            Pour mieux comprendre le rôle de GEME Kobold, voici des exemples :
            tout comme les poulets dans une ferme consomment les restes de
            cuisine, et que les vers dans un bac à vers décomposent les déchets
            alimentaires, les microbes de GEME Kobold décomposent les déchets
            alimentaires dans le composteur GEME. Chacun joue un rôle unique
            dans la réduction des déchets, en utilisant des processus naturels
            pour recycler les matières organiques.
          </p>

          <div
            style={{
              display: 'flex',
              justifyContent: 'flex-start',
              alignItems: 'flex-start',
              marginTop: '20px',
            }}
          >
            <div style={{ flex: '1', textAlign: 'left', padding: '10px' }}>
              <h3>Poulets</h3>
              <img
                src="/assets/images/geme-kobold/faq/chicken-farm.png"
                alt="Poulets mangeant des restes"
              />
              <p>Restes dans une ferme de poulets</p>
            </div>
            <div style={{ flex: '1', textAlign: 'left', padding: '10px' }}>
              <h3>Vers</h3>
              <img
                src="/assets/images/geme-kobold/faq/worm-bin.png"
                alt="Vers dans un bac à vers"
              />

              <p>Aliments dans des bacs à vers</p>
            </div>
            <div style={{ flex: '1', textAlign: 'left', padding: '10px' }}>
              <h3>Microbes Kobold</h3>
              <img
                src="/assets/images/geme-kobold/faq/geme-composter.jpg"
                alt="Microbes Kobold dans un composteur"
              />
              <p>Déchets dans le composteur GEME</p>
            </div>
          </div>
        </>
      ),
    },
    {
      slug: 'how-it-works',
      question: 'Comment ça fonctionne?',
      answer: (
        <>
          <div className="mb-8">
            <h2
              style={{
                fontWeight: 'bold',
              }}
            >
              Comment fonctionne le composteur GEME?
            </h2>

            <h3
              style={{
                fontWeight: '600',
              }}
            >
              1. Simulation d'un tas de compost dans un environnement contrôlé
            </h3>
            <p>
              Les composteurs GEME créent l'environnement parfait pour le
              compostage, sans se contenter de la déshydratation et de la
              chaleur. Ils reproduisent les conditions d'un tas de compost tout
              en maintenant tout fermé et sans odeur.
            </p>

            <iframe
              className="w-full aspect-[16/9] self-stretch md:min-h-[500px]"
              src="https://www.youtube.com/embed/asNRoqkC_BA"
              frameBorder="0"
              title="GEME décompose les déchets alimentaires en 7 heures - vidéo non coupée"
              aria-hidden="true"
            />

            <h4
              style={{
                fontWeight: '500',
              }}
            >
              La technologie derrière les composteurs GEME
            </h4>
            <p>
              Les composteurs GEME sont conçus pour maintenir un{' '}
              <strong>environnement idéal</strong> pour les microbes spéciaux
              (GEME Kobold) afin de décomposer les déchets organiques. Cet
              environnement imite le processus naturel de compostage mais
              l'accélère et le garde fermé.
            </p>

            <div className="overflow-x-auto">
              <table className="min-w-full bg-white border border-gray-300">
                <thead>
                  <tr>
                    <th className="py-2 px-4 border-b border-gray-300 text-left text-sm font-semibold text-gray-700">
                      Caractéristiques
                    </th>
                    <th className="py-2 px-4 border-b border-gray-300 text-left text-sm font-semibold text-gray-700">
                      Composteur GEME
                    </th>
                    <th className="py-2 px-4 border-b border-gray-300 text-left text-sm font-semibold text-gray-700">
                      Autres déshydrateurs de type Lomi
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="bg-gray-50">
                    <td className="py-3 px-4 border-b border-gray-300 text-sm text-gray-700">
                      Température de compostage à chaud
                    </td>
                    <td className="py-3 px-4 border-b border-gray-300 text-sm text-gray-700">{`✅Oui (45°C < 85°C)`}</td>
                    <td className="py-3 px-4 border-b border-gray-300 text-sm text-gray-700">{`❌Non (120°C+, Les bonnes bactéries sont tuées)`}</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 border-b border-gray-300 text-sm text-gray-700">
                      Contrôle de l'humidité
                    </td>
                    <td className="py-3 px-4 border-b border-gray-300 text-sm text-gray-700">
                      ✅Oui
                    </td>
                    <td className="py-3 px-4 border-b border-gray-300 text-sm text-gray-700">
                      ❌Non
                    </td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="py-3 px-4 border-b border-gray-300 text-sm text-gray-700">
                      Échange aérobie
                    </td>
                    <td className="py-3 px-4 border-b border-gray-300 text-sm text-gray-700">
                      ✅Oui
                    </td>
                    <td className="py-3 px-4 border-b border-gray-300 text-sm text-gray-700">
                      ❌Non
                    </td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 border-b border-gray-300 text-sm text-gray-700">
                      Remuage
                    </td>
                    <td className="py-3 px-4 border-b border-gray-300 text-sm text-gray-700">
                      ✅Oui (Lentement retourné)
                    </td>
                    <td className="py-3 px-4 border-b border-gray-300 text-sm text-gray-700">
                      ❌Non (Lames coupant et broyant)
                    </td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 border-b border-gray-300 text-sm text-gray-700">
                      Système de filtre
                    </td>
                    <td className="py-3 px-4 border-b border-gray-300 text-sm text-gray-700">
                      Oxydation catalytique par ion métallique,
                      <br />
                      Pas besoin de remplacer
                    </td>
                    <td className="py-3 px-4 border-b border-gray-300 text-sm text-gray-700">
                      Filtre à charbon,
                      <br />
                      Remplacer tous les 3 mois
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h3
              style={{
                fontWeight: '600',
              }}
            >
              2. La machine : Contenir le processus de compostage
            </h3>
            <p>
              La machine agit comme un tas de compost dans une boîte. Elle
              permet aux déchets organiques de se décomposer efficacement sans
              produire de mauvaises odeurs. Ceci est réalisé grâce au contrôle
              de l'humidité, de la température et de la circulation de l'air,
              tous optimisés pour l'activité microbienne.
            </p>
            <picture>
              <img
                alt="Comment fonctionne le composteur électrique"
                src="/assets/images/how-it-works/how-geme-composter-works.jpg"
                style={{ maxWidth: '100%', marginTop: '15px' }}
              />
            </picture>

            <h3
              style={{
                fontWeight: '600',
              }}
            >
              3. Les microbes : Les véritables acteurs
            </h3>
            <p>
              Le cœur du processus de compostage repose sur{' '}
              <strong>GEME Kobold</strong> – un ensemble de microbes
              soigneusement sélectionnés. Ces microbes agissent comme les "vers"
              du compostage traditionnel, mais ils travaillent plus rapidement
              et plus efficacement. Ils se reproduisent rapidement, se
              nourrissent des déchets alimentaires et les transforment en
              compost riche en nutriments.
            </p>

            <h4
              style={{
                fontWeight: '500',
              }}
            >
              Croissance et activité microbienne
            </h4>
            <p>
              Dans des conditions idéales, certaines espèces bactériennes
              peuvent se diviser toutes les 10 à 15 minutes, doublant ainsi leur
              population en très peu de temps. Cette croissance exponentielle
              est essentielle à l'efficacité des composteurs GEME, car elle
              accélère la décomposition des matières organiques en compost.
            </p>
            <picture>
              <img
                alt="Comment les microbes se développent"
                src="/assets/images/geme-terra-2/microbes-grow.png"
                style={{ maxWidth: '100%', marginTop: '15px' }}
              />
            </picture>

            <h4
              style={{
                fontWeight: '500',
              }}
            >
              Conclusion
            </h4>
            <p>
              En résumé, les composteurs GEME reproduisent le processus naturel
              de compostage dans un environnement fermé, efficace et sans odeur.
              En exploitant une technologie microbienne avancée, ces appareils
              offrent une solution pratique et respectueuse de l'environnement
              pour gérer les déchets alimentaires domestiques.
            </p>
          </div>
        </>
      ),
    },

    {
      slug: 'what-is-the-difference-between-the-starter-kobold-and-the-refill-kobold',
      question:
        'Quelle est la différence entre le Starter Kobold et le Refill Kobold?',
      answer: (
        <>
          <h3
            style={{
              fontWeight: 'bold',
            }}
          >
            Le Starter (Grand Sac Kobold)
          </h3>
          <p>
            Le Grand Sac Kobold fait généralement référence au sac de 2kg/1,5kg
            de GEME Kobold. Il est utilisé comme démarreur de compost et doit
            être utilisé en une seule fois lors de la{' '}
            <strong>phase d'installation</strong>.
          </p>
          <div
            style={{
              display: 'flex',
              justifyContent: 'flex-start',
              alignItems: 'flex-start',
            }}
          >
            <div style={{ flex: '1', textAlign: 'left', padding: '10px' }}>
              <h3>Starter 2kg</h3>
              <img
                src="/assets/images/geme-kobold/faq/geme-kobold-old.png"
                alt="Poulets mangeant des restes"
              />
              <p>Kobold Classique (2022.01 ~ 2023.10)</p>
            </div>
            <div style={{ flex: '1', textAlign: 'left', padding: '10px' }}>
              <h3>Starter 1,5kg (dernière version)</h3>
              <img
                src="/assets/images/geme-kobold/product-image-max.jpg"
                alt="Vers dans un bac à vers"
              />
              <p>Kobold Amélioré (2023.10 ~)</p>
            </div>
          </div>
          <h3
            style={{
              fontWeight: 'bold',
            }}
          >
            Les Packs de Recharges (Petit Sac Kobold)
          </h3>
          <p>
            Le Petit Sac Kobold, aussi appelé pack de recharge, est une version
            plus petite et plus pure du GEME Kobold. Ce n'est pas un starter,
            mais plutôt un pack de recharge. Il doit être fourni périodiquement
            (toutes les 2 ou 3 semaines) après la configuration initiale et
            l'utilisation pendant un certain temps. Lorsque le premier lot est
            retiré, environ 60 jours plus tard.
          </p>

          <div
            style={{
              display: 'flex',
              justifyContent: 'flex-start',
              alignItems: 'flex-start',
            }}
          >
            <div style={{ flex: '1', textAlign: 'left', padding: '10px' }}>
              <img
                src="/assets/images/geme-kobold/product-image-back-garden.jpg"
                alt="Une recharge de GEME Kobold"
              />
              <p>Recharge Kobold (Unité)</p>
            </div>

            <div style={{ flex: '1', textAlign: 'left', padding: '10px' }}>
              <img
                src="/assets/images/geme-kobold/product-image-6.jpg"
                alt="Une recharge de GEME Kobold"
              />
              <p>Recharge Kobold (Trimestrielle)</p>
            </div>

            <div style={{ flex: '1', textAlign: 'left', padding: '10px' }}>
              <img
                src="/assets/images/geme-kobold/product-image-12.jpg"
                alt="12 Recharges de GEME Kobold"
              />

              <p>Recharge Kobold (Semestrielle)</p>
            </div>

            <div style={{ flex: '1', textAlign: 'left', padding: '10px' }}>
              <img
                src="/assets/images/geme-kobold/product-image-24.jpg"
                alt="24 Recharges de GEME Kobold"
              />
              <p>Recharge Kobold (Annuelle)</p>
            </div>
          </div>

          <h3
            style={{
              fontWeight: 'bold',
            }}
          >
            Comparaison rapide des spécifications
          </h3>
          <div className="overflow-x-auto">
            <table className="min-w-full bg-white border border-gray-300">
              <thead>
                <tr>
                  <th className="py-2 px-4 border-b border-gray-300 text-left text-sm font-semibold text-gray-700">
                    Types
                  </th>
                  <th className="py-2 px-4 border-b border-gray-300 text-left text-sm font-semibold text-gray-700">
                    Nom
                  </th>
                  <th className="py-2 px-4 border-b border-gray-300 text-left text-sm font-semibold text-gray-700">
                    Poids
                  </th>
                  <th className="py-2 px-4 border-b border-gray-300 text-left text-sm font-semibold text-gray-700">
                    Description
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="bg-gray-50">
                  <td className="py-3 px-4 border-b border-gray-300 text-sm text-gray-700">
                    Starter
                  </td>
                  <td className="py-3 px-4 border-b border-gray-300 text-sm text-gray-700">
                    GEME Kobold Starter Classique{' '}
                  </td>
                  <td className="py-3 px-4 border-b border-gray-300 text-sm text-gray-700">
                    2kg
                  </td>
                  <td className="py-3 px-4 border-b border-gray-300 text-sm text-gray-700">
                    Depuis 2022 jusqu'à 2023-10
                  </td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="py-3 px-4 border-b border-gray-300 text-sm text-gray-700">
                    Starter
                  </td>
                  <td className="py-3 px-4 border-b border-gray-300 text-sm text-gray-700">
                    GEME Kobold Starter Amélioré{' '}
                  </td>
                  <td className="py-3 px-4 border-b border-gray-300 text-sm text-gray-700">
                    1,5kg
                  </td>
                  <td className="py-3 px-4 border-b border-gray-300 text-sm text-gray-700">
                    Depuis 2023-10
                  </td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="py-3 px-4 border-b border-gray-300 text-sm text-gray-700">
                    Recharge
                  </td>
                  <td className="py-3 px-4 border-b border-gray-300 text-sm text-gray-700">
                    Pack de Recharge GEME Kobold
                  </td>
                  <td className="py-3 px-4 border-b border-gray-300 text-sm text-gray-700">
                    20g
                  </td>
                  <td className="py-3 px-4 border-b border-gray-300 text-sm text-gray-700">
                    Comme un petit sachet de café
                  </td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="py-3 px-4 border-b border-gray-300 text-sm text-gray-700">
                    Recharge
                  </td>
                  <td className="py-3 px-4 border-b border-gray-300 text-sm text-gray-700">
                    Pack de Recharge Trimestriel GEME Kobold
                  </td>
                  <td className="py-3 px-4 border-b border-gray-300 text-sm text-gray-700">
                    -
                  </td>
                  <td className="py-3 px-4 border-b border-gray-300 text-sm text-gray-700">
                    Pack de Recharge GEME Kobold x 6
                  </td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="py-3 px-4 border-b border-gray-300 text-sm text-gray-700">
                    Recharge
                  </td>
                  <td className="py-3 px-4 border-b border-gray-300 text-sm text-gray-700">
                    Pack de Recharge Semestriel GEME Kobold
                  </td>
                  <td className="py-3 px-4 border-b border-gray-300 text-sm text-gray-700">
                    -
                  </td>
                  <td className="py-3 px-4 border-b border-gray-300 text-sm text-gray-700">
                    Pack de Recharge GEME Kobold x 12
                  </td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="py-3 px-4 border-b border-gray-300 text-sm text-gray-700">
                    Recharge
                  </td>
                  <td className="py-3 px-4 border-b border-gray-300 text-sm text-gray-700">
                    Pack de Recharge Annuel GEME Kobold
                  </td>
                  <td className="py-3 px-4 border-b border-gray-300 text-sm text-gray-700">
                    -
                  </td>
                  <td className="py-3 px-4 border-b border-gray-300 text-sm text-gray-700">
                    Pack de Recharge GEME Kobold x 24
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <p>
            Pour plus de détails, consultez l{' '}
            <a
              className="text-v2311-primary"
              href="/help-center/docs/faq/geme-kobold/what-is-the-difference-between-big-bag-kobold-and-small-bag-kobold"
            >
              article du centre d'aide
            </a>
          </p>
        </>
      ),
    },

    {
      slug: 'what-is-the-difference-between-the-starter-kobold-and-the-refill-kobold',
      question:
        'Quelle est la différence entre le GEME Kobold et d’autres additifs comme le Lomi Pod?',
      answer: (
        <>
          Le GEME Kobold contient un mélange de micro-organismes, y compris des
          bactéries, des champignons et des souches résistantes à la chaleur,
          conçus pour décomposer efficacement les déchets alimentaires. Il
          comprend également de la lignine et des régulateurs d'humidité, qui
          agissent comme des suppléments de carbone pour équilibrer le rapport
          carbone-azote dans le compost. La reproduction rapide de ces microbes
          accélère le processus de décomposition. En revanche, les Lomi Pods
          fonctionnent principalement comme <strong>placebos</strong>, où la
          décomposition est principalement réalisée par la chaleur élevée et le
          broyage, fonctionnant sur un principe complètement différent.
        </>
      ),
    },
    {
      slug: 'what-is-the-difference-between-big-bag-kobold-and-small-bag-kobold',
      question:
        'Quand puis-je commencer à récolter le compost et combien dois-je laisser dans le GEME?',
      answer: (
        <>
          <div className="container mx-auto p-4">
            <h5 className="text-xl font-semibold text-gray-800 mb-4">
              {`1. Ne dépassez pas la limite de remplissage`}
            </h5>
            <p className="text-gray-700 mb-6">
              C’est une limite stricte. Si le composteur est plein, enlevez le
              compost dès que possible.
            </p>

            <h5 className="text-xl font-semibold text-gray-800 mb-4">
              2. Ne videz pas tout le compost
            </h5>
            <p className="text-gray-700 mb-6">
              Chaque fois que vous retirez du compost, laissez-en un peu à la
              base afin que les bactéries dans le GEME Kobold puissent se
              reproduire et continuer à traiter les nouveaux déchets
              alimentaires.
              <strong className="text-v2311-primary">
                Gardez le niveau de compost aligné avec l'arbre de l'agitateur.
              </strong>
            </p>

            <h5 className="text-xl font-semibold text-gray-800 mb-4">
              3. Recommandation : Retirez le compost lorsque la pale est
              complètement enfouie
            </h5>
            <p className="text-gray-700 mb-6">
              Cherchez la ligne jaune dans l’image ci-dessous. C’est une
              pratique recommandée qui vous permet de récolter le compost plus
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
      slug: 'how-often-should-i-replace-the-kobold',
      question: 'À quelle fréquence dois-je remplacer le Kobold?',
      answer: (
        <>
          S'il est bien entretenu, il n'est pas nécessaire de remplacer
          entièrement le Kobold. Cependant, si vous remarquez que le matériau à
          l'intérieur du composteur est trop humide ou qu'il est devenu
          compacté, il est préférable de le remplacer par un nouveau starter.
          <picture>
            <img
              alt="Remplacer le GEME Kobold"
              src="/assets/images/geme-kobold/faq/geme-kobold-get-rock.png"
              style={{ maxWidth: '100%', marginTop: '15px' }}
            />
          </picture>
        </>
      ),
    },

    {
      slug: 'how-often-should-i-add-geme-kobold',
      question: 'À quelle fréquence devrais-je ajouter du GEME Kobold?',
      answer: (
        <>
          <p>
            Ce processus repose plus sur l'expérience que sur un chiffre fixe.
            La fréquence à laquelle vous devez ajouter GEME Kobold dépend de la
            quantité de déchets que vous ajoutez et de la fréquence à laquelle
            vous enlevez le compost.
          </p>
          <br></br>

          <p>
            Votre appareil GEME est livré avec un pack de démarrage de 1,5 kg de
            GEME Kobold et des matériaux régulateurs d'humidité. Plus vous
            ajoutez de déchets et plus vous enlevez souvent du compost, plus
            vous devrez ajouter fréquemment du nouveau GEME Kobold.
          </p>
          <br></br>

          <p>
            Après l'activation de GEME-Kobold, ajoutez 500g de déchets
            quotidiennement. Enlevez le compost tous les deux mois, en laissant
            une partie pour enrichir le GEME-Kobold restant. Ajoutez un petit
            pack de GEME Kobold toutes les deux semaines.
          </p>
          <br></br>
          <p>
            Par exemple, une famille de deux personnes ajoutant 100g de déchets
            par jour n'a besoin de retirer le compost qu'une fois par an.
            Commencez à ajouter GEME Kobold à ce moment-là. Si la décomposition
            ralentit, commencez à ajouter du Kobold plus tôt.
          </p>

          <picture>
            <img
              alt="Remplacer GEME Kobold"
              src="/assets/images/geme-kobold/faq/when-and-how-to-add-kobold.png"
              style={{ maxWidth: '100%', marginTop: '15px' }}
            />
          </picture>

          <p>
            Pour plus de détails, veuillez consulter l{' '}
            <a
              className="text-v2311-primary"
              href="/help-center/docs/faq/how-to-use/how-often-should-i-add-geme-kobold"
            >
              article du centre d'aide
            </a>
            .
          </p>
        </>
      ),
    },
    {
      slug: 'how-often-should-i-replace-the-kobold',
      question:
        'Étant donné que Kobold contient des bactéries, est-il dangereux pour les humains et les animaux?',
      answer: (
        <>
          Non, les bactéries contenues dans GEME Kobold ne sont pas dangereuses.
          Ce sont des microbes bénéfiques spécifiquement choisis qui jouent un
          rôle vital dans le compostage. En microbiologie, de nombreuses
          bactéries sont connues pour soutenir des processus naturels, tels que
          la décomposition des matières organiques en compost. Ces microbes sont
          similaires aux bactéries que l'on trouve dans le sol sain ou les
          aliments fermentés. Ils se concentrent sur la décomposition des
          déchets alimentaires de manière efficace, sans poser de risque pour
          les humains, les animaux de compagnie ou l'environnement. Les souches
          soigneusement sélectionnées garantissent un compostage sûr et
          efficace. De plus, cela a été bien testé et certifié.
        </>
      ),
    },

    {
      slug: 'how-often-should-i-replace-the-kobold',
      question: 'Puis-je utiliser GEME Kobold en dehors du GEME Composteur?',
      answer: (
        <>
          Non, GEME Kobold est spécifiquement conçu pour une utilisation dans le
          composteur GEME. Les microbes de GEME Kobold nécessitent un
          environnement contrôlé, comme celui du composteur GEME, où des
          conditions telles que la température, l'humidité et la circulation de
          l'air sont optimisées pour un compostage efficace. L'utilisation de
          GEME Kobold en dehors de cet environnement pourrait ne pas donner les
          résultats souhaités car les conditions nécessaires à la croissance et
          à la décomposition microbienne ne sont pas présentes.
          <br />
          <br />
          <b>Remarque</b> : Si vous achetez et utilisez Kobold sans le
          composteur GEME, GEME n'est pas responsable du résultat.
        </>
      ),
    },
    {
      slug: 'how-often-should-i-replace-the-kobold',
      question:
        'Puis-je utiliser d’autres matériaux de démarrage de compost dans le composteur GEME?',
      answer: (
        <>
          Bien que d'autres matériaux de démarrage de compost puissent
          fonctionner dans différents systèmes de compostage, GEME Kobold est
          spécifiquement conçu pour le composteur GEME. Son mélange unique de
          microbes garantit une décomposition optimale dans l'environnement
          contrôlé de la machine. L'utilisation d'autres matériaux de démarrage
          peut ne pas donner les mêmes résultats efficaces, car ils ne sont pas
          adaptés au processus spécifique de GEME.
          <br />
          <br />
          <b>Remarque</b> : Si vous utilisez d'autres matériaux de démarrage
          avec le composteur GEME, GEME n'est pas responsable du résultat.
        </>
      ),
    },
    {
      slug: 'where-can-i-buy-more-kobold',
      question: 'Où puis-je acheter plus de Kobold?',
      answer: (
        <>
          Ici, sur cette page. Faites défiler vers le haut pour commander
          maintenant.
        </>
      ),
    },
  ],
}
