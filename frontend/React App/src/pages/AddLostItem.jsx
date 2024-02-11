export const AddLostItem = ({ SetShowAddItem }) => {
  return (
    <div className='flex flex-col gap-3 items-center border w-[50%] rounded-xl p-3 bg-gray-900'>
      <div className='flex justify-between w-[95%]'>
        <h2 className='mb-4'>Add lost item</h2>
        <img
          className='cursor hover:opacity-80'
          src='/close.png'
          width={40}
          height={40}
          alt=''
          onClick={() => {
            SetShowAddItem(false);
          }}
        />
      </div>
      <form className='flex flex-col gap-3 w-[80%]'>
        <input
          className='bg-gray-800 rounded-xl p-2 text-[1.1rem]'
          type='text'
          placeholder='Name of lost item'
          required
        />
        <div className='flex items-center gap-3'>
          <label className='text-[1.1rem]'>Lost Date Time : </label>
          <input
            className='bg-gray-800 rounded-xl p-2 text-[1.1rem]'
            type='date'
            name=''
            id=''
            required
          />
        </div>
        <input
          className='bg-gray-800 rounded-xl p-2 text-[1.1rem]'
          type='file'
          name=''
          id=''
          required
        />
        <input
          className='bg-gray-800 rounded-xl p-2 text-[1.1rem]'
          type='text'
          placeholder='Location where it lost'
          required
        />
        <textarea
          className='bg-gray-800 rounded-xl p-2 text-[1.1rem]'
          name=''
          id=''
          cols='30'
          rows='6'
          placeholder='Extra details'
        ></textarea>
        <button className='bg-green-600'>Submit</button>
      </form>
    </div>
  );
};
