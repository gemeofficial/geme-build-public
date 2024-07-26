/* eslint-disable react/no-unescaped-entities */
import Image from 'next/image'
import GcnCustomizedDevelopment, {
  IGcnCustomizedDevelopmentProps,
} from './components/GcnCustomizedDevelopment'
import GcnIntelligentManagementApp from './components/GcnIntelligentManagementApp'
import HeroSection, { IGCNHeroSectionProps } from './components/HeroSection'
import { IAlternativeSideBySideWithImagesProps } from '../../components/feature-sections'

// 第1部分配置文件 En版
const gcnHeroSectionMessagesObj: IGCNHeroSectionProps = {
  title: 'Intelligent Waste Separation Total Solution',
  description:
    'AI Intelligent Recycling Management Platform + Big Data management System',
  subDescription1: (
    <>
      <strong className="flex-1 text-left ">
        GCN Intelligent Management Terminal Platform
      </strong>
      <strong className="flex-1 text-left lg:text-right">
        GCN Intelligent Management APP
      </strong>
    </>
  ),
  subDescription2: (
    <>
      <p className="mt-4 text-lg text-gray-500">
        GreenCityNetworks (GCN) is our waste management platform and the common
        platform that combines all our solutions.
      </p>
      <p className="mt-4 text-lg text-gray-500">
        GCN provides a monitoring environment, smart dashboard, analysis and
        control center in a comprehensive and simple package.
      </p>
      <p className="mt-4 text-lg text-gray-500">
        Based on mobile internet, big data, IoT, cloud computing, and artificial
        intelligence, GCN can be used anywhere you have a desktop or mobile
        terminal with internet connection.
      </p>
      <p className="mt-4 text-lg text-gray-500">
        It gives you complete control and insight into your waste management
        operations and proves cost reduction benefits across all of your
        operational departments.
      </p>
    </>
  ),
}

// 第2部分配置文件 En版
const gcnIntelligentManagementAppProps: IAlternativeSideBySideWithImagesProps =
  {
    textAndImageblocks: [
      {
        name: 'GCN Intelligent Management APP',
        LeftBlock: () => (
          <>
            <div className="mx-auto max-w-xl px-4 sm:px-6 lg:mx-0 lg:max-w-none lg:py-16 lg:px-0">
              <div>
                <div className="mt-6">
                  <h2 className="text-3xl font-bold tracking-tight text-gray-900">
                    <span className="text-emerald-600">GCN</span> Intelligent
                    Management APP
                  </h2>
                  <p className="mt-4 text-lg text-gray-500">
                    Operation personnel can easily complete it through the
                    Sorting Manager APP anytime and anywhere.
                  </p>
                  <div className="mt-4 text-lg prose text-gray-500">
                    <ul>
                      <li>Equipment activation, inspection & Monitoring</li>
                      <li>Trash Removal</li>
                      <li>Fault Report</li>
                      <li>Data Acquisition & Analysis</li>
                    </ul>
                  </div>
                  <p className="mt-4 text-lg text-gray-500">
                    At the same time, it integrates with other systems to obtain
                    various kinds of waste management data reports, which can
                    comprehensively improve the effectiveness of operation
                    managers. Let the sunshine help you compress the garbage!
                  </p>
                </div>
              </div>
            </div>
          </>
        ),
        RightBlock: () => (
          <>
            <Image
              className="relative mx-auto"
              width={490}
              height={490}
              src="/assets/images/green-city-networks/s2-1.png"
              alt="a screen of the GCN Intelligent Management APP"
            />
          </>
        ),
      },
    ],
  }

// 第3部分配置文件 En版
const gcnCustomizedDevelopmentProps: IGcnCustomizedDevelopmentProps = {
  title: (
    <>
      <span className="text-emerald-600">GCN</span> Customized Development
    </>
  ),
  subTitle: 'Intelligent development of management platform/APP',
  description: (
    <>
      <p className="mt-3 text-lg text-gray-500">
        Meet your individual needs for functionality
        <br></br>
        Create smooth user experience through native or HTML5 apps developed on
        IOS/ANDROID
      </p>
      <h3 className="mt-6 text-xl font-bold tracking-tight text-gray-900">
        Visual custom collocation
      </h3>
      <p className="mt-3 text-lg text-gray-500">
        Custom templates allow you to build a personalized management platform
        by dragging and dropping freely
      </p>
      <h3 className="mt-6 text-xl font-bold tracking-tight text-gray-900">
        Industry Standardized Templates
      </h3>
      <p className="mt-3 text-lg text-gray-500">
        Industry Standardized Templates Professional template for intelligent
        waste management industry, comprehensive support, safe and stable, and
        short delivery cycle
      </p>
      <h3 className="mt-6 text-xl font-bold tracking-tight text-gray-900">
        Powerful data analysis function
      </h3>
      <p className="mt-3 text-lg text-gray-500">
        Make waste management operations more accurate
      </p>
    </>
  ),
  imageAlt: 'GEME green city network',
}

export function GreenCityNetworksPageEn() {
  return (
    <>
      <HeroSection {...gcnHeroSectionMessagesObj} />
      <GcnIntelligentManagementApp {...gcnIntelligentManagementAppProps} />
      <GcnCustomizedDevelopment {...gcnCustomizedDevelopmentProps} />
    </>
  )
}
