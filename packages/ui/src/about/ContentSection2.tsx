const data = {
  title: 'Our values',
  desc: 'Lorem ipsum dolor sit amet consect adipisicing elit. Possimus magnam voluptatum cupiditate veritatis in accusamus quisquam.',
  dataList: [
    {
      title: 'Be world-class',
      desc: 'Aut illo quae. Ut et harum ea animi natus. Culpa maiores et sed sint et magnam exercitationem quia. Ullam voluptas nihil vitae dicta molestiae et. Aliquid velit porro vero.',
    },
    {
      title: 'Share everything you know',
      desc: 'Mollitia delectus a omnis. Quae velit aliquid. Qui nulla maxime adipisci illo id molestiae. Cumque cum ut minus rerum architecto magnam consequatur. Quia quaerat minima.',
    },
    {
      title: 'Always learning',
      desc: 'Aut repellendus et officiis dolor possimus. Deserunt velit quasi sunt fuga error labore quia ipsum. Commodi autem voluptatem nam. Quos voluptatem totam.',
    },
    {
      title: 'Be supportive',
      desc: 'Magnam provident veritatis odit. Vitae eligendi repellat non. Eum fugit impedit veritatis ducimus. Non qui aspernatur laudantium modi. Praesentium rerum error deserunt harum.',
    },
    {
      title: 'Take responsibility',
      desc: 'Sit minus expedita quam in ullam molestiae dignissimos in harum. Tenetur dolorem iure. Non nesciunt dolorem veniam necessitatibus laboriosam voluptas perspiciatis error.',
    },
    {
      title: 'Enjoy downtime',
      desc: 'Ipsa in earum deserunt aut. Quos minus aut animi et soluta. Ipsum dicta ut quia eius. Possimus reprehenderit iste aspernatur ut est velit consequatur distinctio.',
    },
  ],
}

export default function ContentSection2() {
  return (
    <div className="mt-10 lg:mt-0 mx-auto max-w-xl lg:max-w-7xl px-8 lg:px-12 2xl:px-0">
      <div className="font-bold text-emerald-600 text-2xl sm:text-3xl mb-2">
        {data.title}
      </div>
      <div className="text-gray-600 mt-2">{data.desc}</div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-12 mt-4">
        {data.dataList.map((item) => (
          <div key={item.title}>
            <div className="text-lg font-semibold">{item.title}</div>
            <div className="text-gray-600 mt-2">{item.desc}</div>
          </div>
        ))}
      </div>
    </div>
  )
}
