import Image from 'next/image'
import Link from 'next/link'
import { PlayIcon } from '../video-inline-player'
import CountDown from './CountDown'

export function IFAHeroSection() {
  return (
    <div className="relative min-h-screen max-h-screen">
      <Image
        src="https://assets-global.website-files.com/62fd8f5ef7f3fd840d5308f1/62fe805f827b408e3ebf0233_image-bg-hero-v1-museum-template.webp"
        height={1080}
        width={1920}
        alt="hero section background"
        className="w-full h-full min-h-screen max-h-screen object-cover"
      />
      <div className="flex absolute inset-x-[10%] inset-y-10 md:inset-y-[5%] xl:inset-y-[10%] rounded-lg bg-gradient-to-r from-black/80 to-black/60 text-white p-10">
        <div className="w-[40%] mr-[10%] relative">
          <h1 className="text-6xl">Notice Of Exhibition</h1>
          <div className="text-5xl pt-10">GEME</div>
          <div className="text-5xl ml-44">In</div>
          <div className="text-5xl ml-80">
            <span>IFA</span>
            <span className="text-lg block">Exhibition</span>
          </div>
          <div className="text-xl mt-8 absolute bottom-0">
            IFA Berlin 6-10 September 2024
          </div>
        </div>
        <div className="flex-1 flex flex-col">
          <h2 className="text-4xl text-center">Activity</h2>
          <div className="mt-4 flex items-start justify-between gap-16">
            <div className="">
              <div className="text-lg">
                Now, in order to warm up the IFA exhibition, GEME is holding a
                lucky draw. The specific steps are: Upload a video of you using
                GEME Composter in your daily life to us and you will have a
                chance to receive a 180-day dose of Kobold from GEME.
              </div>
              <Link
                href="/"
                className="relative overflow-hidden text-sm md:text-lg xl:text-2xl font-bold text-white xl:w-auto flex items-center justify-center border-solid border-2 border-white rounded-xl max-w-[90%] mt-8"
              >
                <span className="absolute inset-0 flex items-center justify-center">
                  upload a video
                </span>
                <div className="h-full translate-x-[-25%] transition-all duration-500 hover:translate-x-[25%] ease-out min-h-14 w-[200%] flex flex-shrink-0">
                  <div className="w-full h-full bg-gradient-to-r from-white/20 to-white/60 min-h-14"></div>
                  <div className="w-full h-full min-h-14"></div>
                </div>
              </Link>
            </div>
            <Image
              src="https://www.geme.bio/assets/images/geme-kobold/product-image-24.jpg"
              height={600}
              width={600}
              alt="geme kobold"
              className="w-52 h-52 object-cover rounded-lg"
            />
          </div>

          <div className="flex justify-between mt-8 gap-8 flex-1">
            <div className="flex-1 relative text-lg">
              <div className="">Countdown to the next draw</div>
              <CountDown date={Date.now() + 3600 * 1000 * 48} />
              <div className="">Your current probability of winning is:</div>
              <div className="text-5xl my-4">1 / 10</div>
              <div className="absolute bottom-0">
                Description: 1/N, N means there are currently N people participating
                in the activity, the earlier you participate, the greater your
                chance of winning!
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <div className="relative h-full landscape:w-[180px] landscape:lg:w-[270px] landscape:2xl:w-[300px] rounded-xl landscape:rounded-xl overflow-hidden group">
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
                  <PlayIcon className="m-auto hidden lg:block" size="medium" />

                  {/* 1024以下显示小按钮 */}
                  <PlayIcon className="m-auto lg:hidden" size="small" />
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
