import Image from "next/image";

export default function ContentSection3() {
  return (
    <div className="mt-40 mx-auto max-w-xl px-4 md:px-0 lg:max-w-7xl">
      <div className="flex items-start justify-between">
        <div className="w-[55%] mr-[5%]">
          <div className="font-bold text-emerald-600 text-2xl sm:text-3xl mb-2">Our people</div>
          <div className="text-gray-600 mt-4 text-lg">Quasi est quaerat. Sit molestiae et. Provident ad dolorem occaecati eos iste. Soluta rerum quidem minus ut molestiae velit error quod. Excepturi quidem expedita molestias quas.</div>
          <div className="text-[#777] mt-4">Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat fugiat. Quasi aperiam sit non sit neque reprehenderit.</div>
        </div>

        <Image
          className="w-[600px] h-[400px] object-cover rounded-xl"
          src='https://images.unsplash.com/photo-1670272502246-768d249768ca?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1152&q=80' 
          width={600}
          height={400}
          alt="img"
        />
      </div>
      <div className="flex space-x-8 overflow-hidden mt-12">
        <div className="flex-1 overflow-hidden relative">
          <Image
            className="w-[384px] h-[288px] object-cover rounded-xl absolute bottom-0"
            src='https://images.unsplash.com/photo-1605656816944-971cd5c1407f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=768&h=604&q=80' 
            width={384}
            height={288}
            alt="img"
          />
        </div>
        <Image
          className="w-[600px] h-[400px] object-cover rounded-xl"
          src='https://images.unsplash.com/photo-1568992687947-868a62a9f521?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1152&h=842&q=80' 
          width={176}
          height={264}
          alt="img"
        />
        <Image
          className="w-[384px] h-[288px] object-cover rounded-xl"
          src='https://images.unsplash.com/photo-1612872087720-bb876e2e67d1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=768&h=604&q=80' 
          width={384}
          height={288}
          alt="img"
        />
      </div>
    </div>
  )
}