import './AnimatedLetters.scss';

function AnimatedLetters({ letterClass, strArray }) {
  return (
    <span>
        {
            strArray.map((char, i) => (
                <span key={ char + i } className={ `${ letterClass } _${ i + idx }` }>
                    { char }
                </span>
            ))
        }
    </span>
  )
}

export default AnimatedLetters;