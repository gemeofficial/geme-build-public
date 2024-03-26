import SelfRepairView from './components/SelfRepairView'
import { IFaqOffsetWithSupportingTextProps } from './components/FaqOffsetWithSupportingText'
import { IHeaderCenteredProps } from './components/Hero'

// 页面内容配置文件1  En版本
const faqGroups: IFaqOffsetWithSupportingTextProps[] = [
  {
    title: 'No Power',
    description: `I'm having trouble turning on my GEME. The front LED lights are not coming on, even when I press the power button.`,
    faqs: [
      {
        question: 'Are the plug and socket properly connected?',
        answer: 'Please connect the plug to the socket correctly.',
      },
      {
        question: 'Is the power 110/220V?',
        answer: 'Please use 110/220V voltage.',
      },
      {
        question: 'None of the above cases?',
        answer: 'Please contact the after-sales service center.',
      },
    ],
  },
  {
    title: 'Warning Sound',
    description: `I'm experiencing an issue with my GEME. When it's running, it makes a "bibibi" warning sound and the LED display shows an error code.`,
    faqs: [
      {
        question: 'When the code is displayed as follows:',
        answer: (
          <div className="prose text-gray-600 prose-p:my-0 prose-ul:my-0 prose-img:mb-2">
            <img src="/assets/images/self-repair/stirringIndicatorLight.png" />
            <p>This code indicates that the mixing is abnormal.</p>
            <ul>
              <li>
                Check if there is a hard foreign object stuck in the
                discomposition tank.
              </li>
              <li>
                Remove the foreign object, close the lid and check whether the
                code is still displayed.
              </li>
              <li>
                If the above code is still displayed, please contact the service
                center.
              </li>
            </ul>
          </div>
        ),
      },
      {
        question: 'When the code is displayed as follows:',
        answer: (
          <div className="prose text-gray-600 prose-p:my-0 prose-ul:my-0 prose-img:mb-2">
            <img src="/assets/images/self-repair/uvLampIndicatorLight.png" />
            <p>
              Please{' '}
              <a href="https://youtu.be/VdAtQfpSQ_E" target="_blank">
                change the UV lamp.
              </a>
            </p>
          </div>
        ),
      },
    ],
  },
  {
    title: 'Noise',
    description: `I've noticed that my GEME is making unusual noises while it's running. The sounds are distinctively different from what I would typically hear during normal operation.`,
    faqs: [
      {
        question:
          'Is there any hard foreign object stuck in the discomposition tank? ',
        answer: 'Please remove hard objects.',
      },
      {
        question:
          'Does the noise generated periodically when the stirring motor is running?',
        answer: (
          <div className="prose text-gray-600 prose-p:my-0 prose-ul:my-0 prose-img:mb-2">
            This is caused by the stirring motor. Please{' '}
            <a href="https://youtu.be/rthDSasoOrY" target="_blank">
              adjust the feet
            </a>{' '}
            of the GEME to keep the device on a level surface for smooth
            operation or contact the after-sales service center.
          </div>
        ),
      },
      {
        question: 'Does the noise come from the fan? ',
        answer: `Please check where the equipment is placed to ensure the air outlet is not blocked, or contact the after-sales service center.`,
      },
      {
        question:
          "Does the noise sound like intermittent noise of 'du'  and the interior of the decomposition tank is too dry?",
        answer: `Add about 200 to 500 ml of water to the decomposition tank or you can put in bio-waste with more water.`,
      },
    ],
  },
  {
    title: 'Bad Smell',
    description: `I have noticed that my GEME gives off an unpleasant odor.`,
    faqs: [
      {
        question:
          'Does the odor spill out regardless of whether the lid is closed or not?',
        answer: (
          <div className="prose text-gray-600 prose-p:my-0 prose-ul:my-0 prose-img:mb-2">
            <p>
              Please check if the material generated in your GEME is too moist.
              Anaerobic fermentation triggered by too much moisture can produce
              an odor.
            </p>
            <ul>
              <li>Please check if the power of your unit is always on.</li>
              <li>
                Please stop putting bio-waste for 2-3 days and press the
                deodorization and dehumidification button.
              </li>
              <li>
                If the humidity of the by-product is too high, please take it
                out and place it in a ventilated place to allow it to dry before
                activating it for use again.
              </li>
            </ul>
          </div>
        ),
      },
      {
        question:
          'There is no odor from the by-product inside GEME, but there is an odor from the gas discharged from the unit?',
        answer: (
          <div className="prose text-gray-600 prose-p:my-0 prose-ul:my-0 prose-img:mb-2">
            <p>This is a problem with the deodorization unit.</p>
            <ul>
              <li>Please check if the filter is clogged and clean it.</li>
              <li>
                Please check if the exhaust port is blocked and clear the
                blockage.
              </li>
              <li>Otherwise, please contact the after-sales service center.</li>
            </ul>
          </div>
        ),
      },
      {
        question: 'GEME has a slight odor.',
        answer: `Please press the deodorization button.`,
      },
    ],
  },
  {
    title: 'Not Strring',
    description: `The agitator shaft on my GEME has stopped rotating.`,
    faqs: [
      {
        question: 'Are there too many by-products?',
        answer: `
        Keep the same amount of by-products as the original microbes, and shovel out the rest.
        `,
      },
      {
        question: 'Is the internal state thick enough?',
        answer: `Stop putting in the garbage for 2-5 days, and use it normally after drying.`,
      },
      {
        question:
          'Are there any long fibers entangled with the stirring shaft?',
        answer: `Please remove the long fibers from the mixing shaft. Please cut up as much of your food waste as possible before putting it into the GEME.`,
      },
      {
        question: 'Is the motor not running?',
        answer: `Please consult the after-sales service center.`,
      },
    ],
  },
  {
    title: 'Waste Not Decomposed',
    description: `I've noticed that my waste is not decomposing at all after being put into my GEME, even after waiting for 1-3 days.`,
    faqs: [
      {
        question:
          'Is the agitagor motor abnormal and causes insufficient agitation?',
        answer: `Stirring motor failure, please contact the after-sales service center.`,
      },
      {
        question:
          'Did you feed too much bio-waste? (the average daily processing capacity is around 5kg)',
        answer: `Please stop putting in bio-waste for  2 to 5 days, and reusing it normally after the inside of the decomposition tank is dry.`,
      },
      {
        question: 'Did you put fruit peel or other fiber-rich bio-waste?',
        answer: `Cut the fiber-rich bio-waste into small pieces to accelerate the decomposition or decompose after a period of time.`,
      },
      {
        question: `Is everything fine but just the decomposition speed slower than before?`,
        answer: `Please add new microorganisms or replace them.`,
      },
    ],
  },
  {
    title: 'Wet or Slushy',
    description: `The by-product in my GEME is excessively wet or slushy.`,
    faqs: [
      {
        question: 'Did you put excessive bio-waste?',
        answer: `The average daily processing capacity is 5kg.
        Please stop putting in bio-waste for 2 to 5 days, and reusing it normally after the inside of the decomposition tank is dry.`,
      },
      {
        question: 'Did you put bio-waste which contains too much water?',
        answer: `Please stop putting in bio-waste for 2 to 5 days, and reusing it normally after the inside of the decomposition tank is dry.`,
      },
      {
        question: 'Did you turn off the power?',
        answer: `After using the power supply for 1~3 days, it will be used normally.`,
      },
    ],
  },
  {
    title: `Condensation`,
    description: 'There are water droplets on the inside lid of my GEME.',
    faqs: [
      {
        question: 'Did you put excessive bio-waste?',
        answer: `Press the dehumidify button and stop putting in bio-waste for 2~3 days.`,
      },
      {
        question: 'Is GEME installed in a cooler place(not during the winter)?',
        answer: `Please move GEME indoors.`,
      },
      {
        question: 'Did you forget to remove the foam pad under the product?',
        answer: `After removing the foam pad, press the dehumidification function button.`,
      },
      {
        question: `Is the exhaust filter in the decomposition tank clogged.`,
        answer: `Please clean the exhaust filter.`,
      },
    ],
  },
  {
    title: 'Insects',
    description: `I've noticed insects inside my GEME container, along with the food waste.`,
    faqs: [
      {
        question: 'Did you turn off the power?',
        answer: `Replace with new Microorganisms.`,
      },
    ],
  },
  {
    title: 'Too Dry',
    description: `I've noticed that the interior of the decomposition tank in my GEME is too dry, and both the waste and the GEME-Kobold appear to be dry as well. `,
    faqs: [
      {
        question: 'Is the amount of bio-waste too small?',
        answer: `Pour about 200 ml of water or put a proper amount of soup when you put in bio-waste.`,
      },
    ],
  },
]

// 页面内容配置文件2  En版本
const heroProps: IHeaderCenteredProps = {
  title: 'Self Repair',
  description: `Welcome to GEME's Self-Repair Guide! Discover how to fix your GEME's issue. Our step-by-step guide provides easy-to-follow instructions and visuals to help you troubleshoot and repair your devices. Don't let a broken gadget go to waste, learn to fix it by going through a simple checklist.`,
}

function SelfRepairPageEn() {
  const props = { faqGroups, heroProps }
  return (
    <>
      <link rel="canonical" href="https://www.geme.bio/self-repair" />
      <SelfRepairView {...props} />
    </>
  )
}
export { SelfRepairPageEn }
