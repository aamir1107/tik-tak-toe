import { React, useEffect, useState } from 'react'
import classes from './TikTakToe.module.scss'

const player = {
  X: 'X',
  O: 'O',
}
function areEqual() {
  var len = arguments.length;
  for (var i = 1; i < len; i++) {
    if (arguments[i] === null || arguments[i] !== arguments[i - 1])
      return false;
  }
  return true;
}
function TikTakToe() {
  const [zeroZero, setZeroZero] = useState('')
  const [zeroOne, setZeroOne] = useState('')
  const [zeroTwo, setZeroTwo] = useState('')
  const [oneZero, setOneZero] = useState('')
  const [oneOne, setOneOne] = useState('')
  const [oneTwo, setOneTwo] = useState('')
  const [twoZero, setTwoZero] = useState('')
  const [twoOne, setTwoOne] = useState('')
  const [twoTwo, setTwoTwo] = useState('')
  const [ActivePlayer, setActivePlayer] = useState(player.X)
  const addAction = (e) => {
    const targetId = e.target.id;

    switch (targetId) {
      case "A00":
        if (zeroZero === "") {
          setZeroZero(ActivePlayer)
          setActivePlayer(prevActivePlayer => prevActivePlayer === player.X ? player.O : player.X)

        }
        break;
      case "A01":
        if (zeroOne === "") {
          setZeroOne(ActivePlayer)
          setActivePlayer(prevActivePlayer => prevActivePlayer === player.X ? player.O : player.X)

        }
        break;
      case "A02":
        if (zeroTwo === "") {
          setZeroTwo(ActivePlayer)
          setActivePlayer(prevActivePlayer => prevActivePlayer === player.X ? player.O : player.X)

        }
        break;
      case "B00":
        if (oneZero === "") {
          setOneZero(ActivePlayer)
          setActivePlayer(prevActivePlayer => prevActivePlayer === player.X ? player.O : player.X)

        }
        break;
      case "B01":
        if (oneOne === "") {
          setOneOne(ActivePlayer)
          setActivePlayer(prevActivePlayer => prevActivePlayer === player.X ? player.O : player.X)

        }
        break;
      case "B02":
        if (oneTwo === "") {
          setOneTwo(ActivePlayer)
          setActivePlayer(prevActivePlayer => prevActivePlayer === player.X ? player.O : player.X)

        }
        break;
      case "C00":
        if (twoZero === "") {
          setTwoZero(ActivePlayer)
          setActivePlayer(prevActivePlayer => prevActivePlayer === player.X ? player.O : player.X)

        }
        break;
      case "C01":
        if (twoOne === "") {
          setTwoOne(ActivePlayer)
          setActivePlayer(prevActivePlayer => prevActivePlayer === player.X ? player.O : player.X)

        }
        break;
      case "C02":
        if (twoTwo === "") {
          setTwoTwo(ActivePlayer)
          setActivePlayer(prevActivePlayer => prevActivePlayer === player.X ? player.O : player.X)

        }
        break;
    }
  };
  const resetGame = () => {
    setZeroZero('')
    setZeroOne('')
    setZeroTwo('')
    setOneZero('')
    setOneOne('')
    setOneTwo('')
    setTwoZero('')
    setTwoOne('')
    setTwoTwo('')
    setActivePlayer(player.X)

  }
  useEffect(() => {
    if (zeroZero !== "" && areEqual(zeroZero, zeroOne, zeroTwo)) {
      alert(zeroZero + " is winner")
      resetGame();
    } else if (oneZero !== "" && areEqual(oneZero, oneOne, oneTwo)) {
      alert(oneZero + " is winner")
      resetGame();
    } else if (twoZero !== "" && areEqual(twoZero, twoOne, twoTwo)) {
      alert(twoZero + " is winner")
      resetGame();
    } else if (zeroZero !== "" && areEqual(zeroZero, oneZero, twoZero)) {
      alert(zeroZero + " is winner")
      resetGame();
    } else if (zeroOne !== "" && areEqual(zeroOne, oneOne, twoOne)) {
      alert(zeroOne + " is winner")
      resetGame();
    } else if (zeroTwo !== "" && areEqual(zeroTwo, oneTwo, twoTwo)) {
      alert(zeroTwo + " is winner")
      resetGame();
    } else if (zeroZero !== "" && areEqual(zeroZero, oneOne, twoTwo)) {
      alert(zeroZero + " is winner")
      resetGame();
    } else if (zeroTwo !== "" && areEqual(zeroTwo, oneOne, twoZero)) {
      alert(zeroTwo + " is winner")
      resetGame();
    }
    else if (zeroZero !== "" && zeroOne !== "" && zeroTwo !== "" && oneZero !== "" && oneOne !== "" && oneTwo !== "" && twoZero !== "" && twoOne !== "" && twoTwo !== "") {
      alert("Match Draw")
      resetGame();
    }
  }, [ActivePlayer])




  return (
    <div className={classes.mainSection}>

      Tik Tak Toe

      <div className={classes.tikTakToeSectionLine}>

        <div className={classes.section}>
          <div className={classes.sectionBox} id={'A00'} onClick={addAction}>
            {zeroZero}
          </div>
        </div>

        <div className={classes.section}>
          <div className={classes.sectionBox} id={'A01'} onClick={addAction}>
            {zeroOne}
          </div>

        </div>

        <div className={classes.section}>
          <div className={classes.sectionBox} id={'A02'} onClick={addAction}>
            {zeroTwo}
          </div>
        </div>

      </div>


      <div className={classes.tikTakToeSectionLine}>

        <div className={classes.section}>
          <div className={classes.sectionBox} id={'B00'} onClick={addAction}>
            {oneZero}
          </div>
        </div>

        <div className={classes.section}>
          <div className={classes.sectionBox} id={'B01'} onClick={addAction}>
            {oneOne}
          </div>
        </div>

        <div className={classes.section}>
          <div className={classes.sectionBox} id={'B02'} onClick={addAction}>
            {oneTwo}
          </div>
        </div>

      </div>

      <div className={classes.tikTakToeSectionLine}>

        <div className={classes.section}>
          <div className={classes.sectionBox} id={'C00'} onClick={addAction}>
            {twoZero}
          </div>
        </div>

        <div className={classes.section}>
          <div className={classes.sectionBox} id={'C01'} onClick={addAction}>
            {twoOne}
          </div>
        </div>

        <div className={classes.section}>
          <div className={classes.sectionBox} id={'C02'} onClick={addAction}>
            {twoTwo}
          </div>
        </div>

      </div>

    </div>
  )
}



export default TikTakToe;

