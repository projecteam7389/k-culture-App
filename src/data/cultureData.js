const cultureData = [
  {
    id: 1,
    title: '비빔밥',
    category: '맛',
    image: 'https://media.istockphoto.com/id/183752521/ko/%EC%82%AC%EC%A7%84/%EB%B9%84%EB%B9%84%EB%B0%A5.webp?a=1&b=1&s=612x612&w=0&k=20&c=-JoI1krkCqmlVH6ySr4-OwNllUCoHM17ckv4tkswbus=',
    shortDesc: '한국을 대표하는 다채로운 한 그릇 음식',
    desc: '비빔밥은 밥 위에 나물, 고기, 계란, 고추장을 올려 비벼 먹는 한국의 대표 음식입니다. 재료가 다양하게 들어가 색감이 아름답고 영양 균형도 뛰어납니다.'
  },
  {
    id: 2,
    title: '김치',
    category: '맛',
    image: 'https://images.unsplash.com/photo-1708388065149-1304dec1f0ec?q=80&w=1170&',
    shortDesc: '발효의 깊은 맛을 담은 한국의 전통 음식',
    desc: '김치는 배추나 무를 소금에 절인 뒤 고춧가루, 마늘, 젓갈 등으로 양념해 발효시킨 음식입니다. 한국 식문화에서 매우 중요한 위치를 차지합니다.'
  },
  {
    id: 3,
    title: '불고기',
    category: '맛',
    image: 'https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyNjAzMjhfMjg0%2FMDAxNzc0Njc3NDgyMDc3.h9SYree3ks_DRAglMNjgpIPjXmAXLhoO3gkqmB3cDgcg.twD-AVK2ZQ352NzTE7LaDdPN8GFxKX3jM4XKjTmnlIkg.JPEG%2Foutput%25A3%25DF3318033452.jpg&type=sc960_832',
    shortDesc: '달콤짭짤한 양념이 매력적인 한국 고기 요리',
    desc: '불고기는 얇게 썬 소고기를 간장 양념에 재워 구워 먹는 음식입니다. 외국인들이 한국 음식 중 친숙하게 즐기기 좋은 메뉴로 많이 소개됩니다.'
  },
  {
    id: 4,
    title: '한복',
    category: '멋',
    image: 'https://media.istockphoto.com/id/1257356865/ko/%EC%82%AC%EC%A7%84/%ED%95%9C%EB%B3%B5-%EB%93%9C%EB%A0%88%EC%8A%A4-%EB%A5%BC-%EC%9E%85%EC%9D%80-%EC%95%84%EC%8B%9C%EC%95%84-%EC%86%8C%EB%85%80-%EA%B0%80%EC%9D%84-%EB%82%98%EB%AD%87%EC%9E%8E-%EA%B3%B5%EC%9B%90%EA%B3%BC-%EC%84%9C%EC%9A%B8%EC%8B%9C%EC%9D%98-%EC%98%A4%EB%9E%98%EB%90%9C-%EA%B6%81%EC%A0%84%EC%97%90%EC%84%9C-%EC%82%B0%EC%B1%85.webp?a=1&b=1&s=612x612&w=0&k=20&c=RLCtinpnnjqR1B9c1hFZyf9Y_Pg_TDWktjMfYAzEGQs=',
    shortDesc: '한국의 전통미를 담은 아름다운 의복',
    desc: '한복은 곡선의 아름다움과 은은한 색 조화가 특징인 한국 전통 의상입니다. 명절, 결혼식, 전통 행사 등에서 자주 볼 수 있습니다.'
  },
  {
    id: 5,
    title: '한옥',
    category: '멋',
    image: 'https://images.unsplash.com/photo-1653230674619-2c92936be020?w=500',
    shortDesc: '자연과 조화를 이루는 한국 전통 건축',
    desc: '한옥은 나무, 흙, 돌 등 자연 재료를 사용해 지은 한국의 전통 가옥입니다. 마루, 온돌, 처마 등 한국만의 건축 특징을 잘 보여줍니다.'
  },
  {
    id: 6,
    title: '도자기',
    category: '멋',
    image: 'https://images.unsplash.com/photo-1597696929736-6d13bed8e6a8?q=80&w=1170',
    shortDesc: '단아하고 고요한 아름다움의 한국 공예',
    desc: '한국 도자기는 절제된 선과 자연스러운 색감이 특징입니다. 특히 청자와 백자는 한국 미의식을 잘 보여주는 대표 공예품입니다.'
  },
  {
    id: 7,
    title: '사물놀이',
    category: '문화',
    image: 'https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyNTAyMjdfNDUg%2FMDAxNzQwNjIxNDc5MzA0.mnTDqi3x6TSbXTz3nN6RyNsSHs0eI-hg4zJsctXeN-wg.jfb2sYFD1hZJeIAf38EtBAn-Ni5IJCAQM8DPhQN3CRkg.JPEG%2F20241227_1173.jpg&type=sc960_832',
    shortDesc: '리듬과 에너지가 살아 있는 전통 공연',
    desc: '사물놀이는 꽹과리, 징, 장구, 북 네 가지 타악기로 구성된 한국 전통 연희입니다. 역동적인 리듬과 흥겨운 분위기가 특징입니다.'
  },
  {
    id: 8,
    title: '한글',
    category: '문화',
    image: 'https://media.istockphoto.com/id/1133386944/ko/%EC%82%AC%EC%A7%84/%EA%B0%81%EA%B0%81-%ED%95%9C-%EA%B0%80%EC%A7%80-%EC%83%89%EA%B9%94%EC%9D%98-%ED%95%9C-%EA%B8%80%EC%9E%90%EB%A1%9C-%EB%90%9C-11-%EA%B0%9C%EC%9D%98-%EC%B9%B4%EB%93%9C.webp?a=1&b=1&s=612x612&w=0&k=20&c=VHs_Mh0McGXzBfpIWz9BDvfe6zxUyh-r93ZHK08Ivqc=',
    shortDesc: '과학적이고 독창적인 한국의 문자',
    desc: '한글은 세종대왕이 만든 한국의 문자입니다. 배우기 쉽고 체계적인 구조를 지녀 세계적으로도 우수한 문자로 평가받습니다.'
  },
  {
    id: 9,
    title: '설날',
    category: '문화',
    image: 'https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMjAyMDRfMTM5%2FMDAxNjQzOTQxODc0MTA3.e9eWKcyrKynI8tZ1QGO6xZrZhEA4pw-klhUF0IS-SYQg.noVHa68B7SJuC13GyR4c3DOeA0eKcU64P2211euNI_4g.JPEG.smilekmk07%2F621666.jpg&type=sc960_832',
    shortDesc: '가족과 전통이 함께하는 한국의 명절',
    desc: '설날은 음력 1월 1일에 맞이하는 한국의 대표 명절입니다. 가족이 모여 떡국을 먹고 세배를 하며 한 해의 건강과 복을 기원합니다.'
  },
  {
    id: 10,
    title: '전통차',
    category: '맛',
    image: 'https://search.pstatic.net/common/?src=http%3A%2F%2Fimgnews.naver.net%2Fimage%2F5445%2F2020%2F11%2F04%2F20201104090514025304ecd43629022072252162_20201104090941497.jpg&type=sc960_832',
    shortDesc: '향과 여유를 즐기는 한국의 차 문화',
    desc: '유자차, 대추차, 생강차 등 한국의 전통차는 계절과 건강을 고려한 음료 문화입니다. 따뜻한 차 한 잔 속에 한국의 정서가 담겨 있습니다.'
  }
]

export default cultureData