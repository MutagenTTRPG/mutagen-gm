import PropTypes from 'prop-types';

const EnemyList = ({ enemies, addEnemy }) => {
  return (
    <div>
      <h2 className='border-t border-solid border-slate-500 mt-3 pt-3'>Add Enemies</h2>
      <div className='space-y-5 flex flex-col'>
        {enemies.map((enemy) => (
          <div key={enemy.id} className='flex justify-start space-x-3 items-center'>
            <p className='flex flex-grow'>{enemy.name} (Level {enemy.level})</p>
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
