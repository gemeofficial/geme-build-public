import Image from 'next/image'
import Link from 'next/link'
import { PlayIcon } from '../video-inline-player'
import CountDown from './CountDown'

export function IFAHeroSection() {
  return (
    <div className="relative md:min-h-screen md:max-h-screen lg:min-h-[1100px] lg:max-h-max 2xl:min-h-screen 2xl:max-h-screen">
      <Image
        src="https://assets-global.website-files.com/62fd8f5ef7f3fd840d5308f1/62fe805f827b408e3ebf0233_image-bg-hero-v1-museum-template.webp"
        height={1080}
        width={1920}
        alt="hero section background"
        className="w-full h-full md:min-h-screen md:max-h-screen lg:min-h-[1100px] lg:max-h-max 2xl:min-h-screen 2xl:max-h-screen object-cover"
        priority
      />
      <div className="flex flex-col 2xl:flex-row absolute inset-x-[10%] inset-y-10 md:inset-y-[5%] xl:inset-y-[10%] rounded-lg bg-gradient-to-r from-black/80 to-black/60 text-white p-10">
        {/* 左侧布局 */}
        <div className="3xl:w-[40%] mr-[10%] relative">
          <h1 className="text-2xl md:text-4xl 3xl:text-6xl text-nowrap">
            Notice Of Exhibition
          </h1>
          {/* pc端显示阶梯布局 */}
          <div className="hidden 2xl:block">
            <div className="text-xl md:text-2xl 3xl:text-5xl pt-10">GEME</div>
            <div className="text-xl md:text-2xl 3xl:text-5xl ml-[30%]">In</div>
            <div className="text-xl md:text-2xl 3xl:text-5xl ml-[50%]">
              <span>IFA</span>
              <span className="text-lg block">Exhibition</span>
            </div>
          </div>

          {/* 平板显示正常布局 */}
          <div className="text-xl md:text-2xl 3xl:text-5xl md:pt-5 lg:pt-10 text-v2311-text-yellow">
            GEME In IFA Exhibition
          </div>

          <div className="md:text-lg 2xl:text-xl mt-8 md:mt-4 lg:mt-8 2xl:absolute 2xl:bottom-0">
            IFA Berlin 6-10 September 2024
          </div>
        </div>
        <div className="flex-1 flex flex-col text-sm md:text-base lg:text-lg 2xl:text-base 3xl:text-lg md:mt-10 lg:mt-20 2xl:mt-0">
          {/* 活动标题 */}
          <h2 className="text-xl md:text-3xl 3xl:text-4xl text-center">
            Activity
          </h2>
          <div className="mt-4 flex items-start justify-between">
            <div className="mr-8 flex flex-col justify-between h-full">
              {/* 活动说明 */}
              <div className='text-sm md:text-base lg:text-lg 2xl:text-base 3xl:text-lg'>
                In the run-up to IFA, GEME is hosting one Lucky draw, click the
                link to participate!
                <div className="2xl:hidden 3xl:block">
                  The specific steps are: upload a video of you using the GEME
                  compost machine in your daily life to us, and you will have
                  the opportunity to receive a 180-day dose of Kobold provided
                  by GEME.
                </div>
              </div>
              {/* 上传视频video */}
              <Link
                href="/"
                className="relative overflow-hidden text-sm md:text-lg 3xl:text-2xl font-bold text-white xl:w-auto flex items-center justify-center border-solid border-2 border-white rounded-xl max-w-[90%] md:mt-6 mb-1"
              >
                <span className="absolute inset-0 flex items-center justify-center">
                  Immediate participation
                </span>
                <div className="h-full translate-x-[-25%] transition-all duration-500 hover:translate-x-[25%] ease-out min-h-8 md:min-h-10 3xl:min-h-14 w-[200%] flex flex-shrink-0">
                  <div className="w-full h-full bg-gradient-to-r from-white/20 to-white/60 min-h-8 md:min-h-10 3xl:min-h-14"></div>
                  <div className="w-full h-full min-h-8 md:min-h-10 3xl:min-h-14"></div>
                </div>
              </Link>
            </div>
            {/* 奖品图 */}
            <Image
              src="https://www.geme.bio/assets/images/geme-kobold/product-image-24.jpg"
              height={600}
              width={600}
              alt="geme kobold"
              className="w-28 h-28 md:w-40 md:h-40 3xl:w-52 3xl:h-52 object-cover rounded-lg"
            />
          </div>

          {/* 倒计时 + 中奖概率 */}
          <div className="flex justify-between mt-8 gap-8 flex-1">
            <div className="flex-1 relative">
              <div className="">Countdown to the next draw</div>
              <CountDown date={Date.now() + 3600 * 1000 * 48} />
              <div className="">Your current probability of winning is:</div>
              <div className="text-xl md:text-3xl 2xl:text-2xl 3xl:text-4xl my-2 lg:my-5 2xl:my-3 3xl:my-4 text-v2311-text-yellow">
                1 / 8
              </div>
              <div className="absolute bottom-0 text-sm 3xl:text-lg">
                Description: 1/N, N means there are currently N people
                participating in the activity, the earlier you participate, the
                greater your chance of winning!
              </div>
            </div>
            {/* video */}
            <div className="flex flex-col gap-2">
              <div className="relative h-full w-28 md:w-40 lg:w-[300px] 2xl:w-40 3xl:w-[350px] overflow-hidden rounded-xl group">
                <div className="relative h-full w-full object-cover transform-gpu transition-transform group-hover:scale-125 duration-[0.25s] ease-[cubic-bezier(0.24, 0.8, 0.4, 1)]">
                  <video
                    className="w-full h-full object-cover"
                    controls={false}
                    autoPlay
                    playsInline
                    muted
                    loop
                    poster={'/assets/images/home-v2311/hero-blurred.webp'}
                    src={
                      'https://www-geme-bio-us.s3.us-west-1.amazonaws.com/hero-banner-window-video-19s-480p.mp4'
                    }
                  >
                    Your browser does not support HTML5 video.
                  </video>
                </div>

                <button
                  type="button"
                  className="absolute inset-0 w-full opacity-80 hover:opacity-100 transition-opacity duration-200"
                  title="Play fullscreen video"
                >
                  {/* 大屏显示大按钮 */}
                  <PlayIcon className="m-auto hidden md:block" size="medium" />

                  {/* 1024以下显示小按钮 */}
                  <PlayIcon className="m-auto md:hidden" size="small" />
                </button>
              </div>
              <div className="text-center">Sample video</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
