import PropTypes from 'prop-types';

const EnemyList = ({ enemies, addEnemy }) => {
  return (
    <div className='w-1/3 rounded border border-purple-500 p-5'>
      <h2 className='border-b border-solid border-slate-500 mb-3 pb-3 text-2xl'>Add Enemies</h2>
      <div className='space-y-5 flex flex-col'>
        {enemies.map((enemy) => (
          <div key={enemy.encounterId} className='flex justify-start space-x-3 items-center'>
            <p className='flex flex-grow'>{enemy.name}</p>
            <p className='p-1 bg-slate-700 px-4 text-center'>{enemy.level}</p>
            <button 
              className='p-2 rounded-full bg-purple-500 cursor-pointer hover:bg-purple-600' 
              onClick={() => addEnemy(enemy.id)}
            >
              <img src='/src/assets/health-plus.svg' alt='Health' className='w-3 h-3' />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

EnemyList.propTypes = {
  enemies: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      level: PropTypes.number.isRequired,
    })
  ).isRequired,
  addEnemy: PropTypes.func.isRequired,
};

export default EnemyList;
