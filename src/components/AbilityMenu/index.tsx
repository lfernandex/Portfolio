import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import Tabs from '@mui/material/Tabs';
import * as React from 'react';

import css from "../../assets/Icons/CSS.svg";
import html from "../../assets/Icons/Html.svg";
import javaScript from "../../assets/Icons/JavaScript.svg";
import react from "../../assets/Icons/React.svg";

import java from "../../assets/Icons/Java.svg";
import apiRest from "../../assets/Icons/RestApi.svg";
import spring from "../../assets/Icons/SpringBoot.svg";

import mysql from "../../assets/Icons/Mysql.svg";
import postgresql from "../../assets/Icons/Postgresql.svg";

import "./styles.css";

export default function AbilityMenu() {
  const [value, setValue] = React.useState(0);

  const handleChange = (_event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <section className='ptf-ability-menu-section'>
      <div className='ptf-ability-menu-container'>
        <Box className="ptf-ability-box"
          
        >
          <Tabs
            value={value}
            onChange={handleChange}
            variant="scrollable"
            scrollButtons
            aria-label="visible arrows tabs example"
            className='ptf-ability-menu-bakcground'
          >
            <Tab label="FrontEnd" sx={{ color: 'white', fontWeight: '700'}} />
            <Tab label="BackEnd" sx={{ color: 'white', fontWeight: '700' }} />
            <Tab label="DataBase" sx={{ color: 'white', fontWeight: '700' }} />
            <Tab label="Idioma" sx={{ color: 'white', fontWeight: '700' }} />
          </Tabs>
        </Box>

        {value === 0 && (
          <div className='ptf-ability-container'>
            <div className='ptf-ability-container-left-center'>
              <div className='ptf-ability-icone'>
                <img src={javaScript} alt="" />
                <h1>JavaScript</h1>
              </div>

              <div className='ptf-ability-icone'>
                <img src={react} alt="" />
                <h1>React</h1>
              </div>
            </div>

            <div className='ptf-ability-container-left-center'>
              <div className='ptf-ability-icone'>
                <img src={html} alt="" />
                <h1>HTML</h1>
              </div>

              <div className='ptf-ability-icone'>
                <img src={css} alt="" />
                <h1>CSS</h1>
              </div>
            </div>
          </div>
        )}

        {value === 1 && (
          <div className='ptf-ability-container'>
            <div className='ptf-ability-container-left-center'>
              <div className='ptf-ability-icone'>
                <img src={spring} alt="" />
                <h1>Spring Boot</h1>
              </div>

              <div className='ptf-ability-icone'>
                <img src={apiRest} alt="" />
                <h1>API Rest</h1>
              </div>
            </div>

            <div className='ptf-ability-container-rigth-center'>
              <div className='ptf-ability-icone'>
                <img src={java} alt="" />
                <h1>Java</h1>
              </div>
            </div>
          </div>
        )}

        {value === 2 && (
          <div className='ptf-container-data-base'>
            <div className='ptf-ability-container center'>
              <div className='ptf-ability-container-left-center'>
                <div className='ptf-ability-icone ptf-database-display'>
                  <img src={mysql} alt="" />
                  <h1>MySQL</h1>
                </div>
              </div>

              <div className='ptf-ability-container-rigth-center'>
                <div className='ptf-ability-icone ptf-database-display'>
                  <img src={postgresql} alt="" />
                  <h1>PostgreSQL</h1>
                </div>
              </div>
            </div>
          </div>

        )}

        {value === 3 && (
          <div className='ptf-heigth-lenguage ptf-size'>
            <div className='ptf-ability-container center'>
              <div className='ptf-ability-container-left-center'>
                <div className='ptf-ability-icone ptf-lenguage-display'>
                  <h1>Português</h1>
                </div>
              </div>

              <div className='ptf-ability-container-rigth-center'>
                <div className='ptf-ability-icone'>
                  <h1>Inglês</h1>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
