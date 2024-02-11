export const AddLostItem = () => {
  return (
    <div className='flex flex-col gap-3 items-center border w-[50%] rounded-xl p-3 bg-gray-900'>
      <h2 className='mb-4'>Add lost item</h2>
      <form className='flex flex-col gap-3 w-[80%]'>
        <input
          className='bg-gray-800 rounded-xl p-2 text-[1.1rem]'
          type='text'
          placeholder='Name of lost item'
        />
        <div className='flex items-center gap-3'>
          <label className='text-[1.1rem]'>Lost Date Time : </label>
          <input
            className='bg-gray-800 rounded-xl p-2 text-[1.1rem]'
            type='date'
            name=''
            id=''
          />
        </div>
        <input
          className='bg-gray-800 rounded-xl p-2 text-[1.1rem]'
          type='file'
          name=''
          id=''
        />
        <input
          className='bg-gray-800 rounded-xl p-2 text-[1.1rem]'
          type='text'
          placeholder='Location where it lost'
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
