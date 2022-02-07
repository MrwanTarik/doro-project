import dress_1_front from './assets/images/first.jpg';
import dress_1_detail from './assets/videos/dress_1.mp4';
import dress_1_video from './assets/videos/video_1.mp4';
import dress_1_runway from './assets/videos/runway_1.mp4';

import dress_2_front from './assets/images/second.jpg';
import dress_2_detail from './assets/videos/dress_1.mp4';
// import dress_2_video from './assets/videos/video_2.mp4';
// import dress_2_runway from './assets/videos/runway_2.mp4';

import dress_3_front from './assets/images/last.jpg';
import dress_3_detail from './assets/videos/dress_1.mp4';

export const Dresses = [
  {
    id: 1,
    name: 'SILK GEORGETTE DRESS',
    price: '$ 4,900.00',
    color: 'Navy',
    front: dress_1_front,
    detail: dress_1_detail,
    video: dress_1_video,
    runway: dress_1_runway,
  },
  {
    id: 2,
    name: 'Flowing gabardine tunic dress with front panel',
    price: '$ 695',
    color: 'Navy',
    front: dress_2_front,
    detail: dress_2_detail,
    video: dress_1_video,
    runway: dress_1_runway,
  },
  {
    id: 3,
    name: 'Cocoon Sleeve Mini Dress',
    price: '$ 1690',
    color: 'INDIGO',
    front: dress_3_front,
    detail: dress_3_detail,
    video: dress_1_video,
    runway: dress_1_runway,
  }
]