import Image from "next/image";

export default function ContentSection1() {
  return (
    <div className="mx-auto max-w-xl px-4 md:px-0 lg:max-w-7xl">
      <div className="font-bold text-emerald-600 text-2xl sm:text-3xl mb-2">Our Dreams</div>
      <div className="font-bold text-emerald-600 text-4xl sm:text-5xl xl:text-6xl mr-[40%]">All Things Live Forever and In Harmony with The Earth</div>
      <div className="flex items-start justify-between">
        <div className="w-[55%] mr-[5%]">
          <div className="mt-3 md:mt-5 max-w-md text-lg text-gray-500 sm:text-xl md:max-w-3xl">Dreams do not always belong to a few, innovations do not rise from the ground, nor is the desire to follow the laws of nature and" ALL THINGS LIVE FOREVER AND IN HARMONY WITH THE EARTH" a slogan written on a placard by environmentalists. Embracing the dream and innovating to achieve the good intentions of all mankind is the motivation for the GEME team members to start acting immediately.</div>
          <div className="mt-3 md:mt-5 max-w-md text-lg text-gray-500 sm:text-xl md:max-w-3xl">We are a group of "young people" who share a common dream. We are a team of project managers, engineering designers, microbiological scientists and natural agronomists who have been working in the field of waste treatment for more than 20 years, with the dream of "becoming a doctor of the earth" and constantly exploring and practicing.</div>
          <div className="mt-3 md:mt-5 max-w-md text-lg text-gray-500 sm:text-xl md:max-w-3xl">We combine advanced AI technology to design equipment with simple operation, comprehensive function and low cost; we apply the microorganisms extracted from nature to the treatment of biological waste to make everything circulate in an orderly manner in accordance with the laws of nature; and we apply the natural farming method that has been continuously improved in practice for more than 50 years to the cultivation of crops, so that organic food no longer belongs to a specific group of people, but by you to grow and produce in your balcony and backyard.</div>
          <div className="mt-3 md:mt-5 max-w-md text-lg text-gray-500 sm:text-xl md:max-w-3xl">In the future, we will continue to promote the proven microbial treatment technology to restore the consolidated soil's vitality and clear the polluted river.</div>
          <div className="mt-3 md:mt-5 max-w-md text-lg text-gray-500 sm:text-xl md:max-w-3xl">All this is not only our dream, but also the dream of every one of you who supports our products. Thank you for adding to environmental protection with just one small change. Thank you for working with us to protect our planet and realize our common dream.</div>
        </div>

        <div className="w-[40%] pl-20 flex flex-col items-start justify-between overflow-hidden space-y-20">
          <div>
            <div className="text-lg sm:text-5xl">44 million</div>
            <div className="text-gray-600 mt-4">Transactions every 24 hours</div>
          </div>

          <div>
            <div className="text-lg sm:text-5xl">$119 trillion</div>
            <div className="text-gray-600 mt-4">Assets under holding</div>
          </div>

          <div>
            <div className="text-lg sm:text-5xl">46,000</div>
            <div className="text-gray-600 mt-4">New users annually</div>
          </div>
        </div>

      </div>
      <div className="my-40">
        <Image
          className="w-full h-[500px] object-cover rounded-md"
          src='https://images.unsplash.com/photo-1529156069898-49953e39b3ac?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2832&q=80' 
          width={176}
          height={264}
          alt="img"
        />
      </div>
    </div>
  )
}