const CookData = [
  {
    id: 1,
    title: '김치찌개',
    src:
      'https://m.blog.naver.com/PostView.nhn?blogId=dew36&logNo=221278474467&proxyReferer=https:%2F%2Fwww.google.com%2F',
    coreMeterial: ['김치', '양파', '고기'],
    recipe:
      '1. 김치를 준비한다\n2. 고기를 끓는 물에 넣는다.\n3. 양파를 넣고 끓인다.',
  },
  {
    id: 2,
    title: '한우 짜파게티',
    src:
      'https://m.blog.naver.com/PostView.nhn?blogId=dew36&logNo=221278474467&proxyReferer=https:%2F%2Fwww.google.com%2F',
    coreMeterial: ['한우', '짜파게티'],
    recipe:
      '1. 짜파게티를 끓인다\n2. 그 물에 고기를 넣는다\n3. 물을 따라버린 후 맛있게 먹는다',
  },
  {
    id: 3,
    title: '새우 볶음밥',
    src:
      'https://m.blog.naver.com/PostView.nhn?blogId=dew36&logNo=221278474467&proxyReferer=https:%2F%2Fwww.google.com%2F',
    coreMeterial: ['밥', '계란', '새우', '애호박'],
    recipe: '1. 재료를 각각 손질하',
  },
  {
    id: 4,
    title: '깻잎김치',
    src:
      'https://m.blog.naver.com/PostView.nhn?blogId=dew36&logNo=221278474467&proxyReferer=https:%2F%2Fwww.google.com%2F',
    coreMeterial: ['한우', '짜파게티'],
    recipe:
      '1. 짜파게티를 끓인다\n2. 그 물에 고기를 넣는다\n3. 물을 따라버린 후 맛있게 먹는다',
  },
  {
    id: 5,
    title: '김치',
    src:
      'https://m.blog.naver.com/PostView.nhn?blogId=dew36&logNo=221278474467&proxyReferer=https:%2F%2Fwww.google.com%2F',
    coreMeterial: ['김치', '양파', '고기'],
    recipe:
      '1. 김치를 준비한다\n2. 고기를 끓는 물에 넣는다.\n3. 양파를 넣고 끓인다.',
  },
  {
    id: 6,
    title: '스파게티',
    src:
      'https://m.blog.naver.com/PostView.nhn?blogId=dew36&logNo=221278474467&proxyReferer=https:%2F%2Fwww.google.com%2F',
    coreMeterial: ['한우', '짜파게티'],
    recipe:
      '1. 짜파게티를 끓인다\n2. 그 물에 고기를 넣는다\n3. 물을 따라버린 후 맛있게 먹는다',
  },
  {
    id: 7,
    title: '열무김치',
    src:
      'https://m.blog.naver.com/PostView.nhn?blogId=dew36&logNo=221278474467&proxyReferer=https:%2F%2Fwww.google.com%2F',
    coreMeterial: ['김치', '양파', '고기'],
    recipe:
      '1. 김치를 준비한다\n2. 고기를 끓는 물에 넣는다.\n3. 양파를 넣고 끓인다.',
  },
  {
    id: 8,
    title: '피자',
    src:
      'https://m.blog.naver.com/PostView.nhn?blogId=dew36&logNo=221278474467&proxyReferer=https:%2F%2Fwww.google.com%2F',
    coreMeterial: ['김치', '양파', '고기'],
    recipe:
      '1. 김치를 준비한다\n2. 고기를 끓는 물에 넣는다.\n3. 양파를 넣고 끓인다.',
  },
  {
    id: 9,
    title: '어묵볶음',
    src:
      'https://m.blog.naver.com/PostView.nhn?blogId=dew36&logNo=221278474467&proxyReferer=https:%2F%2Fwww.google.com%2F',
    coreMeterial: ['김치', '양파', '고기'],
    recipe:
      '1. 김치를 준비한다\n2. 고기를 끓는 물에 넣는다.\n3. 양파를 넣고 끓인다.',
  },
  {
    id: 10,
    title: '계란찜',
    src:
      'https://m.blog.naver.com/PostView.nhn?blogId=dew36&logNo=221278474467&proxyReferer=https:%2F%2Fwww.google.com%2F',
    coreMeterial: ['김치', '양파', '고기'],
    recipe:
      '1. 김치를 준비한다\n2. 고기를 끓는 물에 넣는다.\n3. 양파를 넣고 끓인다.',
  },
  {
    id: 11,
    title: '스팸구이',
    src:
      'https://m.blog.naver.com/PostView.nhn?blogId=dew36&logNo=221278474467&proxyReferer=https:%2F%2Fwww.google.com%2F',
    coreMeterial: ['한우', '짜파게티'],
    recipe:
      '1. 짜파게티를 끓인다\n2. 그 물에 고기를 넣는다\n3. 물을 따라버린 후 맛있게 먹는다',
  },
  {
    id: 12,
    title: '계란 볶음밥',
    src:
      'https://m.blog.naver.com/PostView.nhn?blogId=dew36&logNo=221278474467&proxyReferer=https:%2F%2Fwww.google.com%2F',
    coreMeterial: ['밥', '계란', '새우', '애호박'],
    recipe: '1. 재료를 각각 손질하',
  },
  {
    id: 13,
    title: '된장찌개',
    src:
      'https://m.blog.naver.com/PostView.nhn?blogId=dew36&logNo=221278474467&proxyReferer=https:%2F%2Fwww.google.com%2F',
    coreMeterial: ['한우', '짜파게티'],
    recipe:
      '1. 짜파게티를 끓인다\n2. 그 물에 고기를 넣는다\n3. 물을 따라버린 후 맛있게 먹는다',
  },
  {
    id: 14,
    title: '편육',
    src:
      'https://m.blog.naver.com/PostView.nhn?blogId=dew36&logNo=221278474467&proxyReferer=https:%2F%2Fwww.google.com%2F',
    coreMeterial: ['김치', '양파', '고기'],
    recipe:
      '1. 김치를 준비한다\n2. 고기를 끓는 물에 넣는다.\n3. 양파를 넣고 끓인다.',
  },
  {
    id: 15,
    title: '김치찜',
    src:
      'https://m.blog.naver.com/PostView.nhn?blogId=dew36&logNo=221278474467&proxyReferer=https:%2F%2Fwww.google.com%2F',
    coreMeterial: ['한우', '짜파게티'],
    recipe:
      '1. 짜파게티를 끓인다\n2. 그 물에 고기를 넣는다\n3. 물을 따라버린 후 맛있게 먹는다',
  },
  {
    id: 16,
    title: '콩나물 무침',
    src:
      'https://m.blog.naver.com/PostView.nhn?blogId=dew36&logNo=221278474467&proxyReferer=https:%2F%2Fwww.google.com%2F',
    coreMeterial: ['김치', '양파', '고기'],
    recipe:
      '1. 김치를 준비한다\n2. 고기를 끓는 물에 넣는다.\n3. 양파를 넣고 끓인다.',
  },
];

export default CookData;
