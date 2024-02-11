import { useState } from 'react';
import { AddLostItem } from './AddLostItem';
import { ReportItem } from './ReportItem';

const LostHub = () => {
  const [search, setSearch] = useState('');
  const lostItems = [
    {
      id: 1,
      name: 'Boat EarBuds',
      img: 'https://www.boat-lifestyle.com/cdn/shop/products/c2386af9-4349-432f-8ba5-2b6aa06025c8_76178e65-cec1-436c-87e2-f834b18ffd42_600x.png?v=1658824214',
      type: 'Electronics',
      lostfromwhere: 'PB GF1',
      date: '10 Feb 2024',
      details: 'I lost my boat earbuds from pbgf1, it was gifted by my dad.',
    },
    {
      id: 2,
      name: 'MacBook Pro',
      img: 'https://media.croma.com/image/upload/v1685967188/Croma%20Assets/Computers%20Peripherals/Laptop/Images/268355_uc63os.png',
      type: 'Electronics',
      lostfromwhere: 'Library',
      date: '12 Feb 2024',
      details:
        'Lost my MacBook Pro in the library. Reward offered for its return.',
    },
    {
      id: 3,
      name: 'Blue Umbrella',
      img: 'https://www.jiomart.com/images/product/original/rvsrrlsnc4/fashno-men-s-women-s-3-fold-navy-blue-color-umbrella-pack-of-1-product-images-orvsrrlsnc4-p601236181-0-202305070159.jpg?im=Resize=(1000,1000)',
      type: 'Accessories',
      lostfromwhere: 'Cafeteria',
      date: '14 Feb 2024',
      details:
        'Left my blue umbrella in the cafeteria during lunch. Please help!',
    },
    {
      id: 4,
      name: 'Water Bottle',
      img: 'https://pebel.in/cdn/shop/products/IMG_0750copy_1100x.jpg?v=1701780279',
      type: 'Accessories',
      lostfromwhere: 'Sports Complex',
      date: '15 Feb 2024',
      details:
        'Lost my water bottle at the sports complex. It has a green cap.',
    },
    {
      id: 5,
      name: 'Notebook',
      img: 'https://m.media-amazon.com/images/I/81sZo+jzQuL._AC_UF1000,1000_QL80_.jpg',
      type: 'Stationery',
      lostfromwhere: 'Classroom 203',
      date: '18 Feb 2024',
      details: 'Left my notebook in Room 203. It has important lecture notes.',
    },
    {
      id: 6,
      name: 'Laptop Charger',
      img: 'https://5.imimg.com/data5/SELLER/Default/2022/9/FQ/NQ/XF/4145714/portable-laptop-charger.jpg',
      type: 'Electronics',
      lostfromwhere: 'Student Lounge',
      date: '20 Feb 2024',
      details:
        "Lost my laptop charger in the student lounge. It's black with a yellow tag.",
    },
    {
      id: 7,
      name: 'Glasses',
      img: 'https://m.media-amazon.com/images/I/41v5w6Te0IL._AC_UY1100_.jpg',
      type: 'Accessories',
      lostfromwhere: 'Bus Stop',
      date: '22 Feb 2024',
      details: 'Left my glasses at the bus stop. They are black-framed.',
    },
    {
      id: 8,
      name: 'Scientific Calculator',
      img: 'https://3.imimg.com/data3/BH/PN/MY-7721472/41.jpg',
      type: 'Stationery',
      lostfromwhere: 'Science Lab',
      date: '24 Feb 2024',
      details:
        "Lost my scientific calculator in the science lab. It's a Casio model.",
    },
    {
      id: 9,
      name: 'Backpack',
      img: 'https://m.media-amazon.com/images/I/81HEC-PJkiL._AC_UY1100_.jpg',
      type: 'Accessories',
      lostfromwhere: 'Gymnasium',
      date: '26 Feb 2024',
      details:
        "Left my backpack in the gymnasium. It's black with red stripes.",
    },
    {
      id: 10,
      name: 'USB Drive',
      img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYGOrhvHaiGJZL0OWgTlYbA-pFOxVl6q-I6GpIOw964g&s',
      type: 'Electronics',
      lostfromwhere: 'Computer Lab',
      date: '28 Feb 2024',
      details: "Lost my USB drive in the computer lab. It's a Kingston 16GB.",
    },
  ];
  const filteredItems = lostItems.filter((item) => {
    return search.toLowerCase() === ''
      ? item // If search is empty, keep all items
      : item.name.toLowerCase().includes(search);
  });
  const [showAddItem, SetShowAddItem] = useState(false);
  const [showReportItem, SetShowReportItem] = useState(false);

  return (
    <div className='text-2xl m-1'>
      <div className='flex justify-between p-2'>
        <h1>LostHub</h1>
        <button
          className='bg-red-500 text-md py-1'
          onClick={() => {
            SetShowAddItem(true);
          }}
        >
          Add Lost item
        </button>
      </div>
      <div className='flex justify-center my-7'>
        <input
          className='p-2 rounded-xl bg-gray-800 w-[35%]'
          type='text'
          placeholder='Search lost items...'
          onChange={(e) => setSearch(e.target.value)}
        />
        <button>Search</button>
      </div>
      <div className='flex flex-row items-center justify-center flex-wrap gap-8'>
        {filteredItems.length > 0 ? (
          filteredItems.map((item) => (
            <div
              key={item.id}
              className='cursor-pointer hover:opacity-80 transition-all hover:scale-105'
            >
              <img
                src={item.img}
                className='border border-white rounded-xl w-[13rem] h-[10rem] object-cover'
                width={200}
                alt='Lost item image'
              />
              <label>{item.name}</label>
              <p className='text-sm'>Lost from : {item.lostfromwhere}</p>
              <p className='text-sm'>Lost Date Time : {item.date}</p>
              <button
                className='bg-green-700 p-1 text-lg mt-2'
                onClick={() => {
                  SetShowReportItem(true);
                }}
              >
                Report
              </button>
            </div>
          ))
        ) : (
          <div className='text-white-400'> No result found</div>
        )}

        {showAddItem && (
          <div className='fixed top-0 left-0 backdrop-blur-md w-[100vw] h-[100vh] flex items-center justify-center'>
            <AddLostItem SetShowAddItem={SetShowAddItem} />
          </div>
        )}
        {showReportItem && (
          <div className='fixed top-0 left-0 backdrop-blur-md w-[100vw] h-[100vh] flex items-center justify-center'>
            <ReportItem SetShowReportItem={SetShowReportItem}/>
          </div>
        )}
      </div>
    </div>
  );
};

export default LostHub;
