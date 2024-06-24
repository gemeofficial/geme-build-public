import Image from 'next/image'

const data = {
  title: 'Our People',
  description:
    ' We are a global team, with great talents come from all over the world. Combining all skill set to do one thing and do it well.',
  people: [
    {
      name: 'MARCOEN Jean Marie',
      title: 'Co-Founder / Chief Science Researcher',
    },
    {
      name: 'Vivian Law',
      title: 'Co-Founder / Chief Trouble Maker',
    },
    {
      name: 'Athom Ng',
      title: 'Co-Founder / Chief Problem Solver',
    },

    {
      name: 'Hans King',
      title: 'Microorganism Researcher',
    },
    {
      name: 'Nobuto',
      title: 'Microorganism Researcher',
    },
    {
      name: 'Alex Yun',
      title: 'VP, Sales',
    },

    {
      name: 'Ethan Watson',
      title: 'VP, Logistics',
    },
    {
      name: 'Isac Chan',
      title: 'VP, eCommerce',
    },
    {
      name: 'Joey Lee',
      title: 'VP, Customer Experience',
    },
    {
      name: 'Jack Lu',
      title: 'VP, Marketing',
    },
    {
      name: 'Kacy',
      title: 'Director, Marketing',
    },
    {
      name: 'Martin Miller',
      title: 'Director, Sales',
    },
    {
      name: 'Stella Jo',
      title: 'Chief Designer',
    },
    {
      name: 'Alex Bang',
      title: 'Platform Engineer',
    },
    {
      name: 'Johnson Yan',
      title: 'Web Engineer',
    },
    {
      name: 'Yi Zhang',
      title: 'Product Engineer',
    },
    {
      name: 'Tom Puro',
      title: 'Customer Experience',
    },
    {
      name: 'Ken Stone',
      title: 'Partner, Creative',
    },
  ],
  desc: 'Quasi est quaerat. Sit molestiae et. Provident ad dolorem occaecati eos iste. Soluta rerum quidem minus ut molestiae velit error quod. Excepturi quidem expedita molestias quas.',
  bodyText:
    'Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat fugiat. Quasi aperiam sit non sit neque reprehenderit.',
  mainImgUrl:
    'https://images.unsplash.com/photo-1670272502246-768d249768ca?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1152&q=80',
  imgSectionUrl1:
    'https://images.unsplash.com/photo-1605656816944-971cd5c1407f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=768&h=604&q=80',
  imgSectionUrl2:
    'https://images.unsplash.com/photo-1568992687947-868a62a9f521?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1152&h=842&q=80',
  imgSectionUrl3:
    'https://images.unsplash.com/photo-1612872087720-bb876e2e67d1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=768&h=604&q=80',
}

export function AboutContentSection3() {
  return (
    <div className="bg-white mt-24 lg:mt-40 mx-auto max-w-xl lg:max-w-7xl px-8 lg:px-12 2xl:px-0">
      <div className="mx-auto max-w-2xl lg:mx-0">
        <h2 className="text-3xl font-bold tracking-tight text-v2311-text-yellow sm:text-4xl">
          {data.title}
        </h2>
        <p className="text-gray-600 mt-2">{data.description}</p>
      </div>
      <ul
        role="list"
        className="mx-auto mt-14 grid max-w-2xl grid-cols-2 gap-x-8 gap-y-16 text-center sm:grid-cols-3 md:grid-cols-4 lg:mx-0 lg:max-w-none lg:grid-cols-5 xl:grid-cols-6"
      >
        {data.people.map((item, index) => (
          <li key={index}>
            <img
              className="mx-auto h-24 w-24 rounded-full"
              src="https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80"
              alt=""
            />
            <h3 className="mt-6 text-base font-semibold leading-7 tracking-tight text-gray-900">
              {item.name}
            </h3>
            <p className="text-sm leading-6 text-gray-600">{item.title}</p>
          </li>
        ))}
      </ul>
    </div>
  )

  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto grid max-w-7xl gap-x-8 gap-y-20 px-6 lg:px-8 xl:grid-cols-3">
        <div className="max-w-2xl">
          <h2 className="text-3xl font-bold tracking-tight text-v2311-text-yellow sm:text-4xl">
            Our People
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            We are a global team, with great talents come from all over the
            world. Combining all skill set to do one thing and do it well.
          </p>
        </div>
        <ul
          role="list"
          className="grid gap-x-8 gap-y-12 sm:grid-cols-2 sm:gap-y-16 xl:col-span-2"
        >
          <li>
            <div className="flex items-center gap-x-6">
              <img
                className="h-16 w-16 rounded-full"
                src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                alt=""
              />
              <div>
                <h3 className="text-base font-semibold leading-7 tracking-tight text-gray-900">
                  Leslie Alexander
                </h3>
                <p className="text-sm font-semibold leading-6 text-indigo-600">
                  Co-Founder / CEO
                </p>
              </div>
            </div>
          </li>

          <li>
            <div className="flex items-center gap-x-6">
              <img
                className="h-16 w-16 rounded-full"
                src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                alt=""
              />
              <div>
                <h3 className="text-base font-semibold leading-7 tracking-tight text-gray-900">
                  Leslie Alexander
                </h3>
                <p className="text-sm font-semibold leading-6 text-indigo-600">
                  Co-Founder / CEO
                </p>
              </div>
            </div>
          </li>

          <li>
            <div className="flex items-center gap-x-6">
              <img
                className="h-16 w-16 rounded-full"
                src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                alt=""
              />
              <div>
                <h3 className="text-base font-semibold leading-7 tracking-tight text-gray-900">
                  Leslie Alexander
                </h3>
                <p className="text-sm font-semibold leading-6 text-indigo-600">
                  Co-Founder / CEO
                </p>
              </div>
            </div>
          </li>

          <li>
            <div className="flex items-center gap-x-6">
              <img
                className="h-16 w-16 rounded-full"
                src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                alt=""
              />
              <div>
                <h3 className="text-base font-semibold leading-7 tracking-tight text-gray-900">
                  Leslie Alexander
                </h3>
                <p className="text-sm font-semibold leading-6 text-indigo-600">
                  Co-Founder / CEO
                </p>
              </div>
            </div>
          </li>

          <li>
            <div className="flex items-center gap-x-6">
              <img
                className="h-16 w-16 rounded-full"
                src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                alt=""
              />
              <div>
                <h3 className="text-base font-semibold leading-7 tracking-tight text-gray-900">
                  Leslie Alexander
                </h3>
                <p className="text-sm font-semibold leading-6 text-indigo-600">
                  Co-Founder / CEO
                </p>
              </div>
            </div>
          </li>

          <li>
            <div className="flex items-center gap-x-6">
              <img
                className="h-16 w-16 rounded-full"
                src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                alt=""
              />
              <div>
                <h3 className="text-base font-semibold leading-7 tracking-tight text-gray-900">
                  Leslie Alexander
                </h3>
                <p className="text-sm font-semibold leading-6 text-indigo-600">
                  Co-Founder / CEO
                </p>
              </div>
            </div>
          </li>

          <li>
            <div className="flex items-center gap-x-6">
              <img
                className="h-16 w-16 rounded-full"
                src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                alt=""
              />
              <div>
                <h3 className="text-base font-semibold leading-7 tracking-tight text-gray-900">
                  Leslie Alexander
                </h3>
                <p className="text-sm font-semibold leading-6 text-indigo-600">
                  Co-Founder / CEO
                </p>
              </div>
            </div>
          </li>

          <li>
            <div className="flex items-center gap-x-6">
              <img
                className="h-16 w-16 rounded-full"
                src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                alt=""
              />
              <div>
                <h3 className="text-base font-semibold leading-7 tracking-tight text-gray-900">
                  Leslie Alexander
                </h3>
                <p className="text-sm font-semibold leading-6 text-indigo-600">
                  Co-Founder / CEO
                </p>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  )

  return (
    <div className="mt-24 md:mt-40 mx-auto max-w-xl lg:max-w-7xl px-8 lg:px-12 2xl:px-0">
      <div className="lg:flex items-start justify-between">
        <div className="lg:w-[55%] lg:mr-[5%]">
          <div className="font-bold text-v2311-text-yellow text-2xl sm:text-3xl mb-2">
            {data.title}
          </div>
          <div className="text-gray-600 mt-4 text-lg">{data.desc}</div>
          <div className="text-[#777] mt-4">{data.bodyText}</div>
        </div>

        <Image
          className="hidden lg:block w-[600px] h-[400px] object-cover rounded-xl"
          src={data.mainImgUrl}
          width={600}
          height={400}
          alt=""
        />
      </div>

      <div className="mt-12">
        {/* < 768 + */}
        <div className="md:hidden flex items-start h-[300px] overflow-hidden">
          <div className="flex flex-col justify-between h-full flex-shrink-0 -translate-x-12">
            <Image
              className="w-[192px] h-[144px] object-cover rounded-xl"
              src={data.imgSectionUrl1}
              width={192}
              height={144}
              alt=""
            />

            <Image
              className="w-[192px] h-[144px] object-cover rounded-xl"
              src={data.imgSectionUrl3}
              width={192}
              height={144}
              alt=""
            />
          </div>

          <div className="overflow-hidden h-full ml-4 w-[600px] flex-shrink-0 -translate-x-12">
            <Image
              className="w-full h-full object-cover rounded-xl"
              src={data.imgSectionUrl2}
              width={600}
              height={400}
              alt=""
            />
          </div>
        </div>

        {/* > 768 && < 1024 +  */}
        <div className="hidden md:block lg:hidden space-y-6">
          <div className="flex items-end overflow-hidden space-x-6">
            <Image
              className="w-[384px] h-[288px] object-cover rounded-xl flex-shrink-0 -translate-x-48"
              src={data.imgSectionUrl1}
              width={384}
              height={288}
              alt=""
            />

            <Image
              className="w-[600px] h-[400px] object-cover rounded-xl flex-shrink-0 -translate-x-48"
              src={data.mainImgUrl}
              width={600}
              height={400}
              alt=""
            />
          </div>

          <div className="flex items-start overflow-hidden space-x-6">
            <Image
              className="w-[600px] h-[400px] object-cover rounded-xl flex-shrink-0 -translate-x-48"
              src={data.imgSectionUrl2}
              width={600}
              height={400}
              alt=""
            />

            <Image
              className="w-[384px] h-[288px] object-cover rounded-xl flex-shrink-0 -translate-x-48"
              src={data.imgSectionUrl3}
              width={384}
              height={288}
              alt=""
            />
          </div>
        </div>

        {/* > 1024 +  */}
        <div className="hidden lg:flex space-x-8 overflow-hidden relative">
          <Image
            className="w-[384px] h-[288px] object-cover rounded-xl -translate-x-24"
            src={data.imgSectionUrl1}
            width={384}
            height={288}
            alt=""
          />

          <Image
            className="w-[600px] h-[400px] object-cover rounded-xl flex-shrink-0 -translate-x-24"
            src={data.imgSectionUrl2}
            width={600}
            height={400}
            alt=""
          />

          <Image
            className="w-[384px] h-[288px] object-cover rounded-xl flex-shrink-0 -translate-x-24"
            src={data.imgSectionUrl3}
            width={384}
            height={288}
            alt=""
          />
        </div>
      </div>
    </div>
  )
}
