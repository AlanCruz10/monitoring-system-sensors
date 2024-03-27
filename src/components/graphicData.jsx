import SwitcherGraphic from './switcherGraphic';
import Graphic from './graphic';
import { useContext } from 'react';
import Context from '../context/context';

function Chart() {
  const {dataDate, setDataDate} = useContext(Context);


  const getData = (date) => {
    // fetch a la base de datos

    //actualizo el contexto con los datos obtenidos del fetch para la parte donde se va a mostrar la grafcia que es la linea 33 y sucesivas de este archivo
    setDataDate({...dataDate, dataGraphic: date})
  }


  return (
    <div>
      {dataDate ? (
        <>
          {
            //debe de seleccionar el sensor
          }
          <SwitcherGraphic />
          {(() => {
            switch (dataDate.item) {
              case '1D':
                return <>
                  {dataDate.dataGraphic ? (
                    //Debe de haber un for que itere sobre todas las medidad del sensor para mostrara todas las graficas de cada medicion
                      <Graphic/>
                  ):
                  (
                  <p onClick={() => getData("data")}>debe de seleccionar el año, el mes y el dia. despues llamar a un metodo que haga el fetch a la base de datos y el sensor</p>
                  //<button type="button" onClick={() => getData("data")}>ver</button>
                  )}
                </>
              case '1W':
                return <>
                  <p>debe de seleccionar el año, el mes y la semana. despues llamar a un metodo que haga el fetch a la base de datos y el sensor</p>
                  {dataDate.dataGraphic ? (
                    //Debe de haber un for que itere sobre todas las medidad del sensor para mostrara todas las graficas de cada medicion
                    <Graphic/>
                  ):
                  (
                    <p>LLENE CORRECTAMENTE LOS PARAMETROS 2</p>
                  )}
                </>
              case '1M':
                return <>
                  <p>debe de seleccionar el año y el mes. despues llamar a un metodo que haga el fetch a la base de datos y el sensor</p>
                  {dataDate.dataGraphic ? (
                    //Debe de haber un for que itere sobre todas las medidad del sensor para mostrara todas las graficas de cada medicion
                    <Graphic/>
                  ):
                  (
                    <p>LLENE CORRECTAMENTE LOS PARAMETROS</p>
                  )}
                </>
              case '1Y':
                return <>
                  <p>debe de seleccionar el año. despues llamar a un metodo que haga el fetch a la base de datos y el sensor</p>
                  {dataDate.dataGraphic ? (
                    //Debe de haber un for que itere sobre todas las medidad del sensor para mostrara todas las graficas de cada medicion
                    <Graphic/>
                  ):
                  (
                    <p>LLENE CORRECTAMENTE LOS PARAMETROS</p>
                  )}
                </>
            }
          })()}
        </>
      ):(
        <>
          {
            //debe de seleccionar el sensor
          }
          <SwitcherGraphic />
        </>
      )}
    </div>
  );
}

export default Chart;