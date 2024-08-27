const musicData = [
  {
    img: 'https://upload.wikimedia.org/wikipedia/en/thumb/9/92/MorganWallenIfIKnowMe.jpg/220px-MorganWallenIfIKnowMe.jpg',
    title: 'Whiskey Glasses',
    artist: 'Morgan Wallen',
    album: 'If I Know Me',
    runTime: '3:54',
    url: 'https://www.youtube.com/watch?v=Gmr7YxsUpXU'
  },
  {
    img: 'https://m.media-amazon.com/images/I/71szkhEjZKL._UF894,1000_QL80_.jpg',
    title: 'More Than My Hometown',
    artist: 'Morgan Wallen',
    album: 'Dangerous: The Double Album',
    runTime: '3:37',
    url: 'https://www.youtube.com/watch?v=bYb2ZiSkJa0'
  },
  {
    img: 'https://m.media-amazon.com/images/I/71szkhEjZKL._UF894,1000_QL80_.jpg',
    title: 'Sand in My Boots',
    artist: 'Morgan Wallen',
    album: 'Dangerous: The Double Album',
    runTime: '3:20',
    url: 'https://www.youtube.com/watch?v=p6B29pKRdHU'
  },
  {
    img: 'https://m.media-amazon.com/images/I/71gCqneNkAL._UF894,1000_QL80_.jpg',
    title: 'Forever After All',
    artist: 'Luke Combs',
    album: 'What You See Ain\'t Always What You Get',
    runTime: '3:52',
    url: 'https://www.youtube.com/watch?v=px-5z8iAm1M'
  },
  {
    img: 'https://media.npr.org/assets/img/2017/05/22/lc_tofy_rgb_sq-7234415a235f24c38e4c677eeb155e67976fce0f.jpg',
    title: 'Beautiful Crazy',
    artist: 'Luke Combs',
    album: 'This One\'s for You',
    runTime: '3:13',
    url: 'https://www.youtube.com/watch?v=rItv9i6c7AY'
  },
  {
    img: 'https://upload.wikimedia.org/wikipedia/en/e/e3/Luke_Combs_-_What_You_See_Is_What_You_Get.png',
    title: 'Beer Never Broke My Heart',
    artist: 'Luke Combs',
    album: 'What You See Is What You Get',
    runTime: '3:06',
    url: 'https://www.youtube.com/watch?v=7Qp5vcuMIlk'
  },
  {
    img: 'image7.jpg',
    title: 'On My Way to You',
    artist: 'Cody Johnson',
    album: 'Ain\'t Nothin\' to It',
    runTime: '3:32',
    url: 'https://www.youtube.com/watch?v=cn0i6-6fFcc'
  },
  {
    img: 'image8.jpg',
    title: 'Til You Can\'t',
    artist: 'Cody Johnson',
    album: 'Human The Double Album',
    runTime: '3:44',
    url: 'https://www.youtube.com/watch?v=GqjFlptQmbc'
  },
  {
    img: 'image9.jpg',
    title: 'With You I Am',
    artist: 'Cody Johnson',
    album: 'Gotta Be Me',
    runTime: '3:44',
    url: 'https://www.youtube.com/watch?v=0Q11mPD-0hU'
  },
  {
    img: 'image10.jpg',
    title: 'Back In Black',
    artist: 'AC/DC',
    album: 'Back In Black',
    runTime: '4:15',
    url: 'https://www.youtube.com/watch?v=pAgnJDJN4VA'
  },
  {
    img: 'image11.jpg',
    title: 'Thunderstruck',
    artist: 'AC/DC',
    album: 'The Razors Edge',
    runTime: '4:52',
    url: 'https://www.youtube.com/watch?v=v2AC41dglnM'
  },
  {
    img: 'image12.jpg',
    title: 'Highway to Hell',
    artist: 'AC/DC',
    album: 'Highway to Hell',
    runTime: '3:28',
    url: 'https://www.youtube.com/watch?v=l482T0yNkeo'
  },
  {
    img: 'image13.jpg',
    title: 'Enter Sandman',
    artist: 'Metallica',
    album: 'Metallica',
    runTime: '5:31',
    url: 'https://www.youtube.com/watch?v=CD-E-LDc384'
  },
  {
    img: 'image14.jpg',
    title: 'Nothing Else Matters',
    artist: 'Metallica',
    album: 'Metallica',
    runTime: '6:28',
    url: 'https://www.youtube.com/watch?v=tAGnKpE4NCI'
  },
  {
    img: 'image15.jpg',
    title: 'One',
    artist: 'Metallica',
    album: '...And Justice for All',
    runTime: '7:27',
    url: 'https://www.youtube.com/watch?v=WM8bTdBs-cw'
  },
  {
    img: 'image16.jpg',
    title: 'Lose Yourself',
    artist: 'Eminem',
    album: '8 Mile Soundtrack',
    runTime: '5:26',
    url: 'https://www.youtube.com/watch?v=_Yhyp-_hX2s'
  },
  {
    img: 'image17.jpg',
    title: 'Without Me',
    artist: 'Eminem',
    album: 'The Eminem Show',
    runTime: '4:50',
    url: 'https://www.youtube.com/watch?v=YVkUvmDQ3HY'
  },
  {
    img: 'image18.jpg',
    title: 'Stan',
    artist: 'Eminem',
    album: 'The Marshall Mathers LP',
    runTime: '6:44',
    url: 'https://www.youtube.com/watch?v=gOMhN-hfMtY'
  },
  {
    img: 'image19.jpg',
    title: 'Something in the Orange',
    artist: 'Zach Bryan',
    album: 'American Heartbreak',
    runTime: '3:48',
    url: 'https://www.youtube.com/watch?v=hUAZUbwrWZk'
  },
  {
    img: 'image20.jpg',
    title: 'Heading South',
    artist: 'Zach Bryan',
    album: 'DeAnn',
    runTime: '3:58',
    url: 'https://www.youtube.com/watch?v=okGcksYM6L8'
  },
  {
    img: 'image21.jpg',
    title: 'Burn, Burn, Burn',
    artist: 'Zach Bryan',
    album: 'American Heartbreak',
    runTime: '3:28',
    url: 'https://www.youtube.com/watch?v=_J1ApqAwZV0'
  },
  {
    img: 'image22.jpg',
    title: 'She\'s Everything',
    artist: 'Brad Paisley',
    album: 'Time Well Wasted',
    runTime: '4:27',
    url: 'https://www.youtube.com/watch?v=2AocmDqZCag'
  },
  {
    img: 'image23.jpg',
    title: 'Then',
    artist: 'Brad Paisley',
    album: 'American Saturday Night',
    runTime: '5:22',
    url: 'https://www.youtube.com/watch?v=O3RXwkG6zHc'
  },
  {
    img: 'image24.jpg',
    title: 'Numb',
    artist: 'Linkin Park',
    album: 'Meteora',
    runTime: '3:06',
    url: 'https://www.youtube.com/watch?v=kXYiU_JCYtU'
  },
  {
    img: 'image25.jpg',
    title: 'In the End',
    artist: 'Linkin Park',
    album: 'Hybrid Theory',
    runTime: '3:36',
    url: 'https://www.youtube.com/watch?v=eVTXPUF4Oz4'
  },
  {
    img: 'image26.jpg',
    title: 'Crawling',
    artist: 'Linkin Park',
    album: 'Hybrid Theory',
    runTime: '3:29',
    url: 'https://www.youtube.com/watch?v=Gd9OhYroLN0'
  },
  {
    img: 'image27.jpg',
    title: 'How to Save a Life',
    artist: 'The Fray',
    album: 'How to Save a Life',
    runTime: '4:23',
    url: 'https://www.youtube.com/watch?v=cjVQ36NhbMk'
  },
  {
    img: 'image28.jpg',
    title: 'Over My Head (Cable Car)',
    artist: 'The Fray',
    album: 'How to Save a Life',
    runTime: '3:58',
    url: 'https://www.youtube.com/watch?v=fFRkpvvop3I'
  },
  {
    img: 'image29.jpg',
    title: 'Never Say Never',
    artist: 'The Fray',
    album: 'The Fray',
    runTime: '4:18',
    url: 'https://www.youtube.com/watch?v=Aihu16RyYp8'
  },
  {
    img: 'image30.jpg',
    title: 'In Case You Didn\'t Know',
    artist: 'Brett Young',
    album: 'Brett Young',
    runTime: '3:47',
    url: 'https://www.youtube.com/watch?v=7qaHdHpSjX8'
  },
  {
    img: 'image31.jpg',
    title: 'Mercy',
    artist: 'Brett Young',
    album: 'Brett Young',
    runTime: '3:36',
    url: 'https://www.youtube.com/watch?v=Dw8B1q1tKgs'
  },
  {
    img: 'image32.jpg',
    title: 'Catch',
    artist: 'Brett Young',
    album: 'Ticket to L.A.',
    runTime: '3:16',
    url: 'https://www.youtube.com/watch?v=t7BJqC2BR1o'
  },
  {
    img: 'image33.jpg',
    title: 'Life Goes On',
    artist: 'Morgan Wallen',
    album: 'Dangerous: The Double Album',
    runTime: '2:58',
    url: 'https://www.youtube.com/watch?v=jctfUO46ChI'
  },
  {
    img: 'image34.jpg',
    title: 'Going, Going, Gone',
    artist: 'Luke Combs',
    album: 'What You See Is What You Get',
    runTime: '3:13',
    url: 'https://www.youtube.com/watch?v=-xgN6CHgNR0'
  },
  {
    img: 'image35.jpg',
    title: 'I Love Rock \'n Roll',
    artist: 'AC/DC',
    album: 'High Voltage',
    runTime: '2:55',
    url: 'https://www.youtube.com/watch?v=UOqSi-_cXeE'
  },
  {
    img: 'image36.jpg',
    title: 'The Memory Remains',
    artist: 'Metallica',
    album: 'Reload',
    runTime: '4:39',
    url: 'https://www.youtube.com/watch?v=URWD88jHyzs'
  },
  {
    img: 'image37.jpg',
    title: 'Real Slim Shady',
    artist: 'Eminem',
    album: 'The Marshall Mathers LP',
    runTime: '4:44',
    url: 'https://www.youtube.com/watch?v=eJO5HU_7_1w'
  },
  {
    img: 'image38.jpg',
    title: 'Revival',
    artist: 'Zach Bryan',
    album: 'American Heartbreak',
    runTime: '6:14',
    url: 'https://www.youtube.com/watch?v=_PCQFSW9O_Y'
  },
  {
    img: 'image39.jpg',
    title: 'Mud on the Tires',
    artist: 'Brad Paisley',
    album: 'Mud on the Tires',
    runTime: '3:30',
    url: 'https://www.youtube.com/watch?v=J9i9MLl3xc0'
  },
  {
    img: 'image40.jpg',
    title: 'One More Light',
    artist: 'Linkin Park',
    album: 'One More Light',
    runTime: '4:14',
    url: 'https://www.youtube.com/watch?v=Tm8LGxTLtQk'
  },
  {
    img: 'image41.jpg',
    title: 'You Found Me',
    artist: 'The Fray',
    album: 'The Fray',
    runTime: '4:02',
    url: 'https://www.youtube.com/watch?v=jFg_8u87zT0'
  },
  {
    img: 'image42.jpg',
    title: 'Lady',
    artist: 'Brett Young',
    album: 'Weekends Look A Little Different These Days',
    runTime: '3:13',
    url: 'https://www.youtube.com/watch?v=d0-4oGYtRqI'
  },
  {
    img: 'image43.jpg',
    title: 'Rescue Me',
    artist: 'Morgan Wallen',
    album: 'Dangerous: The Double Album',
    runTime: '3:10',
    url: 'https://www.youtube.com/watch?v=Qv1Wkz2xR4g'
  },
  {
    img: 'image44.jpg',
    title: 'Cold As You',
    artist: 'Luke Combs',
    album: 'What You See Ain\'t Always What You Get',
    runTime: '3:06',
    url: 'https://www.youtube.com/watch?v=Xg9JrNr3W5E'
  },
  {
    img: 'image45.jpg',
    title: 'Hell\'s Bells',
    artist: 'AC/DC',
    album: 'Back In Black',
    runTime: '5:12',
    url: 'https://www.youtube.com/watch?v=_MZ2qDyCnm8'
  },
  {
    img: 'image46.jpg',
    title: 'The Unforgiven',
    artist: 'Metallica',
    album: 'Metallica',
    runTime: '6:27',
    url: 'https://www.youtube.com/watch?v=Ckom3gf57Yw'
  },
  {
    img: 'image47.jpg',
    title: 'Mockingbird',
    artist: 'Eminem',
    album: 'Encore',
    runTime: '4:11',
    url: 'https://www.youtube.com/watch?v=S9bCLPwzSC0'
  },
  {
    img: 'image48.jpg',
    title: 'Heading South',
    artist: 'Zach Bryan',
    album: 'DeAnn',
    runTime: '3:58',
    url: 'https://www.youtube.com/watch?v=okGcksYM6L8'
  },
  {
    img: 'image49.jpg',
    title: 'He Didn\'t Have To Be',
    artist: 'Brad Paisley',
    album: 'Who Needs Pictures',
    runTime: '4:42',
    url: 'https://www.youtube.com/watch?v=BjO1F6oCab8'
  },
  {
    img: 'image50.jpg',
    title: 'Crawling (Live)',
    artist: 'Linkin Park',
    album: 'One More Light Live',
    runTime: '3:44',
    url: 'https://www.youtube.com/watch?v=NErZWJj5aD4'
  }
];


export default musicData;