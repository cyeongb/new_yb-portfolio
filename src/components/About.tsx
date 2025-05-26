export const About = () => {
  return (
    <section id="about" className="py-20 bg-gray-900 light:bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* 왼쪽 이미지 영역 */}
          <div className="order-2 lg:order-1">
            <div className="w-full max-w-sm mx-auto bg-gray-700 light:bg-gray-200 rounded-lg flex items-center justify-center aspect-[4/5]">
              <div className="text-center">
                <span className="text-gray-400 light:text-gray-500 text-lg block mb-2">
                  내 사진
                </span>
                <span className="text-gray-400 light:text-gray-500 text-sm">
                  me.jpg
                </span>
              </div>
            </div>
          </div>
          
          {/* 오른쪽 텍스트 영역 */}
          <div className="order-1 lg:order-2 space-y-6">
            <div className="border-b border-gray-600 light:border-gray-300 pb-4">
              <h2 className="text-3xl sm:text-4xl font-bold text-white light:text-gray-900">
                About me
              </h2>
            </div>
            
            <div className="space-y-4 text-gray-300 light:text-gray-600 leading-relaxed">
              <p>
                안녕하세요! 저는 최영비입니다.
              </p>
              <p>
                제 이름은 거대한 Yottabyte 처럼<br />
                무한 가능성의 컴퓨터공학을 꿈꾸며 지어진 이름입니다.
              </p>
              <p>
                저는 새로운 기술에 관심이 많고,<br />
                모든 것에 대한 지식을 쌓아가고 있습니다.
              </p>
              <p>
                꾸준한 것이 강점인 개발자가 되기 위해 노력하고 있습니다.
              </p>
              <p>
                항상 성장하는 개발자가 되겠습니다.<br />
                어제보다 나은 오늘, 오늘보다 나은 내일을 만들어 가기 위해<br />
                끊임없이 개발하고자 하는 것이 제 goal 입니다.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};