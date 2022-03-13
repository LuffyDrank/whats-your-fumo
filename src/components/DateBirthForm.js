export default function DateBirthForm () {
    return (
      <div style={{ color: '#f5f5f5', fontWeight: '700' }}>
        <form style={{ display: 'inline-grid' }}>
          <label>
            <span>Birthday: </span>
            <input type='date' name='birthday' />
          </label>
          <button className='button-31'>Submit</button>
        </form>
      </div>
    )
  }