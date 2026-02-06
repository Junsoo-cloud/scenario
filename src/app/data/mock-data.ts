export type ScriptCategory =
  | '영화'
  | '드라마'
  | '웹툰'
  | '연극/뮤지컬'
  | '숏폼/뉴미디어';

export interface ScriptItem {
  id: string;
  title: string;
  logline: string;
  synopsis: string;
  category: ScriptCategory;
  genre: string;
  runtime: string;
  targetAge: string;
  keywords: string[];
  priceType: '고정가' | '가격문의' | '협의';
  price?: number;
  sellerName: string;
  rating: number;
  reviews: number;
  views: number;
  likes: number;
}

export interface CommunityPost {
  id: string;
  category: string;
  title: string;
  excerpt: string;
  author: string;
  likes: number;
  comments: number;
  createdAt: string;
  spoiler?: boolean;
  tags?: string[];
}

export const featuredScripts: ScriptItem[] = [
  {
    id: 'sc-101',
    title: '파도에 잠긴 도시',
    logline: '침수된 서울에서 살아남은 이들이 다시 선택하는 공동체의 규칙.',
    synopsis:
      '기후 재난 이후 폐허가 된 도시, 임시 정부와 생존자들이 충돌하는 생존 정치 스릴러.',
    category: '영화',
    genre: '재난/스릴러',
    runtime: '120분',
    targetAge: '15세 이상',
    keywords: ['재난', '정치', '생존', '도시'],
    priceType: '고정가',
    price: 1500000,
    sellerName: '김하온',
    rating: 4.8,
    reviews: 18,
    views: 1240,
    likes: 322
  },
  {
    id: 'sc-102',
    title: '서늘한 오후의 편지',
    logline: '편지를 통해 과거와 현재를 오가는 두 사람의 성장 멜로.',
    synopsis:
      '20년 전의 편지가 도착하면서 시작되는 감정의 미스터리. 시간과 기억을 잇는 멜로 드라마.',
    category: '드라마',
    genre: '멜로/감성',
    runtime: '10부작',
    targetAge: '12세 이상',
    keywords: ['멜로', '시간', '성장', '편지'],
    priceType: '가격문의',
    sellerName: '최가영',
    rating: 4.6,
    reviews: 11,
    views: 980,
    likes: 210
  },
  {
    id: 'sc-103',
    title: '버스 정류장의 히어로',
    logline: '평범한 고등학생이 지역의 작은 사건들을 해결하며 성장하는 청춘물.',
    synopsis:
      '소소한 사건을 해결하는 과정에서 서로의 상처를 이해하는 청춘 성장 웹툰 시나리오.',
    category: '웹툰',
    genre: '청춘/코미디',
    runtime: '60화',
    targetAge: '전체 이용가',
    keywords: ['청춘', '코미디', '성장'],
    priceType: '협의',
    sellerName: '박도윤',
    rating: 4.4,
    reviews: 6,
    views: 740,
    likes: 154
  }
];

export const marketplaceScripts: ScriptItem[] = [
  ...featuredScripts,
  {
    id: 'sc-104',
    title: '밤샘극장',
    logline: '낡은 극장에서 시작된 유령 실종 사건을 쫓는 스릴러.',
    synopsis:
      '폐업한 극장을 지키는 경비원이 잃어버린 필름을 찾으며 과거의 비밀과 마주한다.',
    category: '연극/뮤지컬',
    genre: '미스터리',
    runtime: '100분',
    targetAge: '15세 이상',
    keywords: ['극장', '미스터리', '유령'],
    priceType: '고정가',
    price: 800000,
    sellerName: '정연서',
    rating: 4.2,
    reviews: 3,
    views: 420,
    likes: 88
  },
  {
    id: 'sc-105',
    title: '한 컷의 바다',
    logline: '숏폼 시리즈로 펼쳐지는 도시의 일상과 위로.',
    synopsis:
      '바다를 닮은 도심의 카페를 배경으로 매회 다른 손님의 사연이 그려지는 힐링 시리즈.',
    category: '숏폼/뉴미디어',
    genre: '힐링',
    runtime: '12화',
    targetAge: '전체 이용가',
    keywords: ['힐링', '숏폼', '일상'],
    priceType: '가격문의',
    sellerName: '이정민',
    rating: 4.1,
    reviews: 2,
    views: 310,
    likes: 65
  }
];

export const communityPosts: CommunityPost[] = [
  {
    id: 'p-201',
    category: '영화 이야기',
    title: '2026 상반기 기대작 라인업 정리',
    excerpt: '한국 영화계에서 다시 장르 실험이 늘어나는 느낌입니다. 특히...',
    author: '씨네필곰',
    likes: 128,
    comments: 34,
    createdAt: '2026-02-05',
    tags: ['기대작', '한국영화']
  },
  {
    id: 'p-202',
    category: '시나리오 작법',
    title: '로그라인 작성이 어려울 때 체크리스트',
    excerpt: '로그라인은 캐릭터의 욕망과 장애물을 한 줄로...',
    author: '필름노트',
    likes: 92,
    comments: 18,
    createdAt: '2026-02-04',
    tags: ['작법', '로그라인']
  },
  {
    id: 'p-203',
    category: '드라마 이야기',
    title: '스포일러) 8화 엔딩 해석',
    excerpt: '마지막 장면의 카메라워크가 의미하는 바는...',
    author: '밤샘정주행',
    likes: 75,
    comments: 44,
    createdAt: '2026-02-03',
    spoiler: true,
    tags: ['스포일러', '해석']
  }
];
