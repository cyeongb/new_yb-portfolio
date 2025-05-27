import { useState, useEffect, useRef } from 'react';

export const About = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && entry.intersectionRatio > 0.3) {
          setIsVisible(true);
        }
      },
      {
        threshold: 0.3,
        rootMargin: '-50px 0px'
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);
  return (
    <section ref={sectionRef} id="about" className="py-20 bg-gray-900 light:bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* 왼쪽 이미지 영역 */}
          <div className="order-2 lg:order-1">
            <div className="w-full max-w-sm mx-auto bg-gray-700 light:bg-gray-200 rounded-lg overflow-hidden group cursor-pointer transition-all duration-300 hover:shadow-xl aspect-[4/5]">
              <img 
                src="me.jpg"
                alt="최영비사진"
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-125"
              />
              {/* 이미지 로드 실패 시 표시될 플레이스홀더 */}
              <div className="w-full h-full flex items-center justify-center text-center" style={{ display: 'none' }}>
                <div>
                  <span className="text-gray-400 light:text-gray-500 text-lg block mb-2">
                    내 사진
                  </span>
                  <span className="text-gray-400 light:text-gray-500 text-sm">
                    me.jpg
                  </span>
                </div>
              </div>
            </div>
          </div>
                 
          {/* 오른쪽 텍스트 영역 */}
          <div className="order-1 lg:order-2 space-y-6">
            <div className={`about-underline border-b border-gray-600 light:border-gray-300 pb-4 ${isVisible ? 'animate' : ''}`}>
              <h2 className="text-3xl sm:text-4xl font-bold text-white light:text-gray-900">
                About me
              </h2>
            </div>
                     
            <div className="space-y-4 text-gray-300 light:text-gray-600 leading-relaxed">
              <p>
                안녕하세요! 저는 YB 최영비입니다.
              </p>
              <p>
                Yottabyte(YB) 란<br />
                약 1000조 byte 정도로 미래의 데이터 단위라고 합니다. <br />
              </p>
              <p>
                저 또한 거대한 Yottabyte 처럼<br />
                매일 매일 무한 가능성을 위해 성장하고 있습니다.
              </p>
              <p>
                저는 새로운 기술에 관심이 많고, 오래된 기술 또한 매우 필요하다고 생각합니다.<br />
                요즘에는 구글에 이어 Ai를 활용하여 각종 질문을 통해 여러 지식을 쌓아가고 있습니다.
              </p>
              <p>
                하나에 꽂히면 파고들어가야 적성에 풀리는 특징이 있고,<br />
                궁금한 것이 많아 모든 것에 항상 "왜?"라는 질문을 품습니다.
              </p>
              <p>
                항상 배우겠다는 자세를 가지려고 노력하고 있고,<br />
                겸손함을 모티브로 살고자 하는 것이 제 목표 입니다.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};