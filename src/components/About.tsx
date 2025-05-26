export const About = () => {
  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white">
              About me
            </h2>
            <div className="space-y-4 text-gray-600 dark:text-gray-300">
              <p>
                안녕하세요! 저는 최영비입니다.
              </p>
              <p>
                제 이름은 Yottabyte 처럼 
                무한 가능성의 컴퓨터공학을 꿈꾸며 만들어진 이름입니다.
              </p>
              <p>
                저는 새로운 기술에 관심이 많고,
                다양한 분야에 대한 지식을 쌓아가고 있습니다.
              </p>
              <p>
                꾸준한 것이 강점인 개발자가 되기 위해 노력하고 있습니다.
              </p>
              <p>
                항상 성장하는 개발자가 되겠습니다.
              </p>
              <p>
                어제보다 나은 오늘, 오늘보다 나은 내일을 만들어 가기 위해
                끊임없이 개발하고자 하는 것이 제 goal 입니다.
              </p>
            </div>
          </div>
          
          <div className="relative">
            <div className="w-80 h-80 mx-auto bg-gray-200 dark:bg-gray-700 rounded-lg flex items-center justify-center">
              <span className="text-gray-500 dark:text-gray-400 text-lg">
                /assets/img/me.jpg
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};